/* editor-api.js — AI 剧本 → 画布真实变更的公开入口。
   播放引擎（agent.js 侧边栏 / lui.js 文内面板）在 tool_call 步骤完成（shimmer 停留结束）时调用
   EditorAPI.apply(tabId, action, ctx?)，让用户看到「步骤完成 → 文档变了」。
   动作实现本体在 editors.js 的 Editors.actions.*。

   ctx（选区/光标上下文，Editors.getContext 的产物）：可选。
   - lui.js 文内流程：传唤起时捕获的 ctx（播放期间用户选区已变，不能现取）；
   - agent.js 侧边栏：传发送时捕获的 ctx（可能 null）；
   - 不传时内部自动现取 Editors.getContext（兜底）。
   ctx 注入规则（action 省略坐标时）：rewriteRange→选区区间（insertAt:'end'=末尾插入；ctx.tbl=格级改写）；
   annotate→有选区注入区间、光标态=整段批注；styleTable/tableAddRow→仅 table 场景注入 blockIdx。
   拿不到坐标时动作安静 no-op（resolve false），步骤照常播完。

   action 清单（改这里：新增类型时在 editors.js Editors.actions 对应组件下加同名实现）：
     { type:'wps.insertBlocks',  blocks:[{h:'标题'}|{p:'段落'}] }          逐段插入文档（80–150ms 间隔），返回 Promise
     { type:'wps.rewriteRange',  blockIdx, start, end, text, tbl? }        替换指定 block 字符区间；tbl:{r,c}=改写表格单元格（格级高亮），记入 pendingAi，返回 Promise
     { type:'wps.styleTable',    blockIdx, style:'three-line'|'zebra' }    内嵌表格改样式（三线表/斑马纹），整表框线高亮
     { type:'wps.tableAddRow',   blockIdx, cells:[...] }                   内嵌表格末尾追加一行，只新行高亮
     { type:'wps.annotate',      blockIdx, start?, end?, text }            文内批注（红系标记+右侧批注卡片列；省略区间=整段；写入 tab.doc.comments 持久）
     { type:'wps.updateToc',     blockIdx, entries:[{text,page}] }         更新目录块条目（目录整块高亮）
     { type:'wpp.updateText',    ids, text }                               改写选中文本元素文案（多文本取第一个），元素级高亮
     { type:'wpp.styleElements', ids, style:'accent' }                     元素美化（品牌强调），元素级高亮
     { type:'et.fillRange',      anchor:'A1', rows:[[...]], onlyIfEmpty? } 稀疏写入单元格（onlyIfEmpty: 已有数据则跳过）
     { type:'et.styleRange',     range:{r1,c1,r2,c2}, style:'zebra'|'headerBold' }  选区样式（斑马纹/表头加粗），格级高亮
     { type:'et.calcRange',      range, op:'sum'|'avg' }                   选区求和/均值，写入选区下方最近空格（只写入格高亮）
     { type:'et.highlightRows',  rows:[3,7], color:'dup'|'header' }        整行底色标记（dup=浅红 / header=品牌底）
     { type:'wpp.setSlides',     slides:[{title,subtitle}] }               重建全部幻灯片并切到第 1 页 */
(function () {
  'use strict';

  /* ctx 注入：剧本 action 省略坐标时按上面注释的规则补全（直接改传入的 action 副本） */
  function injectCtx(action, ctx) {
    if (!ctx) return action;
    if (ctx.range) { // et 场景（区选 cells / 单格光标）：注入选区 range / fillRange 锚点
      if ((action.type === 'et.styleRange' || action.type === 'et.calcRange') && !action.range) action.range = ctx.range;
      if (action.type === 'et.fillRange' && !action.anchor) action.anchor = ctx.a1Start;
      return action;
    }
    if (ctx.ids) { // wpp 场景：注入选中元素集合（page 场景 = 当页全部元素）
      if ((action.type === 'wpp.updateText' || action.type === 'wpp.styleElements') && !action.ids) action.ids = ctx.ids;
      return action;
    }
    if (ctx.blockIdx == null || ctx.blockIdx < 0) return action;
    if (action.blockIdx != null) return action;
    if (action.type === 'wps.rewriteRange') {
      action.blockIdx = ctx.blockIdx;
      action.start = action.insertAt === 'end' ? ctx.end : ctx.start;
      action.end = ctx.end;
      if (ctx.tbl) action.tbl = ctx.tbl;
    } else if (action.type === 'wps.annotate') {
      action.blockIdx = ctx.blockIdx;
      if (ctx.end > ctx.start) { action.start = ctx.start; action.end = ctx.end; }
    } else if ((action.type === 'wps.styleTable' || action.type === 'wps.tableAddRow') && ctx.type === 'table') {
      action.blockIdx = ctx.blockIdx;
      if (ctx.tblRange) action.tblRange = ctx.tblRange; // 区选发起 → 高亮按选区格粒度
    } else if (action.type === 'wps.updateToc' && ctx.type === 'toc') {
      action.blockIdx = ctx.blockIdx;
    } else if (action.type === 'wps.styleImage' && ctx.type === 'image') {
      action.blockIdx = ctx.blockIdx;
    }
    return action;
  }

  window.EditorAPI = {
    /* 返回 Promise；tab 不存在 / 无模型 / 动作未实现时 resolve(false) */
    apply: function (tabId, action, ctx) {
      var tab = App.tabs.filter(function (t) { return t.id === tabId; })[0];
      if (!tab || !tab.doc || !action || !action.type) return Promise.resolve(false);
      var group = Editors.actions[tab.type];
      var impl = group && group[action.type.split('.')[1]];
      if (!impl) return Promise.resolve(false);
      var a = {};
      for (var k in action) a[k] = action[k];
      if (a.blockIdx == null && (tab.type === 'wps' || tab.type === 'et' || tab.type === 'wpp')) {
        if (!ctx) ctx = Editors.getContext(tab); // 自动现取（拿不到则安静 no-op）
        a = injectCtx(a, ctx);
      }
      var done = Promise.resolve(impl(tab, a));
      // 动作产生了文内未决改动（含侧边栏剧本链路）→ 通知 LUI 同步决策条（文内播放中不出，LUI 内部判断）
      return done.then(function (ok) {
        if (ok && tab.doc.pendingAi && window.LUI && LUI.syncDecision) LUI.syncDecision(tab);
        return ok;
      });
    },
  };
})();

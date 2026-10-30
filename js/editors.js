/* editors.js — 四组件编辑器视图：ribbon 片段 + 可交互画布 + 状态栏。

   ★ 文档数据模型：编辑器视图每次切 tab 都 innerHTML 重渲染，所以内容存在 tab.doc 上（唯一事实源）：
     wps: { kind:'wps', blocks:[{h:'标题'} | {p:'段落'} | {table:{rows:[[...]],style?}} | {image:{label}} | {toc:[{text,page}]}] }
                                            A4 页面 contenteditable，input 时回写模型；table 原生可编辑、image/toc 点选占位块
          comments:[{blockIdx,start,end,text,time}]  批注（交付物，持久；采纳后保留，只有「撤销」摘回本批）
          tblSel:{blockIdx,r1,c1,r2,c2}  内嵌表格鼠标区选（切 tab 恢复；LUI 区选小按钮上下文）
          pendingAi:{ undo:blocks 深快照, ranges:[{blockIdx,start,end}] 文本块高亮, cellRanges:[{blockIdx,r1,c1,r2,c2}] 表格格级高亮,
                      styledTables:[blockIdx] 整表高亮, tocBlocks:[blockIdx] 目录整块高亮, annotations:[本批批注] }  文内 AI 未决改动（高亮+决策条用，lui.js）
     et:  { kind:'et',  cells:{'B2':'值'}(稀疏 map), sel:{r,c} 锚点格, selRange:{r1,c1,r2,c2}|null 区选, marks:{行号:'dup'|'header'},
            chart?:{id,name,kind,dataRange,series}, chartSelected:boolean（「批量制作」文件的可选图表对象），
            cellStyles:{addr:{bg:'zebra'|'header', bold}} AI 语义样式(et.styleRange),
            pendingAi:{ undo:{cells,cellStyles} 深快照, cellRanges:[{r1,c1,r2,c2}] 格级高亮 }  文内 AI 未决改动(lui.js) }
     wpp: { kind:'wpp', current:0, selIds:[], slides:[{ elements:[...] }] }
          元素：{id,type,x,y,w,h, ...}，x/y/w/h 为相对 16:9 舞台的百分比（0–100）
          type: text{text,role:'title'|'subtitle'|'body',fontSize?} / shape{shape:'rect'|'round'|'line',tone} /
                chart{chart:{kind:'bar',series:[{label,value}]}} / table{table:{rows:[[...]]}} / image{}
          selIds：当前页选中元素 id 列表（选中状态入模型，切 tab 再切回选区还在）
     pdf: 阅读器无模型（静态内容，可选中复制）
   改这里：
   - 预置内容（主页打开的 mock 文件） → Editors.createModel
   - 画布结构 → canvas*(tab)；交互绑定 → bind*(tab, root)
   - AI 动作实现 → Editors.actions.*（由 editor-api.js 的 EditorAPI.apply 调用，新增动作类型加在这里） */
(function () {
  'use strict';

  window.Editors = {};

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* 该 tab 的画布当前是否在屏上；在 → 返回编辑器根节点，动作可增量更新 DOM 立即可见 */
  function liveRoot(tab) {
    return (window.App && App.activeId === tab.id) ? document.getElementById('view-editor') : null;
  }

  /* 缩放滑块（纯视觉）。value: 0–100 填充百分比，label: 显示文本 */
  function zoomHtml(label, value) {
    return '<span class="sb-zoom"><span>' + label + '</span>' +
      '<span class="sb-zoom-track"><span class="sb-zoom-fill" style="width:' + value + '%"></span>' +
      '<span class="sb-zoom-knob" style="left:' + value + '%"></span></span>' +
      icon('insert', 12) + '</span>';
  }

  /* ════════════ 数据模型（改这里：预置内容） ════════════ */
  /* ── wpp 元素构造与预置内容（改这里：新建/主页 mock pptx 的页面内容） ── */
  var wppElSeq = 0; // 元素 id 自增（会话内唯一即可）
  function wppEl(type, x, y, w, h, extra) {
    var e = { id: 'we' + (++wppElSeq), type: type, x: x, y: y, w: w, h: h };
    if (extra) for (var k in extra) e[k] = extra[k];
    return e;
  }
  /* 空白页：标题+副标题两个 text 元素（空文本渲染占位提示，见 css .wpp-text:empty） */
  function wppBlankSlide(title) {
    return { elements: [
      wppEl('text', 20, 30, 60, 14, { text: title || '', role: 'title' }),
      wppEl('text', 25, 52, 50, 8, { text: '', role: 'subtitle' }),
    ] };
  }
  /* AI 剧本 wpp.setSlides 的 {title,subtitle} → 元素模型（兼容旧签名；顺手加装饰 shape 让生成的页更好看） */
  function wppSlideFromLegacy(s, isCover) {
    if (isCover) {
      return { elements: [
        wppEl('shape', 4, 6, 10, 10, { shape: 'round', tone: 'brand' }),   // 左上角装饰色块
        wppEl('text', 15, 34, 70, 14, { text: s.title || '', role: 'title' }),
        wppEl('text', 20, 52, 60, 8, { text: s.subtitle || '', role: 'subtitle' }),
        wppEl('shape', 40, 63, 20, 0.8, { shape: 'line', tone: 'brand' }), // 副标题下装饰线
      ] };
    }
    return { elements: [
      wppEl('shape', 5, 8, 1.2, 7, { shape: 'rect', tone: 'strong' }),     // 标题左侧竖条
      wppEl('text', 8, 5, 84, 12, { text: s.title || '', role: 'title', fontSize: 32 }),
      wppEl('text', 8, 22, 84, 40, { text: s.subtitle || '', role: 'body', fontSize: 20 }),
    ] };
  }
  /* 主页打开的 mock pptx 预置 3 页：封面（标题+副标题+装饰 shape）/ 内容页（标题+正文+柱状图）/ 数据页（标题+表格+图片） */
  function wppSeedSlides(base) {
    return [
      { elements: [
        wppEl('shape', 4, 6, 10, 10, { shape: 'round', tone: 'brand' }),
        wppEl('text', 15, 34, 70, 14, { text: base, role: 'title' }),
        wppEl('text', 22, 52, 56, 8, { text: '金山办公 · 战略规划练习', role: 'subtitle' }),
        wppEl('shape', 40, 63, 20, 0.8, { shape: 'line', tone: 'brand' }),
      ] },
      { elements: [
        wppEl('shape', 5, 8, 1.2, 7, { shape: 'rect', tone: 'strong' }),
        wppEl('text', 8, 5, 84, 12, { text: '增长目标与关键举措', role: 'title', fontSize: 32 }),
        wppEl('text', 8, 22, 42, 66, { text: '• 收入目标：全年同比增长 30%\n• 用户规模：MAU 突破 6 亿\n• AI 渗透率：会员 AI 功能渗透超 50%\n• 组织保障：成立 AI 编辑专项组', role: 'body' }),
        wppEl('chart', 55, 24, 38, 62, { chart: { kind: 'bar', series: [
          { label: 'Q1', value: 32 }, { label: 'Q2', value: 45 }, { label: 'Q3', value: 58 }, { label: 'Q4', value: 72 } ] } }),
      ] },
      { elements: [
        wppEl('shape', 5, 8, 1.2, 7, { shape: 'rect', tone: 'strong' }),
        wppEl('text', 8, 5, 84, 12, { text: '关键数据一览', role: 'title', fontSize: 32 }),
        wppEl('table', 8, 22, 50, 60, { table: { rows: [
          ['指标', 'H1', 'H2'], ['收入（亿元）', '12.4', '15.8'], ['MAU（亿）', '5.6', '6.1'], ['AI 渗透率', '38%', '52%'] ] } }),
        wppEl('image', 64, 24, 28, 56, {}),
      ] },
    ];
  }

  /* fresh=true 新建空白文档；否则视为从主页打开的 mock 文件，给一点预置内容 */
  Editors.createModel = function (type, name, fresh) {
    var base = name.replace(/\.\w+$/, '');
    if (type === 'wps') {
      // 主页打开的 mock docx：「项目合作协议」—— 目录块 + 段落 + 内嵌表格块（甲乙双方信息）+ 图片占位块，
      // 供文内 LUI 演示目录/表格/图片三类上下文（改这里：预置内容；目录页码故意有错，演示「更新目录」）
      return { kind: 'wps', comments: [], blocks: fresh ? [] : [
        { h: base },
        { toc: [
          { text: '一、项目概述', page: '1' },
          { text: '二、合作内容与双方信息', page: '2' },
          { text: '三、投资与付款方式', page: '3' },
          { text: '四、生效与文本', page: '4' },
        ] },
        { p: '——办公系统智能化改造项目——' },
        { p: '本协议由甲乙双方本着平等互利、诚实信用的原则共同签署，用于明确办公系统智能化改造项目中的权利与义务，推动项目按期保质交付。' },
        { table: { rows: [
          ['', '甲方', '乙方'],
          ['单位名称', '青云科技有限公司', '星辉信息服务有限公司'],
          ['联系人', '王建国', '李秀英'],
          ['签署日期', '2026 年 7 月', '2026 年 7 月'],
        ] } },
        { p: '项目总投资 120 万元，建设周期 6 个月，分两期付款：合同签订后支付 40%，验收合格后支付剩余 60%。项目验收标准以附件《需求规格说明书》为准。' },
        { image: { label: '项目架构示意图.png' } },
        { p: '本协议一式两份，甲乙双方各执一份，自双方签字盖章之日起生效。' },
      ] };
    }
    if (type === 'et') {
      // cellStyles: 单元格语义样式 {addr:{bg:'zebra'|'header', bold:bool}}（AI 动作 et.styleRange 写入，CSS class 映射）
      var m = { kind: 'et', cells: {}, sel: { r: 1, c: 0 }, selRange: null, marks: {}, cellStyles: {}, chartSelected: false }; // sel: c 是 0 基列号（0=A）；selRange: 区选（已归一化 r1<=r2, c1<=c2），null=单选
      if (!fresh) {
        // 两个主页 xlsx 使用各自的演示数据；其他表格继续用通用报名名单作为兜底。
        var seed = (window.MOCK_SEED.etFiles && window.MOCK_SEED.etFiles[name]) || window.MOCK_SEED.et;
        if (seed.sheets) {
          m.sheets = seed.sheets.map(function (sheet) {
            var state = { name: sheet.name, cells: {}, sel: { r: 1, c: 0 }, selRange: null,
              marks: { 1: 'header' }, cellStyles: {}, columnCount: Math.max(24, sheet.header.length),
              columnWidths: sheet.columnWidths, notice: sheet.notice };
            [sheet.header].concat(sheet.rows).forEach(function (row, ri) {
              row.forEach(function (v, ci) {
                if (v != null && v !== '') state.cells[etAddr(ri + 1, ci)] = String(v);
              });
            });
            return state;
          });
          m.activeSheet = 0;
          etLoadSheet(m, 0);
          return m;
        }
        [seed.header].concat(seed.rows).forEach(function (row, ri) {
          row.forEach(function (v, ci) { m.cells[etAddr(ri + 1, ci)] = v; });
        });
        m.marks[1] = 'header';
        if (seed.chart) m.chart = JSON.parse(JSON.stringify(seed.chart));
      }
      return m;
    }
    if (type === 'wpp') {
      // 新建空白演示：第 1 页 = 标题「空白演示」+ 副标题占位（对齐 docs/screenshots/wpp.png）；
      // 主页打开的 mock pptx：3 页预置内容（见 wppSeedSlides）
      return { kind: 'wpp', current: 0, selIds: [],
        slides: fresh ? [wppBlankSlide('空白演示')] : wppSeedSlides(base) };
    }
    return null; // pdf 阅读器无模型
  };

  /* ════════════ 文字（wps） ════════════ */
  /* 单块（h/p）内容 HTML：按字符区间（左闭右开）包高亮 span，来源三类——
     pendingAi.ranges(AI 改写，紫底 .ai-diff) / tab.doc.comments(批注，红系 .ai-comment，带 data-ci 索引
     与选中态 .is-on，selCi=当前选中下标) / extra(lui.js 临时叠加，如选区保持 .lui-keep-sel)。
     纯文本按字符区间切三段拼接，转义与普通渲染一致；区间重叠时后到者截断（demo 简化） */
  function wpsBlockInner(b, bi, ranges, comments, extra, selCi) {
    var text = b.h != null ? b.h : (b.p || '');
    var hits = [];
    (ranges || []).forEach(function (r) { if (r.blockIdx === bi) hits.push({ start: r.start, end: r.end, cls: 'ai-diff' }); });
    (comments || []).forEach(function (a, ci) {
      if (a.blockIdx === bi) hits.push({ start: a.start, end: a.end, cls: 'ai-comment' + (ci === selCi ? ' is-on' : ''), ci: ci });
    });
    (extra || []).forEach(function (r) { hits.push(r); });
    if (!hits.length) return text ? esc(text) : '<br>';
    hits.sort(function (x, y) { return x.start - y.start; });
    var html = '', pos = 0;
    hits.forEach(function (r) {
      var s = Math.max(pos, Math.min(r.start, text.length));
      var e = Math.max(s, Math.min(r.end, text.length));
      if (e <= s) return;
      html += esc(text.slice(pos, s)) + '<span class="' + r.cls + '"' +
        (r.ci != null ? ' data-ci="' + r.ci + '"' : '') + '>' + esc(text.slice(s, e)) + '</span>';
      pos = e;
    });
    html += esc(text.slice(pos));
    return html || '<br>';
  }

  /* 批注卡片列 HTML（页面右侧灰色区浮层，canvasWps 渲染 / annotate 动作增量更新共用）。
     data-ci = comments 下标；选中态（selCi）卡片带红描边 + 展开一层静态回复楼层 */
  function wpsCommentsHtml(annotations, selCi) {
    return (annotations || []).map(function (a, ci) {
      var on = ci === selCi;
      return '<div class="wps-comment-card' + (on ? ' is-on' : '') + '" data-b="' + a.blockIdx + '" data-ci="' + ci + '">' +
        '<span class="wps-comment-avatar">灵</span>' +
        '<div class="wps-comment-main">' +
          '<div class="wps-comment-head"><span class="wps-comment-name">灵犀</span>' +
            '<span class="wps-comment-time">' + esc(a.time || '') + '</span></div>' +
          '<div class="wps-comment-text">' + esc(a.text) + '</div>' +
          '<div class="wps-comment-reply"' + (on ? '' : ' hidden') + '>' +
            '<span class="wps-comment-avatar">灵</span>' +
            '<div class="wps-comment-main">' +
              '<div class="wps-comment-head"><span class="wps-comment-name">灵犀</span></div>' +
              '<div class="wps-comment-text">已收到这条批注，点「完成」后批注保留在文档中。</div>' +
            '</div>' +
          '</div>' +
        '</div></div>';
    }).join('');
  }

  function wpsBlockHtml(b, bi, pai, comments, selCi, tblSel) {
    if (b.toc) { // 目录块（光标可置入 → LUI 目录场景；条目文本可编辑但回写按旧条目继承，demo 简化）
      var tocCls = 'wps-toc';
      if (pai && pai.tocBlocks && pai.tocBlocks.indexOf(bi) >= 0) tocCls += ' ai-diff'; // AI 更新目录：整块紫底
      return '<div class="' + tocCls + '">' +
        '<div class="wps-toc-title">目录</div>' +
        b.toc.map(function (e) {
          return '<div class="wps-toc-row"><span class="wps-toc-name">' + esc(e.text) + '</span>' +
            '<span class="wps-toc-dots"></span><span class="wps-toc-page">' + esc(e.page) + '</span></div>';
        }).join('') + '</div>';
    }
    if (b.table) {
      var cls = 'wps-tbl' + (b.table.style ? ' tbl-' + b.table.style : '');
      if (pai && pai.styledTables && pai.styledTables.indexOf(bi) >= 0) cls += ' ai-diff-tbl';
      var rows = b.table.rows.map(function (row, ri) {
        var tag = ri === 0 ? 'th' : 'td';
        return '<tr>' + row.map(function (c, ci) {
          // 格级精确高亮：pendingAi.cellRanges 命中的格加 .ai-diff-cell（加行=只亮新行，改格=只亮该格）
          var cellCls = '';
          (pai && pai.cellRanges || []).forEach(function (cr) {
            if (cr.blockIdx === bi && ri >= cr.r1 && ri <= cr.r2 && ci >= cr.c1 && ci <= cr.c2) cellCls = 'ai-diff-cell';
          });
          // 鼠标区选（tab.doc.tblSel）：品牌浅底+框线
          if (tblSel && tblSel.blockIdx === bi && ri >= tblSel.r1 && ri <= tblSel.r2 && ci >= tblSel.c1 && ci <= tblSel.c2) {
            cellCls = (cellCls ? cellCls + ' ' : '') + 'wps-td-sel';
          }
          return '<' + tag + (cellCls ? ' class="' + cellCls + '"' : '') + '>' + esc(c) + '</' + tag + '>';
        }).join('') + '</tr>';
      }).join('');
      return '<table class="' + cls + '"><tbody>' + rows + '</tbody></table>';
    }
    if (b.image) {
      var imgCls = 'wps-image' + (b.image.framed ? ' is-framed' : '');
      if (pai && pai.imageBlocks && pai.imageBlocks.indexOf(bi) >= 0) imgCls += ' ai-diff-img'; // AI 假编辑：整块紫框
      return '<div class="' + imgCls + '" contenteditable="false">' +
        '<span class="wps-image-icon">' + icon('pic', 24) + '</span>' +
        '<span class="wps-image-label">' + esc(b.image.label || '图片') + '</span></div>';
    }
    var inner = wpsBlockInner(b, bi, pai && pai.ranges, comments, null, selCi);
    return b.h != null ? '<h1>' + inner + '</h1>' : '<p>' + inner + '</p>';
  }

  /* 简单字数统计：中文字符 + 英文单词 */
  function wpsWordCount(blocks) {
    var text = blocks.map(function (b) { return b.h || b.p || ''; }).join('');
    var cn = (text.match(/[一-鿿]/g) || []).length;
    var en = (text.match(/[a-zA-Z0-9]+/g) || []).length;
    return cn + en;
  }

  function canvasWps(tab) {
    var blocks = tab.doc.blocks;
    var pai = tab.doc.pendingAi;
    var cmts = tab.doc.comments || [];
    var body = blocks.length ? blocks.map(function (b, i) { return wpsBlockHtml(b, i, pai, cmts, tab.doc.commentSel, tab.doc.tblSel); }).join('') : '<p><br></p>';
    // 批注卡片列：浮在页面右侧灰色区（.wps-page position:relative，absolute 定位，不占正文宽度）。
    // 批注是交付物：渲染自 tab.doc.comments（采纳后仍保留，切 tab 也在），只有「撤销」才移除
    var comments = cmts.length ? '<div class="wps-comments">' + wpsCommentsHtml(cmts, tab.doc.commentSel) + '</div>' : '';
    return '<div class="editor-canvas canvas-wps">' +
      '<div class="page-wrap"><div class="wps-page">' +
        '<div class="ai-tip"' + (blocks.length ? ' hidden' : '') + '>连续按下两次 ⌘ 键唤起WPS AI，或使用' +
          '<span class="tip-ai">' + icon('ai', 16) + 'AI 帮我写</span></div>' +
        '<div class="wps-doc" contenteditable="true" spellcheck="false">' + body + '</div>' +
        comments +
      '</div></div>' +
    '</div>' +
    '<div class="statusbar">' +
      '<span>页面: 1/1</span><span class="sb-words">字数: ' + wpsWordCount(blocks) + '</span><span>拼写检查: 打开</span>' +
      '<span>AI 校对</span><span><i class="sb-dot">●</i> 本地备份开</span>' +
      '<span class="sb-right">' + zoomHtml('150%', 60) + '</span>' +
    '</div>';
  }

  /* 批注卡片纵向对齐：每张卡对齐被批注块的顶部；同块多条批注顺序下排防重叠 */
  function paintWpsComments(tab, root) {
    var docEl = root.querySelector('.wps-doc');
    var prevBottom = 0;
    Array.prototype.forEach.call(root.querySelectorAll('.wps-comment-card'), function (card) {
      var node = docEl.childNodes[+card.getAttribute('data-b')];
      var top = node && node.nodeType === 1 ? node.offsetTop : prevBottom;
      if (top < prevBottom) top = prevBottom + 8;
      card.style.top = top + 'px';
      prevBottom = top + card.offsetHeight;
    });
  }

  /* 占位提示 + 状态栏字数（模型 → 视图） */
  function updateWpsMeta(tab, root) {
    var hasText = tab.doc.blocks.some(function (b) { return b.table || b.image || b.toc || (b.h || b.p || '').trim(); });
    root.querySelector('.ai-tip').hidden = hasText;
    root.querySelector('.sb-words').textContent = '字数: ' + wpsWordCount(tab.doc.blocks);
  }

  /* contenteditable DOM → 模型（视图 → 模型）。
     table/toc/image 块的非文本数据（table.style / toc 条目 / image.label）按出现顺序从旧模型对应类型块继承 */
  function syncWpsFromDom(tab, root) {
    var docEl = root.querySelector('.wps-doc');
    var oldTables = [], oldImages = [], oldTocs = [];
    tab.doc.blocks.forEach(function (b) {
      if (b.table) oldTables.push(b.table.style || null);
      else if (b.image) oldImages.push(b.image);
      else if (b.toc) oldTocs.push(b.toc);
    });
    var blocks = [];
    Array.prototype.forEach.call(docEl.childNodes, function (node) {
      var t = node.textContent || '';
      if (node.nodeType === 3) { if (t.trim()) blocks.push({ p: t }); return; } // 裸文本节点
      if (node.tagName === 'TABLE') {
        var rows = [];
        Array.prototype.forEach.call(node.rows, function (tr) {
          var row = [];
          Array.prototype.forEach.call(tr.cells, function (td) { row.push(td.textContent || ''); });
          rows.push(row);
        });
        blocks.push({ table: { rows: rows, style: oldTables.length ? oldTables.shift() : null } });
        return;
      }
      if (node.classList && node.classList.contains('wps-toc')) {
        blocks.push({ toc: oldTocs.length ? oldTocs.shift() : [] });
        return;
      }
      if (node.classList && node.classList.contains('wps-image')) {
        blocks.push({ image: oldImages.length ? oldImages.shift() : { label: t.trim() || '图片' } });
        return;
      }
      if (node.tagName === 'H1') blocks.push({ h: t });
      else blocks.push({ p: t });
    });
    // 末尾空段落不记（占位提示判断用；table/toc/image 块始终算内容）
    while (blocks.length) {
      var last = blocks[blocks.length - 1];
      if (last.table || last.image || last.toc || last.h || (last.p || '').trim()) break;
      blocks.pop();
    }
    tab.doc.blocks = blocks;
    updateWpsMeta(tab, root);
  }

  /* 批注选中态重绘（增量，不重渲）：文内标记 .ai-comment 与卡片 .wps-comment-card 按 tab.doc.commentSel 切 is-on；
     同时最多一条选中（commentSel = comments 下标，-1/undefined = 无选中） */
  function paintCommentSel(tab, root) {
    var sel = tab.doc.commentSel;
    Array.prototype.forEach.call(root.querySelectorAll('.ai-comment'), function (sp) {
      sp.classList.toggle('is-on', +sp.getAttribute('data-ci') === sel);
    });
    Array.prototype.forEach.call(root.querySelectorAll('.wps-comment-card'), function (card) {
      var on = +card.getAttribute('data-ci') === sel;
      card.classList.toggle('is-on', on);
      var reply = card.querySelector('.wps-comment-reply');
      if (reply) reply.hidden = !on;
    });
  }

  function bindWps(root, tab) {
    var docEl = root.querySelector('.wps-doc');
    docEl.addEventListener('input', function () { syncWpsFromDom(tab, root); });
    root.querySelector('.ai-tip').addEventListener('click', function () { docEl.focus(); });
    /* 对象点选（图片 contenteditable=false）：.is-selected 选中态供 LUI getContext 识别；
       图片选中后通知 LUI 出对象悬浮菜单（PRD 4.1 形态②）。目录块光标可置入，不走点选模式 */
    docEl.addEventListener('click', function (e) {
      if (!e.target.closest) return;
      var obj = e.target.closest('.wps-image');
      var olds = docEl.querySelectorAll('.wps-image.is-selected');
      Array.prototype.forEach.call(olds, function (o) { if (o !== obj) o.classList.remove('is-selected'); });
      if (obj) obj.classList.add('is-selected');
      if (window.LUI && LUI.onObjectSelect) {
        LUI.onObjectSelect(tab, obj && obj.classList.contains('wps-image') ? 'image' : null, obj);
      }
    });
    /* 批注选中：点文内红标或右侧卡片 → 选中该条（再点取消）；点页面别处 → 取消选中 */
    root.querySelector('.wps-page').addEventListener('click', function (e) {
      if (!e.target.closest) return;
      var hit = e.target.closest('.ai-comment') || e.target.closest('.wps-comment-card');
      var ci = hit ? +hit.getAttribute('data-ci') : -1;
      tab.doc.commentSel = (ci >= 0 && tab.doc.commentSel !== ci) ? ci : -1;
      paintCommentSel(tab, root);
    });
    /* 表格区选（PRD 4.1 形态③）：mousedown 在格上起拖，跨格才算区选（单格内拖动仍是文字划词）；
       选区存 tab.doc.tblSel（切 tab 重渲染恢复），完成通知 LUI 在选区左下角出「AI编辑」小按钮 */
    docEl.addEventListener('mousedown', function (e) {
      var td = e.target.closest && e.target.closest('.wps-tbl td, .wps-tbl th');
      if (!td) { // 点在表格外：清掉旧区选
        if (tab.doc.tblSel) { tab.doc.tblSel = null; paintTblSel(docEl, null); }
        return;
      }
      var tbl = td.closest('table');
      var bi = Array.prototype.indexOf.call(docEl.childNodes, tbl);
      var pos0 = cellPos(tbl, td);
      var rng = { blockIdx: bi, r1: pos0.r, c1: pos0.c, r2: pos0.r, c2: pos0.c };
      var crossed = false; // 是否拖出了起拖格
      function cellPos(t, cell) {
        return { r: Array.prototype.indexOf.call(t.rows, cell.parentNode),
                 c: Array.prototype.indexOf.call(cell.parentNode.cells, cell) };
      }
      function onMove(ev) {
        if (!docEl.isConnected) { onUp(); return; }
        var t = document.elementFromPoint(ev.clientX, ev.clientY);
        var c2 = t && t.closest ? t.closest('.wps-tbl td, .wps-tbl th') : null;
        if (!c2 || c2.closest('table') !== tbl) return;
        var p = cellPos(tbl, c2);
        if (p.r !== pos0.r || p.c !== pos0.c) crossed = true;
        if (crossed) {
          // 跨格即单元格区选：塌掉浏览器原生文字选区，避免蓝底与区选视觉叠加
          var sel = window.getSelection();
          if (sel.rangeCount && !sel.isCollapsed) sel.removeAllRanges();
          rng = { blockIdx: bi, r1: Math.min(pos0.r, p.r), c1: Math.min(pos0.c, p.c),
                  r2: Math.max(pos0.r, p.r), c2: Math.max(pos0.c, p.c) };
          paintTblSel(docEl, rng);
        }
      }
      function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (crossed) {
          var sel = window.getSelection();
          if (sel.rangeCount && !sel.isCollapsed) sel.removeAllRanges(); // 确保区选后无原生选区残留
          tab.doc.tblSel = rng;
          if (window.LUI && LUI.onTblRangeSel) LUI.onTblRangeSel(tab); // 出区选小按钮
        } else if (tab.doc.tblSel) { // 单格内拖动/点击 = 文字划词语义，清掉旧区选
          tab.doc.tblSel = null;
          paintTblSel(docEl, null);
        }
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
    paintWpsComments(tab, root); // 批注卡片按被批注块位置对齐（切 tab 重建 DOM 后重排）
  }

  /* 表格区选绘制：rng={blockIdx,r1,c1,r2,c2} 命中格加 .wps-td-sel；null=清除 */
  function paintTblSel(docEl, rng) {
    Array.prototype.forEach.call(docEl.querySelectorAll('.wps-td-sel'), function (c) { c.classList.remove('wps-td-sel'); });
    if (!rng) return;
    var tbl = docEl.childNodes[rng.blockIdx];
    if (!tbl || tbl.tagName !== 'TABLE') return;
    for (var r = rng.r1; r <= rng.r2; r++) {
      var tr = tbl.rows[r];
      if (!tr) continue;
      for (var c = rng.c1; c <= rng.c2; c++) {
        if (tr.cells[c]) tr.cells[c].classList.add('wps-td-sel');
      }
    }
  }

  /* ════════════ 表格（et） ════════════ */
  var ET_COLS = 24, ET_ROWS = 200; // 网格预留至第 200 行，容纳表头和完整账单记录。
  function etColName(c) {
    var name = '';
    for (var n = c + 1; n > 0; n = Math.floor((n - 1) / 26)) name = String.fromCharCode(65 + (n - 1) % 26) + name;
    return name;
  }
  function etAddr(r, c) { return etColName(c) + r; }
  // 每张表独立保存编辑、选区和AI未决状态，切换时不会串写另一张表。
  var ET_SHEET_KEYS = ['cells', 'formulas', 'sel', 'selRange', 'marks', 'cellStyles', 'columnCount', 'columnWidths', 'notice', 'pendingAi', 'chart', 'chartSelected'];
  function etFormulaBar(m) {
    var addr = etAddr(m.sel.r,m.sel.c);
    return m.formulas && m.formulas[addr] || (m.cells[addr] == null ? '' : m.cells[addr]);
  }
  Editors.recalculateEtFormulas = function (tab) {
    var m = tab.doc;
    if (!m.sheets) return;
    ET_SHEET_KEYS.forEach(function (key) { m.sheets[m.activeSheet][key] = m[key]; });
    m.sheets.forEach(function (sheet) {
      Object.keys(sheet.formulas || {}).forEach(function (addr) { sheet.cells[addr] = String(EtFormulas.evaluate(sheet.formulas[addr],sheet,m.sheets)); });
      if (sheet.demoResultId && sheet.formulas) {
        var counts = {'能匹配':0,'重复':0,'不能匹配':0};
        Object.keys(sheet.formulas).forEach(function (addr) { var value = sheet.cells[addr]; if (counts[value] != null) counts[value]++; });
        sheet.notice = '对账结果 · 能匹配 '+counts['能匹配']+' 条 / 重复 '+counts['重复']+' 条 / 不能匹配 '+counts['不能匹配']+' 条 · BizId = orderid';
      }
    });
    m.notice = m.sheets[m.activeSheet].notice;
  };
  function etLoadSheet(m, index) {
    ET_SHEET_KEYS.forEach(function (key) {
      if (m.sheets[index][key] === undefined) delete m[key]; else m[key] = m.sheets[index][key];
    });
    m.activeSheet = index;
  }
  Editors.switchEtSheet = function (tab, index) {
    var m = tab.doc;
    if (!m.sheets || !m.sheets[index] || index === m.activeSheet) return false;
    ET_SHEET_KEYS.forEach(function (key) { m.sheets[m.activeSheet][key] = m[key]; });
    etLoadSheet(m, index);
    return true;
  };
  /* 演示只按 BizId / orderid 做编号匹配，不解释自然语言规则。提交时冻结输入快照。 */
  Editors.prepareDemoReconciliation = function (tab, sources) {
    var m = tab.doc;
    if (!m.sheets) return null;
    ET_SHEET_KEYS.forEach(function (key) { m.sheets[m.activeSheet][key] = m[key]; });
    var main = sources && sources.main || m.sheets.find(function (sheet) { return sheet.name === '渠道对账单'; });
    var gateway = sources && sources.gateway || m.sheets.find(function (sheet) { return sheet.name === '网关对账单'; });
    if (!main || !gateway) return null;
    function column(sheet, title) {
      for (var c = 0; c < sheet.columnCount; c++) if (String(sheet.cells[etAddr(1,c)] || '').toLowerCase() === title) return c;
      return -1;
    }
    var mc = column(main, 'bizid'), gc = column(gateway, 'orderid');
    if (mc < 0 || gc < 0) return null;
    function lastRow(sheet) { return Object.keys(sheet.cells).reduce(function (last, addr) { return Math.max(last, Number(addr.match(/\d+$/)[0])); }, 1); }
    var rows = lastRow(main), gatewayRows = lastRow(gateway);
    var output = JSON.parse(JSON.stringify(main));
    var lastCol = Object.keys(main.cells).reduce(function (last, addr) {
      var col = 0; addr.match(/^[A-Z]+/)[0].split('').forEach(function (ch) { col = col*26+ch.charCodeAt(0)-64; });
      return Math.max(last,col);
    }, 0);
    var stats = {'能匹配':0,'重复':0,'不能匹配':0};
    var matchingMode = sources && sources.matchingMode === 'exists' ? 'exists' : 'unique';
    output.formulas = {};
    var ownRange = '$'+etColName(mc)+'$2:$'+etColName(mc)+'$'+rows;
    var otherRange = "'"+gateway.name.replace(/'/g,"''")+"'!$"+etColName(gc)+'$2:$'+etColName(gc)+'$'+gatewayRows;
    output.cells[etAddr(1,lastCol)] = '匹配状态';
    for (var r = 2; r <= rows; r++) {
      var ref = etAddr(r,mc);
      var formula = '=IF('+ref+'="","不能匹配",IF(OR(COUNTIF('+ownRange+','+ref+')>1,COUNTIF('+otherRange+','+ref+')>1),"重复",IF(COUNTIF('+otherRange+','+ref+')=1,"能匹配","不能匹配")))';
      if (matchingMode === 'exists') formula = '=IF('+ref+'="","不能匹配",IF(COUNTIF('+otherRange+','+ref+')>0,"能匹配","不能匹配"))';
      output.formulas[etAddr(r,lastCol)] = formula;
      var status = EtFormulas.evaluate(formula,output,[output,gateway]);
      output.cells[etAddr(r,lastCol)] = status; stats[status]++;
    }
    var name = '对账结果', suffix = 2;
    while (m.sheets.some(function (sheet) { return sheet.name === name; })) name = '对账结果'+suffix++;
    output.name = name;
    output.columnCount = Math.max(main.columnCount,lastCol+1);
    output.columnWidths = (main.columnWidths || []).slice(); output.columnWidths[lastCol] = 128;
    output.sel = {r:2,c:lastCol}; output.selRange = null; output.marks = {1:'header'};
    output.cellStyles = {}; delete output.pendingAi; delete output.chart;
    output.notice = '对账结果 · 能匹配 '+stats['能匹配']+' 条 / 重复 '+stats['重复']+' 条 / 不能匹配 '+stats['不能匹配']+' 条 · BizId = orderid';
    output.demoResultId = 'recon-'+Date.now()+'-'+Math.random().toString(36).slice(2);
    return {sheet:output,stats:stats,matchingMode:matchingMode,statusColumn:lastCol,sourceRows:rows-1,keyReferences:[{sheet:main.name,range:{r1:2,c1:mc,r2:rows,c2:mc}},{sheet:gateway.name,range:{r1:2,c1:gc,r2:gatewayRows,c2:gc}}]};
  };
  Editors.navigateEtReference = function (tabId, reference) {
    var tab = App.tabs.find(function (item) { return item.id === tabId; });
    if (!tab || tab.type !== 'et' || !tab.doc.sheets) return false;
    var m = tab.doc, index = reference.sheet ? m.sheets.findIndex(function (sheet) { return sheet.name === reference.sheet; }) : m.activeSheet;
    if (index < 0) return false;
    Editors.switchEtSheet(tab,index);
    var rg = reference.range || {r1:1,c1:0,r2:1,c2:0};
    m.sel = {r:rg.r1,c:rg.c1}; m.selRange = rg.r1===rg.r2 && rg.c1===rg.c2 ? null : {r1:rg.r1,c1:rg.c1,r2:rg.r2,c2:rg.c2};
    m.chartSelected = false;
    if (App.activeId !== tabId) App.openDoc('et',tab.name);
    else {
      var root = liveRoot(tab), body = root && root.querySelector('.ag-body'), scrollTop = body && body.scrollTop;
      if (root) { Editors.render(root,tab); var newBody = root.querySelector('.ag-body'); if (newBody && scrollTop != null) newBody.scrollTop = scrollTop; }
    }
    var root = liveRoot(tab), cell = root && root.querySelector('.et-grid td[data-r="'+rg.r1+'"][data-c="'+rg.c1+'"]');
    if (cell) cell.scrollIntoView({block:'nearest',inline:'nearest'});
    return true;
  };
  Editors.prepareReconciliationHighlight = function (tab, markDuplicates, markUnmatched) {
    var m = tab.doc;
    if (!m.sheets) return null;
    Editors.recalculateEtFormulas(tab);
    var sheet = m.sheets[m.activeSheet];
    if (!sheet.demoResultId) sheet = m.lastReconciliationResultId && m.sheets.find(function (item) { return item.demoResultId === m.lastReconciliationResultId; });
    if (!sheet || !sheet.demoResultId) sheet = m.sheets.slice().reverse().find(function (item) { return !!item.demoResultId; });
    if (!sheet || !sheet.demoResultId) return null;
    var statusColumn = -1, lastColumn = 0, endRow = 1;
    Object.keys(sheet.cells).forEach(function (addr) {
      var match = /^([A-Z]+)(\d+)$/.exec(addr), c = 0;
      match[1].split('').forEach(function (ch) { c = c*26+ch.charCodeAt(0)-64; }); c--;
      lastColumn = Math.max(lastColumn,c); endRow = Math.max(endRow,+match[2]);
      if (+match[2] === 1 && sheet.cells[addr] === '匹配状态') statusColumn = c;
    });
    if (statusColumn < 0) return null;
    var duplicates = [], unmatched = [];
    for (var r = 2; r <= endRow; r++) {
      var status = sheet.cells[etAddr(r,statusColumn)];
      if (markDuplicates && status === '重复') duplicates.push(r);
      if (markUnmatched && (status === '不能匹配' || status === '未匹配' || status === '不匹配')) unmatched.push(r);
    }
    return {sheetName:sheet.name,resultId:sheet.demoResultId,statusColumn:statusColumn,lastColumn:lastColumn,totalRows:endRow-1,duplicates:duplicates,unmatched:unmatched,markDuplicates:markDuplicates,markUnmatched:markUnmatched};
  };
  /* et 格是否在本批 AI 未决改动高亮范围内（pendingAi.cellRanges 格粒度） */
  function etInPending(m, r, c) {
    var p = m.pendingAi;
    if (!p) return false;
    for (var i = 0; i < p.cellRanges.length; i++) {
      var cr = p.cellRanges[i];
      if (r >= cr.r1 && r <= cr.r2 && c >= cr.c1 && c <= cr.c2) return true;
    }
    return false;
  }
  /* et 未决改动批次：undo = cells+cellStyles 深快照；cellRanges 记实际改动格（精确高亮，§4.5） */
  function etEnsurePending(m) {
    if (!m.pendingAi) {
      m.pendingAi = { undo: { cells: JSON.parse(JSON.stringify(m.cells)), cellStyles: JSON.parse(JSON.stringify(m.cellStyles)) }, cellRanges: [] };
    }
  }
  /* et 单格视图刷新：cellStyles 语义 class + AI 高亮 class（不动 paintSel 管的选中类） */
  function etPaintCell(tab, root, r, c) {
    var td = root.querySelector('td[data-r="' + r + '"][data-c="' + c + '"]');
    if (!td) return;
    var st = tab.doc.cellStyles[etAddr(r, c)] || {};
    td.classList.toggle('cs-zebra', st.bg === 'zebra');
    td.classList.toggle('cs-header', st.bg === 'header');
    td.classList.toggle('cs-bold', !!st.bold);
    td.classList.toggle('ai-diff-cell', etInPending(tab.doc, r, c));
  }

  /* 「测试集｜批量制作」中的可选图表对象：纯 CSS 柱形图，数据来自 mock-files.js。 */
  function etChartHtml(m) {
    if (!m.chart) return '';
    var max = 1;
    m.chart.series.forEach(function (s) { max = Math.max(max, +s.value || 0); });
    var bars = m.chart.series.map(function (s) {
      return '<span class="et-chart-col"><span class="et-chart-value">' + esc(s.value) + '%</span>' +
        '<i class="et-chart-bar" style="height:' + Math.round((+s.value || 0) / max * 100) + '%"></i>' +
        '<span class="et-chart-label">' + esc(s.label) + '</span></span>';
    }).join('');
    return '<div class="et-chart-object' + (m.chartSelected ? ' is-selected' : '') + '" data-chart-id="' + esc(m.chart.id) +
      '" role="button" tabindex="0" aria-label="图表：' + esc(m.chart.name) + '">' +
      '<div class="et-chart-title">' + esc(m.chart.name) + '</div><div class="et-chart-plot">' + bars + '</div></div>';
  }

  function canvasEt(tab) {
    var m = tab.doc;
    var ET_COLS = m.columnCount || 24;
    var columns = '<colgroup><col style="width:36px">';
    for (var wi = 0; wi < ET_COLS; wi++) columns += '<col style="width:' + ((m.columnWidths && m.columnWidths[wi]) || 72) + 'px">';
    columns += '</colgroup>';
    var gridWidth = 36;
    for (var wj = 0; wj < ET_COLS; wj++) gridWidth += (m.columnWidths && m.columnWidths[wj]) || 72;
    var head = '<tr><th class="corner"></th>';
    for (var c = 0; c < ET_COLS; c++) head += '<th data-c="' + c + '">' + etColName(c) + '</th>'; // data-c：点列头选整列用
    head += '</tr>';

    var body = '';
    for (var r = 1; r <= ET_ROWS; r++) {
      var mark = m.marks[r] ? 'et-mark-' + m.marks[r] : '';
      body += '<tr><td class="row-head ' + mark + '" data-r="' + r + '">' + r + '</td>';
      for (var c2 = 0; c2 < ET_COLS; c2++) {
        var cls = mark;
        if (m.sel.r === r && m.sel.c === c2) cls += ' cell-active';
        var st = m.cellStyles[etAddr(r, c2)]; // AI 语义样式（et.styleRange）
        if (st) {
          if (st.bg) cls += ' cs-' + st.bg;
          if (st.bold) cls += ' cs-bold';
        }
        if (etInPending(m, r, c2)) cls += ' ai-diff-cell'; // AI 未决改动格（紫色内描边，不盖底色）
        body += '<td data-r="' + r + '" data-c="' + c2 + '"' + (cls.trim() ? ' class="' + cls.trim() + '"' : '') + '>' +
          esc(m.cells[etAddr(r, c2)] == null ? '' : m.cells[etAddr(r, c2)]) + '</td>';
      }
      body += '</tr>';
    }

    return '<div class="editor-canvas canvas-et">' +
      '<div class="et-formula-bar">' +
        '<span class="et-name-box">' + etAddr(m.sel.r, m.sel.c) + '</span>' +
        '<span class="et-fx">' + icon('magnifier', 16) + ' fx</span>' +
        '<input class="et-fx-input" aria-label="公式编辑栏" spellcheck="false" value="' + esc(etFormulaBar(m)) + '">' +
      '</div>' +
      '<div class="et-grid-wrap" tabindex="-1"' + (m.sheets ? ' id="et-sheet-content" role="tabpanel" aria-label="' + esc(m.sheets[m.activeSheet].name) + '"' : '') + '><table class="et-grid" style="width:' + gridWidth + 'px">' + columns + head + body + '</table>' +
        '<div class="et-range-border" hidden></div>' + // 区选外框（品牌色描边），bindEt 里按 selRange 定位
        etChartHtml(m) +
      '</div>' +
      '<div class="et-sheet-bar' + (m.sheets ? ' recon-sheet-bar' : '') + '">' +
        (m.sheets ? '<!-- [Tabs: line middle] 工作表切换 --><div class="kd-tabs kd-tabs-horizontal kd-tabs-line kd-tabs-middle"><div class="kd-tabs-nav"><div class="kd-tabs-nav-list" role="tablist" aria-label="工作表">' +
          m.sheets.map(function (sheet, si) {
            return '<button type="button" role="tab" aria-controls="et-sheet-content" aria-selected="' + (si === m.activeSheet) + '" tabindex="' + (si === m.activeSheet ? '0' : '-1') + '" data-et-sheet="' + si + '" class="kd-tabs-tab-bar' + (si === m.activeSheet ? ' kd-tabs-tab-bar-active' : '') + '"><span class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">' + esc(sheet.name) + '</span></span><span class="kd-tabs-tab-bar-ink"></span></button>';
          }).join('') + '</div></div></div>' : '<span class="sheet-tab">Sheet1</span>') +
        '<span class="sheet-add">' + icon('insert', 16) + '</span>' +
      '</div>' +
    '</div>' +
    '<div class="statusbar">' +
      '<span>' + (m.notice ? esc(m.notice) : '<i class="sb-dot">●</i> 本地备份开') + '</span>' +
      '<span class="sb-right">' + zoomHtml('100%', 40) + '</span>' +
    '</div>';
  }

  function bindEt(root, tab) {
    var m = tab.doc;
    var ET_COLS = m.columnCount || 24;
    if (m.sheets) root.querySelector('.et-sheet-bar').addEventListener('click', function (e) {
      var target = e.target.closest('[data-et-sheet]');
      if (!target) return;
      var next = Number(target.getAttribute('data-et-sheet'));
      if (Editors.switchEtSheet(tab, next)) Editors.render(root, tab);
    });
    if (m.sheets) root.querySelector('.et-sheet-bar').addEventListener('keydown', function (e) {
      if (!e.target.closest('[data-et-sheet]')) return;
      var next = m.activeSheet;
      if (e.key === 'ArrowRight') next = (next + 1) % m.sheets.length;
      else if (e.key === 'ArrowLeft') next = (next + m.sheets.length - 1) % m.sheets.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = m.sheets.length - 1;
      else return;
      e.preventDefault();
      if (Editors.switchEtSheet(tab, next)) Editors.render(root, tab);
      root.querySelector('[data-et-sheet="' + next + '"]').focus();
    });
    var canvas = root.querySelector('.canvas-et');
    var wrap = root.querySelector('.et-grid-wrap');
    var nameBox = root.querySelector('.et-name-box');
    var fx = root.querySelector('.et-fx-input');
    var overlay = root.querySelector('.et-range-border');
    var chartEl = root.querySelector('.et-chart-object');
    var editing = null; // 正在编辑的 td（双击/打字进入）

    /* 元素缓存：网格行列固定，渲染后不再变。区选增量刷新直接取引用，避免每次 querySelector 扫 2400 格 */
    var cellEls = {};   // cellEls[r][c] → 数据格 td
    var allTds = wrap.querySelectorAll('td[data-c]'); // 文档顺序 = 先行后列
    for (var i = 0; i < allTds.length; i++) {
      var ri = Math.floor(i / ET_COLS) + 1, ci = i % ET_COLS;
      (cellEls[ri] = cellEls[ri] || [])[ci] = allTds[i];
    }
    var colThs = wrap.querySelectorAll('th[data-c]');    // 列头（文档顺序 = 列序）
    var rowHeads = wrap.querySelectorAll('td.row-head'); // 行号（文档顺序 = 行序）

    function tdAt(r, c) { return cellEls[r] && cellEls[r][c]; }
    function clampR(r) { return Math.max(1, Math.min(ET_ROWS, r)); }
    function clampC(c) { return Math.max(0, Math.min(ET_COLS - 1, c)); }

    /* 名称框文本：单格 B2 / 区选 A1:D5 / 整行 3:3 / 整列 B:B */
    function nameText() {
      var rg = m.selRange;
      if (!rg) return etAddr(m.sel.r, m.sel.c);
      if (rg.c1 === 0 && rg.c2 === ET_COLS - 1) return rg.r1 + ':' + rg.r2; // 整行（可跨多行）
      if (rg.r1 === 1 && rg.r2 === ET_ROWS) return etColName(rg.c1) + ':' + etColName(rg.c2); // 整列
      return etAddr(rg.r1, rg.c1) + ':' + etAddr(rg.r2, rg.c2);
    }

    /* 选区 → 视图（唯一绘制入口）：active 锚点格 + 区选浅底 + 外框 overlay + 行号/列头高亮 + 名称框/公式栏。
       增量更新：只摘/挂 class、挪 overlay，不重排网格 */
    function paintSel() {
      var old = wrap.querySelector('td.cell-active');
      if (old) old.classList.remove('cell-active');
      tdAt(m.sel.r, m.sel.c).classList.add('cell-active');
      var marked = wrap.querySelectorAll('.cell-in-range, .head-in-range');
      Array.prototype.forEach.call(marked, function (el) {
        el.classList.remove('cell-in-range');
        el.classList.remove('head-in-range');
      });
      var rg = m.selRange;
      if (rg) {
        for (var r = rg.r1; r <= rg.r2; r++) {
          rowHeads[r - 1].classList.add('head-in-range');
          for (var c = rg.c1; c <= rg.c2; c++) {
            if (r === m.sel.r && c === m.sel.c) continue; // 锚点格反白（只留 cell-active），不铺浅底
            tdAt(r, c).classList.add('cell-in-range');
          }
        }
        for (var hc = rg.c1; hc <= rg.c2; hc++) colThs[hc].classList.add('head-in-range');
        // 外框：td offsetLeft/Top 相对 wrap（wrap 已 position:relative），overlay 同为 wrap 子节点，随滚动一起动
        var a = tdAt(rg.r1, rg.c1), b = tdAt(rg.r2, rg.c2);
        overlay.style.left = a.offsetLeft + 'px';
        overlay.style.top = a.offsetTop + 'px';
        overlay.style.width = (b.offsetLeft + b.offsetWidth - a.offsetLeft) + 'px';
        overlay.style.height = (b.offsetTop + b.offsetHeight - a.offsetTop) + 'px';
        overlay.hidden = false;
      } else {
        overlay.hidden = true;
      }
      nameBox.textContent = nameText();
      fx.value = etFormulaBar(m);
      if (chartEl) chartEl.classList.toggle('is-selected', !!m.chartSelected);
    }

    function notifySelectionChanged() {
      if (window.LUI && LUI.onEtSelectionChanged) LUI.onEtSelectionChanged(tab);
    }

    /* 单选：移动 active 格并清除区选（单击/方向键/编辑提交回落都用它） */
    function setActive(r, c) {
      m.sel = { r: clampR(r), c: clampC(c) };
      m.selRange = null;
      m.chartSelected = false;
      paintSel();
      notifySelectionChanged();
      tdAt(m.sel.r, m.sel.c).scrollIntoView({ block: 'nearest' });
    }

    /* 区选：锚点（m.sel）不动，选区扩到 (r,c)；拖回锚点则退回单选 */
    function setRange(r, c) {
      r = clampR(r); c = clampC(c);
      if (r === m.sel.r && c === m.sel.c) m.selRange = null;
      else m.selRange = {
        r1: Math.min(m.sel.r, r), c1: Math.min(m.sel.c, c),
        r2: Math.max(m.sel.r, r), c2: Math.max(m.sel.c, c),
      };
      m.chartSelected = false;
      paintSel();
      notifySelectionChanged();
      tdAt(r, c).scrollIntoView({ block: 'nearest' });
    }

    function selectRow(r) { // 点行号：整行（锚点落在该行 A 列格）
      m.sel = { r: r, c: 0 };
      m.selRange = { r1: r, c1: 0, r2: r, c2: ET_COLS - 1 };
      m.chartSelected = false;
      paintSel();
      notifySelectionChanged();
    }
    function selectCol(c) { // 点列头：整列（锚点落在该列第 1 行格）
      m.sel = { r: 1, c: c };
      m.selRange = { r1: 1, c1: c, r2: ET_ROWS, c2: c };
      m.chartSelected = false;
      paintSel();
      notifySelectionChanged();
    }

    function selectAll() {
      m.sel = { r: 1, c: 0 };
      m.selRange = { r1: 1, c1: 0, r2: ET_ROWS, c2: ET_COLS - 1 };
      m.chartSelected = false;
      paintSel();
      notifySelectionChanged();
    }

    /* Enter(dr=1)/Tab(dc=1)：有区选时在选区内循环（Enter 列内下移、到底换下一列顶部；Tab 行内右移、到边换下一行开头），
       无区选退回单选移动。反向（Shift+Enter/Tab）Demo 简化不做 */
    function moveInRange(dr, dc) {
      var rg = m.selRange;
      if (!rg) { setActive(m.sel.r + dr, m.sel.c + dc); return; }
      var r = m.sel.r, c = m.sel.c;
      if (dr) { r += dr; if (r > rg.r2) { r = rg.r1; c = c >= rg.c2 ? rg.c1 : c + 1; } }
      else { c += dc; if (c > rg.c2) { c = rg.c1; r = r >= rg.r2 ? rg.r1 : r + 1; } }
      m.sel = { r: r, c: c };
      paintSel();
      tdAt(r, c).scrollIntoView({ block: 'nearest' });
    }

    function refreshFormulaCells() {
      Editors.recalculateEtFormulas(tab);
      var notice = root.querySelector('.statusbar > span'); if (notice && m.notice) notice.textContent = m.notice;
      Object.keys(m.formulas || {}).forEach(function (key) { var match = /^([A-Z]+)(\d+)$/.exec(key), col = 0; match[1].split('').forEach(function (ch) { col = col*26+ch.charCodeAt(0)-64; }); var cell = tdAt(+match[2],col-1); if (cell) cell.textContent = m.cells[key]; });
    }
    function writeCell(r, c, v, deferCalculation) {
      var addr = etAddr(r, c);
      if (v.charAt(0) === '=') { m.formulas = m.formulas || {}; m.formulas[addr] = v; }
      else { if (m.formulas) delete m.formulas[addr]; if (v) m.cells[addr] = v; else delete m.cells[addr]; }
      var td = tdAt(r, c);
      if (td) td.textContent = m.cells[addr] == null ? '' : m.cells[addr];
      if (!deferCalculation) refreshFormulaCells();
    }

    function caretEnd(elm) {
      var sel = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(elm);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }

    function startEdit(td, initial) {
      if (editing) return;
      editing = td;
      td.contentEditable = 'true';
      td.classList.add('cell-editing');
      var addr = etAddr(+td.getAttribute('data-r'),+td.getAttribute('data-c'));
      if (initial == null && m.formulas && m.formulas[addr]) td.textContent = m.formulas[addr];
      if (initial != null) td.textContent = initial; // 打字进入：替换原内容
      td.focus();
      caretEnd(td);
    }

    function endEdit(commit) {
      if (!editing) return;
      var td = editing; editing = null;
      var r = +td.getAttribute('data-r'), c = +td.getAttribute('data-c');
      td.contentEditable = 'false';
      td.classList.remove('cell-editing');
      if (commit) writeCell(r,c,td.textContent.trim()); else td.textContent = m.cells[etAddr(r,c)] || '';
      paintSel(); // 只刷新，不清区选：编辑的是锚点格，提交后 Enter/Tab 仍在选区内循环
      wrap.focus();
    }

    /* 拖拽框选：document 级 mousemove/mouseup（mousedown 时挂上、松手自卸）。
       拖出网格区时按坐标钳制到边缘格（不做自动滚动）；画布若中途重建则自清理 */
    function startDrag() {
      function cellFromPoint(x, y) {
        var hit = document.elementFromPoint(x, y);
        var cell = hit && hit.closest('td[data-c]');
        if (cell && wrap.contains(cell)) return { r: +cell.getAttribute('data-r'), c: +cell.getAttribute('data-c') };
        // 不等宽列按实际边界定位；拖出网格时仍钳制到可用区域。
        var first = tdAt(1, 0).getBoundingClientRect(), column = ET_COLS - 1;
        for (var ci = 0; ci < ET_COLS; ci++) {
          if (x < tdAt(1, ci).getBoundingClientRect().right) { column = ci; break; }
        }
        return { r: clampR(Math.floor((y - first.top) / first.height) + 1), c: column };
      }
      function onMove(e) {
        if (!wrap.isConnected) { onUp(); return; }
        var p = cellFromPoint(e.clientX, e.clientY);
        setRange(p.r, p.c);
      }
      function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    }

    wrap.addEventListener('mousedown', function (e) {
      if (e.target.closest('.et-chart-object')) return;
      var td = e.target.closest('td[data-c]');
      if (editing && td !== editing) endEdit(true); // 编辑中点别处 = 确认
      e.preventDefault(); // 挡住原生拖选/聚焦，选中逻辑自己管
      if (td) {
        var r = +td.getAttribute('data-r'), c = +td.getAttribute('data-c');
        if (e.shiftKey) setRange(r, c); // Shift+点击：锚点不动，扩选区
        else { setActive(r, c); startDrag(); }
      } else if (e.target.closest('td.row-head')) {
        selectRow(+e.target.closest('td.row-head').getAttribute('data-r'));
      } else if (e.target.closest('th[data-c]')) {
        selectCol(+e.target.closest('th[data-c]').getAttribute('data-c'));
      } else if (e.target.closest('th.corner')) {
        selectAll();
      }
      wrap.focus();
    });

    if (chartEl) {
      /* 图表放在数据表下方的 D7:H18；侧边栏展开后仍能完整看见并继续圈选。 */
      var chartStart = tdAt(7, 3);
      var chartEnd = tdAt(18, 7);
      if (chartStart && chartEnd) {
        chartEl.style.left = chartStart.offsetLeft + 'px';
        chartEl.style.top = chartStart.offsetTop + 'px';
        chartEl.style.width = (chartEnd.offsetLeft + chartEnd.offsetWidth - chartStart.offsetLeft) + 'px';
        chartEl.style.height = (chartEnd.offsetTop + chartEnd.offsetHeight - chartStart.offsetTop) + 'px';
      }
      function selectChart() {
        m.chartSelected = true;
        m.selRange = null;
        paintSel();
        notifySelectionChanged();
        if (window.LUI && LUI.onEtChartSel) LUI.onEtChartSel(tab);
      }
      chartEl.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); selectChart(); });
      chartEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectChart(); }
      });
    }
    wrap.addEventListener('dblclick', function (e) {
      var td = e.target.closest('td[data-c]');
      if (td) startEdit(td);
    });
    /* 编辑中点格外任何地方（公式栏/侧边栏等）：focusout 兜底确认 */
    wrap.addEventListener('focusout', function (e) {
      if (editing && e.target === editing) endEdit(true);
    });

    canvas.addEventListener('keydown', function (e) {
      /* 公式栏：Enter 写回锚点格（选区保留） */
      if (e.target === fx) {
        if (e.key === 'Enter') {
          e.preventDefault();
          writeCell(m.sel.r, m.sel.c, fx.value.trim());
          paintSel();
          wrap.focus();
        }
        return;
      }
      if (editing) {
        if (e.key === 'Enter') { e.preventDefault(); endEdit(true); moveInRange(1, 0); }
        else if (e.key === 'Tab') { e.preventDefault(); endEdit(true); moveInRange(0, 1); }
        else if (e.key === 'Escape') { e.preventDefault(); endEdit(false); }
        return;
      }
      /* 方向键 = 清除区选回单选并移动；Enter/Tab = 选区内循环（无区选则单选移动） */
      if (e.key === 'ArrowUp') { e.preventDefault(); setActive(m.sel.r - 1, m.sel.c); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); setActive(m.sel.r + 1, m.sel.c); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); setActive(m.sel.r, m.sel.c - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); setActive(m.sel.r, m.sel.c + 1); }
      else if (e.key === 'Enter') { e.preventDefault(); moveInRange(1, 0); }
      else if (e.key === 'Tab') { e.preventDefault(); moveInRange(0, 1); }
      else if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        if (m.selRange) { // 区选：清空整个区域
          for (var dr = m.selRange.r1; dr <= m.selRange.r2; dr++)
            for (var dc = m.selRange.c1; dc <= m.selRange.c2; dc++) writeCell(dr, dc, '', true);
          refreshFormulaCells();
        } else writeCell(m.sel.r, m.sel.c, '');
        fx.value = '';
      }
      /* 打字直接进入编辑（锚点格；中文 IME 请先双击进编辑态，Demo 简化） */
      else if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        startEdit(tdAt(m.sel.r, m.sel.c), e.key);
      }
    });

    /* 区选落定 → 通知 LUI 出/收「AI编辑」小按钮（PRD 4.1 形态③；单格不出）；
       画布重建（切 tab）后监听从 document 自卸 */
    function onEtMouseUp() {
      if (!wrap.isConnected) { document.removeEventListener('mouseup', onEtMouseUp); return; }
      if (window.LUI && LUI.onTblRangeSel) LUI.onTblRangeSel(tab);
    }
    document.addEventListener('mouseup', onEtMouseUp);

    paintSel(); // 首刷：恢复模型里持久化的选区（切 tab 回来 DOM 是重建的，class/overlay 都要重挂）
  }

  /* ════════════ 演示（wpp） ════════════ */
  /* 页标题（缩略图小字用）：取 role=title 的 text 元素 */
  function wppTitleOf(slide) {
    var els = slide.elements || [];
    for (var i = 0; i < els.length; i++) if (els[i].type === 'text' && els[i].role === 'title') return els[i].text || '';
    return '';
  }

  /* 单个元素 → HTML（按百分比绝对定位；改这里：新增元素类型的 mock 渲染）。
     e.accent = AI 美化样式（品牌强调，语义化）；pai.elementIds 命中 → .ai-diff-el 紫色外框（AI 未决改动高亮） */
  function wppElHtml(el, pai) {
    var pos = 'left:' + el.x + '%;top:' + el.y + '%;width:' + el.w + '%;height:' + el.h + '%;';
    var xcls = (el.accent ? ' wpp-accent' : '') +
      (pai && pai.elementIds && pai.elementIds.indexOf(el.id) >= 0 ? ' ai-diff-el' : '');
    var pos2 = pos;
    if (el.type === 'text') {
      var ph = { title: '单击此处添加标题', subtitle: '单击此处添加副标题', body: '单击此处添加文本' }[el.role || 'body'];
      var fs = el.fontSize ? 'font-size:' + el.fontSize + 'px;' : '';
      return '<div class="wpp-el wpp-el-text' + xcls + '" data-id="' + el.id + '" style="' + pos2 + '">' +
        '<div class="wpp-text wpp-role-' + (el.role || 'body') + '" data-ph="' + ph + '" style="' + fs + '">' + esc(el.text || '') + '</div>' +
      '</div>';
    }
    if (el.type === 'shape') {
      return '<div class="wpp-el wpp-el-shape' + xcls + ' shape-' + (el.shape || 'rect') + ' tone-' + (el.tone || 'brand') + '" data-id="' + el.id + '" style="' + pos + '"></div>';
    }
    if (el.type === 'chart') { // 纯 CSS 柱状图 mock
      var max = 0;
      el.chart.series.forEach(function (s) { max = Math.max(max, s.value); });
      var bars = el.chart.series.map(function (s) {
        return '<div class="bar-col"><i class="bar" style="height:' + Math.round(s.value / (max || 1) * 100) + '%"></i>' +
          '<span class="bar-label">' + esc(s.label) + '</span></div>';
      }).join('');
      return '<div class="wpp-el wpp-el-chart' + xcls + '" data-id="' + el.id + '" style="' + pos + '"><div class="wpp-chart">' + bars + '</div></div>';
    }
    if (el.type === 'table') { // 首行当表头
      var rows = el.table.rows.map(function (row, ri) {
        var tag = ri === 0 ? 'th' : 'td';
        return '<tr>' + row.map(function (c) { return '<' + tag + '>' + esc(c) + '</' + tag + '>'; }).join('') + '</tr>';
      }).join('');
      return '<div class="wpp-el wpp-el-table' + xcls + '" data-id="' + el.id + '" style="' + pos + '"><table class="wpp-table">' + rows + '</table></div>';
    }
    // image：占位框 + 居中图片图标（pic 注册于 icons.js）
    return '<div class="wpp-el wpp-el-image' + xcls + '" data-id="' + el.id + '" style="' + pos + '">' + icon('pic', 24) + '</div>';
  }

  function wppSlideHtml(slide, pai) { return (slide.elements || []).map(function (e) { return wppElHtml(e, pai); }).join(''); }

  /* 缩略图简化预览：标题小字 + 各元素按类型示意色块（不精确复刻；text 画细条） */
  function wppThumbsHtml(m) {
    return m.slides.map(function (s, i) {
      var blocks = (s.elements || []).filter(function (e) { return !(e.type === 'text' && e.role === 'title'); }).map(function (e) {
        var cls = e.type === 'text' ? 'tm-text' : 'tm-' + e.type;
        var h = e.type === 'text' ? 1.5 : Math.max(e.h, 1.5);
        return '<i class="tm ' + cls + '" style="left:' + e.x + '%;top:' + e.y + '%;width:' + e.w + '%;height:' + h + '%"></i>';
      }).join('');
      return '<div class="wpp-thumb' + (i === m.current ? ' is-active' : '') + '" data-i="' + i + '">' +
        '<span class="thumb-no">' + (i + 1) + '</span>' +
        '<span class="wpp-thumb-ai" title="编辑">' + icon('lingxi_logo_m', 14) + '</span>' + // 整页入口（PRD 4.1 演示特有：hover 缩略图出标签，仅 icon）
        '<span class="thumb-title">' + esc(wppTitleOf(s)) + '</span>' + blocks +
      '</div>';
    }).join('');
  }

  function canvasWpp(tab) {
    var m = tab.doc;
    m.selIds = m.selIds || [];
    return '<div class="editor-canvas canvas-wpp">' +
      '<div class="wpp-thumb-panel">' +
        '<div class="wpp-thumb-tabs"><span class="t">大纲</span><span class="t is-active">幻灯片</span></div>' +
        '<div class="wpp-thumb-list">' + wppThumbsHtml(m) + '</div>' +
        '<span class="wpp-thumb-add" title="新建幻灯片">' + icon('insert', 16) + '</span>' +
      '</div>' +
      '<div class="wpp-stage"><div class="wpp-slide" tabindex="-1">' + wppSlideHtml(m.slides[m.current], m.pendingAi) + '</div>' +
        /* 自由框选模式开关（PRD 4.1 形态④；Shift+拖框免开关，见 bindWpp startRubber） */
        '<span class="lui-lasso-toggle' + (m.lassoOn ? ' is-on' : '') + '"><span class="lasso-track"><i></i></span>自由框选</span>' +
      '</div>' +
      '<div class="wpp-side-tools">' +
        icon('doc', 20) + icon('label', 20) + icon('template', 20) +
        icon('design_mode_24', 20) + icon('note', 20) +
      '</div>' +
    '</div>' +
    '<div class="statusbar">' +
      '<span class="sb-pages">幻灯片 ' + (m.current + 1) + ' / ' + m.slides.length + '</span>' +
      '<span><i class="sb-dot">●</i> 本地备份开</span>' +
      '<span class="sb-right">' + zoomHtml('107%', 45) + '</span>' +
    '</div>';
  }

  function bindWpp(root, tab) {
    var m = tab.doc;
    m.selIds = m.selIds || [];
    var canvas = root.querySelector('.canvas-wpp');
    var list = root.querySelector('.wpp-thumb-list');
    var stage = root.querySelector('.wpp-stage');
    var slide = root.querySelector('.wpp-slide');
    var pagesEl = root.querySelector('.sb-pages');
    var editing = null; // 正在编辑的 text 元素 id（双击进入，blur/Enter 提交，Esc 取消）

    function curSlide() { return m.slides[m.current]; }
    function elById(id) {
      var els = curSlide().elements;
      for (var i = 0; i < els.length; i++) if (els[i].id === id) return els[i];
      return null;
    }
    function elDiv(id) { return slide.querySelector('.wpp-el[data-id="' + id + '"]'); }
    function paintStatus() { pagesEl.textContent = '幻灯片 ' + (m.current + 1) + ' / ' + m.slides.length; }

    function caretEnd(elm) {
      var sel = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(elm);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }

    /* 选中 → 视图（唯一绘制入口）：selIds 先剔除当前页不存在的 id（切页后旧选区自然失效），
       再画框：单选 = 主框（带 8 个手柄）；多选 = 每元素细框 + 整体外框 */
    function addBox(r, cls, handles) { // r: {x,y,w,h} 百分比
      var d = document.createElement('div');
      d.className = 'wpp-sel-box ' + cls;
      d.style.cssText = 'left:' + r.x + '%;top:' + r.y + '%;width:' + r.w + '%;height:' + r.h + '%;';
      if (handles) {
        [[0, 0], [50, 0], [100, 0], [0, 50], [100, 50], [0, 100], [50, 100], [100, 100]].forEach(function (p) {
          var h = document.createElement('i');
          h.className = 'wpp-handle';
          h.style.left = p[0] + '%';
          h.style.top = p[1] + '%';
          d.appendChild(h);
        });
      }
      slide.appendChild(d);
    }
    function paintSel() {
      var stale = slide.querySelectorAll('.wpp-sel-box');
      Array.prototype.forEach.call(stale, function (n) { n.remove(); });
      m.selIds = m.selIds.filter(function (id) { return elById(id); });
      if (!m.selIds.length) return;
      if (m.selIds.length === 1) { addBox(elById(m.selIds[0]), 'main', true); return; }
      var x1 = 100, y1 = 100, x2 = 0, y2 = 0; // 多选整体外框 = 各元素包围盒
      m.selIds.forEach(function (id) {
        var e = elById(id);
        addBox(e, 'mini');
        x1 = Math.min(x1, e.x); y1 = Math.min(y1, e.y);
        x2 = Math.max(x2, e.x + e.w); y2 = Math.max(y2, e.y + e.h);
      });
      addBox({ x: x1, y: y1, w: x2 - x1, h: y2 - y1 }, 'bbox');
    }

    /* 选中变化通知 LUI（对象悬浮菜单，PRD 4.1 形态②）：包一层 paintSel，
       点选/加选/拖动/框选/Esc/Delete 等所有选中路径都会经过这里 */
    var paintSelCore = paintSel;
    paintSel = function () {
      paintSelCore();
      if (window.LUI && LUI.onWppSel) LUI.onWppSel(tab);
    };

    function renderSlide() { slide.innerHTML = wppSlideHtml(curSlide(), m.pendingAi); paintSel(); }
    function refreshThumbs() { list.innerHTML = wppThumbsHtml(m); }

    function switchTo(i) {
      if (editing) endEdit(true);
      m.current = i;
      renderSlide();
      refreshThumbs();
      paintStatus();
      slide.focus();
    }

    /* 文本编辑：双击进入（contenteditable），Enter/blur 提交写回模型，Esc 取消 */
    function startEdit(div) {
      if (editing) return;
      editing = div.getAttribute('data-id');
      div.classList.add('is-editing');
      var t = div.querySelector('.wpp-text');
      t.contentEditable = 'true';
      t.focus();
      caretEnd(t);
    }
    function endEdit(commit) {
      if (!editing) return;
      var id = editing; editing = null;
      var div = elDiv(id);
      if (!div) return;
      var t = div.querySelector('.wpp-text');
      var e = elById(id);
      div.classList.remove('is-editing');
      t.contentEditable = 'false';
      if (commit) {
        e.text = t.textContent;
        t.innerHTML = esc(e.text); // 归一化：空文本清干净让 :empty 占位生效
        refreshThumbs(); // 标题改动 → 缩略图跟随
      } else {
        t.innerHTML = esc(e.text || ''); // Esc：还原
      }
      paintSel();
      slide.focus();
    }

    /* 拖动选中元素：document 级 mousemove/mouseup（mousedown 时挂上、松手自卸），实时写回模型 x/y */
    function startDrag(clickedId, e0) {
      var rect = slide.getBoundingClientRect();
      var sx = e0.clientX, sy = e0.clientY, moved = false; // 锚点 = 按下位置
      var starts = m.selIds.map(function (id) { var e = elById(id); return { e: e, x: e.x, y: e.y }; });
      function onMove(ev) {
        if (!slide.isConnected) { onUp(); return; }
        var dx = (ev.clientX - sx) / rect.width * 100;
        var dy = (ev.clientY - sy) / rect.height * 100;
        if (!moved && Math.abs(dx) + Math.abs(dy) < 0.3) return; // 抖动阈值
        moved = true;
        starts.forEach(function (s) {
          s.e.x = Math.max(0, Math.min(100 - s.e.w, s.x + dx));
          s.e.y = Math.max(0, Math.min(100 - s.e.h, s.y + dy));
          var d = elDiv(s.e.id);
          if (d) { d.style.left = s.e.x + '%'; d.style.top = s.e.y + '%'; }
        });
        paintSel();
      }
      function onUp(ev) {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (moved) refreshThumbs(); // 布局变了，缩略图色块跟随
        else if (!ev || !ev.shiftKey) { m.selIds = [clickedId]; paintSel(); } // 原地点击已多选的元素：收敛为单选
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    }

    /* 橡皮筋框选：舞台空白处按下拖出虚线选框，松手选中所有与选框相交的元素（Shift = 并入已有选区） */
    function startRubber(e0) {
      var sRect = slide.getBoundingClientRect();
      if (e0.clientX < sRect.left || e0.clientX > sRect.right ||
          e0.clientY < sRect.top || e0.clientY > sRect.bottom) return; // 起点在幻灯片外：只取消选中
      var base = e0.shiftKey ? m.selIds.slice() : [];
      var band = document.createElement('div');
      band.className = 'wpp-rubber';
      slide.appendChild(band);
      var ax = (e0.clientX - sRect.left) / sRect.width * 100;
      var ay = (e0.clientY - sRect.top) / sRect.height * 100;
      var rect = null;
      function onMove(ev) {
        if (!slide.isConnected) { onUp(); return; }
        var bx = Math.max(0, Math.min(100, (ev.clientX - sRect.left) / sRect.width * 100));
        var by = Math.max(0, Math.min(100, (ev.clientY - sRect.top) / sRect.height * 100));
        rect = { x: Math.min(ax, bx), y: Math.min(ay, by), w: Math.abs(bx - ax), h: Math.abs(by - ay) };
        band.style.cssText = 'left:' + rect.x + '%;top:' + rect.y + '%;width:' + rect.w + '%;height:' + rect.h + '%;';
      }
      function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        band.remove();
        if (rect && rect.w + rect.h > 0.5) { // 太小视为单击空白
          curSlide().elements.forEach(function (e) {
            var hit = !(e.x > rect.x + rect.w || e.x + e.w < rect.x || e.y > rect.y + rect.h || e.y + e.h < rect.y);
            if (hit && base.indexOf(e.id) < 0) base.push(e.id);
          });
        }
        m.selIds = base;
        paintSel();
        /* 自由框选（PRD 4.1 形态④）：开关开着或 Shift 拖框 → 框选完成出输入框（selIds 选中框保持） */
        if (rect && rect.w + rect.h > 0.5 && (m.lassoOn || e0.shiftKey) && window.LUI && LUI.onLasso) {
          LUI.onLasso(tab, {
            left: sRect.left + rect.x / 100 * sRect.width, top: sRect.top + rect.y / 100 * sRect.height,
            right: sRect.left + (rect.x + rect.w) / 100 * sRect.width, bottom: sRect.top + (rect.y + rect.h) / 100 * sRect.height,
            width: rect.w / 100 * sRect.width, height: rect.h / 100 * sRect.height,
          });
        }
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    }

    stage.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      var div = e.target.closest('.wpp-el');
      if (editing) { // 编辑中点别处 = 提交；点自己 = 交给 contenteditable 定位光标
        var edDiv = elDiv(editing);
        if (edDiv && edDiv.contains(e.target)) return;
        endEdit(true);
      }
      e.preventDefault(); // 挡住原生拖选/聚焦，选中逻辑自己管
      slide.focus();
      if (div && slide.contains(div)) {
        var id = div.getAttribute('data-id');
        if (e.shiftKey) { // Shift+点击：加选/减选
          var ix = m.selIds.indexOf(id);
          if (ix >= 0) m.selIds.splice(ix, 1); else m.selIds.push(id);
          paintSel();
          return;
        }
        if (m.selIds.indexOf(id) < 0) { m.selIds = [id]; paintSel(); }
        startDrag(id, e);
      } else {
        if (!e.shiftKey) { m.selIds = []; paintSel(); }
        startRubber(e);
      }
    });
    stage.addEventListener('dblclick', function (e) {
      var div = e.target.closest('.wpp-el-text');
      if (div && slide.contains(div) && !editing) startEdit(div);
    });
    /* 编辑中点格外任何地方（侧边栏等）：focusout 兜底提交 */
    slide.addEventListener('focusout', function (e) {
      if (editing && e.target.classList && e.target.classList.contains('wpp-text')) endEdit(true);
    });

    canvas.addEventListener('keydown', function (e) {
      if (editing) {
        if (e.key === 'Enter') { e.preventDefault(); endEdit(true); }
        else if (e.key === 'Escape') { e.preventDefault(); endEdit(false); }
        return;
      }
      if (e.key === 'Escape') { m.selIds = []; paintSel(); }
      else if ((e.key === 'Delete' || e.key === 'Backspace') && m.selIds.length) {
        e.preventDefault();
        var sl = curSlide();
        sl.elements = sl.elements.filter(function (e2) { return m.selIds.indexOf(e2.id) < 0; });
        m.selIds = [];
        renderSlide();
        refreshThumbs();
        slide.focus();
      }
    });

    list.addEventListener('click', function (e) {
      var th = e.target.closest('.wpp-thumb');
      if (!th) return;
      var i = +th.getAttribute('data-i');
      if (e.target.closest('.wpp-thumb-ai')) { // 整页入口：切到该页 + 输入框锚定缩略图下方（LUI）
        // 先取 rect 再 switchTo：switchTo 会重建缩略图列表 DOM，旧 th 脱离文档后 getBoundingClientRect 全 0，输入框会跑到左上角
        var aiRect = th.getBoundingClientRect();
        switchTo(i);
        if (window.LUI && LUI.onPageEntry) LUI.onPageEntry(tab, aiRect, i);
        return;
      }
      switchTo(i);
    });
    /* 自由框选模式开关（状态存模型 m.lassoOn，切 tab 恢复） */
    root.querySelector('.lui-lasso-toggle').addEventListener('click', function (e) {
      m.lassoOn = !m.lassoOn;
      e.currentTarget.classList.toggle('is-on', m.lassoOn);
    });
    root.querySelector('.wpp-thumb-add').addEventListener('click', function () {
      if (editing) endEdit(true);
      m.slides.push(wppBlankSlide('')); // 新页 = 空白标题+副标题两个 text 元素
      switchTo(m.slides.length - 1);
    });

    paintSel(); // 首刷：恢复模型里持久化的选中（切 tab 回来 DOM 是重建的，选框要重画）
  }

  /* pdf 缩略图面板（对齐线上阅读器左侧缩略图栏；hover 出「AI编辑」icon = 整页入口，PRD 4.1） */
  function pdfThumbsHtml() {
    return [1, 2, 3].map(function (n) {
      return '<div class="pdf-thumb' + (n === 1 ? ' is-active' : '') + '" data-i="' + n + '">' +
        '<span class="pdf-thumb-ai" title="编辑">' + icon('lingxi_logo_m', 14) + '</span>' +
        '<i class="pt-line t"></i><i class="pt-line"></i><i class="pt-line"></i><i class="pt-line"></i><i class="pt-line"></i>' +
        '<span class="pdf-thumb-no">第' + n + '页</span>' +
      '</div>';
    }).join('');
  }

  /* ════════════ PDF（阅读器，静态内容可选中复制） ════════════ */
  function canvasPdf() {
    return '<div class="editor-canvas canvas-pdf">' +
      '<div class="pdf-side-tools">' +
        icon('menu', 20) + icon('bookmark', 20) + icon('doc', 20) +
        icon('bubble', 20) + icon('highlight', 20) +
      '</div>' +
      '<div class="pdf-thumb-panel">' +
        '<div class="pdf-thumb-head">缩略图</div>' + pdfThumbsHtml() +
      '</div>' +
      '<div class="pdf-stage">' +
        /* 自由框选模式开关（PRD 4.1 形态④；Shift+拖框免开关，见 bindPdf） */
        '<span class="lui-lasso-toggle"><span class="lasso-track"><i></i></span>自由框选</span>' +
        '<div class="pdf-page-wrap"><div class="pdf-page">' +
        '<div class="pdf-doc">' +
          '<h1>2026 年上半年中国办公软件市场研究报告</h1>' +
          '<p class="pdf-doc-meta">金山办公研究院 · 2026 年 7 月 · 共 12 页</p>' +
          '<h2>摘要</h2>' +
          '<p>2026 年上半年，国内办公软件市场保持稳健增长，规模以上企业订阅收入同比增长 18.6%。AI 功能渗透率持续提升，成为拉动个人会员与企业订阅收入增长的核心动力，头部厂商的 AI 功能月活渗透率已超过 35%。</p>' +
          '<h2>一、市场概览</h2>' +
          '<p>从产品结构看，文字、表格、演示三大组件仍是用户使用时长最高的场景，合计占比超过七成。随着大模型能力下沉到编辑链路，「边写边改、指哪改哪」的 AI 编辑体验正在取代传统的对话框式交互，成为各厂商竞争的焦点。</p>' +
          '<p>本报告基于对 2400 家企业和 1.2 万名个人用户的调研数据，从市场规模、竞争格局、AI 功能渗透、用户付费意愿四个维度展开分析，并在结尾给出下半年的趋势预判与产品建议。</p>' +
        '</div></div></div>' +
        '<div class="pdf-chip"><span class="chip-icon">' + icon('wps_format', 16) + '</span>PDF转Word</div>' +
      '</div>' +
    '</div>' +
    '<div class="statusbar">' +
      '<span>1/12</span><span>校对</span><span><i class="sb-dot">●</i> 本地备份开</span>' +
      '<span class="sb-right">' + zoomHtml('88%', 35) + '</span>' +
    '</div>';
  }

  /* pdf 绑定：自由框选 toggle + 拖框（框选时不拖选文本；松开虚线框保持，框下方出输入框）。
     pdf 无文档模型，lasso 开关状态挂 tab.lassoOn */
  function bindPdf(root, tab) {
    var stage = root.querySelector('.pdf-stage');
    // 缩略图整页入口：hover 缩略图出 icon，点击 → 输入框贴着该缩略图（page 场景 chips，交付类剧本走侧边栏）
    root.querySelector('.pdf-thumb-panel').addEventListener('click', function (e) {
      var tag = e.target.closest && e.target.closest('.pdf-thumb-ai');
      if (!tag) return;
      e.stopPropagation();
      if (window.LUI && LUI.onPdfPage) LUI.onPdfPage(tab, tag.getBoundingClientRect());
    });
    var toggle = root.querySelector('.lui-lasso-toggle');
    if (tab.lassoOn) toggle.classList.add('is-on');
    toggle.addEventListener('click', function () {
      tab.lassoOn = !tab.lassoOn;
      toggle.classList.toggle('is-on', tab.lassoOn);
    });
    stage.addEventListener('mousedown', function (e) {
      if (!(tab.lassoOn || e.shiftKey)) return;
      var sRect = stage.getBoundingClientRect();
      var old = stage.querySelector('.pdf-lasso-rect');
      if (old) old.remove();
      var band = document.createElement('div');
      band.className = 'pdf-lasso-rect';
      stage.appendChild(band);
      var ax = e.clientX - sRect.left + stage.scrollLeft, ay = e.clientY - sRect.top + stage.scrollTop;
      function onMove(ev) {
        var bx = ev.clientX - sRect.left + stage.scrollLeft, by = ev.clientY - sRect.top + stage.scrollTop;
        band.style.cssText = 'left:' + Math.min(ax, bx) + 'px;top:' + Math.min(ay, by) + 'px;width:' + Math.abs(bx - ax) + 'px;height:' + Math.abs(by - ay) + 'px;';
      }
      function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        var r = band.getBoundingClientRect();
        if (r.width + r.height < 12) { band.remove(); return; } // 太小视为误点
        if (window.LUI && LUI.onLasso) LUI.onLasso(tab, r); // 虚线框保持，框下方出输入框
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  }

  var CANVAS = { wps: canvasWps, et: canvasEt, wpp: canvasWpp, pdf: canvasPdf };
  var BIND = { wps: bindWps, et: bindEt, wpp: bindWpp, pdf: bindPdf };

  /* et 上下文：图表 → {type:'chart', chartId/name/kind/dataRange, rect}；区选 → { type:'cells', range:{r1,c1,r2,c2}, a1:'B2:D5', a1Start:'B2', text:选区值摘要,
     rect:选区左下角格 rect }；单格 → 光标态（rect=锚点格） */
  function etGetContext(tab, root) {
    var m = tab.doc;
    if (m.chartSelected && m.chart) {
      var chartEl = root.querySelector('.et-chart-object[data-chart-id="' + m.chart.id + '"]');
      return { type: 'chart', text: m.chart.name, chartId: m.chart.id, chartName: m.chart.name,
        chartKind: m.chart.kind, dataRange: m.chart.dataRange, blockIdx: -1, start: 0, end: 0,
        rect: chartEl ? chartEl.getBoundingClientRect() : root.getBoundingClientRect() };
    }
    var rg = m.selRange;
    if (rg) {
      var vals = [];
      for (var r = rg.r1; r <= rg.r2 && vals.length < 4; r++) {
        for (var c = rg.c1; c <= rg.c2 && vals.length < 4; c++) {
          var v = m.cells[etAddr(r, c)];
          if (v) vals.push(v);
        }
      }
      var corner = root.querySelector('td[data-r="' + rg.r2 + '"][data-c="' + rg.c2 + '"]');
      return { type: 'cells', range: { r1: rg.r1, c1: rg.c1, r2: rg.r2, c2: rg.c2 },
        a1: etAddr(rg.r1, rg.c1) + ':' + etAddr(rg.r2, rg.c2), a1Start: etAddr(rg.r1, rg.c1),
        text: vals.join('、'), blockIdx: -1, start: 0, end: 0,
        rect: corner ? corner.getBoundingClientRect() : root.getBoundingClientRect() };
    }
    var td = root.querySelector('td[data-r="' + m.sel.r + '"][data-c="' + m.sel.c + '"]');
    return { type: 'cursor', text: m.cells[etAddr(m.sel.r, m.sel.c)] || '', blockIdx: -1, start: 0, end: 0,
      range: { r1: m.sel.r, c1: m.sel.c, r2: m.sel.r, c2: m.sel.c }, a1Start: etAddr(m.sel.r, m.sel.c), // 单格兜底：et 动作可注入
      rect: td ? td.getBoundingClientRect() : root.getBoundingClientRect() };
  }

  /* wpp 上下文：有选中元素 → { type:'elements', ids, text:类型/文本摘要, rect:选中集包围盒 }；无选中 → null */
  function wppGetContext(tab, root) {
    var m = tab.doc;
    var ids = m.selIds || [];
    if (!ids.length) return null;
    var slide = root.querySelector('.wpp-slide');
    var x1 = 1e9, y1 = 1e9, x2 = -1e9, y2 = -1e9, found = false;
    ids.forEach(function (id) {
      var d = root.querySelector('.wpp-el[data-id="' + id + '"]');
      if (!d) return;
      var r = d.getBoundingClientRect();
      x1 = Math.min(x1, r.left); y1 = Math.min(y1, r.top);
      x2 = Math.max(x2, r.right); y2 = Math.max(y2, r.bottom); found = true;
    });
    var TYPE_LABEL = { text: '文本', shape: '形状', chart: '图表', table: '表格', image: '图片' };
    var text = m.slides[m.current].elements.filter(function (e) { return ids.indexOf(e.id) >= 0; })
      .map(function (e) { return e.type === 'text' && e.text ? e.text.slice(0, 8) : (TYPE_LABEL[e.type] || e.type); }).join('、');
    return { type: 'elements', ids: ids.slice(), text: text, blockIdx: -1, start: 0, end: 0,
      rect: found ? { left: x1, top: y1, right: x2, bottom: y2, width: x2 - x1, height: y2 - y1 } : slide.getBoundingClientRect() };
  }

  /* pdf 上下文：阅读器只有文本划词 → { type:'selection', text, rect }（不动文内，剧本全走侧边栏） */
  function pdfGetContext(tab, root) {
    var docEl = root.querySelector('.pdf-doc');
    var sel = window.getSelection();
    if (sel.rangeCount && !sel.isCollapsed && docEl.contains(sel.getRangeAt(0).startContainer)) {
      var range = sel.getRangeAt(0);
      return { type: 'selection', text: range.toString(), blockIdx: -1, start: 0, end: 0, rect: range.getBoundingClientRect() };
    }
    return null;
  }

  /* 当前上下文（lui.js 唤起用）。wps 见下方主实现；et/wpp/pdf 各走各的 */
  Editors.getContext = function (tab) {
    if (!tab) return null;
    var root = liveRoot(tab);
    if (!root) return null;
    if (tab.type === 'et') return etGetContext(tab, root);
    if (tab.type === 'wpp') return wppGetContext(tab, root);
    if (tab.type === 'pdf') return pdfGetContext(tab, root);
    if (tab.type !== 'wps') return null;
    /* wps 返回 { type, text, blockIdx, start, end, rect, tbl?, spans? }：
     - 'image'：点选了图片占位块（.wps-image.is-selected）
     - 'toc'：光标置入目录块（块级场景，chips=更新目录）
     - 'table'：光标在内嵌表格内（或跨单元格拖选，demo 不支持跨格改写）
     - 'selection'：文本选区。表格单元格内划词时带 tbl:{r,c}，start/end 为该格字符偏移；
       跨块/全选时 start/end 截到起点块（rewriteRange 坐标口径不变），
       spans 则列出选区覆盖的全部文本块 [{blockIdx,start,end}]（keep-sel 视觉用）
     - 'cursor'：光标（无选区）
     选区不在文档内返回 null。
     整段选中（三击）/全选/边界拖选时浏览器会给 startContainer=.wps-doc 本身，先做端点规范化再算偏移。 */
    var docEl = root.querySelector('.wps-doc');
    var sel = window.getSelection();
    // 图片点选优先（图片 contenteditable=false，不产生文本选区）
    var img = docEl.querySelector('.wps-image.is-selected');
    if (img && (!sel.rangeCount || sel.isCollapsed)) {
      var imgIdx = Array.prototype.indexOf.call(docEl.childNodes, img);
      var imgBlk = tab.doc.blocks[imgIdx];
      return { type: 'image', text: (imgBlk && imgBlk.image && imgBlk.image.label) || '', blockIdx: imgIdx, start: 0, end: 0, rect: img.getBoundingClientRect() };
    }
    if (!sel.rangeCount) return null;
    var range = sel.getRangeAt(0);
    /* 端点规范化：container===docEl（整段/全选/边界拖选）→ 定位到 offset 对应的子块开头 */
    function norm(container, offset) {
      if (container !== docEl) return { c: container, o: offset };
      var ni = Math.min(offset, docEl.childNodes.length - 1);
      if (ni < 0) return null;
      return { c: docEl.childNodes[ni], o: 0 };
    }
    /* 容器 c/o 在块 node 内的字符偏移（pre-range toString） */
    function offIn(node, c, o) {
      var pre = document.createRange();
      pre.selectNodeContents(node);
      pre.setEnd(c, o);
      return pre.toString().length;
    }
    var S = norm(range.startContainer, range.startOffset);
    if (!S || !docEl.contains(S.c)) return null;
    var E = norm(range.endContainer, range.endOffset);
    // 所在 block = .wps-doc 直接子节点（h1/p/table/.wps-image；用户编辑可能产生裸文本节点，同样算一块）
    var node = S.c;
    while (node && node.parentNode !== docEl) node = node.parentNode;
    if (!node) return null;
    var blockIdx = Array.prototype.indexOf.call(docEl.childNodes, node);
    if (blockIdx < 0) return null;
    var blk = tab.doc.blocks[blockIdx];
    var rect = range.getBoundingClientRect();
    if (!rect || (!rect.width && !rect.height)) rect = node.nodeType === 1 ? node.getBoundingClientRect() : rect;
    // ── 表格块 ──
    if (blk && blk.table) {
      var cellEl = S.c.nodeType === 3 ? S.c.parentNode : S.c;
      while (cellEl && cellEl.tagName !== 'TD' && cellEl.tagName !== 'TH') cellEl = cellEl.parentNode;
      if (!cellEl) return { type: 'table', text: '', blockIdx: blockIdx, start: 0, end: 0, rect: rect };
      var trEl = cellEl.parentNode;
      var cr = Array.prototype.indexOf.call(node.rows, trEl);
      var cc = Array.prototype.indexOf.call(trEl.cells, cellEl);
      var tbl = { r: cr, c: cc };
      // 单格内划词 → selection（带 tbl 坐标，可润色/翻译该格文本）
      if (!range.collapsed && E && (cellEl === E.c || cellEl.contains(E.c))) {
        try {
          var cs = offIn(cellEl, S.c, S.o), ce = offIn(cellEl, E.c, E.o);
          if (ce > cs) {
            return { type: 'selection', text: range.toString(), blockIdx: blockIdx, tbl: tbl,
              start: cs, end: ce, rect: rect, spans: [{ blockIdx: blockIdx, tbl: tbl, start: cs, end: ce }] };
          }
        } catch (err) { /* 落到 table 场景 */ }
      }
      return { type: 'table', text: '', blockIdx: blockIdx, tbl: tbl, start: 0, end: 0, rect: rect };
    }
    if (blk && blk.image) return { type: 'image', text: blk.image.label || '', blockIdx: blockIdx, start: 0, end: 0, rect: rect };
    // 目录块：光标置入/块内任意位置 → 目录场景（chips：更新目录）
    if (blk && blk.toc) return { type: 'toc', text: '目录', blockIdx: blockIdx, start: 0, end: 0, rect: rect };
    // ── 文本块：起点块字符偏移（rewriteRange 坐标口径，跨块截到起点块末尾） ──
    var start;
    try { start = offIn(node, S.c, S.o); } catch (err) { return null; } // 位置异常时放弃本次唤起
    var text = '', end = start;
    if (!range.collapsed) {
      if (E && node.contains(E.c)) { // 同块选区
        try { end = offIn(node, E.c, E.o); } catch (err2) { end = start; }
        if (end < start) end = start;
        text = range.toString();
      } else { // 跨块：截到起点块末尾
        end = (node.textContent || '').length;
        text = (node.textContent || '').slice(start, end);
      }
    }
    // spans：选区覆盖的全部文本块（keep-sel 视觉用；表格/图片块不在此列，单元格场景在上面已处理）
    var spans = [];
    if (!range.collapsed && range.intersectsNode) {
      Array.prototype.forEach.call(docEl.childNodes, function (n, i) {
        var nb = tab.doc.blocks[i];
        if (!nb || nb.table || nb.image) return;
        try { if (!range.intersectsNode(n)) return; } catch (err3) { return; }
        var s = 0, e = (n.textContent || '').length;
        try {
          if (n === S.c || n.contains(S.c)) s = offIn(n, S.c, S.o);
          if (E && (n === E.c || n.contains(E.c))) e = offIn(n, E.c, E.o);
        } catch (err4) { /* 端点异常按整块算 */ }
        if (e > s) spans.push({ blockIdx: i, start: s, end: e });
      });
    }
    return { type: range.collapsed ? 'cursor' : 'selection', text: text, blockIdx: blockIdx, start: start, end: end, rect: rect, spans: spans };
  };

  /* AI 引用 chip 被点击时，把对应区选在画布上闪一下（只在 DOM 上加临时 class，不动模型）。
     range: {r1,c1,r2,c2}；非表格组件直接忽略。 */
  var flashTimer = null;
  Editors.flashRange = function (tab, range) {
    if (!tab || tab.type !== 'et' || !range) return;
    var root = liveRoot(tab);
    if (!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('.et-grid td.et-flash'), function (td) { td.classList.remove('et-flash'); });
    if (flashTimer) { clearTimeout(flashTimer); flashTimer = null; }
    for (var r = range.r1; r <= range.r2; r++) {
      for (var c = range.c1; c <= range.c2; c++) {
        var td = root.querySelector('.et-grid td[data-r="' + r + '"][data-c="' + c + '"]');
        if (td) td.classList.add('et-flash');
      }
    }
    var live = root;
    flashTimer = setTimeout(function () {
      flashTimer = null;
      Array.prototype.forEach.call(live.querySelectorAll('.et-grid td.et-flash'), function (td) { td.classList.remove('et-flash'); });
    }, 1600);
  };

  /* 文内 LUI 唤起输入框时保持选区可见：on=true 在涉及块/单元格 DOM 上叠加 .lui-keep-sel 浅底，false 还原。
     spans: [{blockIdx, tbl?, start, end}]（getContext 产出），支持跨块/全选多块覆盖与表格单格。
     只重刷 DOM（模型不动，textContent 口径一致，syncWpsFromDom 不受污染）。
     ★ 顺序约定：必须先用 getContext 从模型算好坐标再包 span；rewriteRange 用包之前的坐标，不受影响 */
  Editors.setKeepSel = function (tab, spans, on) {
    var root = liveRoot(tab);
    if (!root || !spans) return;
    var docEl = root.querySelector('.wps-doc');
    spans.forEach(function (sp) {
      var node = docEl.childNodes[sp.blockIdx];
      if (!node || node.nodeType !== 1) return;
      var b = tab.doc.blocks[sp.blockIdx];
      if (!b) return;
      if (sp.tbl) { // 表格单元格内选区保持
        if (!b.table) return;
        var rowEl = node.rows && node.rows[sp.tbl.r];
        var cell = rowEl && rowEl.cells[sp.tbl.c];
        var rowData = b.table.rows[sp.tbl.r];
        if (!cell || !rowData) return;
        var t = String(rowData[sp.tbl.c] || '');
        cell.innerHTML = on
          ? esc(t.slice(0, sp.start)) + '<span class="lui-keep-sel">' + esc(t.slice(sp.start, sp.end)) + '</span>' + esc(t.slice(sp.end))
          : esc(t);
        return;
      }
      if (b.table || b.image) return;
      var pai = tab.doc.pendingAi;
      node.innerHTML = wpsBlockInner(b, sp.blockIdx, pai && pai.ranges, tab.doc.comments,
        on ? [{ start: sp.start, end: sp.end, cls: 'lui-keep-sel' }] : null, tab.doc.commentSel);
    });
  };

  /* ════════════ AI 动作实现（EditorAPI.apply 的实际执行体；改这里：新增动作类型） ════════════ */
  /* wps 未决改动批次：首次改动时建立（undo = blocks 深快照），同批改动合并到同一个 pendingAi。
     高亮粒度：ranges=文本块字符区间 / cellRanges=表格格级区间 / styledTables=整表 /
     tocBlocks=目录整块 / annotations=本批批注数（撤销口径） */
  function wpsEnsurePending(m) {
    if (!m.pendingAi) {
      m.pendingAi = { undo: JSON.parse(JSON.stringify(m.blocks)), ranges: [], cellRanges: [], styledTables: [], tocBlocks: [], annotations: [] };
    }
  }
  /* wpp 未决改动批次：undo = slides 深快照；elementIds = 被改元素（高亮粒度=元素级，紫色外框不盖内容） */
  function wppEnsurePending(m) {
    if (!m.pendingAi) m.pendingAi = { undo: JSON.parse(JSON.stringify(m.slides)), elementIds: [] };
  }
  Editors.actions = {
    wps: {
      /* { type:'wps.insertBlocks', blocks:[{h}|{p}] } — 逐段插入（80–150ms 间隔），返回 Promise */
      insertBlocks: function (tab, a) {
        var m = tab.doc;
        var root = liveRoot(tab);
        if (!root) { m.blocks = m.blocks.concat(a.blocks); return; } // 画布不在屏上：直接改模型
        var docEl = root.querySelector('.wps-doc');
        if (!m.blocks.length) docEl.innerHTML = ''; // 清掉空文档的占位 <p><br></p>
        return new Promise(function (resolve) {
          var i = 0;
          (function next() {
            m.blocks.push(a.blocks[i]);
            docEl.insertAdjacentHTML('beforeend', wpsBlockHtml(a.blocks[i]));
            updateWpsMeta(tab, root);
            i++;
            if (i < a.blocks.length) setTimeout(next, 80 + Math.random() * 70);
            else resolve();
          })();
        });
      },
      /* { type:'wps.rewriteRange', blockIdx, start, end, text, tbl? } — 替换指定 block 的字符区间（左闭右开；
         start===end 即插入）。带 tbl:{r,c} 时改写内嵌表格对应单元格的文本（格级）。
         改动记入 pendingAi（undo 只存首批快照；高亮按粒度记 ranges / cellRanges）。画布在屏增量改 DOM */
      rewriteRange: function (tab, a) {
        var m = tab.doc;
        var b = m.blocks[a.blockIdx];
        if (!b) return Promise.resolve(false);
        if (a.tbl) { /* ── 表格单元格内改写（表格划词润色等） ── */
          if (!b.table) return Promise.resolve(false);
          var row = b.table.rows[a.tbl.r];
          if (!row) return Promise.resolve(false);
          var oldC = String(row[a.tbl.c] || '');
          var cs = Math.max(0, Math.min(a.start || 0, oldC.length));
          var ce = Math.max(cs, Math.min(a.end != null ? a.end : oldC.length, oldC.length));
          wpsEnsurePending(m);
          row[a.tbl.c] = oldC.slice(0, cs) + a.text + oldC.slice(ce);
          m.pendingAi.cellRanges.push({ blockIdx: a.blockIdx, r1: a.tbl.r, c1: a.tbl.c, r2: a.tbl.r, c2: a.tbl.c });
          var root = liveRoot(tab);
          if (root) {
            var tnode = root.querySelector('.wps-doc').childNodes[a.blockIdx];
            var tcell = tnode && tnode.rows && tnode.rows[a.tbl.r] && tnode.rows[a.tbl.r].cells[a.tbl.c];
            if (tcell) { tcell.textContent = row[a.tbl.c]; tcell.classList.add('ai-diff-cell'); }
            updateWpsMeta(tab, root);
          }
          return Promise.resolve(true);
        }
        if (b.table || b.image) return Promise.resolve(false);
        var key = b.h != null ? 'h' : 'p';
        var old = b[key] || '';
        var start = Math.max(0, Math.min(a.start || 0, old.length));
        var end = Math.max(start, Math.min(a.end != null ? a.end : old.length, old.length));
        wpsEnsurePending(m);
        b[key] = old.slice(0, start) + a.text + old.slice(end);
        m.pendingAi.ranges.push({ blockIdx: a.blockIdx, start: start, end: start + a.text.length });
        var root = liveRoot(tab);
        if (root) {
          var node = root.querySelector('.wps-doc').childNodes[a.blockIdx];
          if (node && node.nodeType === 1) {
            node.innerHTML = wpsBlockInner(b, a.blockIdx, m.pendingAi.ranges, m.comments, null, m.commentSel);
          }
          updateWpsMeta(tab, root);
        }
        return Promise.resolve(true);
      },
      /* { type:'wps.styleTable', blockIdx, style:'three-line'|'zebra', tblRange? } — 内嵌表格改样式（三线表/斑马纹）。
         样式是表级的；高亮按粒度：带 tblRange（区选发起）→ 只亮选区格（cellRanges），否则整表框（styledTables） */
      styleTable: function (tab, a) {
        var m = tab.doc;
        var b = m.blocks[a.blockIdx];
        if (!b || !b.table) return Promise.resolve(false);
        wpsEnsurePending(m);
        b.table.style = a.style;
        if (a.tblRange) {
          m.pendingAi.cellRanges.push({ blockIdx: a.blockIdx, r1: a.tblRange.r1, c1: a.tblRange.c1, r2: a.tblRange.r2, c2: a.tblRange.c2 });
        } else if (m.pendingAi.styledTables.indexOf(a.blockIdx) < 0) {
          m.pendingAi.styledTables.push(a.blockIdx);
        }
        var root = liveRoot(tab);
        if (root) {
          var node = root.querySelector('.wps-doc').childNodes[a.blockIdx];
          if (node && node.tagName === 'TABLE') {
            node.className = 'wps-tbl' + (a.style ? ' tbl-' + a.style : '') +
              (a.tblRange ? '' : ' ai-diff-tbl');
            if (a.tblRange) { // 区选粒度：只给选区格加高亮框
              for (var r = a.tblRange.r1; r <= a.tblRange.r2; r++) {
                var tr = node.rows[r];
                if (!tr) continue;
                for (var c = a.tblRange.c1; c <= a.tblRange.c2; c++) {
                  if (tr.cells[c]) tr.cells[c].classList.add('ai-diff-cell');
                }
              }
            }
          }
        }
        return Promise.resolve(true);
      },
      /* { type:'wps.tableAddRow', blockIdx, cells:[...] } — 内嵌表格末尾追加一行（只有新行高亮，可追溯） */
      tableAddRow: function (tab, a) {
        var m = tab.doc;
        var b = m.blocks[a.blockIdx];
        if (!b || !b.table) return Promise.resolve(false);
        wpsEnsurePending(m);
        b.table.rows.push(a.cells);
        var newIdx = b.table.rows.length - 1;
        m.pendingAi.cellRanges.push({ blockIdx: a.blockIdx, r1: newIdx, c1: 0, r2: newIdx, c2: a.cells.length - 1 });
        var root = liveRoot(tab);
        if (root) {
          var node = root.querySelector('.wps-doc').childNodes[a.blockIdx];
          if (node && node.tagName === 'TABLE') {
            var tr = node.insertRow();
            a.cells.forEach(function (c) {
              var td = tr.insertCell();
              td.textContent = c;
              td.className = 'ai-diff-cell';
            });
          }
          updateWpsMeta(tab, root);
        }
        return Promise.resolve(true);
      },
      /* { type:'wps.annotate', blockIdx, start?, end?, text } — 文内批注：不改文本。
         批注写入持久结构 tab.doc.comments（渲染源；采纳后保留，切 tab 也在），
         同时记入 pendingAi.annotations 作为本批撤销口径（撤销 = 从 comments 尾部摘回本批）。
         start/end 省略 = 整段批注。画布在屏则增量包 span + 补卡片 */
      annotate: function (tab, a) {
        var m = tab.doc;
        var b = m.blocks[a.blockIdx];
        if (!b || b.table || b.image) return Promise.resolve(false);
        wpsEnsurePending(m);
        m.comments = m.comments || [];
        var text = b.h != null ? b.h : (b.p || '');
        var start = Math.max(0, Math.min(a.start || 0, text.length));
        var end = a.end != null && a.end > start ? Math.min(a.end, text.length) : text.length;
        var now = new Date();
        var pad = function (n) { return (n < 10 ? '0' : '') + n; };
        var cmt = {
          blockIdx: a.blockIdx, start: start, end: end, text: a.text,
          time: now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes()),
        };
        m.comments.push(cmt);              // 持久：渲染/采纳后保留
        m.pendingAi.annotations.push(cmt); // 本批：决策条与撤销口径
        var root = liveRoot(tab);
        if (root) {
          var node = root.querySelector('.wps-doc').childNodes[a.blockIdx];
          if (node && node.nodeType === 1) {
            node.innerHTML = wpsBlockInner(b, a.blockIdx, m.pendingAi.ranges, m.comments, null, m.commentSel);
          }
          // 批注卡片列增量补挂
          var page = root.querySelector('.wps-page');
          var col = page.querySelector('.wps-comments');
          if (!col) {
            col = document.createElement('div');
            col.className = 'wps-comments';
            page.appendChild(col);
          }
          col.innerHTML = wpsCommentsHtml(m.comments, m.commentSel);
          paintWpsComments(tab, root);
        }
        return Promise.resolve(true);
      },
      /* { type:'wps.updateToc', blockIdx, entries:[{text,page}] } — 更新目录块条目（同步标题/修正页码），
         记入 pendingAi.tocBlocks（目录整块紫底高亮）。画布在屏则重建该块 DOM */
      updateToc: function (tab, a) {
        var m = tab.doc;
        var b = m.blocks[a.blockIdx];
        if (!b || !b.toc) return Promise.resolve(false);
        wpsEnsurePending(m);
        b.toc = a.entries;
        if (m.pendingAi.tocBlocks.indexOf(a.blockIdx) < 0) m.pendingAi.tocBlocks.push(a.blockIdx);
        var root = liveRoot(tab);
        if (root) {
          var node = root.querySelector('.wps-doc').childNodes[a.blockIdx];
          if (node && node.nodeType === 1) {
            var tmp = document.createElement('div');
            tmp.innerHTML = wpsBlockHtml(b, a.blockIdx, m.pendingAi, m.comments, m.commentSel, m.tblSel);
            node.parentNode.replaceChild(tmp.firstChild, node);
          }
        }
        return Promise.resolve(true);
      },
      /* { type:'wps.styleImage', blockIdx, style:'framed' } — 图片假编辑（demo：加品牌描边框）。
         记入 pendingAi.imageBlocks（整块紫色框线高亮，不盖内容） */
      styleImage: function (tab, a) {
        var m = tab.doc;
        var b = m.blocks[a.blockIdx];
        if (!b || !b.image) return Promise.resolve(false);
        wpsEnsurePending(m);
        m.pendingAi.imageBlocks = m.pendingAi.imageBlocks || [];
        if (a.style === 'framed') b.image.framed = true;
        if (m.pendingAi.imageBlocks.indexOf(a.blockIdx) < 0) m.pendingAi.imageBlocks.push(a.blockIdx);
        var root = liveRoot(tab);
        if (root) {
          var node = root.querySelector('.wps-doc').childNodes[a.blockIdx];
          if (node && node.nodeType === 1) {
            var tmp = document.createElement('div');
            tmp.innerHTML = wpsBlockHtml(b, a.blockIdx, m.pendingAi, m.comments, m.commentSel, m.tblSel);
            node.parentNode.replaceChild(tmp.firstChild, node);
          }
        }
        return Promise.resolve(true);
      },
    },
    et: {
      maskReconciliation: function (tab, a) { return EtReconciliationPrivacy.begin(tab,a); },
      restoreReconciliation: function (tab) { return EtReconciliationPrivacy.restore(tab); },
      saveTaskMemory: function (tab, a) {
        if (window.EtReconciliationPrivacy && EtReconciliationPrivacy.isActive(tab)) throw new Error('请先还原脱敏结果，再保存设置');
        EtTaskMemory.save(tab,a.taskKey,a.taskName,a.preferences);
        if (a.memoryInput) EtTaskMemory.recordInput(tab,a.taskKey,a.memoryInput);
        return true;
      },
      /* 追加结果页，重播同一次任务时复用该页；主表和网关表保持不变。 */
      reconcileDemo: function (tab, a) {
        if (!a.result || !tab.doc.sheets) return false;
        var m = tab.doc, result = window.EtReconciliationPrivacy ? EtReconciliationPrivacy.prepareResult(tab,a.result) : a.result;
        var existing = m.sheets.findIndex(function (sheet) { return sheet.demoResultId === result.sheet.demoResultId; });
        if (existing < 0) { m.sheets.push(JSON.parse(JSON.stringify(result.sheet))); existing = m.sheets.length-1; }
        else if (window.EtReconciliationPrivacy && EtReconciliationPrivacy.isActive(tab)) m.sheets[existing] = JSON.parse(JSON.stringify(result.sheet));
        if (window.EtReconciliationPrivacy) EtReconciliationPrivacy.registerOutput(tab,m.sheets[existing]);
        m.lastReconciliationResultId = result.sheet.demoResultId;
        Editors.switchEtSheet(tab,existing);
        var root = liveRoot(tab);
        if (root) {
          Editors.render(root,tab);
          var grid = root.querySelector('.et-grid-wrap');
          var cell = grid && grid.querySelector('td[data-r="2"][data-c="'+result.statusColumn+'"]');
          if (cell) grid.scrollLeft = Math.max(0,cell.offsetLeft-grid.clientWidth+cell.offsetWidth+24);
          var sheetButton = root.querySelector('[data-et-sheet="'+existing+'"]');
          if (sheetButton) sheetButton.scrollIntoView({block:'nearest',inline:'nearest'});
        }
        return true;
      },
      highlightReconciliation: function (tab, a) {
        var m = tab.doc, info = a.info;
        if (!info || !m.sheets) return false;
        var resultId = window.EtReconciliationPrivacy ? EtReconciliationPrivacy.workingResultId(tab,info.resultId) : info.resultId;
        var index = m.sheets.findIndex(function (sheet) { return sheet.demoResultId === resultId; });
        if (index < 0) return false;
        Editors.switchEtSheet(tab,index);
        m.marks = Object.assign({},m.marks);
        Object.keys(m.marks).forEach(function (row) {
          if (info.markDuplicates && m.marks[row] === 'recon-duplicate' || info.markUnmatched && m.marks[row] === 'recon-unmatched') delete m.marks[row];
        });
        info.duplicates.forEach(function (row) { m.marks[row] = 'recon-duplicate'; });
        info.unmatched.forEach(function (row) { m.marks[row] = 'recon-unmatched'; });
        m.sheets[index].marks = m.marks;
        var target = info.unmatched[0] || info.duplicates[0] || 2;
        m.sel = {r:target,c:info.statusColumn}; m.selRange = null; m.chartSelected = false;
        var root = liveRoot(tab);
        if (root) {
          Editors.render(root,tab);
          var grid = root.querySelector('.et-grid-wrap'), cell = grid && grid.querySelector('td[data-r="'+target+'"][data-c="'+info.statusColumn+'"]');
          if (cell) { grid.scrollTop = Math.max(0,cell.offsetTop-grid.clientHeight/2); grid.scrollLeft = Math.max(0,cell.offsetLeft-grid.clientWidth+cell.offsetWidth+24); }
        }
        return true;
      },
      /* { type:'et.fillRange', anchor:'A1', rows:[[...]], onlyIfEmpty? } */
      fillRange: function (tab, a) {
        var m = tab.doc;
        if (!a.anchor) return Promise.resolve(false);
        if (a.onlyIfEmpty && Object.keys(m.cells).length) return;
        var anchor = /^([A-Z]+)([1-9][0-9]*)$/i.exec(a.anchor);
        if (!anchor) return Promise.resolve(false);
        var c0 = 0;
        anchor[1].toUpperCase().split('').forEach(function (letter) { c0 = c0 * 26 + letter.charCodeAt(0) - 64; });
        c0 -= 1;
        var r0 = Number(anchor[2]);
        var root = liveRoot(tab);
        a.rows.forEach(function (row, i) {
          row.forEach(function (v, j) {
            var r = r0 + i, c = c0 + j, addr = etAddr(r, c);
            if (m.formulas) delete m.formulas[addr];
            if (v == null || v === '') delete m.cells[addr]; else m.cells[addr] = String(v);
            if (root) {
              var td = root.querySelector('td[data-r="' + r + '"][data-c="' + c + '"]');
              if (td) td.textContent = v == null ? '' : String(v);
            }
          });
        });
        // 公式栏跟随刷新
        if (root) {
          var fx = root.querySelector('.et-fx-input');
          if (fx) fx.value = etFormulaBar(m);
        }
      },
      /* { type:'et.highlightRows', rows:[3,7], color:'dup'|'header' } */
      highlightRows: function (tab, a) {
        var m = tab.doc;
        var root = liveRoot(tab);
        a.rows.forEach(function (r) {
          m.marks[r] = a.color;
          if (!root) return;
          var tds = root.querySelectorAll('td[data-r="' + r + '"]');
          Array.prototype.forEach.call(tds, function (td) { td.classList.add('et-mark-' + a.color); });
        });
      },
      /* { type:'et.styleRange', range:{r1,c1,r2,c2}, style:'zebra'|'headerBold' } — 选区样式：
         斑马纹=选区内隔行浅底（语义 key cs-zebra，色值走 kd fill 变量）；表头加粗=首行 bold+底。
         记入 pendingAi（undo=cells+cellStyles 深快照；高亮=整个 styleRange 格级框线，不盖底色） */
      styleRange: function (tab, a) {
        var m = tab.doc;
        var rg = a.range;
        if (!rg) return Promise.resolve(false);
        etEnsurePending(m);
        var r, c, st;
        if (a.style === 'zebra') {
          for (r = rg.r1; r <= rg.r2; r++) {
            if ((r - rg.r1) % 2 === 0) continue; // 选区内隔行（第 2/4/… 行）上浅底
            for (c = rg.c1; c <= rg.c2; c++) (m.cellStyles[etAddr(r, c)] = m.cellStyles[etAddr(r, c)] || {}).bg = 'zebra';
          }
        } else if (a.style === 'headerBold') {
          for (c = rg.c1; c <= rg.c2; c++) {
            st = (m.cellStyles[etAddr(rg.r1, c)] = m.cellStyles[etAddr(rg.r1, c)] || {});
            st.bg = 'header'; st.bold = true;
          }
        }
        m.pendingAi.cellRanges.push({ r1: rg.r1, c1: rg.c1, r2: rg.r2, c2: rg.c2 });
        var root = liveRoot(tab);
        if (root) for (r = rg.r1; r <= rg.r2; r++) for (c = rg.c1; c <= rg.c2; c++) etPaintCell(tab, root, r, c);
        return Promise.resolve(true);
      },
      /* { type:'et.calcRange', range:{r1,c1,r2,c2}, op:'sum'|'avg' } — 求选区数值和/均值，
         写入选区下方最近空单元格（只有写入格记高亮，可追溯） */
      calcRange: function (tab, a) {
        var m = tab.doc;
        var rg = a.range;
        if (!rg) return Promise.resolve(false);
        var sum = 0, n = 0;
        for (var r = rg.r1; r <= rg.r2; r++) {
          for (var c = rg.c1; c <= rg.c2; c++) {
            var v = parseFloat(m.cells[etAddr(r, c)]);
            if (!isNaN(v)) { sum += v; n++; }
          }
        }
        if (!n) return Promise.resolve(false);
        var val = a.op === 'avg' ? Math.round(sum / n * 100) / 100 : Math.round(sum * 100) / 100;
        etEnsurePending(m);
        // 选区下方最近空格（同列往下找）
        var wr = rg.r2 + 1, wc = rg.c1;
        while (wr <= ET_ROWS && m.cells[etAddr(wr, wc)] != null) wr++;
        if (wr > ET_ROWS) return Promise.resolve(false);
        m.cells[etAddr(wr, wc)] = String(val);
        m.pendingAi.cellRanges.push({ r1: wr, c1: wc, r2: wr, c2: wc });
        var root = liveRoot(tab);
        if (root) {
          var td = root.querySelector('td[data-r="' + wr + '"][data-c="' + wc + '"]');
          if (td) td.textContent = String(val);
          etPaintCell(tab, root, wr, wc);
        }
        return Promise.resolve(true);
      },
    },
    wpp: {
      /* { type:'wpp.setSlides', slides:[{title,subtitle}] } — 签名不变；title/subtitle 转成 text 元素
         （封面顺手加装饰 shape），重建全部页并切到第 1 页 */
      setSlides: function (tab, a) {
        var m = tab.doc;
        m.slides = a.slides.map(function (s, i) { return wppSlideFromLegacy(s, i === 0); });
        m.current = 0;
        m.selIds = [];
        var root = liveRoot(tab);
        if (!root) return;
        root.querySelector('.wpp-thumb-list').innerHTML = wppThumbsHtml(m);
        root.querySelector('.wpp-slide').innerHTML = wppSlideHtml(m.slides[0]);
        root.querySelector('.sb-pages').textContent = '幻灯片 1 / ' + m.slides.length;
      },
      /* { type:'wpp.updateText', ids, text } — 改写选中文本元素的文案（多个文本元素改第一个，demo 简化）。
         记入 pendingAi（undo=slides 深快照；elementIds=被改元素，紫色外框高亮） */
      updateText: function (tab, a) {
        var m = tab.doc;
        var els = m.slides[m.current].elements.filter(function (e) {
          return a.ids && a.ids.indexOf(e.id) >= 0 && e.type === 'text';
        });
        if (!els.length) return Promise.resolve(false);
        wppEnsurePending(m);
        els[0].text = a.text;
        if (m.pendingAi.elementIds.indexOf(els[0].id) < 0) m.pendingAi.elementIds.push(els[0].id);
        var root = liveRoot(tab);
        if (root) {
          var div = root.querySelector('.wpp-el[data-id="' + els[0].id + '"]');
          if (div) {
            div.querySelector('.wpp-text').textContent = a.text;
            div.classList.add('ai-diff-el');
          }
          root.querySelector('.wpp-thumb-list').innerHTML = wppThumbsHtml(m); // 缩略图标题跟随
        }
        return Promise.resolve(true);
      },
      /* { type:'wpp.styleElements', ids, style:'accent' } — 元素美化（品牌强调：描边/字色，语义 class，不盖内容） */
      styleElements: function (tab, a) {
        var m = tab.doc;
        var els = m.slides[m.current].elements.filter(function (e) { return a.ids && a.ids.indexOf(e.id) >= 0; });
        if (!els.length) return Promise.resolve(false);
        wppEnsurePending(m);
        els.forEach(function (e) {
          if (a.style === 'accent') e.accent = true;
          if (m.pendingAi.elementIds.indexOf(e.id) < 0) m.pendingAi.elementIds.push(e.id);
        });
        var root = liveRoot(tab);
        if (root) {
          els.forEach(function (e) {
            var div = root.querySelector('.wpp-el[data-id="' + e.id + '"]');
            if (div) { div.classList.add('wpp-accent'); div.classList.add('ai-diff-el'); }
          });
          root.querySelector('.wpp-thumb-list').innerHTML = wppThumbsHtml(m);
        }
        return Promise.resolve(true);
      },
    },
  };

  /* 渲染编辑器：左列（ribbon + 画布上下排）与灵犀侧边栏通高并排。
     侧边栏展开时同时挤窄 ribbon 和画布（对照 docs/screenshots/wps-sidebar.png）。 */
  Editors.render = function (root, tab) {
    if (!tab.doc && tab.type !== 'pdf') tab.doc = Editors.createModel(tab.type, tab.name, true);
    /* 侧边栏折叠态在 HTML 里一次给对：若先渲染展开态再由 Agent.mount 改 class，bindWps 的
       paintWpsComments 读 offsetTop 会强制同步布局、锁定展开态为过渡起点，width transition 就会闪一下 */
    var agCollapsed = window.Agent && Agent.sessions[tab.id] && Agent.sessions[tab.id].collapsed;
    root.innerHTML =
      '<div class="editor-col">' +
        '<div class="rb-app editor-ribbon">' + (window.RIBBONS[tab.type] || '') + '</div>' +
        '<div class="editor-main">' + CANVAS[tab.type](tab) + '</div>' +
      '</div>' +
      '<aside class="agent-sidebar' + (agCollapsed ? ' is-collapsed' : '') + '"></aside>' +
      /* 左下角：我的技能两种演示状态，仅表格可见。 */
      (tab.type === 'et' ? '<div class="skills-demo-switch" role="group" aria-label="我的技能状态">' +
        '<span class="skills-demo-label">我的技能</span>' +
        '<button type="button" data-skills-demo="empty">无技能</button>' +
        '<button type="button" data-skills-demo="filled">有技能</button>' +
      '</div>' : '');

    if (BIND[tab.type]) BIND[tab.type](root, tab);

    // 灵犀入口按钮：插在 ribbon 右上角操作区（.rb-top-right）末尾，点击折叠/展开侧边栏
    var topRight = root.querySelector('.rb-top-right');
    if (topRight) {
      var btn = document.createElement('button');
      btn.id = 'btn-lingxi';
      btn.title = '灵犀';
      btn.type = 'button';
      btn.innerHTML = icon('lingxi_logo_m', 20);
      btn.addEventListener('click', function () { Agent.toggle(); });
      topRight.appendChild(btn);
    }

    Agent.mount(root.querySelector('.agent-sidebar'), tab);
    if (tab.type === 'et' && window.EtSkills) EtSkills.initDemo(root);
    if (tab.type === 'et' && window.EtExperts) EtExperts.init(root, tab);
    // ribbon 交互 + 宽度自适应 ladder（ribbon-ladder.js，移植自 wps-ribbon 原版）
    if (window.RibbonLadder) window.RibbonLadder.init(root, tab.type);
    // 文内 LUI（lui.js）：四组件激活；pendingAi/决策条状态在这里随重渲染恢复
    if (window.LUI) window.LUI.init(root, tab);
  };
})();

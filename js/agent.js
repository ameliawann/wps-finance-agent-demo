/* agent.js — 灵犀 Agent 侧边栏：欢迎区 / 对话区 / 输入区 + 剧本播放引擎。
   对话动效复刻 cowork（流式输出、shimmer、思考折叠、工作中指示器），vanilla JS 实现。

   会话状态：Agent.sessions[tabId]，切换 doc tab 后再切回来对话还在。
   session = { type, tabId, collapsed, processing, playId, messages: [...], view }
   message = { role:'user', text } | { role:'ai', streaming, steps: [...] }
   step    = { type, content, toolName?, action?, shown, phase: 'active'|'done', ui?: {...DOM 引用} }
   action  = 剧本 tool_call 步骤的可选字段（见 mock/agent-scripts.js）：该步骤完成（shimmer 停留
             结束）的那一刻交给 editor-api.js 的 EditorAPI.apply 执行，让画布真实变化。

   实现要点（改这里时保持）：
   - 播放循环只往「当前最后一步」的文本节点增量追加（step.shown → ui.textEl.textContent），
     其余步骤完成时一次性插入，不整段重建 DOM。
   - 切 tab 会卸载 DOM（session.view=null），播放循环改走「纯数据模式」；
     切回来重挂载时按数据重建，并把进行中的步骤 DOM 引用重新接回 step.ui，流式续播不断。 */
(function () {
  'use strict';

  var Agent = window.Agent = { sessions: {} };

  var COMP_LABEL = { wps: '文字', wpp: '演示', et: '表格', pdf: 'PDF' };

  /* 表格画布入口固定保留形态变化：已有侧栏输入时，追加选区引用。 */

  /* ── 动效参数（改这里：节奏快慢都调这段） ── */
  var TYPE_CHARS = 2;                 // 正文每次追加字符数
  var typeDelay = function () { return 18 + Math.random() * 12; };   // 正文逐字间隔 ms
  var toolDelay = function (text) {   // tool_call 停留时长 clamp(字符数*50, 800, 3000)
    return Math.min(3000, Math.max(800, text.length * 50));
  };
  var GAP = 240;                      // 步骤之间的停顿 ms

  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  /* ════════════ 视图 =========═══ */

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  /* ET 能力入口的推荐指令；点击推荐仅回填，不自动发送。 */
  var ET_RECOMMENDATIONS = {
    dashboard: [
      ['生成数据总览', '汇总核心指标，快速掌握整体情况'],
      ['分析趋势变化', '查看数据随时间的变化趋势'],
      ['对比分类表现', '按部门、地区等维度对比数据'],
      ['监控目标达成', '对比目标与实际，查看完成进度']
    ],
    proofread: [
      ['核对明细合计', '检查明细合计与汇总值是否一致'],
      ['排查漏算错算', '找出遗漏、重复或计算错误的数据'],
      ['核对指定金额', '根据已知结果，排查金额差异原因'],
      ['核对跨表汇总', '检查不同工作表的汇总结果是否一致']
    ],
    match: [
      ['跨表查找数据', '按编号或名称，从其他表查找信息'],
      ['匹配补全信息', '关联其他表，补齐缺失的字段'],
      ['找出未匹配项', '对比两张表，找出无法对应的记录'],
      ['合并多表数据', '按共同字段关联，整合多张表']
    ],
    clean: [
      ['检查重复', '按订单编号检查重复记录，并标记出来'],
      ['处理空值', '检查缺失信息，列出需要补充的字段和记录'],
      ['统一格式', '将日期和金额统一为一致的格式'],
      ['整理杂乱文本', '清理文本中的多余空格、换行和无效字符']
    ],
    analysis: [
      ['看整体表现', '汇总销售额、订单数和客单价，概括整体表现'],
      ['看变化趋势', '按月分析销售额变化，找出明显增长或下滑的月份'],
      ['做维度对比', '比较各地区的销售表现，找出主要差异'],
      ['找异常数据', '检查金额和数量异常的记录，并说明判断依据']
    ],
    chart: [
      ['展示趋势', '按月汇总销售额，生成折线图展示变化趋势'],
      ['比较高低', '生成柱状图，比较各产品的销售额'],
      ['展示占比', '展示各渠道的销售额占比，突出主要渠道'],
      ['帮我选图', '根据这份数据推荐合适的图表，并生成图表']
    ],
    beautify: [
      ['日常报表', '统一表头、字体和数字格式，让表格清晰易读'],
      ['汇报展示', '调整配色和排版，突出关键指标与汇总行'],
      ['优化阅读', '调整行高列宽、对齐和换行，解决内容显示不全'],
      ['突出重点', '弱化明细、突出小计和合计，让数据层次更清楚']
    ]
  };
  var ET_RECORD_ICONS = {"play": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>播放</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }\n    .kd-color-icon-orange-primary {\n       fill: var(--kd-color-icon-orange-primary, #BF5513);\n       stroke: var(--kd-color-icon-orange-primary, #BF5513);\n       km_fill: #BF5513;\n       km_stroke: #BF5513;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }\n    .kd-color-icon-orange-quaternary {\n       fill: var(--kd-color-icon-orange-quaternary, #FDE0CE);\n       stroke: var(--kd-color-icon-orange-quaternary, #FDE0CE);\n       km_fill: #FDE0CE;\n       km_stroke: #FDE0CE;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-2\" class=\"kd-color-icon-orange-quaternary kd-stroke-width-icon-regular\"><path id=\"fill\" d=\"M6.5 10.482V5.51804C6.5 5.51019 6.50864 5.5054 6.5153 5.50956L10.4864 7.99152C10.4927 7.99544 10.4927 8.00456 10.4864 8.00848L6.5153 10.4904C6.50864 10.4946 6.5 10.4898 6.5 10.482Z\" stroke=\"none\"/></g><g id=\"group-1\" class=\"kd-color-icon-orange-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M6.5 10.482V5.51804C6.5 5.51019 6.50864 5.5054 6.5153 5.50956L10.4864 7.99152C10.4927 7.99544 10.4927 8.00456 10.4864 8.00848L6.5153 10.4904C6.50864 10.4946 6.5 10.4898 6.5 10.482Z\" stroke-linecap=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line_2\" d=\"M1.5 3C1.5 2.72386 1.72386 2.5 2 2.5H14C14.2761 2.5 14.5 2.72386 14.5 3V13C14.5 13.2761 14.2761 13.5 14 13.5H2C1.72386 13.5 1.5 13.2761 1.5 13V3Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "mouse": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>鼠标_指针_选择</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M4.85442 12.5217L1.50546 1.51794C1.50313 1.51028 1.51028 1.50313 1.51794 1.50546L12.5217 4.85442C12.7383 4.92036 12.8066 5.19341 12.6464 5.35355L10 8L14.1464 12.1464C14.3417 12.3417 14.3417 12.6583 14.1464 12.8536L12.8536 14.1464C12.6583 14.3417 12.3417 14.3417 12.1464 14.1464L8 10L5.35355 12.6464C5.19341 12.8066 4.92036 12.7383 4.85442 12.5217Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "save": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>保存</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M1.5 2V14C1.5 14.2761 1.72386 14.5 2 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V5.40719C14.5 5.27458 14.4473 5.1474 14.3536 5.05364L10.9464 1.64645C10.8527 1.55268 10.7255 1.5 10.5929 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"line_2\" d=\"M5.5 5.5H8.5\" stroke-linecap=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"line_3\" d=\"M5.5 14.5L5.5 10C5.5 9.72386 5.72386 9.5 6 9.5H10C10.2761 9.5 10.5 9.72386 10.5 10V14.5\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "arrow_right_s": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" kd_rtl=\"mirror\" requiredCustomFeatures=\"data-kd-color-scheme,data-kd-rtl-mirror-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>右箭头_小</desc><style>\n    .kd-stroke-width-icon-bold { \n       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)\n    }\n    .kd-color-icon-secondary {\n       fill: var(--kd-color-icon-secondary, #757575);\n       stroke: var(--kd-color-icon-secondary, #757575);\n       km_fill: #757575;\n       km_stroke: #757575;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-secondary kd-stroke-width-icon-bold\"><path id=\"area1\" d=\"M6.5 4L10 7.99282V8.00738L6.5 12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\"/></g></svg>"};
  var recordIconSequence = 0;
  function recordingIcon(name) {
    var raw = ET_RECORD_ICONS[name], suffix = '-record-welcome-' + (++recordIconSequence);
    var ids = []; raw.replace(/\bid="([^"]+)"/g, function (_, id) { ids.push(id); });
    ids.sort(function (a,b) { return b.length-a.length; }).forEach(function (id) {
      raw = raw.split('id="'+id+'"').join('id="'+id+suffix+'"').split('#'+id+'"').join('#'+id+suffix+'"').split('#'+id+')').join('#'+id+suffix+')');
    });
    return '<span class="ag-record-icon" aria-hidden="true">'+raw+'</span>';
  }
  function renderRecordingWelcome(s) {
    var welcome = s.view && s.view.welcomeEl;
    if (!welcome) return;
    welcome.classList.add('is-record-welcome');
    welcome.innerHTML = '<section class="ag-record-guide" aria-label="录制技能说明"><div class="ag-record-title">'+recordingIcon('mouse')+'<h3>把重复操作，录成下次能直接用的技能</h3></div><p class="ag-record-description">开始录制后，像平时一样操作表格。我会理解你的操作步骤和数据处理规则，帮你保存成可复用的技能。</p><ol class="ag-record-steps"><li>'+recordingIcon('play')+'<strong>开始录制</strong><span>告诉我你想做什么</span></li><li>'+recordingIcon('mouse')+'<strong>操作表格</strong><span>正常完成你的工作</span></li><li>'+recordingIcon('save')+'<strong>保存技能</strong><span>下次一键复用</span></li></ol></section><section class="ag-record-work-section" aria-label="录制工作示例"><h4>不知道录什么？试试这些常见工作</h4><div class="ag-record-work-list"></div></section>';
    [
      ['每月整理销售明细','清除空行、统一格式、处理重复数据','整理每月销售明细：清除空行，统一格式，处理重复数据。'],
      ['制作固定格式的月报','按部门汇总、计算指标、整理报表','制作固定格式的月报：按部门汇总数据，计算指标，整理报表。'],
      ['重复的财务对账工作','核对明细、计算差异、整理结果','完成财务对账：核对明细，计算差异，整理对账结果。']
    ].forEach(function (item) {
      var button = document.createElement('button'); button.type = 'button'; button.className = 'ag-record-work';
      var copy = document.createElement('span'); copy.className = 'ag-record-work-copy';
      var title = document.createElement('strong'); title.textContent = item[0];
      var desc = document.createElement('span'); desc.textContent = item[1];
      copy.appendChild(title); copy.appendChild(desc); button.appendChild(copy);
      button.insertAdjacentHTML('beforeend', recordingIcon('arrow_right_s'));
      button.addEventListener('click', function () {
        if (s.processing) return;
        Agent.prepareRecordSkill(s.tabId, s.recordIconHTML || '');
        s.view.input.appendChild(document.createTextNode(item[2]));
        syncFromInput(s); focusInputEnd(s);
      });
      welcome.querySelector('.ag-record-work-list').appendChild(button);
    });
  }

  function renderEtRecommendations(s) {
    var welcome = s.view && s.view.welcomeEl;
    if (s.type !== 'et' || !welcome) return;
    var reconciliation = s.recommendationKind === 'reconciliation' && window.EtReconciliation;
    s.view.aside.classList.toggle('is-reconciliation-task', !!reconciliation);
    if (reconciliation) { s.view.aside.style.setProperty('--et-task-bottom-gap',(s.etTaskBottomGap || 28)+'px'); EtReconciliation.render(welcome, s.tabId, s.etTaskIndex || 0); return; }
    welcome.classList.remove('is-reconciliation-welcome','is-agent-first');
    if (s.recommendationKind === 'record') { welcome.classList.remove('is-expert-welcome'); renderRecordingWelcome(s); return; }
    var finalExperts = window.EtExperts && EtExperts.isFinal();
    var items = ET_RECOMMENDATIONS[s.recommendationKind];
    if (!items && finalExperts) { EtExperts.renderWelcome(welcome, s.tabId); return; }
    welcome.classList.remove('is-record-welcome');
    welcome.classList.toggle('is-expert-welcome', !!finalExperts);
    welcome.innerHTML = (finalExperts ? EtExperts.welcomeHeader(s.tabId) : '<div class="ag-mascot">' + icon('lingxi_logo_m', 48) + '</div><h3>你的表格助手</h3><p class="ag-welcome-status">正在协助你处理当前表格。</p>') + '<div class="ag-try">需要我帮你做这些工作吗？</div>';
    if (!items) {
      window.AGENT_SCRIPTS.et.cards.forEach(function (c) {
        var card = el('<div class="ag-card"><span class="ag-card-icon">' + icon(c.icon, 16) + '</span><span class="ag-card-title">' + c.title + '</span><span class="ag-card-desc">' + c.desc + '</span></div>');
        card.addEventListener('click', function () { send(s, c.title); }); welcome.appendChild(card);
      });
      return;
    }
    items.forEach(function (item) {
      var card = document.createElement('button');
      card.type = 'button'; card.className = 'ag-card ag-capability-card';
      var title = document.createElement('span'); title.className = 'ag-card-title'; title.textContent = item[0];
      var desc = document.createElement('span'); desc.className = 'ag-card-desc'; desc.textContent = item[1];
      card.appendChild(title); card.appendChild(desc);
      card.addEventListener('click', function () {
        if (s.processing) return;
        setInputText(s, item[1]); syncFromInput(s); focusInputEnd(s);
      });
      welcome.appendChild(card);
    });
  }

  /* 阶段计划属于当前文档会话；播放与切换文档共用同一份状态。 */
  function renderTaskProgress(s) {
    if (!s.view) return;
    var card = s.view.aside.querySelector('.ag-task-progress'), plan = s.taskProgress;
    card.hidden = !plan;
    s.view.inputCard.classList.toggle('has-task-progress', !!plan);
    if (!plan) return;
    var ready = plan.current >= 0;
    var name = plan.waiting ? (plan.waitingLabel || '等待确认匹配方式') : plan.complete ? '任务完成' : ready ? (plan.current + 1) + '. ' + plan.stages[plan.current] : '生成任务计划';
    var status = plan.waiting ? '待你确认' : plan.complete ? '已完成' : plan.planning ? '生成中' : ready ? (plan.current < plan.finished ? '已完成' : '进行中') : '准备中';
    card.querySelector('.ag-task-progress-name').textContent = name;
    var indicator = card.querySelector('.ag-task-progress-indicator');
    indicator.innerHTML = plan.complete ? icon('tick_shape', 12) : '';
    card.querySelector('.ag-task-progress-summary').setAttribute('aria-label', name + '，' + (plan.complete ? '已完成' : status));
    card.classList.toggle('is-complete', !!plan.complete);
    card.classList.toggle('is-waiting', !!plan.waiting);
    card.querySelector('.ag-task-memory-link').hidden = !(plan.complete && plan.memoryUpdated);
    var toggle = card.querySelector('.ag-task-progress-toggle');
    toggle.setAttribute('aria-expanded', String(plan.expanded));
    toggle.setAttribute('aria-label', plan.expanded ? '收起任务阶段' : '展开任务阶段');
    var chevron = card.querySelector('.ag-task-progress-chevron');
    chevron.setAttribute('aria-expanded',String(plan.expanded));
    chevron.setAttribute('aria-label',plan.expanded ? '收起任务阶段' : '展开任务阶段');
    card.querySelector('.ag-task-progress-caret').innerHTML = icon(plan.expanded ? 'arrow_down_s' : 'arrow_up_s', 16);
    var list = card.querySelector('.ag-task-progress-list');
    list.hidden = !plan.expanded;
    list.replaceChildren();
    if (!ready) {
      var pending = document.createElement('li');
      pending.className = 'ag-task-progress-pending';
      pending.textContent = plan.planning ? '正在整理任务步骤…' : '理解任务后生成执行步骤';
      list.appendChild(pending);
    } else {
      plan.stages.forEach(function (title, i) {
        var row = document.createElement('li');
        var done = i < plan.finished, active = !done && i === plan.current && !plan.complete;
        row.className = 'ag-task-progress-row' + (done ? ' is-done' : active ? ' is-active' : '');
        if (active) row.setAttribute('aria-current', 'step');
        var number = document.createElement('span'); number.className = 'ag-task-progress-number';
        number.textContent = i + 1;
        var label = document.createElement('span'); label.className = 'ag-task-progress-label'; label.textContent = title;
        var state = document.createElement('span'); state.className = 'ag-task-progress-row-status';
        state.classList.toggle('is-loading', active && !plan.waiting);
        state.classList.toggle('is-waiting', active && !!plan.waiting);
        state.classList.toggle('is-pending', !done && !active);
        state.setAttribute('role', 'img');
        state.setAttribute('aria-label', done ? '已完成' : active ? (plan.waiting ? '待你确认' : '进行中') : '待开始');
        state.innerHTML = done ? icon('tick_shape', 12) : '';
        row.append(number, label, state); list.appendChild(row);
      });
    }
  }

  /* 挂载 / 重挂载侧边栏（editors.js 每次渲染编辑器时调用） */
  Agent.mount = function (aside, tab) {
    var s = sessionOf(tab);
    var conf = window.AGENT_SCRIPTS[tab.type];
    var view = {
      aside: aside,
      body: null, welcomeEl: null, msgsEl: null, anchor: null,
      input: null, send: null, inputCard: null, canvasRef: null, canvasRefRange: null, canvasRefPreview: null,
    };
    s.view = view;

    aside.className = 'agent-sidebar' + (s.collapsed ? ' is-collapsed' : '');
    aside.innerHTML =
      '<div class="ag-inner">' +
        '<div class="ag-head">' +
          '<span class="ag-title">灵犀</span>' +
          '<span class="ag-tag">' + COMP_LABEL[tab.type] + '</span>' +
          '<div class="ag-head-btns">' +
            '<button type="button" class="ag-icon-btn" data-act="new" title="新建对话">' + icon('bubble_add_three', 16) + '</button>' +
            '<button type="button" class="ag-icon-btn" data-act="history" title="历史记录（仅视觉）">' + icon('clock', 16) + '</button>' +
            '<button type="button" class="ag-icon-btn" data-act="more" title="更多（仅视觉）">' + icon('more', 16) + '</button>' +
            '<button type="button" class="ag-icon-btn" data-act="collapse" title="折叠侧边栏">' + icon('arrow_right_double_s', 16) + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="ag-body"></div>' +
        '<div class="ag-foot">' +
          '<section class="ag-task-progress" aria-label="任务阶段" hidden>' +
            '<div class="ag-task-progress-header">' +
            '<button type="button" class="ag-task-progress-toggle" aria-expanded="false" aria-controls="ag-task-stages-' + tab.id + '" aria-label="展开任务阶段">' +
              '<span class="ag-task-progress-indicator" aria-hidden="true"></span>' +
              '<span class="ag-task-progress-summary" role="status" aria-live="polite" aria-atomic="true"><span class="ag-task-progress-name"></span></span>' +
            '</button>' +
            '<button type="button" class="ag-task-memory-link" hidden aria-label="查看本任务的记忆更新"><span class="ag-memory-icon" aria-hidden="true">'+EtTaskMemory.iconHTML()+'</span><span>记忆更新</span></button>' +
            '<button type="button" class="ag-task-progress-chevron" aria-expanded="false" aria-controls="ag-task-stages-'+tab.id+'" aria-label="展开任务阶段"><span class="ag-task-progress-caret" aria-hidden="true"></span></button></div>' +
            '<ol class="ag-task-progress-list" id="ag-task-stages-' + tab.id + '" hidden></ol>' +
          '</section>' +
          '<div class="ag-input-card">' +
            '<div class="ag-canvas-ref" hidden aria-live="polite">' +
              '<span class="ag-canvas-ref-icon">' + icon('lingxi_logo_m', 16) + '</span>' +
              '<span class="ag-canvas-ref-copy"><span>正在编辑</span><strong class="ag-canvas-ref-range"></strong>' +
              '<span class="ag-canvas-ref-preview" hidden></span></span>' +
            '</div>' +
            '<div class="ag-input" contenteditable="true" role="textbox" aria-multiline="true" tabindex="0"></div>' +
            '<div class="ag-input-row">' +
              '<button type="button" class="ag-icon-btn" title="附件（仅视觉）" aria-label="添加附件">' + icon('insert', 16) + '</button>' +
              '<span class="ag-mode">Max 模式 ' + icon('arrow_down_s', 16) + '</span>' +
              '<button type="button" class="ag-send" title="发送" aria-label="发送" disabled>' + icon('paper_plane', 16) + '</button>' +
            '</div>' +
          '</div>' +
          '<div class="ag-disclaimer">内容由 AI 生成</div>' +
        '</div>' +
      '</div>';

    view.body = aside.querySelector('.ag-body');
    view.inputCard = aside.querySelector('.ag-input-card');
    view.canvasRef = aside.querySelector('.ag-canvas-ref');
    view.canvasRefRange = aside.querySelector('.ag-canvas-ref-range');
    view.canvasRefPreview = aside.querySelector('.ag-canvas-ref-preview');
    view.input = aside.querySelector('.ag-input');
    view.send = aside.querySelector('.ag-send');
    aside.querySelector('.ag-task-progress-toggle').addEventListener('click', function () {
      if (!s.taskProgress) return;
      s.taskProgress.expanded = !s.taskProgress.expanded;
      renderTaskProgress(s);
    });
    aside.querySelector('.ag-task-memory-link').addEventListener('click',function () {
      if (s.taskProgress && s.taskProgress.memoryUpdated) EtTaskMemory.open(s.tabId,s.taskProgress.memoryTaskKey);
    });
    aside.querySelector('.ag-task-progress-chevron').addEventListener('click',function () { aside.querySelector('.ag-task-progress-toggle').click(); });
    renderTaskProgress(s);
    // 切 tab 重挂载：用会话里存的输入 HTML 还原（含选区 chip），没有则退回纯文本
    if (s.sidebarHTML) view.input.innerHTML = s.sidebarHTML;
    else if (s.sidebarDraft) view.input.textContent = s.sidebarDraft;
    s.sidebarDraft = readInputText(s);
    syncPlaceholder(s);

    /* 对话区：无消息 → 欢迎区；有消息 → 按数据重建 */
    if (s.messages.length === 0) {
      view.welcomeEl = el(
        '<div class="ag-welcome">' +
          '<div class="ag-mascot">' + icon('lingxi_logo_m', 48) + '</div>' +
          '<h3>' + conf.welcome + '</h3>' +
          '<div class="ag-try">你可以试试</div>' +
        '</div>');
      conf.cards.forEach(function (c) {
        var card = el(
          '<div class="ag-card">' +
            '<span class="ag-card-icon">' + icon(c.icon, 16) + '</span>' +
            '<span class="ag-card-title">' + c.title + '</span>' +
            '<span class="ag-card-desc">' + c.desc + '</span>' +
          '</div>');
        // 点卡片 = 把标题作为用户消息发送
        card.addEventListener('click', function () { send(s, c.title); });
        view.welcomeEl.appendChild(card);
      });
      view.body.appendChild(view.welcomeEl);
      renderEtRecommendations(s);
    } else {
      view.msgsEl = el('<div class="ag-msgs"></div>');
      view.anchor = el('<div class="ag-anchor"></div>');
      view.body.appendChild(view.msgsEl);
      view.body.appendChild(view.anchor);
      s.messages.forEach(function (m) { view.msgsEl.appendChild(buildMsg(s, m)); });
      updateWorking(s, s.messages[s.messages.length - 1]);
      scrollToEnd(s, true);
    }

    syncInput(s);

    /* ── 事件 ── */
    aside.querySelector('[data-act="new"]').addEventListener('click', function () { newChat(s); });
    aside.querySelector('[data-act="collapse"]').addEventListener('click', function () { Agent.toggle(); });

    view.input.addEventListener('input', function () { syncFromInput(s); });
    view.input.addEventListener('keydown', function (e) {
      // Enter 发送，Shift+Enter 换行；isComposing 防中文输入法误发
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
        e.preventDefault();
        trySend(s);
      } else if (e.key === 'Backspace' && !e.isComposing) {
        var chip = chipBeforeCaret(); // 光标紧贴 chip 之后 → 退格整块删掉 chip（含其选区引用）
        if (chip) {
          e.preventDefault();
          chip.parentNode.removeChild(chip);
          syncFromInput(s);
        }
      }
    });
    view.input.addEventListener('paste', function (e) { // 只吃纯文本，避免外部富文本污染输入框
      e.preventDefault();
      var txt = (e.clipboardData || window.clipboardData).getData('text');
      document.execCommand('insertText', false, txt);
    });
    /* chip 代理事件：主体点击 = 高亮对应区域；叉号 = 移除引用 */
    view.input.addEventListener('click', function (e) {
      var chip = closest(e.target, '.ag-ref-chip');
      if (!chip) return;
      if (closest(e.target, '.ag-ref-chip-x')) {
        chip.parentNode.removeChild(chip);
        syncFromInput(s);
        return;
      }
      var rg = chipRange(chip);
      if (rg && window.Editors && Editors.flashRange) Editors.flashRange(tabById(s.tabId), rg);
    });
    view.send.addEventListener('click', function () { trySend(s); });
    if (tab.type === 'et' && window.EtSkills) EtSkills.mount(aside, tab);
    if (tab.type === 'et' && window.EtExperts) EtExperts.mountSidebar(aside, tab);
    if (window.EtTaskClarification) EtTaskClarification.render(s);
  };

  /* 折叠 / 展开（#btn-lingxi 与栏内折叠按钮共用） */
  Agent.toggle = function () {
    var tab = App.tabs.filter(function (t) { return t.id === App.activeId; })[0];
    if (!tab) return;
    var s = sessionOf(tab);
    s.collapsed = !s.collapsed;
    if (s.view) s.view.aside.classList.toggle('is-collapsed', s.collapsed);
    /* 收起态下的发送（画布发完把侧边栏带出来）在宽度为 0 时滚不动，展开动画结束再补一次 */
    if (!s.collapsed && s.view) setTimeout(function () { scrollToEnd(s, true); }, 260);
    if (window.LUI && LUI.onAgentVisibilityChanged) LUI.onAgentVisibilityChanged(tab, !s.collapsed);
  };

  function sessionOf(tab) {
    if (!Agent.sessions[tab.id]) {
      Agent.sessions[tab.id] = {
        type: tab.type, tabId: tab.id, collapsed: true, processing: false, playId: 0,
        messages: [], view: null, sidebarDraft: '', sidebarHTML: '', canvasDraft: null, canvasActive: false,
      };
    }
    return Agent.sessions[tab.id];
  }

  /* ════ 给文内 LUI（lui.js）复用的能力 ════ */

  /* 动效节奏参数/函数（文内过程面板与侧边栏保持同一套节奏） */
  Agent.utils = { sleep: sleep, typeDelay: typeDelay, toolDelay: toolDelay, GAP: GAP, TYPE_CHARS: TYPE_CHARS };

  /* 侧边栏当前是否展开（lui.js 分流依据：展开 → 任务直接走侧边栏 send 路径） */
  Agent.isOpen = function () {
    var tab = App.tabs.filter(function (t) { return t.id === App.activeId; })[0];
    return !!tab && !sessionOf(tab).collapsed;
  };

  /* 侧边栏输入框里是否已有自己的输入（选区 chip 也算）：决定画布圈选入口的形态 ——
     有输入 → 入口变「添加选区」（气泡加号），点了把选区 chip 接在那句话后面；
     没输入 → 入口还是「AI 编辑」，点了唤起画布输入框。 */
  Agent.hasSidebarInput = function (tabId) {
    var tab = tabById(tabId);
    if (!tab) return false;
    var s = sessionOf(tab);
    return Agent.isOpen() && !!(s.sidebarDraft && s.sidebarDraft.trim());
  };

  /* 画布入口的「追加」动作：把当前选区做成 chip 接到侧边栏已有输入之后，焦点留在侧边栏。
     之所以不再开一个输入框：那一刻焦点已经属于侧边栏，追加是「给正在写的这句话补一个对象」。 */
  Agent.appendRefChip = function (tabId, ctx) {
    var tab = tabById(tabId);
    if (!tab) return false;
    var s = sessionOf(tab);
    if (s.collapsed) Agent.toggle(); // 折叠着先展开，否则追加了用户也看不见
    if (!s.view) return false;
    var input = s.view.input;
    if (input.textContent.length && !/\s$/.test(input.textContent)) input.appendChild(document.createTextNode(' '));
    input.appendChild(makeChipEl(ctx));
    input.appendChild(document.createTextNode(' ')); // chip 后留光标位，方便接着写指令
    syncFromInput(s);
    focusInputEnd(s);
    return true;
  };

  function tabById(tabId) {
    return App.tabs.filter(function (t) { return t.id === tabId; })[0];
  }

  function canvasRangeLabel(ctx) {
    if (!ctx) return '';
    if (ctx.type === 'cells') return 'Sheet1!' + ctx.a1;
    if (ctx.type === 'chart') return ctx.chartName || '当前图表';
    return 'Sheet1!' + (ctx.a1Start || '当前单元格');
  }

  function canvasContextLine(ctx) {
    if (!ctx) return '';
    if (ctx.type === 'cells') return '选区：Sheet1!' + ctx.a1;
    if (ctx.type === 'chart') return '图表：' + (ctx.chartName || '当前图表') + (ctx.dataRange ? ' · 数据源：Sheet1!' + ctx.dataRange : '');
    return '位置：Sheet1!' + (ctx.a1Start || '当前单元格');
  }

  /* ════════════ 输入框（contenteditable + 选区 chip） ════════════
     textarea 装不了内联 chip，所以输入框改为 contenteditable：
     选区 chip = <span class="ag-ref-chip" contenteditable="false">，序列化时还原成 data-token
     （等于 canvasContextLine），保证发给剧本的文字和此前「纯文本追加」完全一致。 */

  function closest(node, sel) {
    while (node && node.nodeType !== 1) node = node.parentNode;
    while (node && !node.matches(sel)) node = node.parentNode;
    return node;
  }

  /* 序列化：文本原样，chip → data-token，<br> → 换行 */
  function readInputText(s) {
    function nodeText(n) {
      if (n.nodeType === 3) return n.nodeValue;
      if (n.nodeName === 'BR') return '\n';
      if (n.nodeType !== 1) return '';
      if (n.classList.contains('ag-ref-chip') || n.classList.contains('ag-skill-chip')) return n.getAttribute('data-token') || '';
      // 编辑换行可能把 chip 包进 DIV/P；逐层识别，装饰 SVG 不进入请求正文。
      if (n.nodeName.toLowerCase() === 'svg') return '';
      return Array.prototype.map.call(n.childNodes, nodeText).join('');
    }
    return Array.prototype.map.call(s.view.input.childNodes, nodeText).join('');
  }

  function hasRecordDescription(s) {
    var copy = s.view.input.cloneNode(true);
    copy.querySelectorAll('.ag-skill-chip, svg').forEach(function (node) { node.remove(); });
    return !!copy.textContent.trim();
  }

  function syncPlaceholder(s) {
    var input = s.view.input;
    var empty = !input.textContent.trim() && !input.querySelector('.ag-ref-chip');
    var record = !!input.querySelector('.ag-skill-chip[data-skill="record"]');
    input.classList.toggle('is-empty', empty);
    input.classList.toggle('has-record-skill', record);
    input.classList.toggle('is-record-empty', record && !hasRecordDescription(s));
    if (record) input.setAttribute('data-record-placeholder', '简单描述你要录制的操作，如：销售数据的经营分析与汇总');
    else input.removeAttribute('data-record-placeholder');
  }

  /* 录制技能入口：清空原输入，再放入录制技能 chip。 */
  Agent.prepareRecordSkill = function (tabId, iconHtml) {
    var tab = tabById(tabId);
    if (!tab || tab.type !== 'et') return false;
    var s = sessionOf(tab);
    if (!s.view || s.processing) return false;
    s.recordIconHTML = iconHtml;
    s.recommendationKind = 'record';
    renderEtRecommendations(s);
    s.entryPlaceholder = '';
    setInputText(s, '');
    var input = s.view.input;
    if (!input.querySelector('.ag-skill-chip[data-skill="record"]')) {
      if (!input.textContent.trim() && !input.querySelector('.ag-ref-chip')) input.innerHTML = '';
      var chip = document.createElement('span');
      chip.className = 'ag-skill-chip'; chip.contentEditable = 'false';
      chip.setAttribute('data-skill', 'record'); chip.setAttribute('data-token', '录制技能');
      chip.setAttribute('aria-label', '录制技能');
      chip.innerHTML = iconHtml + '<span class="ag-skill-chip-label">录制技能</span>';
      input.insertBefore(chip, input.firstChild);
      input.insertBefore(document.createTextNode(' '), chip.nextSibling);
    }
    syncFromInput(s);
    focusInputEnd(s);
    return true;
  };

  /* 助手变更只刷新欢迎区，保留输入草稿、历史消息与侧栏开合。 */
  function restoreEtTaskOrder(s,tab) {
    if (s.etTaskOriginalOrder) { tab.doc.etTaskOrder=s.etTaskOriginalOrder.slice(); s.etTaskOriginalOrder=null; }
  }
  Agent.refreshEtExpert = function (tabId, resetHome) {
    var tab = tabById(tabId); if (!tab || tab.type !== 'et') return;
    var s = sessionOf(tab); if (resetHome) { restoreEtTaskOrder(s,tab); s.recommendationKind = ''; if(window.EtReconciliation)EtReconciliation.cancelPicker(); if(window.EtReconciliationDiscovery)EtReconciliationDiscovery.cancel(tabId); }
    renderEtRecommendations(s);
  };
  Agent.fillEtSuggestion = function (tabId, text) {
    var tab = tabById(tabId); if (!tab || tab.type !== 'et') return;
    var s = sessionOf(tab); if (!s.view || s.processing) return;
    setInputText(s, text); syncFromInput(s); focusInputEnd(s);
  };

  Agent.openEtReconciliation = function (tabId) {
    Agent.openEtTask(tabId, 0);
  };
  Agent.openEtTask = function (tabId, taskIndex) {
    var tab = tabById(tabId); if (!tab || tab.type !== 'et') return;
    var s = sessionOf(tab); if (!s.view || s.processing || s.messages.length) return;
    if (window.EtReconciliationDiscovery) { EtReconciliationDiscovery.start(tabId,taskIndex); return; }
    var gap=s.view.aside.getBoundingClientRect().bottom-s.view.inputCard.getBoundingClientRect().bottom;
    if (s.recommendationKind !== 'reconciliation') {
      s.etTaskBottomGap=Math.max(0,gap);
      s.etTaskOriginalOrder=(tab.doc.etTaskOrder || [0,1,2,3]).slice();
      s.etTaskOriginalScroll=s.view.body.scrollTop;
    }
    s.etTaskIndex=taskIndex;
    var order=tab.doc.etTaskOrder || [0,1,2,3];tab.doc.etTaskOrder=[taskIndex].concat(order.filter(function(i){return i!==taskIndex;}));
    s.recommendationKind = 'reconciliation'; renderEtRecommendations(s);
    s.view.body.scrollTop = 0;
    var taskControl = s.view.welcomeEl.querySelector('[data-recon-back], [data-discovery-back]');
    if (taskControl) taskControl.focus({preventScroll:true});
  };
  Agent.closeEtReconciliation = function (tabId) {
    if(window.EtReconciliation)EtReconciliation.cancelPicker();
    if(window.EtReconciliationDiscovery)EtReconciliationDiscovery.cancel(tabId);
    var tab = tabById(tabId); if (!tab) return;
    var s = sessionOf(tab), scroll=s.etTaskOriginalScroll || 0, index=s.etTaskIndex;
    restoreEtTaskOrder(s,tab); s.recommendationKind = ''; renderEtRecommendations(s);
    var previous = s.view.welcomeEl && (s.view.welcomeEl.querySelector('[data-finance-task="'+index+'"]') || s.view.welcomeEl.querySelector('button'));
    if (previous) previous.focus({preventScroll:true});
    s.view.body.scrollTop = scroll;
  };
  Agent.submitEtReconciliation = function (tabId, text, script) {
    var tab = tabById(tabId); if (!tab || tab.type !== 'et') return false;
    var s = sessionOf(tab); if (!s.view || s.processing || s.recommendationKind !== 'reconciliation') return false;
    restoreEtTaskOrder(s,tab);
    s.recommendationKind = ''; s.view.aside.classList.remove('is-reconciliation-task');
    // 任务卡有独立的结构化输入；保留普通输入框草稿，避免关键词误入清洗等剧本。
    send(s, text, null, true, script);
    return true;
  };

  Agent.appendEtTaskMessage = function (tabId, role, text, proposal, report) {
    var tab=tabById(tabId);if(!tab)return;
    var s=sessionOf(tab);ensureMsgs(s);
    var message=role==='user'?{role:'user',text:text,html:''}:{role:'ai',streaming:false,steps:[{type:'done',content:text,shown:text,phase:'done',proposal:proposal,report:report}]};
    s.messages.push(message);
    if(s.view)s.view.msgsEl.appendChild(role==='user'?userMsg(s,message):aiMsg(s,message));
    scrollToEnd(s,true);
  };
  Agent.updateEtTaskProgress = function (tabId, patch) {
    var s=Agent.sessions[tabId];if(!s)return;
    s.taskProgress=Object.assign(s.taskProgress||{expanded:false,complete:false,memoryUpdated:false,memoryTaskKey:'finance-0'},patch);
    renderTaskProgress(s);syncInput(s);
  };
  Agent.runEtTaskScript = function (tabId, text, script) {
    var s=Agent.sessions[tabId];if(!s||s.processing)return false;
    send(s,text,null,true,Object.assign({},script,{progressOnly:true,userMessageRecorded:true}));return true;
  };
  Agent.pauseEtTask = function (tabId) {
    var s=Agent.sessions[tabId],tab=tabById(tabId);if(!s)return;
    s.playId++;s.processing=false;
    if(s.activeTaskMessage){s.activeTaskMessage.streaming=false;updateWorking(s,s.activeTaskMessage);}
    s.activeTaskMessage=null;
    if(tab&&window.EtReconciliationPrivacy)EtReconciliationPrivacy.restore(tab,true);
    syncInput(s);
  };

  /* ET Ribbon 能力入口：打开灵犀、准备可编辑提示词，不触发发送。 */
  Agent.prepareEtCapability = function (kind) {
    var tab = tabById(App.activeId);
    if (!tab || tab.type !== 'et') return;
    var prompts = {
      dashboard: '请根据【数据范围】生成可交互的数据看板，展示【核心指标】，支持按【日期/部门/其他维度】筛选，并让各图表之间联动。',
      assistant: '',
      analysis: '',
      proofread: '请核对【数据范围】中的【明细合计/公式计算结果】与【汇总值/对照数据】是否一致，定位差异记录、漏算项或错误公式，说明原因并修正计算错误。',
      match: '请根据【匹配字段】，将【来源表】与【目标表】中的数据进行匹配，把【需要补充的字段】填入目标表，并列出未匹配及重复匹配的记录。',
      clean: '请清洗【数据范围】：按【字段】去重，空值按【方式】处理，统一【日期/数字】格式。',
      chart: '请根据【数据范围】，用【图表类型】展示【指标】按【维度】的对比或趋势。',
      beautify: '请美化【数据范围】：采用【风格/配色】，突出【重点】，统一表头、数字格式和行列宽度。'
    };
    if (!Object.prototype.hasOwnProperty.call(prompts, kind)) return;
    var s = sessionOf(tab);
    if (s.collapsed) Agent.toggle();
    if (!s.view) return;
    if (ET_RECOMMENDATIONS[kind]) { s.recommendationKind = kind; renderEtRecommendations(s); }
    else if (kind === 'assistant' && window.EtExperts && EtExperts.isFinal()) { s.recommendationKind = ''; renderEtRecommendations(s); }
    if (!s.processing) {
      s.entryPlaceholder = kind === 'analysis' ? '想了解哪些数据？试试描述要分析的指标、维度或趋势。' : '';
      if (kind !== 'assistant' && kind !== 'analysis') setInputText(s, prompts[kind]);
      syncFromInput(s);
      focusInputEnd(s);
    }
    var aside = s.view.aside;
    aside.classList.add('et-capability-feedback');
    var previous = aside.querySelector('.et-capability-toast');
    if (previous) previous.remove();
    clearTimeout(s.capabilityToastTimer);
    var toast = document.createElement('div');
    toast.className = 'kd-message-root et-capability-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = '<div class="kd-message kd-message-success"><span class="kd-message-icon" aria-hidden="true">' + "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>成功_完成</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-white {\n       fill: var(--kd-color-icon-white, #FFFFFF);\n       stroke: var(--kd-color-icon-white, #FFFFFF);\n       km_fill: #FFFFFF;\n       km_stroke: #FFFFFF;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }\n    .kd-color-icon-success {\n       fill: var(--kd-color-icon-success, #418F1F);\n       stroke: var(--kd-color-icon-success, #418F1F);\n       km_fill: #418F1F;\n       km_stroke: #418F1F;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"et-toast-group-0\" class=\"kd-color-icon-success kd-stroke-width-icon-regular\"><path id=\"et-toast-area2\" d=\"M8 15.9998C12.4183 15.9998 16 12.418 16 7.99976C16 3.58148 12.4183 -0.000244141 8 -0.000244141C3.58172 -0.000244141 0 3.58148 0 7.99976C0 12.418 3.58172 15.9998 8 15.9998Z\" stroke=\"none\"/></g><g id=\"et-toast-group-1\" class=\"kd-color-icon-white kd-stroke-width-icon-regular\"><path id=\"et-toast-area1\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.6011 5.19867C12.933 5.53061 12.933 6.0688 12.6011 6.40075L7.78121 11.2206C7.44926 11.5525 6.91107 11.5525 6.57913 11.2206L3.89898 8.54046C3.56704 8.20851 3.56704 7.67032 3.89898 7.33838C4.23093 7.00643 4.76912 7.00643 5.10107 7.33838L7.18017 9.41748L11.399 5.19867C11.7309 4.86672 12.2691 4.86672 12.6011 5.19867Z\" stroke=\"none\"/></g></svg>" + '</span><span class="kd-message-text">灵犀已经打开，请提问</span></div>';
    aside.appendChild(toast);
    s.capabilityToastTimer = setTimeout(function () { toast.remove(); }, 3000);
  };

  /* 输入框内容变化后的统一收口：序列化草稿 + 缓存 HTML（切 tab 还原 chip）+ placeholder + 发送态 */
  function syncFromInput(s) {
    s.sidebarDraft = readInputText(s);
    s.sidebarHTML = s.view.input.innerHTML;
    syncPlaceholder(s);
    syncInput(s);
  }

  function setInputText(s, text) { // 纯文本覆盖（会丢掉 chip）
    s.view.input.textContent = text || '';
    s.sidebarDraft = readInputText(s);
    s.sidebarHTML = s.view.input.innerHTML;
    syncPlaceholder(s);
  }

  function focusInputEnd(s) {
    s.view.input.focus();
    var r = document.createRange();
    r.selectNodeContents(s.view.input);
    r.collapse(false);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
  }

  function makeChipEl(ctx) {
    var rg = ctx && ctx.range;
    var chip = document.createElement('span');
    chip.className = 'ag-ref-chip';
    chip.setAttribute('contenteditable', 'false');
    chip.setAttribute('data-token', canvasContextLine(ctx));
    if (rg) {
      chip.setAttribute('data-r1', rg.r1); chip.setAttribute('data-c1', rg.c1);
      chip.setAttribute('data-r2', rg.r2); chip.setAttribute('data-c2', rg.c2);
    }
    var label = document.createElement('span');
    label.className = 'ag-ref-chip-label';
    label.textContent = canvasRangeLabel(ctx);
    var x = document.createElement('span');
    x.className = 'ag-ref-chip-x';
    x.setAttribute('role', 'button');
    x.setAttribute('aria-label', '移除选区引用');
    x.innerHTML = icon('symbol_cross_two', 12);
    chip.appendChild(label);
    chip.appendChild(x);
    return chip;
  }

  function chipRange(chip) {
    if (!chip.getAttribute('data-r1')) return null;
    return {
      r1: +chip.getAttribute('data-r1'), c1: +chip.getAttribute('data-c1'),
      r2: +chip.getAttribute('data-r2'), c2: +chip.getAttribute('data-c2'),
    };
  }

  /* 退格：光标（collapsed）正好落在某个 chip 之后时返回该 chip */
  function chipBeforeCaret() {
    var sel = window.getSelection();
    if (!sel || !sel.isCollapsed) return null;
    var n = sel.anchorNode, o = sel.anchorOffset, cand = null;
    if (n.nodeType === 3) { if (o === 0) cand = n.previousSibling; }
    else if (n.nodeType === 1 && o > 0) cand = n.childNodes[o - 1];
    return cand && cand.classList && (cand.classList.contains('ag-ref-chip') || cand.classList.contains('ag-skill-chip')) ? cand : null;
  }

  /* 发送坐标：输入框里有 chip 时，用第一枚 chip 的选区给剧本注入坐标 */
  function firstChipCtx(s) {
    var chip = s.view && s.view.input.querySelector('.ag-ref-chip');
    if (!chip) return null;
    var rg = chipRange(chip);
    if (!rg) return null;
    return { type: 'cells', range: rg, a1: canvasRangeLabelFromRange(rg) };
  }

  function canvasRangeLabelFromRange(rg) {
    if (!rg) return '';
    return 'Sheet1!' + colName(rg.c1) + rg.r1 + ':' + colName(rg.c2) + rg.r2;
  }

  function colName(c) { // 0 基列号 → A / B / … / AA
    var s = '', n = c + 1;
    while (n > 0) { var m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = (n - 1 - m) / 26; }
    return s;
  }

  /* ════════════ 画布草稿 → 侧边栏 ════════════ */

  function paintCanvasDraft(s) {
    if (!s.view) return;
    /* ET 的画布输入独立存在，不隐藏、不替换侧边栏输入。 */
    if (s.type === 'et') {
      s.view.canvasRef.hidden = true;
      s.view.inputCard.classList.remove('is-canvas-card');
      return;
    }
    var d = s.canvasDraft;
    /* 输入框唯一性：焦点此刻落在画布输入框里，同一时刻就只留那一个可输入位置 ——
       侧边栏卡片降级为「正在编辑 xx」引用卡（textarea/工具行隐藏）。
       ★ 判定条件是「画布输入框开着或已有草稿」，不只是「有字」：刚唤起还没输入也算画布在占用输入。 */
    var canvasBusy = !!d && (!!s.canvasActive || !!(d.text && d.text.trim()));
    var showRef = canvasBusy && !d.hadSidebarInput && !s.sidebarDraft.trim();
    s.view.canvasRef.hidden = !showRef;
    s.view.inputCard.classList.toggle('is-canvas-card', showRef);
    if (!showRef) return;
    s.view.canvasRefRange.textContent = canvasRangeLabel(d.ctx);
    s.view.canvasRefPreview.hidden = true;
    s.view.canvasRefPreview.textContent = '';
  }

  /* 画布输入框「打开/关闭」由 LUI 显式通知（beginCanvasInput / endCanvasInput）：
     打开即算画布占用输入，哪怕一个字都没输 —— 侧边栏同步降级为引用卡。 */
  Agent.beginCanvasInput = function (tabId, ctx, text) {
    var tab = tabById(tabId);
    if (!tab) return;
    var s = sessionOf(tab);
    s.canvasActive = true;
    var value = text || '';
    var key = ctx && (ctx.type + ':' + (ctx.a1 || ctx.chartId || ctx.a1Start || ''));
    if (!s.canvasDraft || s.canvasDraft.key !== key) {
      s.canvasDraft = { key: key, ctx: ctx, text: value, hadSidebarInput: !!s.sidebarDraft.trim() };
    } else {
      s.canvasDraft.ctx = ctx;
      s.canvasDraft.text = value;
    }
    paintCanvasDraft(s);
    syncInput(s);
  };

  /* 画布输入框已关闭 → 画布不再占用输入：草稿一并释放，侧边栏退回普通输入卡。
     （输过的字仍由 tab.doc.etAiDraft 记着，再次唤起时 openBar 会回填回来，不依赖这里的 draft。） */
  Agent.endCanvasInput = function (tabId) {
    var tab = tabById(tabId);
    if (!tab) return;
    var s = sessionOf(tab);
    s.canvasActive = false;
    s.canvasDraft = null;
    paintCanvasDraft(s);
    syncInput(s);
  };

  /* 保存画布编辑状态；侧边栏只渲染选区引用，不镜像画布 query。
     ★ 空文本不再清空草稿：输入框还开着时仍算画布在占用输入，清理交给 endCanvasInput / clearCanvasDraft。 */
  Agent.updateCanvasDraft = function (tabId, ctx, text) {
    var tab = tabById(tabId);
    if (!tab) return;
    var s = sessionOf(tab);
    var value = text || '';
    var key = ctx && (ctx.type + ':' + (ctx.a1 || ctx.chartId || ctx.a1Start || ''));
    if (!s.canvasDraft || s.canvasDraft.key !== key) {
      s.canvasDraft = { key: key, ctx: ctx, text: value, hadSidebarInput: !!s.sidebarDraft.trim() };
    } else {
      s.canvasDraft.ctx = ctx;
      s.canvasDraft.text = value;
    }
    paintCanvasDraft(s);
    syncInput(s);
  };

  Agent.clearCanvasDraft = function (tabId) {
    var tab = tabById(tabId);
    if (!tab) return;
    var s = sessionOf(tab);
    s.canvasActive = false;
    s.canvasDraft = null;
    paintCanvasDraft(s);
    syncInput(s);
  };

  /* 画布指令直接发送；侧边栏的开合和原有草稿均不改变提交方式。 */
  Agent.resolveCanvasSubmit = function (tabId, text, ctx) {
    var tab = tabById(tabId);
    if (!tab) return { handled: false, text: text };
    var s = sessionOf(tab);
    s.canvasActive = false;
    s.canvasDraft = null;
    paintCanvasDraft(s);
    syncInput(s);
    return { handled: false, text: text };
  };

  /* 文内 LUI 分流入口：等价于用户在侧边栏输入 text 并发送。
     ctx = 唤起时的选区/光标上下文（文内划词→侧边栏链路带来），播放时 action 坐标注入用。
     ★ 侧边栏输入框里若还留着用户自己没发的草稿，这次发送来自画布 → 草稿要保住，不能被一起清空。 */
  Agent.sendText = function (tabId, text, ctx) {
    var tab = App.tabs.filter(function (t) { return t.id === tabId; })[0];
    if (!tab || !text) return;
    var s = sessionOf(tab);
    send(s, text, ctx, !!(s.sidebarDraft && s.sidebarDraft.trim()));
  };

  /* 文内完成的任务沉淀进会话：追加一条 user 消息 + 一条已完成 ai 消息
     （tool_call 步骤在渲染时被 applyCollapse 折叠成「已执行 N 次命令 ›」摘要），
     无会话则按 sessionOf 创建；侧边栏已挂载则同步追加 DOM，切 tab 重挂载按数据重建。 */
  Agent.record = function (tabId, rec) {
    var tab = App.tabs.filter(function (t) { return t.id === tabId; })[0];
    if (!tab) return;
    var s = sessionOf(tab);
    var steps = (rec.stepLabels || []).map(function (c) {
      return { type: 'tool_call', content: c, shown: '', phase: 'done' };
    });
    steps.push({ type: 'done', content: rec.resultText, shown: rec.resultText, phase: 'done' });
    var um = { role: 'user', text: rec.userText };
    var am = { role: 'ai', streaming: false, steps: steps };
    s.messages.push(um, am);
    if (s.view) {
      ensureMsgs(s);
      s.view.msgsEl.appendChild(userMsg(s, um));
      s.view.msgsEl.appendChild(aiMsg(s, am));
      scrollToEnd(s, true);
    }
  };

  /* ════════════ 消息渲染 =========== */

  function buildMsg(s, m) {
    if (m.role === 'user') return userMsg(s, m);
    return aiMsg(s, m);
  }

  function userMsg(s, m) {
    var node = el('<div class="ag-msg-user"><div class="ag-bubble"></div></div>');
    var bubble = node.querySelector('.ag-bubble');
    /* 发送时把输入框的 HTML 一并存下（m.html），气泡里选区仍是内联 chip —— 与输入时观感一致；
       但 chip 只保留标签，不渲染叉号：消息已发出，选区不可再编辑。 */
    if (m.taskTitle) {
      var taskChip = document.createElement('span');
      taskChip.className = 'kd-tag kd-tag--info ag-task-chip';
      taskChip.textContent = '任务 ' + m.taskTitle;
      bubble.appendChild(taskChip);
    }
    else if (m.html) fillUserBubble(bubble, m.html);
    else if (m.ctx) fillUserBubbleFromCtx(bubble, m.ctx, m.text);
    else bubble.textContent = m.text;
    Array.prototype.forEach.call(bubble.querySelectorAll('.ag-ref-chip'), function (chip) {
      chip.addEventListener('click', function () { // 仍可点击回看：高亮对应区域
        var rg = chipRange(chip);
        if (rg && window.Editors && Editors.flashRange) Editors.flashRange(tabById(s.tabId), rg);
      });
    });
    return node;
  }

  /* 从输入框 HTML 重建气泡内容：只白名单 文本 / <br> / .ag-ref-chip，其余按纯文本处理，
     避免把 contenteditable 里的富文本残留直接 innerHTML 进会话。 */
  function fillUserBubble(bubble, html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    appendUserNodes(bubble, tmp);
  }

  function appendUserNodes(target, src) { // 递归：contenteditable 换行可能套出 div/p 包裹
    Array.prototype.forEach.call(src.childNodes, function (n) {
      if (n.nodeType === 3) { target.appendChild(document.createTextNode(n.nodeValue)); return; }
      if (n.nodeName === 'BR') { target.appendChild(document.createElement('br')); return; }
      if (n.nodeType !== 1) return;
      if (n.classList.contains('ag-ref-chip')) { target.appendChild(sentChipEl(n)); return; }
      if (n.classList.contains('ag-skill-chip')) {
        var skill = document.createElement('span'); skill.className = 'ag-skill-chip is-sent';
        skill.textContent = n.getAttribute('data-token') || '录制技能'; target.appendChild(skill); return;
      }
      if (n.nodeName === 'DIV' || n.nodeName === 'P') { // 块级换行 → 转成 <br>
        if (target.childNodes.length) target.appendChild(document.createElement('br'));
        appendUserNodes(target, n);
        return;
      }
      appendUserNodes(target, n);
    });
  }

  /* 已发送的选区 chip：只留标签与坐标，不带叉号、不带删除能力 */
  function sentChipEl(src) {
    var chip = document.createElement('span');
    chip.className = 'ag-ref-chip is-sent';
    ['data-r1', 'data-c1', 'data-r2', 'data-c2', 'data-token'].forEach(function (a) {
      var v = src.getAttribute(a);
      if (v != null) chip.setAttribute(a, v);
    });
    var labelEl = src.querySelector('.ag-ref-chip-label');
    var label = document.createElement('span');
    label.className = 'ag-ref-chip-label';
    label.textContent = (labelEl || src).textContent;
    chip.appendChild(label);
    return chip;
  }

  /* 引用块态（侧边栏没输入、内容来自画布入口）发送时没有 sidebarHTML 可复用，
     改成按 ctx 直接造一枚「已发送」chip —— 气泡里选区仍是内联形态，与输入时观感一致。 */
  function canvasChipCtx(ctx) {
    if (!ctx) return null;
    return ctx.type === 'cells' || ctx.type === 'chart' || ctx.type === 'cursor' ? ctx : null;
  }

  function fillUserBubbleFromCtx(bubble, ctx, text) {
    var body = String(text || '');
    var line = canvasContextLine(ctx);
    /* 文内链路会把「\n选区：Sheet1!A1:E5」这类纯文本行拼在正文末尾，
       chip 已表达同一信息，这里剥掉避免气泡里重复出现一次选区。 */
    var at = line ? body.lastIndexOf('\n' + line) : -1;
    if (at >= 0) body = body.slice(0, at);
    bubble.appendChild(sentChipElFromCtx(ctx));
    var rest = body.replace(/^\s+|\s+$/g, '');
    if (rest) bubble.appendChild(document.createTextNode(' ' + rest));
  }

  function sentChipElFromCtx(ctx) {
    var chip = document.createElement('span');
    chip.className = 'ag-ref-chip is-sent';
    chip.setAttribute('data-token', canvasContextLine(ctx));
    var rg = ctx.range;
    if (rg) {
      chip.setAttribute('data-r1', rg.r1); chip.setAttribute('data-c1', rg.c1);
      chip.setAttribute('data-r2', rg.r2); chip.setAttribute('data-c2', rg.c2);
    }
    var label = document.createElement('span');
    label.className = 'ag-ref-chip-label';
    label.textContent = canvasRangeLabel(ctx);
    chip.appendChild(label);
    return chip;
  }

  /* AI 消息容器：步骤逐个 append；末尾是「灵犀工作中」指示器 */
  function aiMsg(s, m) {
    var box = el('<div class="ag-msg-ai"></div>');
    m.stepsEl = box;
    m.steps.forEach(function (step) { box.appendChild(buildStep(s, step, m)); });
    m.workingEl = el(
      '<div class="ag-working" hidden>' +
        '<span class="ag-star">' + icon('animation_path_four_pointed_star_display', 16) + '</span>' +
        '<span class="ag-working-text ag-shimmer">灵犀工作中</span>' +
      '</div>');
    box.appendChild(m.workingEl);
    /* 已完成的历史消息：重建时直接套折叠组（切 tab 重渲染后仍保持折叠态）；
       groupEl 是旧 DOM 引用，重建前清掉再重新分组 */
    m.groupEl = null;
    if (!m.streaming) {
      applyCollapse(m);
      if (s.type === 'et' && (m.ctx || m.steps.some(function (step) { return !!step.report; }))) box.appendChild(etResultActions(s, m));
    }
    return box;
  }

  /* 10 月表格链路：完成态使用轻量反馈工具栏，不在画布上生成决策条。 */
  function etResultActions(s, msg) {
    var node = el('<div class="ag-et-actions" role="toolbar" aria-label="回答操作">' +
      '<div class="ag-et-actions-group">' +
        '<button type="button" data-act="copy" aria-label="复制">' + icon('copy', 16) + '</button>' +
        '<button type="button" data-act="like" aria-label="赞" aria-pressed="' + (msg.feedback === 'like') + '">' + icon('gesture_thumb', 16) + '</button>' +
        '<button type="button" data-act="dislike" aria-label="踩" aria-pressed="' + (msg.feedback === 'dislike') + '">' + icon('gesture_thumb_down', 16) + '</button>' +
        '<button type="button" data-act="read" aria-label="朗读" aria-pressed="false">' + icon('doc_voice_reading', 16) + '</button>' +
      '</div>' +
      '<span class="ag-et-actions-sep" aria-hidden="true"></span>' +
      '<button type="button" data-act="regenerate" aria-label="重新生成">' + icon('arrow_revoke', 16) + '</button>' +
      '</div>');
    if (msg.feedback) node.querySelector('[data-act="' + msg.feedback + '"]').classList.add('is-active');

    node.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-act]');
      if (!btn) return;
      var act = btn.getAttribute('data-act');
      if (act === 'copy') {
        copyAnswerText(answerText(msg));
        btn.setAttribute('aria-label', '已复制');
        setTimeout(function () { if (btn.isConnected) btn.setAttribute('aria-label', '复制'); }, 1200);
      } else if (act === 'like' || act === 'dislike') {
        msg.feedback = msg.feedback === act ? '' : act;
        Array.prototype.forEach.call(node.querySelectorAll('[data-act="like"], [data-act="dislike"]'), function (feedbackBtn) {
          var active = feedbackBtn.getAttribute('data-act') === msg.feedback;
          feedbackBtn.classList.toggle('is-active', active);
          feedbackBtn.setAttribute('aria-pressed', String(active));
        });
      } else if (act === 'read') {
        toggleReadAnswer(btn, answerText(msg));
      } else if (act === 'regenerate') {
        regenerateAnswer(s, msg);
      }
    });
    return node;
  }

  function answerText(msg) {
    return msg.steps.filter(function (step) { return step.type === 'done' || step.type === 'understanding'; })
      .map(function (step) { return step.report ? EtTaskReport.toText(step.report) : step.content; }).join('\n');
  }

  function copyAnswerText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function () { copyAnswerTextFallback(text); });
      return;
    }
    copyAnswerTextFallback(text);
  }

  function copyAnswerTextFallback(text) {
    var area = el('<textarea aria-hidden="true"></textarea>');
    area.value = text; area.style.position = 'fixed'; area.style.opacity = '0';
    document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove();
  }

  function toggleReadAnswer(btn, text) {
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance || !text) return;
    if (btn.classList.contains('is-active')) {
      window.speechSynthesis.cancel(); btn.classList.remove('is-active'); btn.setAttribute('aria-pressed', 'false'); return;
    }
    window.speechSynthesis.cancel();
    var utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.onend = utterance.onerror = function () {
      if (btn.isConnected) { btn.classList.remove('is-active'); btn.setAttribute('aria-pressed', 'false'); }
    };
    btn.classList.add('is-active'); btn.setAttribute('aria-pressed', 'true');
    window.speechSynthesis.speak(utterance);
  }

  function regenerateAnswer(s, msg) {
    if (s.processing) return;
    var index = s.messages.indexOf(msg);
    var previous = index > 0 ? s.messages[index - 1] : null;
    if (!previous || previous.role !== 'user') return;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    var oldBox = msg.stepsEl;
    msg.streaming = true; msg.steps = []; msg.feedback = '';
    if (oldBox && oldBox.isConnected) oldBox.replaceWith(aiMsg(s, msg));
    s.processing = true; syncInput(s); updateWorking(s, msg);
    play(s, msg, previous.taskScript || route(s.type, previous.text,s.tabId));
  }

  /* 单个步骤 DOM；进行中的步骤把引用挂到 step.ui 供增量追加 */
  function buildStep(s, step, msg) {
    if(step.progressOnly && step.type!=='done')return el('<div class="ag-step" hidden></div>');
    var last = msg.steps[msg.steps.length - 1] === step;
    var streaming = msg.streaming && step.phase === 'active';

    if (step.type === 'thinking') {
      var open = streaming; // 流式中展开「思考中…」，否则收起「思考已完成 ›」
      var node = el(
        '<div class="ag-step ag-step-thinking">' +
          '<span class="ag-thinking-head">' +
            '<span class="ag-th-label"></span>' +
            '<span class="ag-th-caret"></span>' +
          '</span>' +
          '<div class="ag-thinking-body"></div>' +
        '</div>');
      var body = node.querySelector('.ag-thinking-body');
      body.textContent = step.shown;
      var paint = function () {
        node.querySelector('.ag-th-label').textContent = open ? '思考中…' : '思考已完成';
        node.querySelector('.ag-th-caret').innerHTML = icon(open ? 'arrow_down_s' : 'arrow_right_s', 12);
        body.hidden = !open;
      };
      paint();
      node.querySelector('.ag-thinking-head').addEventListener('click', function () {
        open = !open; paint();
      });
      if (streaming) step.ui = { textEl: body, dotHost: body, collapse: function () { open = false; paint(); } };
      return node;
    }

    if (step.type === 'tool_call') {
      var t = el(
        '<div class="ag-step">' +
          '<div class="ag-tool">' +
            '<span class="ag-tool-rail">' +
            '<span class="ag-tool-icon">' + icon('equipment_computer', 16) + '</span>' +
              (last ? '' : '<span class="ag-tool-line"></span>') +
            '</span>' +
            '<span class="ag-tool-text"></span>' +
          '</div>' +
        '</div>');
      var tt = t.querySelector('.ag-tool-text');
      tt.textContent = step.content;
      if (streaming) tt.classList.add('ag-shimmer');
      return t;
    }

    /* understanding / done：正文流式 */
    var p = el('<div class="ag-step"><div class="ag-text"></div></div>');
    var textEl = p.querySelector('.ag-text');
    textEl.textContent = step.shown;
    if(step.proposal&&window.EtReconciliationDiscovery)p.insertBefore(EtReconciliationDiscovery.renderProposal(step.proposal),textEl);
    if (streaming) step.ui = { textEl: textEl, dotHost: textEl };
    if (step.report && !step.compactReport) {
      var reportEl = EtTaskReport.render(step.report,s.tabId);
      reportEl.hidden = streaming;
      p.appendChild(reportEl);
      if (streaming) step.ui.reportEl = reportEl;
    }
    return p;
  }

  /* 「灵犀工作中」：仅流式中且最后一步还没文字内容时显示（避免双 loading；
     tool_call 一出现就自带 shimmer，算「已有内容」） */
  function updateWorking(s, msg) {
    if (!msg || !msg.workingEl) return;
    var last = msg.steps[msg.steps.length - 1];
    var contentShown = last && (last.type === 'tool_call' || last.shown.length > 0);
    msg.workingEl.hidden = !(msg.streaming && !contentShown);
  }

  function scrollToEnd(s, instant) {
    if (!s.view || !s.view.anchor) return;
    s.view.anchor.scrollIntoView({ behavior: instant ? 'auto' : 'smooth' });
  }

  /* 输入区状态：处理中 → 禁编辑 + placeholder 变「正在处理中…」 */
  function syncInput(s) {
    if (!s.view) return;
    var canEdit = !s.processing || !!s.reconciliationFlow;
    if (s.view.input.getAttribute('contenteditable') !== String(canEdit)) {
      s.view.input.setAttribute('contenteditable', String(canEdit));
    }
    s.view.input.setAttribute('data-placeholder', s.processing&&!s.reconciliationFlow ? '正在处理中…' : (s.entryPlaceholder || '请输入任务，交给我来帮你完成'));
    // 画布草稿不点亮侧边栏发送键：侧边栏没输入时它就不是发送入口
    s.view.send.disabled = (s.processing&&!s.reconciliationFlow) || !s.sidebarDraft.trim() || (s.view.input.classList.contains('has-record-skill') && !hasRecordDescription(s));
    paintCanvasDraft(s);
    if (window.EtTaskClarification) {
      s.view.inputCard.hidden = !!s.clarification;
      s.view.aside.classList.toggle('is-task-clarifying',!!s.clarification);
    }
  }

  /* ════════════ 发送与播放 =========== */

  /* 侧边栏发送：只用自己输入框里的文字（画布草稿不参与，交付则在画布那个输入框） */
  function trySend(s) {
    var text = (s.sidebarDraft || '').trim();
    if(text&&s.reconciliationFlow&&window.EtReconciliationDiscovery&&EtReconciliationDiscovery.handleInput(s.tabId,text)){setInputText(s,'');syncFromInput(s);return;}
    if (!text || s.processing || (s.view.input.classList.contains('has-record-skill') && !hasRecordDescription(s))) return;
    var ctx = firstChipCtx(s); // 输入框里有选区 chip → 用它的坐标给剧本注入作用范围
    if (window.LUI && LUI.onSidebarSubmit) LUI.onSidebarSubmit(s.tabId);
    s.canvasDraft = null;
    paintCanvasDraft(s);
    send(s, text, ctx);
  }

  /* 欢迎区 → 对话区（send / Agent.record 共用）：确保 view.msgsEl/anchor 存在 */
  function ensureMsgs(s) {
    if (!s.view || s.view.msgsEl) return;
    if (s.view.welcomeEl) { s.view.welcomeEl.remove(); s.view.welcomeEl = null; }
    s.view.msgsEl = el('<div class="ag-msgs"></div>');
    s.view.anchor = el('<div class="ag-anchor"></div>');
    s.view.body.appendChild(s.view.msgsEl);
    s.view.body.appendChild(s.view.anchor);
  }

  /* ★ keepInput：这次的内容来自画布/划词，侧边栏输入框里留的是另一份没发的草稿 → 保住输入框内容不清。 */
  function send(s, text, ctx, keepInput, taskScript) {
    if (s.processing) return;
    var resolvedScript = taskScript || route(s.type,text,s.tabId);
    if(s.reconciliationFlow&&resolvedScript.taskPlan)resolvedScript=Object.assign({},resolvedScript,{progressOnly:true});
    var memoryKey = resolvedScript.memoryTaskKey || s.memoryTaskKey;
    if (s.type === 'et' && window.EtReconciliationPrivacy) resolvedScript = EtReconciliationPrivacy.wrap(tabById(s.tabId),resolvedScript,memoryKey);
    if(resolvedScript.progressOnly){
      if(s.reconciliationFlow)s.reconciliationFlow.status='executing';
      resolvedScript=Object.assign({},resolvedScript,{taskPlan:['理解任务','分析表格',s.reconciliationFlow&&s.reconciliationFlow.taskIndex?'规划任务':'规划对账','确认方案'].concat(resolvedScript.taskPlan),steps:resolvedScript.steps.filter(function(step){return !step.planTask;}).map(function(step){var copy=Object.assign({},step,typeof step.taskStage==='number'?{taskStage:step.taskStage+4}:{});if(step.type==='done'&&step.report){copy.content=step.report.result+(resolvedScript.privacyWrapped?'脱敏数据已还原。':'');copy.compactReport=true;if(s.reconciliationFlow)s.reconciliationFlow.report=step.report;}return copy;})});
    }
    var inputText = text;
    if (taskScript) {
      var saveStep = resolvedScript.steps.find(function (step) { return step.action && step.action.type === 'et.saveTaskMemory'; });
      if (saveStep) inputText = saveStep.action.preferences.matchingRules || saveStep.action.preferences.instruction || text;
      if (typeof resolvedScript.privacyMode === 'boolean') inputText += '\n脱敏模式：'+(resolvedScript.privacyMode ? '开启' : '关闭');
    }
    var memoryInput = memoryKey ? EtTaskMemory.createInput(inputText) : null;
    if (memoryKey) {
      s.memoryTaskKey = memoryKey;
      resolvedScript = Object.assign({},resolvedScript,{steps:resolvedScript.steps.map(function (step) {
        if (!step.action || step.action.type !== 'et.saveTaskMemory') return step;
        return Object.assign({},step,{action:Object.assign({},step.action,{memoryInput:memoryInput})});
      })});
    }
    s.processing = true;
    // keepInput 时输入框里的草稿不是这次发送的内容，气泡不能用它渲染（否则气泡显示成草稿）
    var html = keepInput ? '' : (s.sidebarHTML || '').trim();
    /* 侧边栏输入框为空 = 这轮来自画布入口（引用块态）或草稿被保留：没有 HTML 可复用，改用 ctx 造 chip */
    var chipCtx = html ? null : canvasChipCtx(ctx);

    ensureMsgs(s); // 欢迎区 → 对话区
    if (s.view && !keepInput) setInputText(s, ''); // 连带清掉所有选区 chip

    var um = { role: 'user', text: text, html: html, ctx: chipCtx, taskTitle: taskScript && taskScript.taskTitle, taskScript: resolvedScript.taskPlan ? resolvedScript : null };
    var am = { role: 'ai', streaming: true, steps: [], ctx: ctx || null, memoryTaskKey:memoryKey, memoryInput:memoryInput,progressOnly:!!resolvedScript.progressOnly }; // ctx: 文内剧本 action 坐标注入用
    if(!resolvedScript.userMessageRecorded)s.messages.push(um);
    s.messages.push(am);
    if (s.view) {
      if(!resolvedScript.userMessageRecorded)s.view.msgsEl.appendChild(userMsg(s, um));
      s.view.msgsEl.appendChild(aiMsg(s, am));
    }
    updateWorking(s, am);
    syncInput(s);
    scrollToEnd(s, true);

    s.activeTaskMessage = am;
    play(s, am, resolvedScript).catch(function (error) {
      var tab = tabById(s.tabId);
      if (tab && window.EtReconciliationPrivacy) EtReconciliationPrivacy.restore(tab,true);
      if (window.EtTaskClarification) EtTaskClarification.cancel(s);
      var currentMessage = s.activeTaskMessage || am;
      currentMessage.streaming = false; s.processing = false; s.activeTaskMessage = null;
      if(s.reconciliationFlow)s.reconciliationFlow.status='review';
      if (s.taskProgress) { s.taskProgress.complete = false; s.taskProgress.planning = false; s.taskProgress.waiting = !!s.reconciliationFlow; s.taskProgress.waitingLabel='等待调整方案'; }
      var failed = {type:'done',content:'本轮未完成：'+error.message+'。'+(resolvedScript.privacyWrapped?'已还原脱敏数据，':'')+'可调整要求后重试。',shown:'',phase:'done'};
      failed.shown = failed.content; currentMessage.steps.push(failed);
      if (s.view && currentMessage.stepsEl) currentMessage.stepsEl.insertBefore(buildStep(s,failed,currentMessage),currentMessage.workingEl);
      updateWorking(s,currentMessage); syncInput(s); renderTaskProgress(s);
    });
  }

  /* 关键词路由：命中剧本；否则兜底（改这里：匹配规则）。
     AGENT_SCRIPTS 未命中时继续匹配 LUI_SCRIPTS 文内剧本（文内能跑的指令侧边栏也能跑；
     带 action 的步骤照常经 EditorAPI.apply 真实改文档，坐标由 apply 注入 msg.ctx 或现取光标） */
  function route(type, text, tabId) {
    if (type === 'et' && window.EtReconciliationFollowup) {
      var followup = EtReconciliationFollowup.route(tabId,text);
      if (followup) return followup;
    }
    var conf = window.AGENT_SCRIPTS[type];
    var lower = text.toLowerCase();
    var i, j, sc;
    for (i = 0; i < conf.scripts.length; i++) {
      sc = conf.scripts[i];
      for (j = 0; j < sc.match.length; j++) {
        if (lower.indexOf(sc.match[j].toLowerCase()) >= 0) return sc;
      }
    }
    var luiConf = window.LUI_SCRIPTS && window.LUI_SCRIPTS[type];
    if (luiConf) {
      for (i = 0; i < luiConf.scripts.length; i++) {
        sc = luiConf.scripts[i];
        for (j = 0; j < sc.match.length; j++) {
          if (lower.indexOf(sc.match[j].toLowerCase()) >= 0) return sc;
        }
      }
    }
    return conf.fallback;
  }

  /* 播放引擎：逐条播放步骤。playId 用于「新建对话」打断在播的流。 */
  async function play(s, msg, script) {
    var id = ++s.playId;
    var alive = function () { return s.playId === id; };
    if (script.taskPlan) {
      s.taskProgress = Object.assign(script.progressOnly?s.taskProgress||{}:{},{ stages: script.taskPlan.slice(), current: script.progressOnly?3:-1, finished: script.progressOnly?4:0, expanded: !!(script.progressOnly&&s.taskProgress&&s.taskProgress.expanded), planning: false, waiting:false,complete: false, memoryUpdated:false, memoryTaskKey:script.memoryTaskKey });
      renderTaskProgress(s);
    }

    for (var i = 0; i < script.steps.length; i++) {
      if (!alive()) return;
      var def = script.steps[i];
      if (script.taskPlan && (def.planTask || typeof def.taskStage === 'number')) {
        s.taskProgress.planning = !!def.planTask;
        if (typeof def.taskStage === 'number') s.taskProgress.current = def.taskStage;
        renderTaskProgress(s);
      }
      if (def.type === 'clarification' && window.EtTaskClarification) {
        var question = {type:'understanding',content:def.content,shown:'',phase:'active',keepVisible:true};
        msg.steps.push(question);
        if (s.view) msg.stepsEl.insertBefore(buildStep(s,question,msg),msg.workingEl);
        await typewrite(s,msg,question,alive);
        if (!alive()) return;
        question.phase = 'done'; question.ui = null;
        msg.streaming = false; updateWorking(s,msg);
        if (s.view) refreshToolRails(msg);
        s.taskProgress.waiting = true; s.taskProgress.planning = false; s.taskProgress.expanded = false;
        renderTaskProgress(s);
        var answer = await EtTaskClarification.wait(s,def);
        if (!alive() || !answer) return;
        if (def.onResolve) def.onResolve(answer,script);
        if (msg.memoryInput) msg.memoryInput.content = answer.rule+'\n脱敏模式：'+(script.privacyMode ? '开启' : '关闭');
        var replay = Object.assign({},script,{taskPlan:script.taskPlan.filter(function (_,stage) { return stage!==def.taskStage; }),steps:script.steps.filter(function (item) { return item.type!=='clarification'; }).map(function (item) { var copy=Object.assign({},item);if(typeof copy.taskStage==='number'&&copy.taskStage>def.taskStage)copy.taskStage--;return copy; })});
        if (replay.steps[0].type==='understanding') replay.steps[0]=Object.assign({},replay.steps[0],{content:'沿用已确认的匹配规则，重新执行对账。'});
        var reply = {role:'user',text:answer.rule,taskScript:replay};
        var resumed = {role:'ai',streaming:true,steps:[],ctx:msg.ctx,memoryTaskKey:msg.memoryTaskKey,memoryInput:msg.memoryInput};
        s.messages.push(reply,resumed);
        if (s.view) { s.view.msgsEl.appendChild(userMsg(s,reply)); s.view.msgsEl.appendChild(aiMsg(s,resumed)); }
        msg = resumed; s.activeTaskMessage = resumed;
        var confirmation = {type:'understanding',content:'已确认匹配方式，继续执行对账。',shown:'已确认匹配方式，继续执行对账。',phase:'done',keepVisible:true};
        msg.steps.push(confirmation);
        if (s.view) msg.stepsEl.insertBefore(buildStep(s,confirmation,msg),msg.workingEl);
        s.taskProgress.waiting = false; s.taskProgress.finished = def.taskStage+1; s.taskProgress.expanded = false;
        renderTaskProgress(s); syncInput(s); scrollToEnd(s,true);
        continue;
      }
      /* 文内剧本的 ask 澄清步骤在侧边栏降级为正文（选项平铺成文本，交互只在文内面板有） */
      if (def.type === 'ask') {
        def = { type: 'understanding', content: def.content + '\n' + def.options.map(function (o, j) {
          return (j + 1) + '. ' + o.label + (o.desc ? '：' + o.desc : '');
        }).join('\n') };
      }
      var step = { type: def.type, content: def.content, toolName: def.toolName, action: def.action, keepVisible: def.keepVisible, report: def.report, shown: '', phase: 'active',progressOnly:!!script.progressOnly,compactReport:!!def.compactReport };
      msg.steps.push(step);
      if (s.view) {
        // 插到「工作中」指示器前面；新步骤出现后重算各 tool_call 的竖线/ shimmer 归属
        msg.stepsEl.insertBefore(buildStep(s, step, msg), msg.workingEl);
        refreshToolRails(msg);
      }
      updateWorking(s, msg);
      scrollToEnd(s);

      if (step.type === 'tool_call') {
        await sleep(script.taskPlan && typeof def.taskStage === 'number' ? 6000 : script.taskPlan && def.planTask ? 3000 : toolDelay(step.content));
        if (!alive()) return;
        // 剧本带 action：shimmer 停留结束 = 步骤完成，这一刻让画布真实变化（editor-api.js；msg.ctx 注入坐标）
        if (step.action && window.EditorAPI) {
          var applied = await EditorAPI.apply(s.tabId, step.action, msg.ctx);
          if (script.privacyWrapped && applied === false) throw new Error('执行步骤未成功');
          if (applied && step.action.type === 'et.saveTaskMemory' && s.taskProgress) s.taskProgress.memoryUpdated = true;
        }
      } else {
        if(script.progressOnly&&step.type!=='done')step.shown=step.content;
        else await typewrite(s, msg, step, alive);
        if (!alive()) return;
        if (step.type === 'thinking' && step.ui && step.ui.collapse) step.ui.collapse();
      }
      step.phase = 'done';
      if (step.ui && step.ui.reportEl) step.ui.reportEl.hidden = false;
      if (script.taskPlan && typeof def.taskStage === 'number') {
        s.taskProgress.finished = def.taskStage + 1;
        if (s.taskProgress.finished === s.taskProgress.stages.length) s.taskProgress.complete = true;
        renderTaskProgress(s);
      }
      step.ui = null;
      if (s.view) refreshToolRails(msg);
      updateWorking(s, msg);
      await sleep(GAP);
    }

    if (!alive()) return;
    if (msg.memoryTaskKey && msg.memoryInput && window.EtTaskMemory) {
      var memoryTab = tabById(s.tabId);
      if (memoryTab) EtTaskMemory.recordInput(memoryTab,msg.memoryTaskKey,msg.memoryInput);
    }
    msg.streaming = false;
    s.processing = false;
    if(script.progressOnly&&s.reconciliationFlow)s.reconciliationFlow.status='complete';
    s.activeTaskMessage = null;
    updateWorking(s, msg);
    syncInput(s);
    if (s.type === 'et' && (msg.ctx || msg.steps.some(function (step) { return !!step.report; })) && s.view && msg.stepsEl && !msg.stepsEl.querySelector('.ag-et-actions')) {
      msg.stepsEl.appendChild(etResultActions(s, msg));
    }
    /* 生成完成：done 之前的步骤自动折叠成「已执行 N 次命令、M 次搜索 ›」摘要（collapse-all） */
    if (s.view) applyCollapse(msg);
    scrollToEnd(s);
  }

  /* 逐字流式：每帧 TYPE_CHARS 个字符，只追加当前步骤的文本节点 */
  async function typewrite(s, msg, step, alive) {
    var dot = null;
    while (step.shown.length < step.content.length) {
      if (!alive()) return;
      step.shown = step.content.slice(0, step.shown.length + TYPE_CHARS);
      if (step.ui && step.ui.textEl) {
        step.ui.textEl.textContent = step.shown;
        if (!dot) { dot = el('<span class="ag-dot"></span>'); }
        step.ui.dotHost.appendChild(dot); // 光标始终跟在文字尾部
      }
      updateWorking(s, msg); // 文字开始流出 → 工作中指示器隐藏
      scrollToEnd(s);
      await sleep(typeDelay());
    }
    if (dot) dot.remove();
  }

  /* 折叠组（collapse-all，复刻 cowork）：done 之前的 thinking/tool_call/understanding 步骤
     收拢成一行摘要「已执行 N 次命令、M 次搜索 ›」，点击展开成完整步骤静态列表，再点收起。
     统计口径：toolName === 'search' 计「搜索」，其余 tool_call 计「命令」；
     一个 tool_call 都没有时降级为「已折叠 N 个步骤」（N = 被折叠的步骤数）。
     播放收尾与历史消息重建共用；msg.groupOpen 记展开态，切 tab 重渲染后保持。
     （改这里：摘要文案 / 统计口径） */
  function applyCollapse(msg) {
    if(msg.progressOnly)return;
    if (!msg.stepsEl || msg.groupEl) return;
    /* 找最后一条 done；done 之前没有步骤就不折叠 */
    var doneIdx = -1;
    for (var i = msg.steps.length - 1; i >= 0; i--) {
      if (msg.steps[i].type === 'done') { doneIdx = i; break; }
    }
    if (doneIdx <= 0) return;

    var cmds = 0, searches = 0, foldedCount = 0;
    for (i = 0; i < doneIdx; i++) {
      var st = msg.steps[i];
      if (st.keepVisible) continue;
      foldedCount++;
      if (st.type !== 'tool_call') continue;
      if (st.toolName === 'search') searches++; else cmds++;
    }
    if (!foldedCount) return;
    var summary;
    if (cmds + searches === 0) {
      summary = '已折叠 ' + foldedCount + ' 个步骤';
    } else {
      var parts = [];
      if (cmds) parts.push(cmds + ' 次命令');
      if (searches) parts.push(searches + ' 次搜索');
      summary = '已执行 ' + parts.join('、');
    }

    var group = el(
      '<div class="ag-collapse-group">' +
        '<div class="ag-collapse-head">' +
          '<span class="ag-collapse-text"></span>' +
          '<span class="ag-collapse-caret"></span>' +
        '</div>' +
        '<div class="ag-collapse-body"></div>' +
      '</div>');
    group.querySelector('.ag-collapse-text').textContent = summary;

    /* 把 done 之前的步骤节点原样挪进折叠体（完成态静态渲染，无 shimmer/光标） */
    var body = group.querySelector('.ag-collapse-body');
    var nodes = msg.stepsEl.querySelectorAll('.ag-step');
    for (i = 0; i < doneIdx; i++) if (!msg.steps[i].keepVisible) body.appendChild(nodes[i]);
    msg.stepsEl.insertBefore(group, nodes[doneIdx]);

    var caret = group.querySelector('.ag-collapse-caret');
    var paint = function () {
      caret.innerHTML = icon(msg.groupOpen ? 'arrow_down_s' : 'arrow_right_s', 12);
      body.hidden = !msg.groupOpen;
    };
    paint();
    group.querySelector('.ag-collapse-head').addEventListener('click', function () {
      msg.groupOpen = !msg.groupOpen; paint();
    });
    msg.groupEl = group;
  }

  /* tool_call 的竖线/shimmer 只保留在「非末尾」/「执行中」语义上：重挂时 cheap 重建 */
  function refreshToolRails(msg) {    if (!msg.stepsEl) return;
    var nodes = msg.stepsEl.querySelectorAll('.ag-step');
    msg.steps.forEach(function (step, i) {
      if (step.type !== 'tool_call') return;
      var node = nodes[i];
      var last = i === msg.steps.length - 1;
      var rail = node.querySelector('.ag-tool-rail');
      if(!rail)return;
      var line = rail.querySelector('.ag-tool-line');
      if (!last && !line) rail.appendChild(el('<span class="ag-tool-line"></span>'));
      if (last && line) line.remove();
      node.querySelector('.ag-tool-text').classList.toggle('ag-shimmer', msg.streaming && step.phase === 'active');
    });
  }

  /* 新建对话：打断在播流，清空消息回欢迎区 */
  function newChat(s) {
    var owner = tabById(s.tabId); if (owner) restoreEtTaskOrder(s,owner);
    if(window.EtReconciliationDiscovery)EtReconciliationDiscovery.cancel(s.tabId);
    s.reconciliationFlow=null;
    if (owner && window.EtReconciliationPrivacy) EtReconciliationPrivacy.restore(owner,true);
    if(window.EtReconciliation)EtReconciliation.cancelPicker();
    s.playId++;
    if (window.EtTaskClarification) EtTaskClarification.cancel(s);
    s.activeTaskMessage = null;
    s.processing = false;
    s.messages = [];
    s.taskProgress = null;
    s.memoryTaskKey = null;
    s.sidebarDraft = ''; s.sidebarHTML = ''; // 连选区 chip 一起清空
    if (s.type === 'et' && window.EtExperts && EtExperts.isFinal()) { s.recommendationKind = ''; s.entryPlaceholder = ''; }
    var tab = App.tabs.filter(function (t) { return t.id === App.activeId; })[0];
    if (tab && s.view) Agent.mount(s.view.aside, tab);
  }
})();

/* lui.js — 文内 LUI：划词菜单 / 对象悬浮菜单 / 区选小按钮 / 自由框选 / 双击 Ctrl·Cmd 唤起 /
   推荐 chips+渐进子推荐 / 过程面板 / 紫色高亮+决策条 / 任务沉淀进灵犀会话。
   四组件覆盖（PRD §4.1 五形态唤起）：
   - wps：划词菜单 / 图片对象菜单 / 表格区选小按钮 / 快捷键（全链路：文内改写+高亮+决策条）
   - et ：表格区选小按钮 / 快捷键（全链路：格级高亮+决策条）
   - wpp：对象悬浮菜单 / 缩略图整页入口 / 自由框选 / 快捷键（元素级高亮+决策条）
   - pdf：文本划词简化菜单 / 自由框选 / 快捷键（不改文内，剧本全走侧边栏交付）

   激活方式：Editors.render 末尾调 LUI.init(root, tab)；画布切 tab 全量重建，init 每次重新绑定。
   状态约定（随 tab.doc 走，切 tab 不丢）：
   - tab.doc.pendingAi   文内未决改动（editors.js 渲染时重建紫色高亮 .ai-diff）
   - tab.doc.luiDecision 决策条待决标志（true 时 init 恢复决策条）
   - tab.doc.luiCtx      上次改动区间（决策条「补充要求」再出输入框时复用）

   改这里：
   - 推荐 chips / 划词菜单快捷能力 → 下方 CHIPS / MENU_ITEMS / PDF_MENU_ITEMS 配置表
   - 剧本内容（步骤文案 / action） → mock/lui-scripts.js */
(function () {
  'use strict';

  var LUI = window.LUI = {};

  /* ══ 改这里：推荐 chips 配置（按 组件 × 场景 二维） ══
     一级为纯胶囊：点选把 prompt 置入输入框（可编辑），有 subs 的在其下方纵向列出二级推荐；
     二级点击 = 组合「prompt，子项」进输入框。chips 全程不直接发送，由用户点发送/Enter 执行。
     场景来自 Editors.getContext：selection(有选区，含表格单格划词) / cursor(光标) / table(内嵌表格) /
     image(图片) / toc(目录) / cells(et 区选) */
  var CHIPS = {
    wps: {
      selection: [
        { label: '搜索', prompt: '搜索这段文字的相关内容' },
        { label: '翻译', prompt: '翻译这段文字', subs: ['译成英文', '译成中文'] },
        { label: '润色', prompt: '润色这段文字', subs: ['更正式', '更口语', '精简'] },
        { label: '续写', prompt: '接着这段文字续写' },
      ],
      cursor: [
        { label: '批量修改', prompt: '批量修改这份文档' },
        { label: '排版美化', prompt: '美化这份文档的排版' },
        { label: '检查并修正文档', prompt: '检查并修正这份文档' },
        { label: '快速审阅文档', prompt: '快速审阅这份文档' },
        { label: '帮我改', prompt: '帮我改这份文档', subs: ['检查错别字', '精简内容', '调整语气'] },
      ],
      table: [ // 光标在文档内嵌表格中 / 选中表格
        { label: '美化表格', prompt: '美化这个表格', subs: ['改成三线表', '填充斑马纹'] },
        { label: '填写表格', prompt: '帮我填写这个表格' },
      ],
      image: [ // 点选图片占位块（均为交付类请求，剧本标 deliver:'sidebar'，直接拉侧边栏；prompt 即 label 以命中路由）
        { label: '编辑图片' },
        { label: '提取内容' },
        { label: '解释' },
      ],
      toc: [ // 点选目录块（PRD 4.2：光标在目录 → 更新目录）
        { label: '更新目录', prompt: '更新目录', subs: ['同步标题变化', '修正页码'] },
      ],
    },
    et: { // 表格推荐按选区生成，二级指令由 chipsForContext 统一补充。
      cells: [], // 10 月需求按选区形态动态给推荐，见 chipsForContext
      chart: [
        { label: '美化图表样式', prompt: '美化图表样式' },
        { label: '调整图表内容', prompt: '调整图表内容' },
      ],
      cursor: [ // 单格 / 双击 Ctrl·Cmd
        { label: '快速建表', prompt: '快速建表' },
        { label: '数据清洗', prompt: '数据清洗' },
        { label: '分析数据', prompt: '分析数据' },
      ],
    },
    wpp: {
      elements: [ // 选中元素（形态②对象菜单 / ④自由框选命中）
        { label: '改写文案', prompt: '改写文案' },
        { label: '美化元素', prompt: '美化选中元素', subs: ['品牌强调色'] },
        { label: '解释' }, // 交付类，剧本 deliver:'sidebar'
      ],
      page: [ // 缩略图整页入口
        { label: '美化本页', prompt: '美化本页' },
        { label: '改写本页文案', prompt: '改写本页文案' },
        { label: '总结本页', prompt: '总结本页' }, // 交付类，deliver:'sidebar'
      ],
      cursor: [], // 无选中元素：无推荐（chips 区不渲染）
    },
    pdf: { // 阅读器不改文内：全部为交付类（deliver:'sidebar'，拉侧边栏承载）
      selection: [ // 文本划词
        { label: '翻译' }, { label: '解释' }, { label: '总结' },
      ],
      region: [ // 自由框选区域
        { label: '总结这个区域', prompt: '总结这个区域' },
        { label: '翻译' },
        { label: '提取文字', prompt: '提取文字' },
      ],
      page: [ // 整页入口（hover 页面右上 icon）
        { label: '总结本页', prompt: '总结本页' },
        { label: '翻译本页', prompt: '翻译' },
        { label: '提取文字', prompt: '提取文字' },
      ],
      cursor: [],
    },
  };

  /* ══ 改这里：划词菜单 AI 行快捷能力 ══
     点击直接按默认版本执行文内流程（翻译默认译成英文等，默认值在剧本侧配好）；只有「输入要求或提问」入口展开输入框 */
  var MENU_ITEMS = [
    { label: '搜索', send: '搜索：{sel}' },
    { label: '翻译', send: '翻译' },
    { label: '润色', send: '润色' },
    { label: '续写', send: '续写' },
  ];

  /* pdf 划词菜单：阅读器不出格式三行，单行 AI 行（「AI编辑」出输入框；直执行项全为交付类，拉侧边栏） */
  var PDF_MENU_ITEMS = [{ label: '翻译' }, { label: '解释' }, { label: '总结' }];

  /* 各组件画布锚点选择器（cur.docEl / fallbackCtx 用） */
  var DOC_SEL = { wps: '.wps-doc', et: '.et-grid-wrap', wpp: '.wpp-slide', pdf: '.pdf-doc' };
  var PAGE_SEL = { wps: '.wps-page', et: '.et-grid-wrap', wpp: '.wpp-slide', pdf: '.pdf-page' };

  /* 划词菜单格式行（改这里：图标用 icons.js 注册名；cmd 的 B/I/U 走 document.execCommand 真做，其余仅视觉） */
  var MENU_ROW1 = [
    { icon: 'copy', title: '复制' },
    { icon: 'paste', title: '粘贴', caret: true },
    'sep',
    { dd: 'Calibri (正文)' },   // 字体下拉（静态视觉）
    { dd: '五号' },             // 字号下拉（静态视觉）
    'sep',
    { icon: 'font_size_increase', title: '增大字号' },
    { icon: 'font_size_reduce', title: '减小字号' },
  ];
  var MENU_ROW2 = [
    { icon: 'cut', title: '剪切' },
    { icon: 'brush', title: '格式刷' },
    'sep',
    { icon: 'bold_wps', title: '加粗', cmd: 'bold' },
    { icon: 'italic', title: '斜体', cmd: 'italic' },
    { icon: 'underscore_wps', title: '下划线', cmd: 'underline' },
    'sep',
    { icon: 'highlight', title: '高亮', caret: true },
    { icon: 'color_font', title: '字体颜色', caret: true },
    { icon: 'line_spacing', title: '行距', caret: true },
    { icon: 'align_center', title: '对齐', caret: true },
  ];

  var DBL_KEY_GAP = 400; // 双击 Ctrl/Cmd 判定时长 ms（两次 keyup 间隔）
  var ET_ENTRY_SETTING = 'wps-ai-edit.et.quick-entry';
  var ET_SHORTCUT_SETTING = 'wps-ai-edit.et.double-control';

  /* ── 模块状态 ── */
  var cur = null;                              // 当前 { root, tab, editorMain, docEl }
  var menuEl = null, barEl = null;             // 浮层（position:fixed，挂 body）
  var objMenuEl = null, tblBtnEl = null;       // 图片对象菜单 / 表格区选小按钮（同挂 body）
  var hoverTipEl = null, settingsEl = null;    // 表格 10 月入口 hovertip / WPS AI 设置 mock
  var hoverTimer = null;
  var barCtx = null;
  var caretEl = null;                          // 光标态唤起时的闪烁光标标记（告诉用户从哪唤起）
  var panelEl = null, decisionEl = null;       // 挂 .editor-main 内
  var playing = null;                          // 进行中的文内任务 { id, stopped, askResolve }
  var keepSelRef = null;                       // 输入框激活期间包过 .lui-keep-sel 的 spans（getContext 产出，closeBar 时还原）
  var playSeq = 0;
  var bound = false;                           // 全局监听只绑一次
  var lastMod = { key: null, t: 0 };           // 双击 Ctrl/Cmd 判定

  function AU() { return window.Agent.utils; } // agent.js 的节奏参数/函数

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function storedOn(key) {
    try { return localStorage.getItem(key) !== 'off'; } catch (e) { return true; }
  }

  function storeOn(key, on) {
    try { localStorage.setItem(key, on ? 'on' : 'off'); } catch (e) {}
  }

  function etContextKey(ctx) {
    if (!ctx) return '';
    if (ctx.type === 'chart') return 'chart:' + (ctx.chartId || '');
    if (ctx.type === 'cells') return 'cells:' + (ctx.a1 || '');
    return 'cursor:' + (ctx.a1Start || '');
  }

  function baseChipsForContext(ctx) {
    return ((CHIPS[cur.tab.type] || {})[ctx.type] || (CHIPS[cur.tab.type] || {}).cursor);
  }

  var ET_CANVAS_ICONS = {"symbol_cross": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>加号l16_increase</desc><style>\n    .kd-stroke-width-icon-bold { \n       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-bold\"><path id=\"line\" d=\"M1.60156 7.59961H13.6016M7.60156 1.59961V13.5996\" stroke-linecap=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "arrow_up_tail_l": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>返回上级_左箭头_大号_上一级_返回_后退</desc><style>\n    .kd-stroke-width-icon-bold { \n       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-bold\"><path id=\"area1\" d=\"M7.5 15V1M7.5 1L12.5 5.74976M7.5 1L2.5 5.74976\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\"/></g></svg>", "ai_edit": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>笔_编辑</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M10.3047 6.23047L12.6673 8.59313\" stroke-linejoin=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\"/><path id=\"line_2\" d=\"M11.829 4.6688L5.02951 11.1047C4.74251 11.3764 4.54241 11.727 4.45449 12.1122L4.00442 14.0842C3.95529 14.2995 4.14768 14.4923 4.36304 14.4436L6.39867 13.9835C6.74729 13.9047 7.06842 13.7339 7.32866 13.489L14.148 7.06928C14.5587 6.68261 14.5685 6.03293 14.1697 5.63405L13.2236 4.68795C12.8406 4.30499 12.2224 4.2965 11.829 4.6688Z\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\"/></g><g id=\"group-1\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"Subtract\" d=\"M3.5 3C3.58821 3 3.66236 3.06578 3.68281 3.15159C3.77213 3.52625 3.82562 3.73318 3.9082 3.91602C4.14383 4.43734 4.56176 4.85504 5.08301 5.09082C5.26559 5.17339 5.47246 5.22675 5.84644 5.31595C5.93285 5.33656 6 5.41117 6 5.5C6 5.58824 5.93322 5.66237 5.8474 5.68288C5.47271 5.77241 5.26578 5.82653 5.08301 5.90918C4.56176 6.14496 4.14383 6.56266 3.9082 7.08398C3.82569 7.26666 3.77205 7.47335 3.68284 7.84739C3.66236 7.93322 3.58824 8 3.5 8C3.41117 8 3.33657 7.93284 3.31599 7.84643C3.22711 7.4731 3.17423 7.26647 3.0918 7.08398C2.85617 6.56266 2.43823 6.14496 1.91699 5.90918C1.73407 5.82646 1.52688 5.77249 1.15158 5.68286C1.06578 5.66237 1 5.58821 1 5.5C1 5.4112 1.06616 5.33656 1.15253 5.31597C1.52714 5.22667 1.73425 5.17346 1.91699 5.09082C2.43824 4.85504 2.85617 4.43734 3.0918 3.91602C3.1743 3.73337 3.22703 3.5265 3.31601 3.15254C3.33657 3.06616 3.41121 3 3.5 3Z\" stroke=\"none\"/><path id=\"Subtract_2\" d=\"M7.5 0.5C7.57057 0.5 7.62989 0.552627 7.64625 0.62127C7.7177 0.920997 7.76049 1.08654 7.82656 1.23281C8.01506 1.64987 8.34941 1.98403 8.76641 2.17266C8.91247 2.23871 9.07797 2.2814 9.37715 2.35276C9.44628 2.36925 9.5 2.42894 9.5 2.5C9.5 2.5706 9.44658 2.6299 9.37792 2.6463C9.07817 2.71793 8.91262 2.76122 8.76641 2.82734C8.34941 3.01597 8.01506 3.35013 7.82656 3.76719C7.76055 3.91333 7.71764 4.07868 7.64627 4.37791C7.62989 4.44658 7.57059 4.5 7.5 4.5C7.42894 4.5 7.36925 4.44627 7.35279 4.37715C7.28169 4.07848 7.23938 3.91318 7.17344 3.76719C6.98494 3.35013 6.65059 3.01597 6.23359 2.82734C6.08725 2.76116 5.92151 2.71799 5.62126 2.64629C5.55262 2.62989 5.5 2.57057 5.5 2.5C5.5 2.42896 5.55292 2.36925 5.62203 2.35277C5.92171 2.28133 6.0874 2.23877 6.23359 2.17266C6.65059 1.98403 6.98494 1.64987 7.17344 1.23281C7.23944 1.0867 7.28162 0.921202 7.35281 0.622035C7.36925 0.552929 7.42896 0.5 7.5 0.5Z\" stroke=\"none\"/></g></svg>", "arrow_down_s": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>下箭头16_大_Pdf_spin_down</desc><style>\n    .kd-stroke-width-icon-bold { \n       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)\n    }\n    .kd-color-icon-secondary {\n       fill: var(--kd-color-icon-secondary, #757575);\n       stroke: var(--kd-color-icon-secondary, #757575);\n       km_fill: #757575;\n       km_stroke: #757575;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-secondary kd-stroke-width-icon-bold\"><path id=\"area1\" d=\"M12 6.5L8.00718 10H7.99262L4 6.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\"/></g></svg>"};
  var etCanvasIconSequence = 0;
  function etCanvasIcon(name) {
    var raw = ET_CANVAS_ICONS[name], suffix = '-et-canvas-' + (++etCanvasIconSequence), ids = [];
    raw.replace(/\bid="([^"]+)"/g, function (_, id) { ids.push(id); });
    ids.sort(function (a,b) { return b.length-a.length; }).forEach(function (id) {
      raw = raw.split('id="'+id+'"').join('id="'+id+suffix+'"').split('#'+id+'"').join('#'+id+suffix+'"').split('#'+id+')').join('#'+id+suffix+')');
    });
    return '<span class="lui-et-icon" aria-hidden="true">'+raw+'</span>';
  }
  /* ET 圈选与图表推荐：完整提示词独立配置，避免拼接改变指定文案。 */
  var ET_CONTEXT_CHIPS = {
    cells: [
      { label: '整理数据', prompt: '帮我整理选中的数据', subs: [
        { label: '批量修改', prompt: '帮我整理选中的数据，按【规则】批量修改，其他内容不变。' },
        { label: '录入匹配项', prompt: '帮我整理选中的数据，根据【对应关系】，填充到目标列，匹配不到留空。' },
        { label: '删除清理', prompt: '帮我整理选中的数据，删除重复、空白或不需要的内容，保留有效数据。' }
      ] },
      { label: '计算分析', prompt: '分析这部分数据', subs: [
        { label: '汇总统计', prompt: '分析这部分数据，按【分类】汇总【数量/金额】，并计算合计和占比' },
        { label: '对比变化', prompt: '分析这部分数据，对比【两组数据/时间段】，找出主要差异和变化' },
        { label: '计算结果', prompt: '分析这部分数据，根据【计算规则】生成公式，并填入对应列' }
      ] },
      { label: '美化表格', prompt: '美化选中区域', subs: [
        { label: '统一样式', prompt: '美化选中区域，同类内容的字体、颜色、边框、对齐保持一致。' },
        { label: '打印适配', prompt: '美化选中区域，完整清晰地打印在一页内' }
      ] }
    ],
    chart: [
      { label: '美化图表', prompt: '帮我美化当前选中的图表', subs: [
        { label: '调整配色和样式', prompt: '帮我美化当前选中的图表，调整配色、字体和背景，使整体风格【简洁商务/适合报告/自定义要求】。' },
        { label: '解决文字遮挡', prompt: '帮我美化当前选中的图表，调整标题、图例和数据标签的位置及字号，让文字完整显示、互不遮挡。' },
        { label: '突出重点数据', prompt: '帮我美化当前选中的图表，突出显示【数据系列/类别/关键值】，让重点更容易辨认。' }
      ] },
      { label: '调整图表', prompt: '帮我调整当前选中的图表', subs: [
        { label: '更换图表类型', prompt: '帮我调整当前选中的图表，改为【图表类型】，重点展示【对比/趋势/占比/关系】。' },
        { label: '调整坐标轴', prompt: '帮我调整当前选中的图表，将【字段】设为横轴、【指标】设为纵轴，并按【要求】设置刻度和单位。' },
        { label: '增删数据系列', prompt: '帮我调整当前选中的图表，添加【数据系列及对应区域】，移除【数据系列】。' },
        { label: '显示数值或占比', prompt: '帮我调整当前选中的图表，为【数据系列或类别】添加【数值/占比】标签，保留【小数位数】。' }
      ] },
      { label: '分析图表', prompt: '帮我分析当前选中的图表', subs: [
        { label: '解读趋势和差异', prompt: '帮我分析当前选中的图表，说明主要趋势、分组差异和关键发现。' },
        { label: '查找异常数据', prompt: '帮我分析当前选中的图表，找出明显偏高、偏低或突变的数据，并结合源数据说明判断依据。' },
        { label: '进一步分析变化原因', prompt: '帮我分析当前选中的图表，针对【变化或差异】下钻查看源数据，分析主要贡献项，并区分已确认的发现和待验证的原因。' }
      ] }
    ]
  };
  function chipsForContext(ctx) {
    if (cur.tab.type === 'et' && ET_CONTEXT_CHIPS[ctx.type]) return ET_CONTEXT_CHIPS[ctx.type];
    return baseChipsForContext(ctx);
  }

  function placeholderFor(ctx) {
    if (cur.tab.type !== 'et') return '描述您想做的任何更改…';
    if (ctx.type === 'chart') return '你想对当前图表做什么？';
    if (ctx.type === 'cells') return '说说你想怎么处理这块数据';
    return '描述你想做的任何更改';
  }

  /* ════════════ 入口 ════════════ */

  LUI.init = function (root, tab) {
    playSeq++; playing = null; // 切 tab/重渲染 = 打断在播任务（已应用的改动留在 pendingAi 里）
    closeFloats('switch'); closeHoverTip(); closeSettings(); closePanel(); closeDecision();
    bindGlobal();
    if (!DOC_SEL[tab.type]) { cur = null; return; }
    cur = { root: root, tab: tab, editorMain: root.querySelector('.editor-main'),
      docEl: root.querySelector(DOC_SEL[tab.type]) };
    // 文本划词：wps / pdf（et/wpp 画布禁了原生选择，走各自的选区/对象模型）
    if (cur.docEl && (tab.type === 'wps' || tab.type === 'pdf')) cur.docEl.addEventListener('mouseup', onDocMouseUp);
    // 决策条恢复：切 tab 再切回，pendingAi 高亮随渲染重建，决策条按标志位补挂
    if (tab.doc && tab.doc.pendingAi && tab.doc.luiDecision) showDecision();
    if (tab.type === 'et' && window.Agent) { // 侧边栏收起时也要：入口照常补建
      setTimeout(function () { if (cur && cur.tab === tab) LUI.onTblRangeSel(tab); }, 0);
    }
  };

  /* 侧边栏开合后同步表格圈选角标：不管展开还是收起都要重建 ——
     收起态同样保留入口（点了出画布输入框，发完再把侧边栏带出来），只是位置随宽度重算。 */
  LUI.onAgentVisibilityChanged = function (tab, open) {
    if (!cur || cur.tab !== tab || tab.type !== 'et') return;
    closeTblBtn();
    setTimeout(function () { // 等宽度动画结束再按新位置重建
      if (cur && cur.tab === tab) LUI.onTblRangeSel(tab);
    }, 240);
  };

  /* 从侧边栏发送时，结束仍悬在画布上的输入态，避免同一草稿被二次提交。 */
  LUI.onSidebarSubmit = function (tabId) {
    if (!cur || cur.tab.id !== tabId || cur.tab.type !== 'et') return;
    cur.tab.doc.etAiDraft = null;
    closeFloats('sidebar-send');
  };

  /* 决策条同步出口（editor-api.js 在动作产生 pendingAi 后调用）：
     侧边栏剧本链路改了文内 → 出决策条；文内面板播放中跳过（播放收尾时统一出）；已有条则不重复出 */
  LUI.syncDecision = function (tab) {
    if (!cur || cur.tab !== tab || playing || decisionEl) return;
    if (tab.type === 'et') return; // 10 月表格链路：过程与决策全部由 cowork 侧边栏承接
    if (!tab.doc.pendingAi) return;
    tab.doc.luiDecision = true;
    showDecision();
  };

  /* ════════════ 唤起：划词 / 双击 Ctrl·Cmd ════════════ */

  function onDocMouseUp() {
    setTimeout(function () { // 等浏览器选区落定再读
      if (!cur || !cur.root.isConnected || barEl || playing) return;
      var ctx = Editors.getContext(cur.tab);
      if (ctx && ctx.type === 'selection' && ctx.text.trim()) {
        if (cur.tab.type === 'pdf') showPdfMenu(ctx); // pdf 阅读器：单行 AI 行菜单
        else showMenu(ctx);                           // wps：三行浮动工具栏
      } else closeMenu(); // 未出划词菜单：只收菜单（对象菜单/区选按钮/输入框各有自己的生命周期，别误杀）
    }, 0);
  }

  function bindGlobal() {
    if (bound) return;
    bound = true;
    // 点浮层外任何地方：收起菜单/输入框/对象菜单/区选按钮（capture，抢在画布交互前判定）
    document.addEventListener('mousedown', function (e) {
      if (menuEl && !menuEl.contains(e.target)) closeMenu();
      if (barEl && !barEl.contains(e.target) && (!settingsEl || !settingsEl.contains(e.target))) closeBar('blur');
      if (objMenuEl && !objMenuEl.contains(e.target) && !(barEl && barEl.contains(e.target) && barCtx && barCtx.type === 'chart')) closeObjMenu();
      if (tblBtnEl && !tblBtnEl.contains(e.target)) closeTblBtn();
      if (settingsEl && !settingsEl.contains(e.target) && (!hoverTipEl || !hoverTipEl.contains(e.target))) closeSettings();
    }, true);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && (menuEl || barEl)) { closeFloats('escape'); e.stopPropagation(); }
    }, true);
    // 双击 Ctrl / Cmd：400ms 内两次 keyup → 光标就近位置出输入框
    document.addEventListener('keyup', function (e) {
      if (e.key !== 'Control' && e.key !== 'Meta') return;
      var now = Date.now();
      var dbl = lastMod.key === e.key && now - lastMod.t < DBL_KEY_GAP;
      lastMod = { key: e.key, t: now };
      if (!dbl || !cur || !cur.root.isConnected || playing) return;
      if (cur.tab.type === 'et' && !storedOn(ET_SHORTCUT_SETTING)) return;
      if (barEl) { barEl.querySelector('.lui-bar-input').focus(); return; }
      var ctx = Editors.getContext(cur.tab) || fallbackCtx();
      openBar(ctx, '');
    });
    // 选区塌缩（方向键/点击等）→ 收菜单
    document.addEventListener('selectionchange', function () {
      if (!menuEl || !cur) return;
      var sel = window.getSelection();
      if (!sel.rangeCount || sel.isCollapsed) closeMenu();
    });
    // 滚动/缩放：入口重算；输入框保持并吸附在新的可视区内。
    window.addEventListener('scroll', function () {
      closeMenu(); closeObjMenu(); closeTblBtn();
      if (barEl && cur && cur.tab.type === 'et') {
        var ctx = Editors.getContext(cur.tab);
        if (ctx) { barCtx = ctx; if (ctx.type === 'chart') placeChartBar(barEl, ctx.rect); else placeFixed(barEl, ctx.rect, false); }
      }
    }, true);
    window.addEventListener('resize', function () {
      if (barEl && barCtx) { if (barCtx.type === 'chart') placeChartBar(barEl, barCtx.rect); else placeFixed(barEl, barCtx.rect, false); }
    });
  }

  /* 图片对象悬浮菜单（PRD 4.1 形态②）：首项「AI编辑」+ 原生操作图标（视觉）。
     editors.js bindWps 点选图片后调用（kind='image'，elm=图片块；null=取消选中收起） */
  LUI.onObjectSelect = function (tab, kind, elm) {
    if (!cur || cur.tab !== tab) return;
    closeObjMenu();
    if (kind !== 'image' || !elm || playing) return;
    objMenuEl = el('<div class="lui-obj-menu">' + aiEntryHtml() +
      '<span class="lui-menu-sep"></span>' +
      '<span class="lui-menu-fmt" title="裁剪（仅视觉）">' + icon('crop', 16) + '</span>' +
      '<span class="lui-menu-fmt" title="替换（仅视觉）">' + icon('replace_pic', 16) + '</span>' +
      '<span class="lui-menu-fmt" title="对齐（仅视觉）">' + icon('align_center', 16) + '</span>' +
    '</div>');
    document.body.appendChild(objMenuEl);
    placeFixed(objMenuEl, elm.getBoundingClientRect(), true); // 图片上方
    objMenuEl.addEventListener('mousedown', function (e) { e.preventDefault(); }); // 不抢图片选中态
    objMenuEl.querySelector('.lui-ai-btn').addEventListener('click', function () {
      var ctx = Editors.getContext(cur.tab); // image 场景（is-selected 在）
      if (ctx) openBar(ctx, '');
    });
  };

  /* 表格区选小按钮（PRD 4.1 形态③）：区选完成只先出轻量入口（选区左下角「AI编辑」单按钮胶囊），
     点击才唤起输入框（表格场景 chips）；单格/无区选不出。
     wps 内嵌表格：bindWps 区选 mouseup 后调用（tab.doc.tblSel 已写）；
     et：bindEt 的 document mouseup 落定后调用（读 tab.doc.selRange）。 */
  LUI.onTblRangeSel = function (tab) {
    if(document.body.classList.contains('is-et-range-picking')){closeTblBtn();return;}
    if (!cur || cur.tab !== tab || playing || barEl) return; // 输入框已开：不再出/重建按钮
    if (tab.type === 'et' && (!storedOn(ET_ENTRY_SETTING) || !window.Agent)) return;
    /* ↑ 不再要求侧边栏展开：侧边栏收起时也要有入口，点了照样出画布输入框，发完再把侧边栏带出来。 */
    if (tblBtnEl) return; // 按钮已在且区选未变（含按钮自身点击前的 mouseup）：不重建，重建会让 click 无法派发
    closeTblBtn();
    var m = tab.doc;
    var cell = null, rng = null, bi = -1;
    if (tab.type === 'wps') {
      if (!m.tblSel) return;
      bi = m.tblSel.blockIdx;
      rng = m.tblSel;
      var tbl = cur.docEl.childNodes[bi];
      var tr = tbl && tbl.rows && tbl.rows[rng.r2];
      cell = tr && tr.cells[rng.c1]; // 选区左下角格
    } else { // et：selRange 非空即区选（单选 selRange=null）
      if (!m.selRange) return;
      rng = m.selRange;
      var etCtx = Editors.getContext(tab);
      if (!etCtx || etCtx.type !== 'cells') return;
      var rangeKey = 'cells:' + etCtx.a1;
      if (m.etAiSentKey === rangeKey) return; // 当前选区已发送：入口隐藏，直到选区变化
      cell = cur.root.querySelector('td[data-r="' + rng.r2 + '"][data-c="' + rng.c2 + '"]');
    }
    if (!cell) return;
    var rect = cell.getBoundingClientRect();
    /* 表格圈选入口固定为灵犀头像，独立打开画布输入框。 */
    tblBtnEl = el('<div class="lui-tbl-btn' + (tab.type === 'et' ? ' lui-et-tbl-btn' : '') + '">' + (tab.type === 'et' ? etIconEntryHtml() : aiEntryHtml()) + '</div>');
    document.body.appendChild(tblBtnEl);
    tblBtnEl.style.left = Math.max(8, Math.min(rect.right + 6, window.innerWidth - tblBtnEl.offsetWidth - 8)) + 'px';
    var entryTop = rect.bottom + 6;
    if (entryTop + tblBtnEl.offsetHeight > window.innerHeight - 8) entryTop = rect.top - tblBtnEl.offsetHeight - 6;
    tblBtnEl.style.top = Math.max(8, Math.min(entryTop, window.innerHeight - tblBtnEl.offsetHeight - 8)) + 'px';
    tblBtnEl.addEventListener('mousedown', function (e) { e.preventDefault(); }); // 不塌选区
    if (tab.type === 'et') setupEtEntryHover(tblBtnEl.querySelector('.lui-et-entry'));
    tblBtnEl.querySelector('.lui-ai-btn').addEventListener('click', function () {
      var ctx = tab.type === 'wps'
        ? { type: 'table', text: '', blockIdx: bi, start: 0, end: 0,
            tblRange: { r1: rng.r1, c1: rng.c1, r2: rng.r2, c2: rng.c2 }, rect: rect }
        : (Editors.getContext(tab) || fallbackCtx()); // et: 直接取 cells ctx（含 range/a1Start/rect）
      openBar(ctx, '');
    });
  };

  /* 表格选区/图表切换时清理旧入口、旧草稿和「当前选区已发送」标记。 */
  LUI.onEtSelectionChanged = function (tab) {
    if (!cur || cur.tab !== tab || tab.type !== 'et') return;
    closeTblBtn(); closeObjMenu(); closeHoverTip();
    var ctx = Editors.getContext(tab);
    var key = etContextKey(ctx);
    if (tab.doc.etAiSentKey && tab.doc.etAiSentKey !== key) tab.doc.etAiSentKey = '';
    if (tab.doc.etAiDraft && tab.doc.etAiDraft.key !== key) tab.doc.etAiDraft = null;
    /* 换了选区（含落回单格）＝ 上一轮画布输入作废：撤掉画布草稿，
       侧边栏底部才能从「正在编辑 xx」引用块退回普通输入框，而不是一直卡在旧选区上。
       输入框还开着时不撤：那轮草稿正在被打字更新，交给 openBar/closeBar 自己管。 */
    if (!barEl && window.Agent && Agent.clearCanvasDraft) Agent.clearCanvasDraft(tab.id);
  };

  /* 入口 B：表格图表对象悬浮菜单。仅单选图表时出现，首项为「AI 编辑」。 */
  LUI.onEtChartSel = function (tab) {
    if (!cur || cur.tab !== tab || tab.type !== 'et' || playing || !storedOn(ET_ENTRY_SETTING)) return;
    closeObjMenu(); closeTblBtn();
    if (barEl && barCtx && barCtx.type === 'chart') return;
    var ctx = Editors.getContext(tab);
    if (!ctx || ctx.type !== 'chart') return;
    objMenuEl = el('<div class="lui-obj-menu lui-et-chart-menu">' +
      '<button type="button" class="lui-ai-btn lui-et-chart-ai" aria-label="AI 编辑">' + icon('lingxi_logo_m', 16) + '<span>AI 编辑</span></button>' +
      '<span class="lui-menu-sep"></span>' +
      '<button type="button" class="lui-menu-fmt lui-et-chart-tool" aria-label="图表样式" title="图表样式（仅视觉）">' + icon('chart_change_style', 16) + '<span class="lui-caret">' + icon('arrow_down_s', 12) + '</span></button>' +
      '<button type="button" class="lui-menu-fmt lui-et-chart-tool" aria-label="文字样式" title="文字样式（仅视觉）">' + icon('color_font', 16) + '<span class="lui-caret">' + icon('arrow_down_s', 12) + '</span></button>' +
      '<button type="button" class="lui-menu-fmt lui-et-chart-tool" aria-label="筛选" title="筛选（仅视觉）">' + icon('filter', 16) + '<span class="lui-caret">' + icon('arrow_down_s', 12) + '</span></button>' +
      '<span class="lui-menu-sep"></span>' +
      '<button type="button" class="lui-menu-fmt lui-et-chart-tool" aria-label="填充颜色" title="填充颜色（仅视觉）">' + icon('color_paint', 16) + '<span class="lui-caret">' + icon('arrow_down_s', 12) + '</span></button>' +
      '<button type="button" class="lui-menu-fmt lui-et-chart-tool" aria-label="轮廓颜色" title="轮廓颜色（仅视觉）">' + icon('color_border', 16) + '<span class="lui-caret">' + icon('arrow_down_s', 12) + '</span></button>' +
      '<button type="button" class="lui-menu-fmt lui-et-chart-tool" aria-label="格式刷" title="格式刷（仅视觉）">' + icon('brush', 16) + '<span class="lui-caret">' + icon('arrow_down_s', 12) + '</span></button>' +
      '<span class="lui-menu-sep"></span>' +
      '<button type="button" class="lui-menu-fmt lui-et-chart-tool" aria-label="图表设置" title="图表设置（仅视觉）">' + icon('setup', 16) + '</button></div>');
    document.body.appendChild(objMenuEl);
    placeFixed(objMenuEl, ctx.rect, true);
    objMenuEl.addEventListener('mousedown', function (e) { e.preventDefault(); });
    setupEtEntryHover(objMenuEl.querySelector('.lui-et-chart-ai'), '告诉 AI 你的需求，帮你编辑、美化或分析当前图表。');
    objMenuEl.querySelector('.lui-ai-btn').addEventListener('click', function () {
      openBar(ctx, '');
    });
  };

  /* 取不到 Selection 时的兜底位置：页面/网格/舞台居中偏下 */
  function fallbackCtx() {
    var page = cur.root.querySelector(PAGE_SEL[cur.tab.type]);
    var r = (page || cur.editorMain).getBoundingClientRect();
    var cy = r.top + r.height * 0.62;
    return { type: 'cursor', text: '', blockIdx: -1, start: 0, end: 0,
      rect: { left: r.left + r.width / 2, right: r.left + r.width / 2, top: cy, bottom: cy + 8, width: 0, height: 0 } };
  }

  /* wpp 对象悬浮菜单（PRD 4.1 形态②）：editors.js bindWpp 的 paintSel 包装在每次选中变化后调用。
     首项「AI编辑」+ 按首个元素类型给原生操作图标（视觉）；多选作用于整个选中集；取消选中即收 */
  var lastObjKey = '';
  LUI.onWppSel = function (tab) {
    if (!cur || cur.tab !== tab || tab.type !== 'wpp') return;
    var ids = (tab.doc.selIds || []).slice();
    var key = ids.join(',');
    if (!ids.length || playing) { lastObjKey = ''; closeObjMenu(); return; }
    if (barEl) return; // 输入框已开（如框选直接出框），不再叠菜单
    if (objMenuEl && key === lastObjKey) return; // 同一次选中的重复 paint（拖动跟随），不重建
    lastObjKey = key;
    closeObjMenu();
    var ctx = Editors.getContext(tab);
    if (!ctx || ctx.type !== 'elements') return;
    var e0 = (tab.doc.slides[tab.doc.current].elements || []).filter(function (e) { return e.id === ids[0]; })[0] || {};
    var ops = { text: ['align_center', 'font_size_increase'], image: ['crop', 'replace_pic'] }[e0.type]
      || ['design_mode_24', 'brush'];
    objMenuEl = el('<div class="lui-obj-menu">' + aiEntryHtml() +
      '<span class="lui-menu-sep"></span>' +
      ops.map(function (ic) { return '<span class="lui-menu-fmt" title="对象操作（仅视觉）">' + icon(ic, 16) + '</span>'; }).join('') +
    '</div>');
    document.body.appendChild(objMenuEl);
    placeFixed(objMenuEl, ctx.rect, true); // 选中集上方
    objMenuEl.addEventListener('mousedown', function (e) { e.preventDefault(); }); // 不抢选中态
    objMenuEl.querySelector('.lui-ai-btn').addEventListener('click', function () { openBar(ctx, ''); });
  };

  /* 自由框选完成（PRD 4.1 形态④，editors.js 拖框松开后调用）：
     wpp = 命中元素已进 selIds（elements 场景）；pdf = 区域（region 场景）。框下方直接出输入框 */
  LUI.onLasso = function (tab, rect) {
    if (!cur || cur.tab !== tab || playing) return;
    var ctx;
    if (tab.type === 'wpp') {
      ctx = Editors.getContext(tab); // elements（selIds 已由框选写入）
      if (!ctx) return;
    } else {
      ctx = { type: 'region', text: '', blockIdx: -1, start: 0, end: 0, rect: rect };
    }
    ctx.rect = rect; // 输入框锚定框下方
    openBar(ctx, '');
  };

  /* pdf 整页入口（与演示缩略图一致）：hover 页面右上 icon → 输入框锚定 icon 下方，page 场景 chips */
  LUI.onPdfPage = function (tab, rect) {
    if (!cur || cur.tab !== tab || playing) return;
    openBar({ type: 'page', text: '本页', blockIdx: -1, start: 0, end: 0, rect: rect }, '');
  };

  /* 缩略图整页入口（演示特有）：主画布已切到该页（editors 侧完成），输入框贴着该缩略图卡片下方。
     rect 由调用方传入（editors 在切页重建缩略图 DOM 前已取好，避免取到脱离文档节点的全 0 rect） */
  LUI.onPageEntry = function (tab, rect, i) {
    if (!cur || cur.tab !== tab || playing) return;
    // ids = 该页全部元素（整页粒度动作 美化本页/改写本页文案 经 editor-api 注入坐标用）
    var ids = (tab.doc.slides[i].elements || []).map(function (e) { return e.id; });
    openBar({ type: 'page', text: '第 ' + (i + 1) + ' 页', pageIdx: i, ids: ids, blockIdx: -1, start: 0, end: 0,
      rect: rect }, '');
  };

  /* ════════════ 划词浮动菜单 ════════════ */

  /* 格式行单个按钮/下拉/分隔线 → HTML */
  function fmtHtml(item) {
    if (item === 'sep') return '<span class="lui-menu-sep"></span>';
    if (item.dd) { // 字体/字号静态下拉
      return '<span class="lui-menu-dd">' + esc(item.dd) + icon('arrow_down_s', 12) + '</span>';
    }
    return '<span class="lui-menu-fmt" title="' + esc(item.title) + '"' +
      (item.cmd ? ' data-cmd="' + item.cmd + '"' : '') + '>' +
      icon(item.icon, 16) + (item.caret ? '<span class="lui-caret">' + icon('arrow_down_s', 12) + '</span>' : '') +
      '</span>';
  }

  /* 「✨ 编辑」入口按钮：划词菜单 AI 行首项 / 对象菜单首项 / 区选小按钮 / pdf 菜单，四处统一形态（PRD 4.1）。
     图标用灵犀彩色渐变 logo（lingxi_logo_m），与侧边栏/ribbon 品牌一致；文字用低饱和 AI 紫（--kd-color-ai-normal） */
  function aiEntryHtml() {
    return '<span class="lui-ai-btn">' + icon('lingxi_logo_m', 16) + '<span class="lui-ai-label">编辑</span></span>';
  }

  /* 灵犀头像始终打开画布输入框，与侧边栏开合和草稿无关。 */
  function etIconEntryHtml() {
    return '<button type="button" class="lui-ai-btn lui-et-entry" aria-label="AI 编辑">' + icon('lingxi_logo_m', 16) + '</button>';
  }

  function setEtEntryEnabled(on) {
    storeOn(ET_ENTRY_SETTING, on);
    closeHoverTip(); closeTblBtn(); closeObjMenu();
    if (!on) { if (barEl && cur && cur.tab.type === 'et') closeBar('feature-off'); return; }
    if (!cur || cur.tab.type !== 'et') return;
    var ctx = Editors.getContext(cur.tab);
    if (ctx && ctx.type === 'chart') LUI.onEtChartSel(cur.tab);
    else if (ctx && ctx.type === 'cells') LUI.onTblRangeSel(cur.tab);
  }

  function closeHoverTip() {
    if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
    if (hoverTipEl) { hoverTipEl.remove(); hoverTipEl = null; }
  }

  function setupEtEntryHover(anchor, description) {
    if (!anchor) return;
    var scheduleClose = function () { setTimeout(function () {
      if (hoverTipEl && !hoverTipEl.matches(':hover') && !anchor.matches(':hover')) closeHoverTip();
    }, 200); };
    anchor.addEventListener('mouseenter', function () {
      if (hoverTimer || hoverTipEl) return;
      hoverTimer = setTimeout(function () {
        hoverTimer = null;
        if (!anchor.isConnected) return;
        hoverTipEl = el('<div class="lui-entry-tip" role="tooltip">' +
          '<div class="lui-entry-tip-title">' + 'AI 编辑' + '</div>' +
          '<div class="lui-entry-tip-desc">' + (description || '选中区域后，用一句话让 AI 帮你处理') + '</div>' +
          '<div class="lui-entry-tip-sep"></div>' +
          '<div class="lui-entry-setting">' + icon('setup', 16) + '<span>设置</span>' + icon('arrow_right_s', 12) +
            '<div class="lui-entry-submenu"><button type="button" data-close-et-entry>关闭快捷入口</button>' +
            '<div class="lui-entry-tip-sep"></div><span>可在 <button type="button" data-open-et-settings>WPS AI 设置</button> 中重新开启</span></div>' +
          '</div></div>');
        document.body.appendChild(hoverTipEl);
        var r = anchor.getBoundingClientRect();
        placeFixed(hoverTipEl, r, r.bottom > window.innerHeight / 2);
        hoverTipEl.addEventListener('mouseenter', function () {});
        hoverTipEl.addEventListener('mouseleave', scheduleClose);
        hoverTipEl.querySelector('[data-close-et-entry]').addEventListener('click', function () { setEtEntryEnabled(false); });
        hoverTipEl.querySelector('[data-open-et-settings]').addEventListener('click', function () { showEtSettings(); });
      }, 500);
    });
    anchor.addEventListener('mouseleave', scheduleClose);
  }

  function closeSettings() { if (settingsEl) { settingsEl.remove(); settingsEl = null; } }

  function showEtSettings() {
    closeHoverTip(); closeSettings();
    settingsEl = el('<div class="lui-et-settings" role="region" aria-label="WPS AI 设置">' +
      '<div class="lui-et-settings-head"><span>WPS AI 设置</span><button type="button" aria-label="关闭">' + icon('symbol_cross_two', 16) + '</button></div>' +
      '<div class="lui-et-settings-subtitle">AI 表格助手</div>' +
      '<div class="lui-et-setting-row"><span><b>显示 AI 快捷入口</b><small>选中单元格或图表后显示</small></span>' +
        '<button type="button" class="lui-setting-switch' + (storedOn(ET_ENTRY_SETTING) ? ' is-on' : '') + '" data-setting="entry" role="switch" aria-checked="' + storedOn(ET_ENTRY_SETTING) + '"><i></i></button></div>' +
      '<div class="lui-et-setting-row"><span><b>Ctrl + Ctrl 快捷唤起</b><small>在画布内打开输入框</small></span>' +
        '<button type="button" class="lui-setting-switch' + (storedOn(ET_SHORTCUT_SETTING) ? ' is-on' : '') + '" data-setting="shortcut" role="switch" aria-checked="' + storedOn(ET_SHORTCUT_SETTING) + '"><i></i></button></div></div>');
    document.body.appendChild(settingsEl);
    settingsEl.querySelector('.lui-et-settings-head button').addEventListener('click', closeSettings);
    Array.prototype.forEach.call(settingsEl.querySelectorAll('.lui-setting-switch'), function (sw) {
      sw.addEventListener('click', function () {
        var on = !sw.classList.contains('is-on');
        sw.classList.toggle('is-on', on); sw.setAttribute('aria-checked', String(on));
        if (sw.getAttribute('data-setting') === 'entry') setEtEntryEnabled(on);
        else storeOn(ET_SHORTCUT_SETTING, on);
      });
    });
  }

  /* pdf 划词菜单：单行 AI 行（阅读器不出格式行；直执行项全为交付类，拉侧边栏） */
  function showPdfMenu(ctx) {
    closeFloats();
    var html = '<div class="lui-menu"><div class="lui-menu-row">' + aiEntryHtml() + '<span class="lui-menu-sep"></span>';
    PDF_MENU_ITEMS.forEach(function (it, i) {
      html += '<span class="lui-menu-item" data-pi="' + i + '">' + esc(it.label) + '</span>';
    });
    html += '</div></div>';
    menuEl = el(html);
    document.body.appendChild(menuEl);
    placeFixed(menuEl, ctx.rect, true);
    menuEl.addEventListener('mousedown', function (e) { e.preventDefault(); });
    menuEl.querySelector('.lui-ai-btn').addEventListener('click', function () { openBar(ctx, ''); });
    Array.prototype.forEach.call(menuEl.querySelectorAll('[data-pi]'), function (itemEl) {
      itemEl.addEventListener('click', function () {
        submit(ctx, PDF_MENU_ITEMS[+itemEl.getAttribute('data-pi')].label);
      });
    });
  }

  function showMenu(ctx) {
    closeFloats();
    // 三行浮动工具栏（对齐 docs/screenshots/划词菜单.png）：格式行 ×2 + AI 行（首项「AI编辑」出输入框，其余直执行）
    var html = '<div class="lui-menu">' +
      '<div class="lui-menu-row">' + MENU_ROW1.map(fmtHtml).join('') + '</div>' +
      '<div class="lui-menu-row">' + MENU_ROW2.map(fmtHtml).join('') + '</div>' +
      '<div class="lui-menu-row lui-menu-row-ai">' + aiEntryHtml() + '<span class="lui-menu-sep"></span>';
    MENU_ITEMS.forEach(function (it, i) {
      html += '<span class="lui-menu-item" data-i="' + i + '">' + esc(it.label) + '</span>';
    });
    html += '<span class="lui-menu-item" data-more="1">' + icon('more', 16) + '</span></div></div>';
    menuEl = el(html);
    document.body.appendChild(menuEl);
    placeFixed(menuEl, ctx.rect, true); // 默认放选区上方，放不下则下方

    /* 菜单上按下鼠标不抢走文档焦点/选区（execCommand 与划词选区都依赖它） */
    menuEl.addEventListener('mousedown', function (e) { e.preventDefault(); });
    /* B/I/U 真做（contenteditable 原生支持，input 事件会触发模型回写，textContent 口径不变） */
    Array.prototype.forEach.call(menuEl.querySelectorAll('[data-cmd]'), function (btn) {
      btn.addEventListener('click', function () { document.execCommand(btn.getAttribute('data-cmd')); });
    });
    menuEl.querySelector('.lui-ai-btn').addEventListener('click', function () { openBar(ctx, ''); });
    menuEl.querySelector('[data-more]').addEventListener('click', function () { openBar(ctx, ''); });
    /* 快捷能力：点击直接按默认版本执行，不展开输入框 */
    Array.prototype.forEach.call(menuEl.querySelectorAll('[data-i]'), function (itemEl) {
      itemEl.addEventListener('click', function () {
        var it = MENU_ITEMS[+itemEl.getAttribute('data-i')];
        submit(ctx, it.send.replace('{sel}', ctx.text));
      });
    });
  }

  /* ════════════ 单行输入框 + chips ════════════ */

  /* opts: { bare: 不带 chips（补充要求形态）, cover: 覆盖定位锚 rect（决策条位置）, onBack: 返回按钮回调 } */
  function openBar(ctx, prefill, opts) {
    opts = opts || {};
    closeFloats('replace');
    barCtx = ctx;
    /* 选区保持：焦点进输入框后原生选区会消失，先在文内包 .lui-keep-sel 浅底（closeBar 时还原）。
       spans 覆盖选区涉及的全部块/单元格（全选、跨段都能完整保持）。
       ★ 顺序：ctx 坐标已在 getContext 时从模型算好，包 span 不改 textContent，rewriteRange 不受影响 */
    if (ctx.type === 'selection' && ctx.spans && ctx.spans.length) {
      Editors.setKeepSel(cur.tab, ctx.spans, true);
      keepSelRef = ctx.spans;
    }
    var chips = opts.bare ? null : chipsForContext(ctx);
    if (chips && !chips.length) chips = null; // 该场景无推荐 → chips 区整体不渲染
    var etComposer = cur.tab.type === 'et';
    barEl = el(
      '<div class="lui-bar' + (etComposer ? ' lui-et-composer' : '') + '">' +
        '<div class="lui-bar-card">' +
          (opts.onBack
            ? '<button type="button" class="lui-bar-back" title="返回">' + icon('arrow_left_s', 16) + '</button>'
            : etComposer ? '<button type="button" class="lui-et-add" aria-label="添加附件" title="添加附件">'+etCanvasIcon('symbol_cross')+'</button>' : '') +
          '<textarea class="lui-bar-input" rows="1" placeholder="' + esc(placeholderFor(ctx)) + '" spellcheck="false"></textarea>' +
          (etComposer && chips ? '<div class="lui-chips lui-et-inline-chips" aria-label="推荐指令"></div>' : '') +
          '<button type="button" class="lui-bar-send" title="发送" aria-label="发送" disabled>' + (etComposer ? etCanvasIcon('arrow_up_tail_l') : icon('paper_plane', 16)) + '</button>' +
        '</div>' +
        (!etComposer && chips ? '<div class="lui-chips-row"><div class="lui-chips"></div></div>' : '') +
        (etComposer ? '<input type="file" class="lui-et-file-input" multiple hidden><div class="lui-et-file-note" role="status" hidden></div>' : '') +
      '</div>');
    document.body.appendChild(barEl);
    if (opts.cover) placeCover(barEl, opts.cover); // 覆盖在锚元素位置（补充要求覆盖决策条）
    else if (cur.tab.type === 'et' && ctx.type === 'chart') placeChartBar(barEl, ctx.rect);
    else placeFixed(barEl, ctx.rect, !!opts.above); // 默认放选区/光标下方；opts.above=锚上方（缩略图整页入口）

    var input = barEl.querySelector('.lui-bar-input');
    var sendBtn = barEl.querySelector('.lui-bar-send');
    // 光标态唤起（双击 Ctrl/Cmd 等）：焦点进输入框后文内光标看不见，在唤起位置放一个闪烁光标标记
    if (ctx.type === 'cursor' && cur.tab.type === 'wps' && ctx.rect) {
      caretEl = el('<span class="lui-caret-blink"></span>');
      caretEl.style.left = ctx.rect.left + 'px';
      caretEl.style.top = ctx.rect.top + 'px';
      caretEl.style.height = (ctx.rect.height || 16) + 'px';
      document.body.appendChild(caretEl);
    }
    var draft = cur.tab.type === 'et' && cur.tab.doc.etAiDraft && cur.tab.doc.etAiDraft.key === etContextKey(ctx)
      ? cur.tab.doc.etAiDraft.text : '';
    input.value = prefill || draft || '';
    /* 只记录画布输入状态，侧边栏草稿和输入框形态保持原状。 */
    if (cur.tab.type === 'et' && window.Agent && Agent.beginCanvasInput) Agent.beginCanvasInput(cur.tab.id, ctx, input.value);
    sendBtn.disabled = !input.value.trim();
    autoGrowInput(input);
    input.focus();
    input.select();

    var backBtn = barEl.querySelector('.lui-bar-back');
    if (backBtn) backBtn.addEventListener('click', function () { closeBar(); opts.onBack(); }); // 返回：不发送、不改动
    input.addEventListener('input', function () {
      sendBtn.disabled = !input.value.trim();
      autoGrowInput(input);
      if (cur.tab.type === 'et' && window.Agent) Agent.updateCanvasDraft(cur.tab.id, ctx, input.value);
    });
    input.addEventListener('keydown', function (e) {
      if (etComposer && e.key === 'Tab' && input.value.trim()) return;
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing && input.value.trim()) { // Shift+Enter 换行；isComposing 防中文输入法误发
        e.preventDefault();
        submit(ctx, input.value.trim());
      } else if (e.key === 'Tab' && !e.shiftKey && chips) {
        var firstChip = barEl.querySelector('.lui-chip');
        if (firstChip) { e.preventDefault(); firstChip.focus(); }
      }
    });
    sendBtn.addEventListener('click', function () { if (input.value.trim()) submit(ctx, input.value.trim()); });

    if (chips) paintChips(barEl.querySelector('.lui-chips'), chips, ctx, input, sendBtn);
    if (etComposer) {
      var panel = barEl, add = panel.querySelector('.lui-et-add'), fileInput = panel.querySelector('.lui-et-file-input');
      if (!chips) panel.classList.toggle('is-empty', !input.value.trim());
      input.addEventListener('input', function () { if (!chips) panel.classList.toggle('is-empty', !input.value.trim()); });
      if (add) add.addEventListener('click', function () { fileInput.click(); });
      fileInput.addEventListener('change', function () {
        var note = panel.querySelector('.lui-et-file-note');
        note.textContent = fileInput.files.length ? '已选择：'+Array.from(fileInput.files).map(function (file) { return file.name; }).join('、') : '';
        note.hidden = !fileInput.files.length;
      });
    }
  }

  function autoGrowInput(input) {
    input.style.height = '22px';
    input.style.height = Math.min(input.scrollHeight, 88) + 'px';
    input.style.overflowY = input.scrollHeight > 88 ? 'auto' : 'hidden';
  }

  /* ET 推荐由真实输入驱动：空态一级内嵌，精确回到一级文案时显示二级菜单。 */
  function paintEtChips(box, chips, ctx, input, sendBtn) {
    var panel = box.closest('.lui-bar'), selected = -1;
    panel.classList.add('has-recommendations');
    box.innerHTML = '<div class="lui-chip-list">'+chips.map(function (chip,i) {
      return '<button type="button" class="lui-chip" data-i="'+i+'"'+(chip.subs?' aria-haspopup="menu" aria-expanded="false"':'')+'>'+esc(chip.label)+'</button>';
    }).join('')+'</div>';
    var subs = document.createElement('div'); subs.className = 'kd-menu lui-et-submenu'; subs.setAttribute('role','menu'); subs.setAttribute('aria-label','二级推荐指令'); subs.hidden = true; panel.appendChild(subs);
    subs.id = 'lui-et-suggestions-' + (++etCanvasIconSequence);
    box.querySelectorAll('[aria-haspopup]').forEach(function (button) { button.setAttribute('aria-controls', subs.id); });
    function sync() {
      var text = input.value.trim(), normalized = text.replace(/[，,：:\s]+$/,'');
      panel.classList.toggle('is-empty', !text); sendBtn.disabled = !text;
      var index = text ? chips.findIndex(function (chip) { return !!chip.subs && normalized === (chip.prompt || chip.label); }) : -1;
      box.querySelectorAll('[aria-haspopup]').forEach(function (button) { button.setAttribute('aria-expanded', String(+button.getAttribute('data-i') === index)); });
      if (index < 0) { subs.hidden = true; selected = -1; return; }
      if (index !== selected || subs.hidden) {
        selected = index;
        subs.innerHTML = chips[index].subs.map(function (sub,i) { var item = typeof sub === 'string' ? {label:sub} : sub;
          return '<button type="button" class="kd-menu-item lui-et-sub-item" role="menuitem" data-sub="'+i+'">'+etCanvasIcon('ai_edit')+'<span>'+esc(item.label)+'</span></button>';
        }).join('');
        subs.hidden = false;
      }
      subs.classList.remove('is-above');
      if (panel.getBoundingClientRect().bottom + subs.offsetHeight + 4 > innerHeight - 8) subs.classList.add('is-above');
    }
    box.addEventListener('mousedown', function (e) { e.preventDefault(); });
    box.addEventListener('click', function (e) {
      var button = e.target.closest('[data-i]'); if (!button) return;
      input.value = chips[+button.getAttribute('data-i')].prompt || chips[+button.getAttribute('data-i')].label;
      input.dispatchEvent(new Event('input')); input.focus(); input.setSelectionRange(input.value.length,input.value.length);
    });
    subs.addEventListener('mousedown', function (e) { e.preventDefault(); });
    subs.addEventListener('click', function (e) {
      var button=e.target.closest('[data-sub]'); if(!button || selected<0)return;
      var chip=chips[selected],sub=chip.subs[+button.getAttribute('data-sub')];
      input.value=typeof sub==='string'?(chip.prompt||chip.label)+'，'+sub:sub.prompt;
      input.dispatchEvent(new Event('input'));input.focus();input.setSelectionRange(input.value.length,input.value.length);
    });
    input.addEventListener('input',sync);
    input.addEventListener('keydown',function(e){
      if(e.key==='ArrowDown'&&!subs.hidden){var first=subs.querySelector('[role="menuitem"]');if(first){e.preventDefault();first.focus();}}
    });
    subs.addEventListener('keydown',function(e){
      if(['ArrowDown','ArrowUp','Home','End'].indexOf(e.key)<0)return;
      e.preventDefault();var items=Array.from(subs.querySelectorAll('[role="menuitem"]')),i=items.indexOf(document.activeElement);
      if(e.key==='Home')i=0;else if(e.key==='End')i=items.length-1;else i=(i+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items[i].focus();
    });
    sync();
  }

  function paintChips(box, chips, ctx, input, sendBtn) {
    if (cur.tab.type === 'et') { paintEtChips(box, chips, ctx, input, sendBtn); return; }
    var keepSelState = cur.tab.type !== 'et'; // 表格：无选中态，只回填
    box.innerHTML = '<div class="lui-chip-list">' + chips.map(function (c, i) {
      return '<button type="button" class="lui-chip" data-i="' + i + '">' + esc(c.label) + '</button>';
    }).join('') + '</div>';
    Array.prototype.forEach.call(box.querySelectorAll('.lui-chip'), function (chipEl) {
      chipEl.addEventListener('click', function () {
        var chip = chips[+chipEl.getAttribute('data-i')];
        var prompt = chip.prompt || chip.label;
        input.value = prompt;
        sendBtn.disabled = false;
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
        input.dispatchEvent(new Event('input')); // chip 回填 = 画布输入：同步发送态与侧边栏「正在编辑」引用
        if (keepSelState) { // 表格：跳过 is-open，chip 点击后回到常态
          Array.prototype.forEach.call(box.querySelectorAll('.lui-chip'), function (x) { x.classList.remove('is-open'); });
          chipEl.classList.add('is-open');
        }
        var oldSubs = box.querySelector('.lui-sub-list');
        if (oldSubs) oldSubs.remove();
        if (!chip.subs) { box.classList.remove('is-sub'); return; }
        box.classList.add('is-sub');
        box.insertAdjacentHTML('beforeend', '<div class="lui-sub-list">' +
          chip.subs.map(function (s) {
            return '<button type="button" class="lui-sub-chip" data-s="' + esc(s) + '">' + icon('arrow_right_up', 12) + esc(s) + '</button>';
          }).join('') + '</div>');
        Array.prototype.forEach.call(box.querySelectorAll('.lui-sub-chip'), function (subEl) {
          subEl.addEventListener('click', function () {
            input.value = prompt + '，' + subEl.getAttribute('data-s');
            Array.prototype.forEach.call(box.querySelectorAll('.lui-sub-chip'), function (x) { x.classList.remove('is-open'); });
            subEl.classList.add('is-open');
            input.focus();
            input.setSelectionRange(input.value.length, input.value.length);
            input.dispatchEvent(new Event('input')); // 与一级 chip 一致：回填也同步画布草稿
          });
        });
      });
    });
    var chipEls = box.querySelectorAll('.lui-chip');
    if (chipEls.length) chipEls[chipEls.length - 1].addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && !e.shiftKey) { e.preventDefault(); sendBtn.focus(); }
    });
  }

  /* ════════════ 分流与文内流程 ════════════ */

  function submit(ctx, text) {
    var submitTab = cur && cur.tab;
    if (submitTab && submitTab.type === 'et' && window.Agent && Agent.resolveCanvasSubmit) {
      var resolved = Agent.resolveCanvasSubmit(submitTab.id, text, ctx);
      if (resolved.handled) {
        submitTab.doc.etAiDraft = null;
        closeFloats('handoff');
        return;
      }
      text = resolved.text;
    }
    if (submitTab && submitTab.type === 'et') {
      submitTab.doc.etAiSentKey = etContextKey(ctx);
      submitTab.doc.etAiDraft = null;
    }
    closeFloats('send'); // 含 closeBar → 还原 .lui-keep-sel
    if (!text || !cur) return;
    acceptPending(); // 新一轮输入默认采纳上一轮：保留内容、清高亮/决策条，保证只有一批 pending
    var script = routeInline(text);
    /* 转侧边栏两种情形（原则：改动文内→文内闭环；只产出内容不动文内→侧边栏承载）：
       1) 侧边栏已拉起；2) 剧本标了 deliver:'sidebar'（交付类请求，如图片解释/提取内容）。
       该链路消息只由侧边栏 play 产生，不 record（record 只用于文内闭环完成的任务沉淀） */
    if (cur.tab.type === 'et' || script.deliver === 'sidebar' || (window.Agent && Agent.isOpen())) {
      goSidebar(ctx, text);
      return;
    }
    playInline(ctx, text, script);
  }

  /* 转侧边栏：展开（若折叠）+ sendText 播放（带 ctx 供 action 坐标注入） */
  function goSidebar(ctx, text) {
    var sourceTab = cur.tab;
    if (!Agent.isOpen()) Agent.toggle();
    var contextText = '';
    if (cur.tab.type === 'et' && ctx.type === 'cells') contextText = '\n选区：Sheet1!' + ctx.a1;
    if (cur.tab.type === 'et' && ctx.type === 'chart') contextText = '\n图表：' + ctx.chartName + ' · 数据源：Sheet1!' + ctx.dataRange;
    if (cur.tab.type === 'et' && ctx.type === 'cursor') contextText = '\n位置：Sheet1!' + ctx.a1Start;
    Agent.sendText(cur.tab.id, text + contextText, ctx);
    if (cur.tab.type === 'et' && ctx.type === 'chart' && storedOn(ET_ENTRY_SETTING)) {
      setTimeout(function () {
        if (cur && cur.tab === sourceTab && sourceTab.doc.chartSelected) LUI.onEtChartSel(sourceTab);
      }, 300);
    }
  }

  /* 还有未决 pendingAi 时先自动采纳：内容保留，高亮/批注栏/决策条清掉（重渲染，LUI.init 会重建 cur） */
  function acceptPending() {
    var d = cur.tab.doc;
    if (!d || !d.pendingAi) return;
    d.pendingAi = null;
    d.luiDecision = false;
    Editors.render(cur.root, cur.tab);
  }

  /* 关键词路由：命中当前组件的文内剧本；否则兜底 */
  function routeInline(text) {
    var conf = window.LUI_SCRIPTS[cur.tab.type] || window.LUI_SCRIPTS.wps;
    var lower = text.toLowerCase();
    for (var i = 0; i < conf.scripts.length; i++) {
      var sc = conf.scripts[i];
      for (var j = 0; j < sc.match.length; j++) {
        if (lower.indexOf(sc.match[j].toLowerCase()) >= 0) return sc;
      }
    }
    return conf.fallback;
  }

  function playInline(ctx, userText, script) {
    closeDecision(); // 面板与决策条都在底部，播放时先收条（luiDecision 标志保留，播完重新出）
    var tab = cur.tab;
    var id = ++playSeq;
    playing = { id: id, stopped: false, askResolve: null };
    // state 跨 ask 分支共享：tools=已执行 tool_call 文案（沉淀摘要用），doneText=最终回复
    var state = { tools: [], doneText: '', sidebarText: null, customText: null };

    panelEl = el(
      '<div class="lui-panel">' +
        '<div class="lui-panel-steps"></div>' +
        '<div class="lui-panel-foot">' +
          '<span class="lui-panel-star">' + icon('animation_path_four_pointed_star_display', 16) + '</span>' +
          '<span class="lui-panel-working ag-shimmer">WPS AI 正在工作</span>' +
          '<button type="button" class="lui-stop" title="停止"><i></i></button>' +
        '</div>' +
      '</div>');
    cur.editorMain.appendChild(panelEl);
    // 停止：中断播放收面板；已应用的改动保留，出决策条
    panelEl.querySelector('.lui-stop').addEventListener('click', function () {
      if (!playing) return;
      playing.stopped = true;
      if (playing.askResolve) { playing.askResolve(null); playing.askResolve = null; }
    });

    runSteps(ctx, script.steps, id, state).then(function () {
      if (!playing || playing.id !== id) return; // 已被切 tab/新任务打断
      playing = null;
      closePanel();
      var d = tab.doc;
      if (state.customText != null) { submit(ctx, state.customText); return; } // 澄清卡片自定义答案 = 当新指令重新发起
      if (state.sidebarText != null) { goSidebar(ctx, state.sidebarText); return; } // 转侧边栏：不 record（去重）
      // 任务结束沉淀：指令 + 已执行步骤摘要 + 结果文本 → 灵犀会话
      Agent.record(tab.id, { userText: userText, stepLabels: state.tools,
        resultText: state.doneText || '任务已停止，已生成的改动保留在文档中。' });
      // 有未决改动（wps: 改写/表格格级/整表/批注/目录；et: 格级 cellRanges）→ 出决策条；luiCtx 记「最新改动位置」，补充要求继续改同一片
      if (d.pendingAi) {
        var lc = null;
        var p = d.pendingAi;
        if (p.ranges && p.ranges.length) {
          var lastR = p.ranges[p.ranges.length - 1];
          var blk = d.blocks[lastR.blockIdx] || {};
          lc = { type: 'selection', blockIdx: lastR.blockIdx, start: lastR.start, end: lastR.end,
            text: (blk.h || blk.p || '').slice(lastR.start, lastR.end) };
        } else if (p.cellRanges && p.cellRanges.length) {
          var cr = p.cellRanges[p.cellRanges.length - 1];
          lc = tab.type === 'et'
            ? { type: 'cells', blockIdx: -1, start: 0, end: 0, text: '', range: { r1: cr.r1, c1: cr.c1, r2: cr.r2, c2: cr.c2 } }
            : { type: 'table', blockIdx: cr.blockIdx, start: 0, end: 0, text: '' };
        } else if (p.annotations && p.annotations.length) {
          var la = p.annotations[p.annotations.length - 1];
          lc = { type: 'selection', blockIdx: la.blockIdx, start: la.start, end: la.end, text: '' };
        } else if (p.tocBlocks && p.tocBlocks.length) {
          lc = { type: 'toc', blockIdx: p.tocBlocks[p.tocBlocks.length - 1], start: 0, end: 0, text: '' };
        } else if (p.styledTables && p.styledTables.length) {
          lc = { type: 'table', blockIdx: p.styledTables[p.styledTables.length - 1], start: 0, end: 0, text: '' };
        } else if (p.elementIds && p.elementIds.length) { // wpp：元素级改动
          lc = { type: 'elements', ids: p.elementIds.slice(), blockIdx: -1, start: 0, end: 0, text: '' };
        } else if (p.imageBlocks && p.imageBlocks.length) { // wps 图片假编辑
          lc = { type: 'image', blockIdx: p.imageBlocks[p.imageBlocks.length - 1], start: 0, end: 0, text: '' };
        }
        if (lc) {
          d.luiCtx = lc;
          d.luiDecision = true;
          showDecision();
        }
      }
    });
  }

  function stopped(id) {
    return !playing || playing.id !== id || playing.stopped || !panelEl || !panelEl.isConnected;
  }

  function selShort(ctx) {
    var t = ctx.text || '';
    return t ? (t.length > 12 ? t.slice(0, 12) + '…' : t) : '（未选中文字）';
  }

  /* 逐步播放剧本（ask 分支递归进来，共享 state） */
  async function runSteps(ctx, steps, id, state) {
    var box = panelEl.querySelector('.lui-panel-steps');
    for (var i = 0; i < steps.length; i++) {
      if (stopped(id)) return;
      var def = steps[i];
      var content = (def.content || '').replace('{sel}', selShort(ctx));

      if (def.type === 'thinking') {
        await playThinking(box, content, id);
      } else if (def.type === 'tool_call') {
        await playTool(box, ctx, def, content, id, state);
      } else if (def.type === 'ask') {
        var r = await playAsk(box, def, content, id);
        if (stopped(id) || !r) return;
        if (r.custom) { state.customText = r.custom; return; } // 自定义答案 = 新指令
        var opt = r.opt;
        if (opt.sidebar) { state.sidebarText = opt.sidebar; return; }
        if (opt.steps) await runSteps(ctx, opt.steps, id, state);
      } else { // understanding / done：正文流式
        await playText(box, content, id);
        if (def.type === 'done') state.doneText = content;
      }
      if (stopped(id)) return;
      await AU().sleep(AU().GAP);
    }
  }

  /* thinking：typewrite 播思考内容，播完折叠为「思考已完成 ›」（点击可展开） */
  async function playThinking(box, content, id) {
    var node = el(
      '<div class="lui-step lui-step-thinking">' +
        '<span class="ag-thinking-head"><span class="lui-th-label">思考中…</span>' +
        '<span class="lui-th-caret">' + icon('arrow_down_s', 12) + '</span></span>' +
        '<div class="ag-thinking-body"></div>' +
      '</div>');
    box.appendChild(node);
    scrollBox(box);
    var open = true;
    var body = node.querySelector('.ag-thinking-body');
    node.querySelector('.ag-thinking-head').addEventListener('click', function () {
      open = !open;
      node.querySelector('.lui-th-label').textContent = open ? '思考中…' : '思考已完成';
      node.querySelector('.lui-th-caret').innerHTML = icon(open ? 'arrow_down_s' : 'arrow_right_s', 12);
      body.hidden = !open;
    });
    await typeText(box, body, content, id);
    open = false;
    node.querySelector('.lui-th-label').textContent = '思考已完成';
    node.querySelector('.lui-th-caret').innerHTML = icon('arrow_right_s', 12);
    body.hidden = true;
  }

  /* tool_call：shimmer 停留（节奏同侧边栏），结束时经 EditorAPI.apply 让画布真实变化。
     action 是 wps.rewriteRange 且省略坐标时注入当前选区；insertAt:'end' = 在选区末尾插入 */
  async function playTool(box, ctx, def, content, id, state) {
    var node = el(
      '<div class="lui-step lui-step-tool">' +
        '<span class="lui-tool-icon">' + icon('equipment_computer', 16) + '</span>' +
        '<span class="lui-tool-text ag-shimmer"></span>' +
      '</div>');
    node.querySelector('.lui-tool-text').textContent = content;
    box.appendChild(node);
    scrollBox(box);
    await AU().sleep(AU().toolDelay(content));
    if (stopped(id)) return;
    // 剧本 action 省略坐标时由 editor-api.js 统一注入（传唤起时捕获的 ctx；规则见其头注释）
    if (def.action && window.EditorAPI) await EditorAPI.apply(cur.tab.id, def.action, ctx);
    node.querySelector('.lui-tool-text').classList.remove('ag-shimmer');
    state.tools.push(content);
  }

  /* understanding / done：正文逐字流式（复用 .ag-dot 光标节奏） */
  async function playText(box, content, id) {
    var node = el('<div class="lui-step lui-step-text"></div>');
    box.appendChild(node);
    scrollBox(box);
    await typeText(box, node, content, id);
  }

  /* ask 澄清卡片弹窗（单选，对齐 docs/screenshots/澄清设计稿.png）：
     ask 触发时过程面板隐藏，原位置（文档区居中靠底部）替换为独立澄清卡片弹窗；
     确认=按选中项（未选=推荐项）；跳过=推荐项；自定义输入=文本当新指令。
     结束后卡片移除、面板恢复，并往步骤流回写一条「你的回答：xxx」。
     返回 { opt } / { custom } / null（停止中断）。 */
  function playAsk(box, def, content, id) {
    var optsHtml = def.options.map(function (opt, i) {
      return '<div class="lui-ask-opt" data-i="' + i + '">' +
        '<span class="lui-ask-no">' + (i + 1) + '</span>' +
        '<span class="lui-ask-label">' + esc(opt.label) + '</span>' +
        (opt.recommend ? '<span class="lui-ask-tag">推荐</span>' : '') +
        '<span class="lui-ask-desc">' + esc(opt.desc || '') + '</span>' +
      '</div>';
    }).join('');
    var card = el(
      '<div class="lui-panel lui-ask-modal">' + // 复用面板定位（文档区居中靠底部）
        '<div class="lui-ask-title"></div>' +
        '<div class="lui-ask-opts">' + optsHtml + '</div>' +
        '<div class="lui-ask-custom">' + icon('pen', 14) +
          '<input class="lui-ask-custom-input" placeholder="输入你的答案" spellcheck="false"></div>' +
        '<div class="lui-ask-foot">' +
          '<button type="button" class="lui-ask-skip">跳过</button>' +
          '<button type="button" class="lui-ask-ok">确认</button>' +
        '</div>' +
      '</div>');
    card.querySelector('.lui-ask-title').textContent = content;
    panelEl.hidden = true; // 面板隐藏，卡片弹窗替换其位置
    cur.editorMain.appendChild(card);

    var picked = -1;
    var customInput = card.querySelector('.lui-ask-custom-input');
    Array.prototype.forEach.call(card.querySelectorAll('.lui-ask-opt'), function (optEl) {
      optEl.addEventListener('click', function () { // 单选：与自定义输入互斥
        picked = +optEl.getAttribute('data-i');
        customInput.value = '';
        Array.prototype.forEach.call(card.querySelectorAll('.lui-ask-opt'), function (x) { x.classList.remove('is-sel'); });
        optEl.classList.add('is-sel');
      });
    });
    customInput.addEventListener('input', function () { // 输入自定义 → 清选项选中
      if (!customInput.value.trim()) return;
      picked = -1;
      Array.prototype.forEach.call(card.querySelectorAll('.lui-ask-opt'), function (x) { x.classList.remove('is-sel'); });
    });
    function recommended() {
      for (var i = 0; i < def.options.length; i++) if (def.options[i].recommend) return def.options[i];
      return def.options[0];
    }
    return new Promise(function (resolve) {
      if (playing) playing.askResolve = resolve; // 停止按钮可中断等待（resolve(null)）
      var done = false;
      function finish(result, answerText) {
        if (done) return;
        done = true;
        card.remove();
        panelEl.hidden = false; // 恢复过程面板
        // 用户回答回写进步骤流
        var echo = el('<div class="lui-step lui-ask-echo"></div>');
        echo.textContent = '你的回答：' + answerText;
        box.appendChild(echo);
        scrollBox(box);
        if (playing) playing.askResolve = null;
        resolve(result);
      }
      card.querySelector('.lui-ask-ok').addEventListener('click', function () {
        var custom = customInput.value.trim();
        if (custom) finish({ custom: custom }, custom);
        else {
          var opt = picked >= 0 ? def.options[picked] : recommended();
          finish({ opt: opt }, opt.label);
        }
      });
      card.querySelector('.lui-ask-skip').addEventListener('click', function () {
        var opt = recommended();
        finish({ opt: opt }, '跳过，按推荐处理：' + opt.label);
      });
      customInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); card.querySelector('.lui-ask-ok').click(); }
      });
    });
  }

  /* 逐字流式：节奏参数复用 Agent.utils；被打断时立即收尾返回 */
  function typeText(box, elm, content, id) {
    var dot = null, shown = 0;
    return new Promise(function (resolve) {
      (function tick() {
        if (stopped(id)) { if (dot) dot.remove(); resolve(); return; }
        shown = Math.min(content.length, shown + AU().TYPE_CHARS);
        elm.textContent = content.slice(0, shown);
        scrollBox(box);
        if (shown < content.length) {
          if (!dot) dot = el('<span class="ag-dot"></span>');
          elm.appendChild(dot); // 光标跟在文字尾部
          AU().sleep(AU().typeDelay()).then(tick);
        } else {
          if (dot) dot.remove();
          resolve();
        }
      })();
    });
  }

  function scrollBox(box) { box.scrollTop = box.scrollHeight; }

  /* ════════════ 决策条 ════════════ */

  function showDecision() {
    if (!cur) return;
    closeDecision();
    // 胶囊条：✓完成(AI 紫主按钮) + 撤销(图标) + 补充要求(图标) + 分隔线 + 「内容由 AI 生成」
    decisionEl = el(
      '<div class="lui-decision">' +
        '<button type="button" class="lui-btn lui-btn-primary" data-act="done">' + icon('tick_shape', 14) + '完成</button>' +
        '<button type="button" class="lui-btn lui-btn-icon" data-act="undo" title="撤销">' + icon('arrow_revoke', 16) + '</button>' +
        '<button type="button" class="lui-btn lui-btn-icon" data-act="more" title="补充要求">' + icon('bubble_add_three', 16) + '</button>' +
        '<span class="lui-decision-sep"></span>' +
        '<span class="lui-decision-tip">内容由 AI 生成</span>' +
      '</div>');
    cur.editorMain.appendChild(decisionEl);
    decisionEl.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act]');
      if (!btn) return;
      var tab = cur.tab, d = tab.doc;
      var act = btn.getAttribute('data-act');
      if (act === 'done') { // 完成：采纳改动（保留内容），清高亮/批注 + 收条，重渲染当前页
        d.pendingAi = null; d.luiDecision = false;
        Editors.render(cur.root, tab);
      } else if (act === 'undo') { // 撤销：回滚 undo 快照（wps=blocks+摘回本批批注；et=cells+cellStyles；wpp=slides）+ 收条
        var p = d.pendingAi;
        if (tab.type === 'et') {
          d.cells = p.undo.cells;
          d.cellStyles = p.undo.cellStyles;
        } else if (tab.type === 'wpp') {
          d.slides = p.undo;
        } else {
          if (p.annotations.length && d.comments) {
            d.comments.splice(d.comments.length - p.annotations.length);
          }
          d.blocks = p.undo;
        }
        d.pendingAi = null; d.luiDecision = false;
        Editors.render(cur.root, tab);
      } else if (act === 'more') {
        // 补充要求：单行输入框覆盖在决策条位置（决策条先收、同锚点出框），不带 chips；
        // 最左返回按钮回到决策条（不发送、不改动）。提交时按「新一轮默认采纳上一轮」处理（submit → acceptPending）
        var rect = decisionEl.getBoundingClientRect();
        var lc = d.luiCtx || { type: 'cursor', text: '', blockIdx: -1, start: 0, end: 0 };
        // 锚点 rect：wps=块元素；et=选区左下角格
        var anchorRect = fallbackCtx().rect;
        if (lc.type === 'cells' && lc.range) {
          var ctd = cur.root.querySelector('td[data-r="' + lc.range.r2 + '"][data-c="' + lc.range.c1 + '"]');
          if (ctd) anchorRect = ctd.getBoundingClientRect();
        } else if (lc.blockIdx >= 0 && cur.docEl) {
          var bnode = cur.docEl.childNodes[lc.blockIdx];
          if (bnode && bnode.nodeType === 1) anchorRect = bnode.getBoundingClientRect();
        }
        var spans = lc.blockIdx >= 0 && lc.end > lc.start ? [{ blockIdx: lc.blockIdx, start: lc.start, end: lc.end }] : [];
        closeDecision();
        openBar({ type: lc.type, text: lc.text, blockIdx: lc.blockIdx, start: lc.start, end: lc.end,
          range: lc.range, spans: spans, rect: anchorRect }, '', { bare: true, cover: rect, onBack: function () { showDecision(); } });
      }
    });
  }

  /* ════════════ 浮层工具 ════════════ */

  /* fixed 定位：preferAbove=true 默认放 rect 上方（划词菜单），否则下方（输入框）；放不下自动翻面，左右钳在视口内 */
  function placeFixed(elm, rect, preferAbove) {
    var w = elm.offsetWidth, h = elm.offsetHeight;
    var left = preferAbove ? rect.left : rect.left + rect.width / 2 - w / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    var top = preferAbove ? rect.top - h - 8 : rect.bottom + 8;
    if (preferAbove && top < 8) top = rect.bottom + 8;
    if (!preferAbove && top + h > window.innerHeight - 8) top = Math.max(8, rect.top - h - 8);
    top = Math.max(8, Math.min(top, window.innerHeight - h - 8));
    elm.style.left = left + 'px';
    elm.style.top = top + 'px';
  }

  /* 覆盖定位：中心对齐锚 rect（补充要求输入框覆盖决策条用），钳在视口内 */
  function placeCover(elm, rect) {
    var w = elm.offsetWidth, h = elm.offsetHeight;
    elm.style.left = Math.max(8, Math.min(rect.left + rect.width / 2 - w / 2, window.innerWidth - w - 8)) + 'px';
    elm.style.top = Math.max(8, Math.min(rect.top + rect.height / 2 - h / 2, window.innerHeight - h - 8)) + 'px';
  }

  function closeMenu() { if (menuEl) { menuEl.remove(); menuEl = null; } }
  function closeObjMenu() { closeHoverTip(); if (objMenuEl) { objMenuEl.remove(); objMenuEl = null; } }
  function closeTblBtn() { closeHoverTip(); if (tblBtnEl) { tblBtnEl.remove(); tblBtnEl = null; } }
  function closeBar(reason) {
    var hadEtBar = !!(barEl && cur && cur.tab.type === 'et');
    if (barEl && cur && cur.tab.type === 'et') {
      /* 输入框关了 → 画布不再占用输入；没写字的话草稿一并丢掉，侧边栏退回普通输入卡 */
      if (window.Agent && Agent.endCanvasInput) Agent.endCanvasInput(cur.tab.id);
      var input = barEl.querySelector('.lui-bar-input');
      var value = input ? input.value.trim() : '';
      if (reason === 'blur' && value) cur.tab.doc.etAiDraft = { key: etContextKey(barCtx), text: value };
      else if (reason === 'escape' || reason === 'switch' || reason === 'send' || reason === 'feature-off' || reason === 'sidebar-send' || reason === 'handoff') cur.tab.doc.etAiDraft = null;
      if (window.Agent && ((reason === 'blur' && !value) || reason === 'escape' || reason === 'switch' || reason === 'send' || reason === 'feature-off' || reason === 'sidebar-send' || reason === 'handoff')) {
        Agent.clearCanvasDraft(cur.tab.id);
      }
    }
    if (keepSelRef && cur) { // 还原选区保持 span（只重刷涉及块/格 DOM，模型不动）
      Editors.setKeepSel(cur.tab, keepSelRef, false);
      keepSelRef = null;
    }
    if (caretEl) { caretEl.remove(); caretEl = null; }
    if (barEl) { barEl.remove(); barEl = null; }
    barCtx = null;
    if (hadEtBar && (reason === 'escape' || reason === 'blur') && storedOn(ET_ENTRY_SETTING)) {
      setTimeout(function () {
        if (!cur || cur.tab.type !== 'et') return;
        var ctx = Editors.getContext(cur.tab);
        if (ctx && ctx.type === 'chart') LUI.onEtChartSel(cur.tab);
        else if (ctx && ctx.type === 'cells') LUI.onTblRangeSel(cur.tab);
      }, 0);
    }
  }

  /* 图表输入框：优先放底边外侧并与图表左边界对齐，空间不足时翻到上方。 */
  function placeChartBar(elm, rect) {
    var w = elm.offsetWidth, h = elm.offsetHeight;
    var left = Math.max(8, Math.min(rect.left, window.innerWidth - w - 8));
    var top = rect.bottom + 8;
    if (top + h > window.innerHeight - 8) top = Math.max(8, rect.top - h - 8);
    elm.style.left = left + 'px'; elm.style.top = top + 'px';
  }
  function closeFloats(reason) { closeMenu(); closeObjMenu(); closeTblBtn(); closeBar(reason); }
  function closePanel() { if (panelEl) { panelEl.remove(); panelEl = null; } }
  function closeDecision() { if (decisionEl) { decisionEl.remove(); decisionEl = null; } }
})();

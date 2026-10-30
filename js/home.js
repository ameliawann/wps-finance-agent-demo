/* home.js — 主页视图 + 新建弹窗。
   改这里：左侧导航条目（NAV_GROUPS）、新建弹窗入口（NEWDOC_GROUPS）。 */
(function () {
  'use strict';

  window.Home = {};

  /* 最左 app 轨（仅「文档」active，其余仅视觉） */
  var RAIL = [
    { icon: 'doc_24', label: '文档', active: true },
    { icon: 'calendar_24', label: '日历' },
    { icon: 'create_from_docer_template_24', label: '稻壳AI' },
    { icon: 'vip_service_24', label: '服务' },
    { icon: 'lingxi_logo_line_24', label: '灵犀' },
    { icon: 'slide_24', label: 'AIPPT' },
  ];

  /* 导航列分组。caret: true 表示条目左侧带折叠小三角（仅视觉） */
  var NAV_GROUPS = [
    { title: '', items: [
      { icon: 'clock', label: '最近', active: true },
      { icon: 'star', label: '星标' },
      { icon: 'shared', label: '共享' },
    ]},
    { title: '云文档', items: [
      { icon: 'folder_cloud', label: '我的云文档', caret: true },
      { icon: 'team_file', label: '团队文档', caret: true },
      { icon: 'knowledge_base', label: '知识库' },
      { icon: 'equipment', label: '我的设备', caret: true },
      { icon: 'label', label: '标签', caret: true },
      { icon: 'trash_can', label: '回收站' },
    ]},
    { title: '本地', items: [
      { icon: 'equipment_computer', label: '桌面' },
      { icon: 'folder', label: '文稿' },
      { icon: 'download', label: '下载' },
      { icon: 'third_wechat', label: '微信文件' },
      { icon: 'magnifier', label: '浏览' },
    ]},
    { title: '常用', items: [
      { icon: 'folder_shared', label: '网格文件夹' },
      { icon: 'people_double', label: '企业助手' },
    ]},
  ];

  /* 新建弹窗分组。type 有值 = 可点击创建；无 type = 仅视觉。
     tile: 't-purple'|'t-blue' 表示无彩色产品图标时用彩色方块 + 白色线性图标 */
  var NEWDOC_GROUPS = [
    { title: 'Office文档格式', items: [
      { icon: 'wps_format', label: '文字', type: 'wps' },
      { icon: 'wpp_format', label: '演示', type: 'wpp' },
      { icon: 'et_format', label: '表格', type: 'et' },
      { icon: 'pdf_format', label: 'PDF', type: 'pdf' },
    ]},
    { title: '在线智能文档', items: [
      { icon: 'ap_format', label: '智能文档' },
      { icon: 'ksheet_format', label: '智能表格' },
      { icon: 'form_format', label: '智能表单' },
    ]},
    { title: '应用服务', items: [
      { icon: 'dbs_format', label: '多维表格' },
      { icon: 'mind_mapping_format', label: '思维导图' },
      { icon: 'flow_chart_format', label: '流程图' },
      { icon: 'design_mode_24', label: '设计', tile: 't-purple' },
      { icon: 'microphone', label: '语音速记', tile: 't-blue' },
      { icon: 'ai_ppt_format', label: 'AIPPT' },
      { icon: 'woanote_format', label: '笔记' },
    ]},
  ];

  function navItemHtml(it) {
    return '<div class="nav-item' + (it.active ? ' is-active' : '') + '">' +
      (it.caret ? '<span class="nav-caret">' + icon('arrow_right_s', 12) + '</span>' : '') +
      '<span class="nav-icon">' + icon(it.icon, 16) + '</span>' +
      '<span>' + it.label + '</span>' +
    '</div>';
  }

  function fileRowHtml(f) {
    var ft = window.FILE_TYPES[f.type];
    return '<tr data-name="' + f.name + '" data-type="' + ft.openAs + '">' +
      '<td><span class="cell-name">' + icon(ft.icon, 20) + '<span class="fname">' + f.name + '</span></span></td>' +
      '<td>' + f.location + '</td>' +
      '<td>' + f.creator + '</td>' +
      '<td>' + f.modified + '</td>' +
      '<td>' + f.size + '</td>' +
    '</tr>';
  }

  Home.render = function (root) {
    root.innerHTML =
      /* 最左 app 轨 */
      '<aside class="home-rail">' +
        RAIL.map(function (r) {
          return '<div class="rail-item' + (r.active ? ' is-active' : '') + '">' +
            icon(r.icon, 24) + '<span class="rail-label">' + r.label + '</span></div>';
        }).join('') +
      '</aside>' +

      '<div class="home-body">' +
      /* 顶部条：公司名（对齐导航列宽）+ 搜索（对齐主区），对齐 docs/screenshots/home.png */
      '<div class="home-topbar">' +
        '<div class="home-brand">金山办公软件有限公司</div>' +
        '<div class="home-search-row">' +
          '<div class="kd-input kd-input-large"><div class="kd-input-wrap">' +
            '<span class="kd-input-prefix">' + icon('magnifier', 16) + '</span>' +
            '<input class="kd-input-inner" placeholder="搜索文件、模板、文库、应用、技巧...">' +
          '</div></div>' +
          '<div class="home-ai-links">' +
            '<span class="ai-link"><span class="nav-icon">' + icon('ai', 16) + '</span>智能问答</span>' +
            '<span class="ai-link"><span class="nav-icon">' + icon('label', 16) + '</span>AI 打标签</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="home-content">' +

      /* 导航列 */
      '<nav class="home-nav">' +
        '<button class="kd-button kd-button-primary kd-button-lg nav-new" id="btn-new">' +
          '<span class="kd-button-prefix-icon">' + icon('insert', 16) + '</span>' +
          '<span class="kd-button-children">新建</span></button>' +
        '<button class="kd-button kd-button-secondary kd-button-lg nav-open">' +
          '<span class="kd-button-prefix-icon">' + icon('folder', 16) + '</span>' +
          '<span class="kd-button-children">打开</span></button>' +
        NAV_GROUPS.map(function (g) {
          return (g.title ? '<div class="nav-group-title">' + g.title + '</div>' : '') +
            g.items.map(navItemHtml).join('');
        }).join('') +
      '</nav>' +

      /* 主区 */
      '<section class="home-main">' +
        '<div class="home-section-head">' +
          '<h2>最近</h2>' +
          '<span class="head-refresh" title="刷新">' + icon('refresh', 16) + '</span>' +
        '</div>' +
        '<div class="home-filter-row">' +
          '<span class="home-filter">全部类型' + icon('arrow_down_s', 16) + '</span>' +
        '</div>' +
        '<div class="file-table"><table>' +
          '<thead><tr><th>名称</th><th>文件位置</th><th>创建者</th><th>最近修改</th><th>大小</th></tr></thead>' +
          '<tbody>' + window.MOCK_FILES.map(fileRowHtml).join('') + '</tbody>' +
        '</table></div>' +
      '</section>' +
      '</div>' +
      '</div>';

    /* 点击文件行 → 打开对应组件 tab（md 已在 FILE_TYPES 里映射为 wps） */
    root.querySelector('.file-table tbody').addEventListener('click', function (e) {
      var tr = e.target.closest('tr');
      if (tr) window.App.openDoc(tr.getAttribute('data-type'), tr.getAttribute('data-name'));
    });

    root.querySelector('#btn-new').addEventListener('click', function () { openNewDoc(this); });
  };

  Home.openNewDoc = openNewDoc; // 暴露给 app.js 调试深链 / tab 栏新建按钮

  /* ── 新建浮窗 ── */
  function openNewDoc(anchor) {
    var modalRoot = document.getElementById('modal-root');
    // 无蒙层遮罩：透明点击层只负责点外部关闭；面板为 60% 宽的浮窗，锚定 anchor（默认居中）
    modalRoot.innerHTML =
      '<div class="kd-modal-mask newdoc-mask"></div>' +
      '<div class="newdoc-pop">' +
        '<div class="kd-modal-header">' +
          '<div class="kd-modal-title">新建</div>' +
          '<button class="kd-modal-close" id="newdoc-close">' + icon('symbol_cross_two', 16) + '</button>' +
        '</div>' +
        '<div class="kd-modal-body-wrap">' +
          NEWDOC_GROUPS.map(function (g) {
            return '<div class="newdoc-group-title">' + g.title + '</div>' +
              '<div class="newdoc-grid">' + g.items.map(function (it) {
                var iconHtml = it.tile
                  ? '<span class="newdoc-tile ' + it.tile + '">' + icon(it.icon, 24) + '</span>'
                  : icon(it.icon, 48);
                return '<div class="newdoc-item' + (it.type ? '' : ' is-disabled') + '"' +
                  (it.type ? ' data-new-type="' + it.type + '"' : '') + '>' +
                  iconHtml + '<span class="newdoc-label">' + it.label + '</span></div>';
              }).join('') + '</div>';
          }).join('') +
          '<div class="newdoc-footer">WPS<span class="sep">|</span>新建无限可能</div>' +
        '</div>' +
      '</div>';

    var pop = modalRoot.querySelector('.newdoc-pop');
    // 锚定定位：优先锚在 anchor（tab 栏新建按钮 / 主页新建按钮）右侧展开，右侧放不下转左侧；视口内钳制；无 anchor 则居中
    var w = pop.offsetWidth, h = pop.offsetHeight;
    var left, top;
    if (anchor) {
      var r = anchor.getBoundingClientRect();
      left = r.right + 8;
      if (left + w > window.innerWidth - 8) left = Math.max(8, r.left - w - 8); // 右侧放不下 → 按钮左侧
      if (left + w > window.innerWidth - 8) left = window.innerWidth - w - 8;   // 仍放不下 → 贴视口右缘
      top = r.top; // 面板顶端与按钮顶端对齐（右方同高，不是右下）
      if (top + h > window.innerHeight - 8) top = Math.max(8, window.innerHeight - h - 8);
    } else {
      left = (window.innerWidth - w) / 2;
      top = (window.innerHeight - h) / 2;
    }
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';

    function close() { modalRoot.innerHTML = ''; }
    modalRoot.querySelector('.newdoc-mask').addEventListener('click', close);
    modalRoot.querySelector('#newdoc-close').addEventListener('click', close);
    modalRoot.querySelectorAll('[data-new-type]').forEach(function (el) {
      el.addEventListener('click', function () {
        var type = el.getAttribute('data-new-type');
        close();
        window.App.newDoc(type);
      });
    });
  }
})();

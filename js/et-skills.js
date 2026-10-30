/* 表格技能菜单与有/无技能演示状态。技能仅填入草稿，不自动发送。 */
(function () {
  'use strict';
  var assets = {"lightning": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>闪电_加急_智能_快速_快捷</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M2.50477 8.48664L4.99763 1.50664C4.99905 1.50266 5.00282 1.5 5.00705 1.5H10.4852C10.4923 1.5 10.4971 1.50715 10.4945 1.51371L8.5 6.5H13.4737C13.4829 6.5 13.4872 6.51137 13.4803 6.51747L4.52796 14.4751C4.52031 14.4819 4.50859 14.4742 4.51183 14.4645L6.5 8.5H2.51419C2.50727 8.5 2.50245 8.49315 2.50477 8.48664Z\" stroke-linecap=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "magnifier": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>放大镜_搜索_查看_查找</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"line_2\" d=\"M11.5 11.5L15 15\" stroke-linecap=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "folder_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>文件夹</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M2.5 9.50006V3C2.5 2.72386 2.72386 2.5 3 2.5H9.07461C9.18815 2.5 9.2983 2.53864 9.38696 2.60957L13 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6V9.50006M2.5 9.50006V21.0001C2.5 21.2762 2.72386 21.5001 3 21.5001H21C21.2761 21.5001 21.5 21.2762 21.5 21.0001V9.50006M2.5 9.50006H21.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\"/></g></svg>", "record_macro": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>录制新宏16_RecordMacro</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M13 1.5C14.04 1.5 14.5 2 14.5 3V5V6C14.5 6.24375 14.52 6.5 14 6.5H13H11.5V3C11.5 2 12 1.5 13 1.5ZM13 1.5H8\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"line_2\" d=\"M11.5 7L11.5 13C11.5 14 11 14.5 9.99995 14.5M9.99995 14.5C8.9999 14.5 8.49995 14 8.49995 13V12C8.49995 11.5 8.52 11.5 8 11.5C7.57006 11.5 5.79441 11.5 3.5 11.5M9.99995 14.5C7.83328 14.5 4 14.5 3 14.5C2 14.5 1.5 14 1.5 13C1.5 12.675 1.5 12.52 1.5 12C1.5 11.48 1.5 11.5 2 11.5C2.37525 11.5 3.01939 11.5 3.5 11.5M3.5 11.5V9\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"line_3\" d=\"M5.5 4.5C5.5 5.05228 5.05228 5.5 4.5 5.5C3.94772 5.5 3.5 5.05228 3.5 4.5C3.5 3.94772 3.94772 3.5 4.5 3.5C5.05228 3.5 5.5 3.94772 5.5 4.5Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"line_4\" d=\"M7.5 4.5C7.5 6.15685 6.15685 7.5 4.5 7.5C2.84315 7.5 1.5 6.15685 1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5C6.15685 1.5 7.5 2.84315 7.5 4.5Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "chart_column": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>图表16_幻灯片编号_SaveAsChartTemplate_InsertChart</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M5.5 8.5H2C1.72386 8.5 1.5 8.72386 1.5 9V14C1.5 14.2761 1.72386 14.5 2 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V6C14.5 5.72386 14.2761 5.5 14 5.5H10.5M5.5 8.5V14M5.5 8.5V2C5.5 1.72386 5.72386 1.5 6 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2V5.5M10.5 5.5V14\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "doc": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>空白页_文档_页</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"line\" d=\"M3 1.5H8.79289C8.9255 1.5 9.05268 1.55268 9.14645 1.64645L13.3536 5.85355C13.4473 5.94732 13.5 6.0745 13.5 6.20711V14C13.5 14.2761 13.2761 14.5 13 14.5H3C2.72386 14.5 2.5 14.2761 2.5 14V2C2.5 1.72386 2.72386 1.5 3 1.5Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"line_2\" d=\"M8.5 1.5V6C8.5 6.27614 8.72386 6.5 9 6.5H13.5\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "symbol_cross": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>加号l16_increase</desc><style>\n    .kd-stroke-width-icon-bold { \n       stroke-width: var(--kd-stroke-width-icon-bold, 1.2px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-bold\"><path id=\"line\" d=\"M1.60156 7.59961H13.6016M7.60156 1.59961V13.5996\" stroke-linecap=\"round\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>", "more": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>更多_more</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"Ellipse 545\" d=\"M9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30964 9.25 8Z\" stroke=\"none\"/><path id=\"Ellipse 547\" d=\"M14.75 8C14.75 8.69036 14.1904 9.25 13.5 9.25C12.8096 9.25 12.25 8.69036 12.25 8C12.25 7.30964 12.8096 6.75 13.5 6.75C14.1904 6.75 14.75 7.30964 14.75 8Z\" stroke=\"none\"/><path id=\"Ellipse 546\" d=\"M3.75 8C3.75 8.69036 3.19036 9.25 2.5 9.25C1.80964 9.25 1.25 8.69036 1.25 8C1.25 7.30964 1.80964 6.75 2.5 6.75C3.19036 6.75 3.75 7.30964 3.75 8Z\" stroke=\"none\"/></g></svg>"}; /* 构建时写入从 KDicon-pro 检索下载的原始 SVG。 */
  var seq = 0;
  var storageKey = 'wps-ai-edit.et.skills-demo';
  var demoState = 'empty';
  try { if (localStorage.getItem(storageKey) === 'filled') demoState = 'filled'; } catch (e) {}
  var own = ['销售经营数据分析与汇总', '学生成绩分析', '月度经营数据整理'];
  var recommended = [
    { name: '录制技能', icon: 'record_macro', record: true },
    { name: '可视化图表生成', icon: 'chart_column' },
    { name: '财务报表账龄分析', icon: 'doc' }
  ];
  var menu = null, anchor = null, sidebarAnchor = null, activeAside = null, observer = null;
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function icon(name, large) {
    var raw = assets[name] || '';
    var ids = [], suffix = '-skills-' + (++seq);
    raw.replace(/\bid="([^"]+)"/g, function (_, id) { if (ids.indexOf(id) < 0) ids.push(id); });
    ids.sort(function (a, b) { return b.length - a.length; }).forEach(function (id) {
      raw = raw.split('id="' + id + '"').join('id="' + id + suffix + '"').split('#' + id + '"').join('#' + id + suffix + '"').split('#' + id + ')').join('#' + id + suffix + ')');
    });
    return large ? raw : '<span class="et-skills-icon" aria-hidden="true">' + raw + '</span>';
  }
  function current() { return window.App && App.tabs.filter(function (t) { return t.id === App.activeId && t.type === 'et'; })[0]; }
  function close(returnFocus) {
    if (menu) menu.hidden = true;
    if (anchor && anchor.isConnected) { anchor.setAttribute('aria-expanded', 'false'); if (returnFocus) anchor.focus(); }
  }
  function position() {
    if (!menu || !menu.isConnected || menu.hidden || !anchor || !anchor.isConnected) return;
    var rect = anchor.getBoundingClientRect();
    var width = Math.min(228, window.innerWidth - 16);
    menu.style.width = width + 'px';
    var fromRibbon = anchor.getAttribute('data-et-skill-entry') === 'mine';
    menu.style.maxHeight = Math.max(120, fromRibbon ? window.innerHeight - rect.bottom - 16 : rect.top - 24) + 'px';
    menu.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8)) + 'px';
    menu.style.top = (fromRibbon ? rect.bottom + 4 : Math.max(8, rect.top - 8 - menu.getBoundingClientRect().height)) + 'px';
  }
  function row(name, glyph, record) {
    return '<div class="et-skills-row' + (record ? ' et-skills-record' : '') + '" role="none"><button type="button" class="et-skills-item" role="menuitem" data-skill-name="' + esc(name) + '" title="' + esc(name) + '"' + (record ? ' data-skill-record' : '') + '>' + icon(glyph) + '<span>' + esc(name) + '</span></button></div>';
  }
  function renderLists() {
    var query = menu.querySelector('.et-skills-search input').value.trim().toLowerCase();
    var mine = demoState === 'filled' ? own : [];
    var filtered = mine.filter(function (name) { return name.toLowerCase().indexOf(query) >= 0; });
    var recs = recommended.filter(function (r) { return r.name.toLowerCase().indexOf(query) >= 0; });
    menu.querySelector('.et-skills-body').innerHTML = '<h3 class="et-skills-heading">我的技能（' + mine.length + '）</h3>' +
      (filtered.length ? '<div role="menu" aria-label="我的技能列表">' + filtered.map(function (name) { return row(name, 'lightning', false); }).join('') + '</div>' :
      '<div class="et-skills-empty"><span class="et-skills-empty-icon" aria-hidden="true">' + icon('folder_24', true) + '</span><div class="et-skills-empty-copy"><div class="et-skills-empty-title">' + (query && mine.length ? '未找到匹配的技能' : '还没有保存的技能') + '</div><div class="et-skills-empty-note">' + (query && mine.length ? '换个关键词试试' : '录制一次，下次复用') + '</div></div></div>') +
      '<div class="et-skills-separator"></div><h3 class="et-skills-heading">推荐技能</h3><div role="menu" aria-label="推荐技能列表">' + recs.map(function (r) { return row(r.name, r.icon, r.record); }).join('') + (recs.length ? '' : '<div class="et-skills-empty-note et-skills-heading">未找到匹配的推荐技能</div>') + '</div>';
    position();
  }
  function putInDraft(text) {
    if (!Agent.isOpen()) Agent.toggle();
    var input = activeAside && activeAside.querySelector('.ag-input');
    if (!input || input.getAttribute('contenteditable') === 'false') return;
    close(false);
    input.appendChild(document.createTextNode((input.textContent.trim() ? ' ' : '') + text));
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
    var range = document.createRange(); range.selectNodeContents(input); range.collapse(false);
    var selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
  }
  function prepareRecord() {
    close(false);
    var tab = current();
    if (!tab) return;
    if (!Agent.isOpen()) Agent.toggle();
    Agent.prepareRecordSkill(tab.id, icon('record_macro'));
  }
  function open(trigger) {
    close(false);
    anchor = trigger || sidebarAnchor;
    if (!anchor || !anchor.isConnected || !current()) return;
    if (anchor === sidebarAnchor && !Agent.isOpen()) Agent.toggle();
    if (!menu || !menu.isConnected) {
      menu = document.createElement('section');
      menu.className = 'et-skills-menu'; menu.id = 'et-skills-menu'; menu.setAttribute('role', 'region'); menu.setAttribute('aria-label', '技能菜单');
      menu.innerHTML = '<div class="kd-input kd-input-lg et-skills-search"><div class="kd-input-wrap"><span class="kd-input-prefix">' + icon('magnifier') + '</span><input type="search" class="kd-input-inner" placeholder="搜索技能" aria-label="搜索技能"></div></div><div class="et-skills-body"></div><footer class="et-skills-footer"><button type="button" class="et-skills-item" data-skill-create>' + icon('symbol_cross') + '<span>从对话中创建技能</span></button></footer>';
      document.body.appendChild(menu);
      menu.querySelector('input').addEventListener('input', renderLists);
      menu.addEventListener('click', function (e) {
        e.stopPropagation();
        if (e.target.closest('[data-skill-create]')) { putInDraft('将当前对话中的操作整理为可复用技能'); return; }
        var item = e.target.closest('[data-skill-name]');
        if (!item) return;
        if (item.hasAttribute('data-skill-record')) { prepareRecord(); return; }
        putInDraft('使用「' + item.getAttribute('data-skill-name') + '」技能，');
      });
      menu.addEventListener('keydown', function (e) {
        e.stopPropagation();
        if (e.key === 'Escape') { e.preventDefault(); close(true); return; }
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        e.preventDefault();
        var items = Array.prototype.slice.call(menu.querySelectorAll('[role="menuitem"]'));
        if (!items.length) return;
        var index = items.indexOf(document.activeElement);
        index = index < 0 ? (e.key === 'ArrowDown' ? 0 : items.length - 1) : (index + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        items[index].focus();
      });
    }
    menu.hidden = false; anchor.setAttribute('aria-expanded', 'true');
    menu.querySelector('input').value = ''; renderLists(); position();
    // 菜单展开不转移焦点；用户点击搜索框或按方向键后再进入菜单。
  }
  function syncDemo(root) {
    root.querySelectorAll('[data-skills-demo]').forEach(function (btn) { var on = btn.getAttribute('data-skills-demo') === demoState; btn.classList.toggle('is-active', on); btn.setAttribute('aria-pressed', String(on)); });
  }
  window.EtSkills = {
    mount: function (aside) {
      if (observer) observer.disconnect();
      close(false); if (menu) menu.remove(); menu = null; activeAside = aside;
      var upload = aside.querySelector('[aria-label="添加附件"]');
      if (!upload) return;
      anchor = document.createElement('button'); anchor.type = 'button'; anchor.className = 'ag-icon-btn et-skills-trigger'; anchor.title = '技能'; anchor.setAttribute('aria-label', '技能'); anchor.setAttribute('aria-haspopup', 'menu'); anchor.setAttribute('aria-expanded', 'false'); anchor.setAttribute('aria-controls', 'et-skills-menu'); anchor.innerHTML = icon('lightning');
      sidebarAnchor = anchor;
      upload.after(sidebarAnchor);
      anchor.addEventListener('click', function (e) { e.stopPropagation(); if (menu && menu.isConnected && !menu.hidden && anchor === sidebarAnchor) close(false); else open(sidebarAnchor); });
      if (window.ResizeObserver) { observer = new ResizeObserver(position); observer.observe(aside); }
    },
    initDemo: function (root) { syncDemo(root); root.querySelectorAll('[data-skills-demo]').forEach(function (btn) { btn.addEventListener('click', function () { demoState = btn.getAttribute('data-skills-demo'); try { localStorage.setItem(storageKey, demoState); } catch (e) {} syncDemo(root); if (menu && menu.isConnected && !menu.hidden) renderLists(); }); }); }
  };
  document.addEventListener('click', function (e) {
    var entry = e.target.closest('[data-et-skill-entry]');
    if (entry && current()) {
      if (entry.getAttribute('data-et-skill-entry') === 'mine') {
        if (menu && !menu.hidden && anchor === entry) close(false); else open(entry);
        if (e.detail > 0) entry.blur(); // 鼠标打开菜单不保留触发按钮焦点；键盘操作保留可访问焦点。
      }
      else prepareRecord();
      return;
    }
    if (e.target.closest('[data-skills-demo]')) return;
    if (menu && !menu.contains(e.target) && e.target !== anchor) close(false);
  });
  document.addEventListener('keydown', function (e) {
    var entry=e.target.closest('[data-et-skill-entry="mine"]');
    if(entry && e.key==='ArrowDown'){e.preventDefault();open(entry);}
    if(e.key==='Escape' && menu && !menu.hidden){e.preventDefault();close(true);}
  });
  window.addEventListener('resize', function () { position(); });
  document.addEventListener('scroll', function () { position(); }, true);
})();

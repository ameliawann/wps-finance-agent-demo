/* app.js — 壳：doc tab 条状态机 + 主页/编辑器视图切换。
   全局状态挂在 window.App 上，home.js / editors.js 都通过它交互。 */
(function () {
  'use strict';

  var App = window.App = {
    tabs: [],            // 已打开文档 tab：{ id, type: wps|et|wpp|pdf, name }
    activeId: 'home',    // 'home' 或文档 tab id
    seq: 0,              // tab id 自增
    // 新建文档命名计数器（改这里：命名规则）
    counters: { wps: 0, wpp: 0, et: 0, pdf: 0 },
    newNames: {
      wps: function (n) { return '文字文稿(' + n + ').docx'; },
      wpp: function (n) { return '演示文稿(' + n + ').pptx'; },
      et:  function (n) { return '工作簿(' + n + ').xlsx'; },
      pdf: function (n) { return '未命名(' + n + ').pdf'; },
    },
  };

  var barEl = document.getElementById('doc-tab-bar');
  var homeEl = document.getElementById('view-home');
  var editorEl = document.getElementById('view-editor');

  /* ── doc tab 条渲染 ── */
  function renderBar() {
    var tabsHtml = App.tabs.map(function (t) {
      var active = t.id === App.activeId ? ' is-active' : '';
      return '<div class="dtb-tab' + active + '" data-id="' + t.id + '" title="' + t.name + '">' +
        '<span class="dtb-icon">' + icon(window.FILE_TYPES[t.type].icon, 16) + '</span>' +
        '<span class="dtb-name">' + t.name + '</span>' +
        '<span class="dtb-cloud">' + icon('cloud', 16) + '</span>' +
        '<span class="dtb-close" data-close="' + t.id + '">' + icon('symbol_cross_two', 12) + '</span>' +
      '</div>';
    }).join('');

    barEl.innerHTML =
      '<div class="dtb-lights"><i class="l-r"></i><i class="l-y"></i><i class="l-g"></i></div>' +
      '<div class="dtb-tabs">' +
        '<div class="dtb-tab dtb-home' + (App.activeId === 'home' ? ' is-active' : '') + '" data-id="home">' +
          '<span class="dtb-name">W365</span>' +
        '</div>' +
        tabsHtml +
      '</div>' +
      '<button class="dtb-add" id="dtb-add" title="新建">' + icon('insert', 16) + '</button>';
  }

  /* ── 视图切换 ── */
  function showHome() {
    App.activeId = 'home';
    document.documentElement.removeAttribute('data-brand'); // 回主页移除组件品牌色
    homeEl.hidden = false;
    editorEl.hidden = true;
    renderBar();
  }

  function showEditor(tab) {
    App.activeId = tab.id;
    // 品牌色选择器挂在 html[data-brand] 上（见 ribbon.css 尾部 rb-brand-overrides）
    document.documentElement.dataset.brand = tab.type;
    homeEl.hidden = true;
    editorEl.hidden = false;
    Editors.render(editorEl, tab);
    renderBar();
  }

  /* ── tab 操作（供 home.js 调用） ──
     opts.fresh=true → 空白文档（新建）；否则按主页 mock 文件给预置内容（见 Editors.createModel） */
  App.openDoc = function (type, name, opts) {
    // 同名同类型已打开 → 直接切过去
    var exist = App.tabs.filter(function (t) { return t.name === name && t.type === type; })[0];
    if (exist) { showEditor(exist); return; }
    var tab = { id: 'doc-' + (++App.seq), type: type, name: name };
    // 文档数据模型：编辑器视图切 tab 会重建 DOM，内容是唯一事实源（见 editors.js）
    tab.doc = Editors.createModel(type, name, !!(opts && opts.fresh));
    App.tabs.push(tab);
    showEditor(tab);
  };

  App.newDoc = function (type) {
    var n = ++App.counters[type];
    App.openDoc(type, App.newNames[type](n), { fresh: true });
  };

  App.closeTab = function (id) {
    var idx = App.tabs.findIndex(function (t) { return t.id === id; });
    if (idx < 0) return;
    var wasActive = App.tabs[idx].id === App.activeId;
    App.tabs.splice(idx, 1);
    if (wasActive) {
      // 切到左侧相邻 tab；没有文档 tab 时回主页
      var left = App.tabs[idx - 1];
      if (left) showEditor(left); else showHome();
    } else {
      renderBar();
    }
  };

  /* ribbon 选项卡切换与宽度自适应已移植到 ribbon-ladder.js（原版 wps-ribbon 逻辑），
     由 Editors.render 末尾的 RibbonLadder.init(root, type) 统一接管。 */

  /* ── tab 条事件（事件委托） ── */
  barEl.addEventListener('click', function (e) {
    var close = e.target.closest('[data-close]');
    if (close) { e.stopPropagation(); App.closeTab(close.getAttribute('data-close')); return; }
    if (e.target.closest('#dtb-add')) { Home.openNewDoc(e.target.closest('#dtb-add')); return; }
    var tabEl = e.target.closest('.dtb-tab');
    if (!tabEl) return;
    var id = tabEl.getAttribute('data-id');
    if (id === 'home') { showHome(); return; }
    var tab = App.tabs.filter(function (t) { return t.id === id; })[0];
    if (tab) showEditor(tab);
  });

  /* ── 初始化 ── */
  Home.render(homeEl);
  renderBar();

  // 调试深链：index.html#open=wpp 直接新建并打开对应组件（演示/截图用）
  var m = location.hash.match(/open=(wps|et|wpp|pdf)/);
  if (/case=reconciliation/.test(location.hash)) App.openDoc('et', '渠道账单_2026-08-21_437009.xlsx');
  else if (m) App.newDoc(m[1]);
  else if (!/new=1/.test(location.hash)) App.openDoc('et', '渠道账单_2026-08-21_437009.xlsx');
  // 调试深链：index.html#new=1 直接弹出新建浮窗
  if (/new=1/.test(location.hash)) Home.openNewDoc();
  // 分享链接可以直接展开当前文档助手。
  if (/(?:[&#])assistant=open(?:&|$)/.test(location.hash) && App.activeId !== 'home' && !Agent.isOpen()) Agent.toggle();
})();

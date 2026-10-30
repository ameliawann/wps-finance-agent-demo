/* ribbon-ladder.js — ribbon 交互 + 宽度自适应 ladder。
   移植自 wps-ribbon/previews/{docs,sheets,slides,pdf}-home.html 尾部的 script 块
   （tab-switch v0.2.2 / split 按钮 / 布局模式菜单 / QAT 收起 / Tab 溢出 /
     双行 ladder / 单行 ladder），适配本 demo 的 SPA 注入：

   - 原版：静态页面 DOMContentLoaded 跑一次；本版：RibbonLadder.init(root, type)
     在每次编辑器渲染后调用。事件一律委托到常驻的 root(#view-editor)，
     重复 init 不重复绑定；ResizeObserver 每次 init 重新挂到新 DOM 上。
   - 原版双行/单行切换只靠手动菜单；本版加了自动切换：双行 ladder 压到
     极限仍溢出时自动切单行紧凑态，宽度回到能容纳时自动回双行
     （手动在「功能区显示选项」里选过布局后，自动切换停用，尊重手动选择）。
   - 宽度判断全部基于 ribbon 容器自身（ResizeObserver 观察 .editor-ribbon），
     所以侧边栏展开/收起（240ms 宽度动画）与窗口缩放都会触发逐级重算。

   改这里：各组件双行 ladder 的收起顺序 LADDER（与 wps-ribbon 原版一一对应）。 */
(function () {
  'use strict';

  /* 双行 ladder 收起顺序：level N 生效的 flag = ORDER.slice(0, N)。
     与各组件预览页里的 window.RB_DOUBLE_ROW_LADDER 一致（wps 用其内置 DEFAULT_ORDER）。 */
  var LADDER = {
    wps: ['style-2', 'layout-stack', 'layout-icon', 'find-icon', 'style-menu',
          'group-layout', 'group-find', 'group-para', 'group-font'],
    et:  ['clipboard-compact', 'styles-icon', 'cells-icon', 'group-editing',
          'group-styles', 'group-cells-number', 'group-alignment', 'group-font'],
    wpp: ['clipboard-compact', 'find-icon', 'drawing-icon-r', 'drawing-icon-l',
          'slides-stack', 'slides-icon-r', 'slides-icon-l', 'group-find',
          'group-drawing', 'group-para', 'group-font'],
    pdf: ['shot-stack', 'export-stack', 'shot-icon', 'translate-icon',
          'export-icon', 'cursor-icon', 'group-shortcuts', 'group-view'],
  };

  var QAT_LABEL = {
    pdf: '输出为 PDF', print: '打印', preview: '打印预览',
    undo: '撤销', redo: '恢复', customize: '自定义快速访问工具栏',
  };
  var TAB_GAP = 20;   // 原版：顶栏 tab 间距
  var BODY_GAP = 8;   // 原版：双行命令区间距

  function show(el, on) {
    if (!el) return;
    if (on) el.removeAttribute('hidden'); else el.setAttribute('hidden', '');
  }

  /* 当前可见的命令面板（home / wps-ai 互斥）。
     注意：ribbon 片段沿用了原版 wps-ribbon 的嵌套结构——wps-ai pane 嵌在 home pane 内部，
     随 home pane 显隐（原版即如此）。嵌套 pane 不参与 ladder，避免在 0 宽容器上误算。 */
  function activePane(root) {
    var panes = root.querySelectorAll('.rb-ribbon .kd-tabs-pane[data-pane]');
    for (var i = 0; i < panes.length; i++) {
      var p = panes[i];
      if (p.hasAttribute('hidden')) continue;
      if (p.parentElement.closest('.kd-tabs-pane')) continue;
      return p;
    }
    return null;
  }

  /* ════════════ tab 切换（wps-ribbon-topbar-tab-switch v0.2.2 移植，root 作用域） ════════════ */

  function showPane(root, id) {
    var list = root.querySelector('.rb-ribbon .kd-tabs-pane-list');
    if (!list) return;
    list.querySelectorAll('.kd-tabs-pane[data-pane]').forEach(function (pane) {
      var on = pane.getAttribute('data-pane') === id;
      pane.classList.toggle('kd-tabs-pane-active', on);
      show(pane, on);
    });
  }

  function setTabSelected(tab, on) {
    if (!tab) return;
    tab.classList.toggle('kd-tabs-tab-bar-active', on);
    tab.setAttribute('aria-selected', on ? 'true' : 'false');
    tab.setAttribute('tabindex', on ? '0' : '-1');
  }

  function ribbonNav(root) { return root.querySelector('.rb-top-center .kd-tabs-nav[data-ribbon-tabs]'); }
  function aiTab(root) {
    var nav = root.querySelector('.rb-top-center .kd-tabs-nav.rb-tabs-ai');
    return nav ? nav.querySelector('.kd-tabs-tab-bar[data-tab-id="wps-ai"]') : null;
  }

  function selectRibbonTab(root, tab) {
    var nav = ribbonNav(root);
    if (!nav || !tab) return;
    nav.querySelectorAll('.kd-tabs-nav-list > .kd-tabs-tab-bar').forEach(function (t) {
      setTabSelected(t, t === tab);
    });
    setTabSelected(aiTab(root), false);
    var id = tab.getAttribute('data-tab-id') || 'home';
    // 仅 home / wps-ai 有独立面板；其它功能区 Tab 暂仍显示 home 面板（同原版）
    showPane(root, id === 'wps-ai' ? 'wps-ai' : 'home');
  }

  function selectAiTab(root) {
    var nav = ribbonNav(root);
    var ai = aiTab(root);
    if (!ai) return;
    if (nav) {
      nav.querySelectorAll('.kd-tabs-nav-list > .kd-tabs-tab-bar').forEach(function (t) {
        setTabSelected(t, false);
      });
    }
    setTabSelected(ai, true);
    showPane(root, 'wps-ai');
  }

  /* ════════════ 双行 ladder（原版「双行自适应压缩」移植） ════════════ */

  function doubleBody(root) {
    var pane = activePane(root);
    return pane ? pane.querySelector('.rb-body-double') : null;
  }

  function applyLevel(el, level, order) {
    var MAX = order.length;
    level = Math.max(0, Math.min(MAX, level | 0));
    el.setAttribute('data-ribbon-compact', String(level));
    var flags = order.slice(0, level);
    order.forEach(function (f) { el.classList.toggle('rb-c-' + f, flags.indexOf(f) >= 0); });
    el.querySelectorAll('[data-compact-show]').forEach(function (node) {
      show(node, flags.indexOf(node.getAttribute('data-compact-show')) >= 0);
    });
    el.querySelectorAll('[data-compact-hide]').forEach(function (node) {
      show(node, flags.indexOf(node.getAttribute('data-compact-hide')) < 0);
    });
    return level;
  }

  function contentWidth(el, gap) {
    var total = 0, visible = 0;
    Array.prototype.forEach.call(el.children, function (child) {
      if (child.hasAttribute('hidden')) return;
      if (window.getComputedStyle(child).display === 'none') return;
      total += child.offsetWidth;
      visible++;
    });
    if (visible > 1) total += (visible - 1) * gap;
    return total;
  }

  function availableWidth(el) {
    var cs = window.getComputedStyle(el);
    return el.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
  }

  function doubleOverflows(el) { return contentWidth(el, BODY_GAP) > availableWidth(el) + 0.5; }

  /* 返回最终 level；若压到极限仍溢出返回 -1（交给自动切单行） */
  function fitDouble(root, order) {
    var el = doubleBody(root);
    if (!el || el.hasAttribute('hidden')) return 0;
    var MAX = order.length;
    var level = parseInt(el.getAttribute('data-ribbon-compact') || '0', 10) || 0;
    // 先尽量展开
    while (level > 0) {
      applyLevel(el, level - 1, order);
      if (doubleOverflows(el)) { applyLevel(el, level, order); break; }
      level -= 1;
    }
    // 再压缩
    while (level < MAX && doubleOverflows(el)) {
      level += 1;
      applyLevel(el, level, order);
    }
    return doubleOverflows(el) ? -1 : level;
  }

  /* ════════════ 单行 ladder（原版 data-sr-* 阶梯移植） ════════════ */

  var SR_ATTRS = ['data-sr-hide', 'data-sr-show', 'data-sr-more-item', 'data-sr-icon'];

  function singleBody(root) {
    var pane = activePane(root);
    return pane ? pane.querySelector('.rb-body-single') : null;
  }

  /* 阶梯上限 = DOM 中所有 data-sr-* 声明的最大级数（按元素缓存，原版是静态全局） */
  function measureLadder(el) {
    var max = 0, icon = Infinity;
    el.querySelectorAll('[' + SR_ATTRS.join('],[') + ']').forEach(function (node) {
      SR_ATTRS.forEach(function (attr) {
        var v = parseInt(node.getAttribute(attr), 10);
        if (!v) return;
        if (v > max) max = v;
        if (attr === 'data-sr-icon' && v < icon) icon = v;
      });
    });
    el.__srMax = max;
    el.__srIconLevel = icon;
  }

  function ensureLadder(el) { if (el.__srMax == null) measureLadder(el); }

  function applySrLevel(el, level) {
    ensureLadder(el);
    level = Math.max(0, Math.min(el.__srMax, level | 0));
    el.setAttribute('data-sr-compact', String(level));
    el.classList.toggle('rb-sr-c-find-icon', level >= el.__srIconLevel);
    el.querySelectorAll('[data-sr-hide]').forEach(function (node) {
      show(node, level < (parseInt(node.getAttribute('data-sr-hide'), 10) || 0));
    });
    el.querySelectorAll('[data-sr-show]').forEach(function (node) {
      show(node, level >= (parseInt(node.getAttribute('data-sr-show'), 10) || 0));
    });
    el.querySelectorAll('[data-sr-more-item]').forEach(function (node) {
      show(node, level >= (parseInt(node.getAttribute('data-sr-more-item'), 10) || 0));
    });
    return level;
  }

  function srOverflows(el) {
    var rail = el && el.querySelector('.rb-sr-rail');
    return rail ? rail.scrollWidth > rail.clientWidth + 0.5 : false;
  }

  function fitSingle(root) {
    var el = singleBody(root);
    if (!el || el.hasAttribute('hidden')) return;
    ensureLadder(el);
    var level = parseInt(el.getAttribute('data-sr-compact') || '0', 10) || 0;
    while (level > 0) {
      applySrLevel(el, level - 1);
      if (srOverflows(el)) { applySrLevel(el, level); break; }
      level -= 1;
    }
    while (level < el.__srMax && srOverflows(el)) {
      level += 1;
      applySrLevel(el, level);
    }
  }

  /* ════════════ 双行/单行布局切换（原版手动菜单 + 本版自动切换） ════════════ */

  function setLayoutVisible(home, value) {
    home.setAttribute('data-ribbon-layout', value);
    show(home.querySelector('.rb-body-double'), value === 'double');
    show(home.querySelector('.rb-body-single'), value === 'single');
  }

  /* 自动模式：双行压到极限仍溢出 → 单行；单行时双行极限态能放下 → 回双行 */
  function fitLayout(root, type) {
    var pane = activePane(root);
    var home = pane && pane.querySelector('.rb-home');
    if (!home) return;
    var order = LADDER[type] || LADDER.wps;

    if (home.getAttribute('data-rb-layout-manual') === '1') {
      // 手动选过布局：只拟合当前模式
      if (home.getAttribute('data-ribbon-layout') === 'single') fitSingle(root);
      else fitDouble(root, order);
      return;
    }

    if (home.getAttribute('data-ribbon-layout') === 'single') {
      // 试探回双行：极限压缩态能放下才回（同一帧内改完，不会闪）
      var dbl = pane.querySelector('.rb-body-double');
      var sgl = pane.querySelector('.rb-body-single');
      if (!dbl) { fitSingle(root); return; }
      home.setAttribute('data-ribbon-layout', 'double');
      show(dbl, true); show(sgl, false);
      applyLevel(dbl, order.length, order);
      if (doubleOverflows(dbl)) {
        home.setAttribute('data-ribbon-layout', 'single');
        show(dbl, false); show(sgl, true);
        fitSingle(root);
      } else {
        fitDouble(root, order); // 从极限态逐步展开到合适 level
      }
      return;
    }

    if (fitDouble(root, order) === -1) {
      setLayoutVisible(home, 'single');
      fitSingle(root);
    }
  }

  /* ════════════ QAT 自适应（原版移植：中间区不够时从右往左收 + 「...」） ════════════ */

  function qatGroup(root) { return root.querySelector('[data-ribbon-qat]'); }

  function preferredTabsNavWidth(nav) {
    var list = nav && nav.querySelector('.kd-tabs-nav-list');
    if (!list) return 0;
    var total = 0, visible = 0;
    Array.prototype.forEach.call(list.querySelectorAll('.kd-tabs-tab-bar'), function (t) {
      if (t.hasAttribute('hidden')) return;
      total += t.offsetWidth;
      visible++;
    });
    if (visible > 1) total += (visible - 1) * TAB_GAP;
    var ov = nav.querySelector('[data-tabs-overflow]');
    if (ov && !ov.hasAttribute('hidden')) total += TAB_GAP + ov.offsetWidth;
    return total;
  }

  function preferredCenterWidth(center) {
    if (!center) return 0;
    var gap = parseFloat(window.getComputedStyle(center).gap) || 8;
    var parts = [];
    Array.prototype.forEach.call(center.children, function (ch) {
      if (window.getComputedStyle(ch).display === 'none' || ch.hasAttribute('hidden')) return;
      if (ch.hasAttribute('data-ribbon-tabs') || ch.classList.contains('rb-tabs-nav')) {
        parts.push(preferredTabsNavWidth(ch));
      } else {
        parts.push(ch.offsetWidth);
      }
    });
    var total = 0;
    parts.forEach(function (w) { total += w; });
    if (parts.length > 1) total += (parts.length - 1) * gap;
    return total;
  }

  function middleUnderPressure(root) {
    var top = root.querySelector('.rb-top');
    if (!top) return false;
    var left = top.querySelector('.rb-top-left');
    var center = top.querySelector('.rb-top-center');
    var right = top.querySelector('.rb-top-right');
    if (!left || !center || !right) return false;
    var gap = parseFloat(window.getComputedStyle(top).gap) || 12;
    var avail = top.clientWidth - left.offsetWidth - right.offsetWidth - 2 * gap;
    return preferredCenterWidth(center) > avail + 0.5;
  }

  function rebuildQatMenu(group) {
    var list = group.querySelector('[data-qat-overflow-list]');
    if (!list) return;
    list.innerHTML = '';
    group.querySelectorAll('[data-qat-item]').forEach(function (el) {
      if (!el.hasAttribute('hidden')) return;
      var id = el.getAttribute('data-qat-item') || '';
      var li = document.createElement('li');
      li.className = 'kd-menu-item';
      li.setAttribute('role', 'menuitem');
      li.setAttribute('tabindex', '-1');
      li.setAttribute('data-qat-item', id);
      var span = document.createElement('span');
      span.className = 'kd-menu-item-content';
      span.textContent = QAT_LABEL[id] || el.getAttribute('title') || el.getAttribute('aria-label') || id;
      li.appendChild(span);
      list.appendChild(li);
    });
  }

  function fitQat(root) {
    var group = qatGroup(root);
    if (!group) return;
    var ov = group.querySelector('[data-qat-overflow]');
    var items = Array.prototype.slice.call(group.querySelectorAll('[data-qat-item]'));
    items.forEach(function (el) { el.removeAttribute('hidden'); });
    if (!ov) return;
    show(ov, false);
    if (!middleUnderPressure(root)) { rebuildQatMenu(group); return; }
    show(ov, true);
    for (var i = items.length - 1; i >= 0 && middleUnderPressure(root); i--) {
      items[i].setAttribute('hidden', '');
    }
    rebuildQatMenu(group);
  }

  /* ════════════ 功能区 Tab 栏自适应（原版移植：从后往前收 + 末尾溢出按钮） ════════════ */

  function setMenuOpen(btn, menu, open) {
    if (!btn || !menu) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    show(menu, open);
  }

  function tabsContentWidth(nav) {
    var list = nav.querySelector('.kd-tabs-nav-list');
    var overflow = nav.querySelector('[data-tabs-overflow]');
    var total = 0, visible = 0;
    Array.prototype.forEach.call(list.children, function (child) {
      if (child.hasAttribute('hidden')) return;
      total += child.offsetWidth;
      visible++;
    });
    if (visible > 1) total += (visible - 1) * TAB_GAP;
    if (overflow && !overflow.hasAttribute('hidden')) total += TAB_GAP + overflow.offsetWidth;
    return total;
  }

  function tabsOverflow(nav) { return tabsContentWidth(nav) > nav.clientWidth + 0.5; }

  function resetTabsFull(nav) {
    if (!nav) return;
    var overflow = nav.querySelector('[data-tabs-overflow]');
    nav.querySelectorAll('.kd-tabs-nav-list > .kd-tabs-tab-bar').forEach(function (t) {
      t.removeAttribute('hidden');
    });
    if (overflow) {
      show(overflow, false);
      overflow.classList.remove('is-active-overflow');
      setMenuOpen(overflow.querySelector('.rb-tabs-overflow-btn'), overflow.querySelector('.rb-tabs-overflow-menu'), false);
    }
  }

  function rebuildTabsMenu(nav) {
    var list = nav.querySelector('[data-tabs-overflow-list]');
    if (!list) return;
    list.innerHTML = '';
    nav.querySelectorAll('.kd-tabs-nav-list > .kd-tabs-tab-bar').forEach(function (tab) {
      if (!tab.hasAttribute('hidden')) return;
      var labelEl = tab.querySelector('.kd-tabs-tab-bar-label');
      var li = document.createElement('li');
      li.className = 'kd-menu-item';
      li.setAttribute('role', 'menuitem');
      li.setAttribute('tabindex', '-1');
      li.setAttribute('data-tab-id', tab.getAttribute('data-tab-id') || '');
      if (tab.getAttribute('aria-selected') === 'true') li.classList.add('kd-menu-item-selected');
      var content = document.createElement('span');
      content.className = 'kd-menu-item-content';
      content.textContent = labelEl ? labelEl.textContent.trim() : '';
      li.appendChild(content);
      list.appendChild(li);
    });
  }

  function fitTabs(root) {
    var nav = ribbonNav(root);
    if (!nav) return;
    var list = nav.querySelector('.kd-tabs-nav-list');
    var overflow = nav.querySelector('[data-tabs-overflow]');
    if (!list || !overflow) return;
    var tabs = Array.prototype.slice.call(list.querySelectorAll('.kd-tabs-tab-bar'));
    resetTabsFull(nav);
    if (!tabsOverflow(nav)) {
      rebuildTabsMenu(nav);
      return;
    }
    show(overflow, true);
    for (var i = tabs.length - 1; i >= 1 && tabsOverflow(nav); i--) {
      tabs[i].setAttribute('hidden', '');
    }
    rebuildTabsMenu(nav);
    overflow.classList.toggle('is-active-overflow',
      !!nav.querySelector('.kd-tabs-nav-list > .kd-tabs-tab-bar[aria-selected="true"][hidden]'));
  }

  /* 从溢出菜单激活 tab：取消隐藏 + 重算（原版 activateTab） */
  function activateTab(root, tab) {
    if (!tab) return;
    tab.removeAttribute('hidden');
    fitTabs(root);
  }

  /* ════════════ split 按钮开合（原版移植） ════════════ */

  function closeAllSplits(root, except) {
    root.querySelectorAll('.rb-split.is-open, .rb-sr-light-split.is-open').forEach(function (el) {
      if (el === except) return;
      el.classList.remove('is-open');
      var c = el.querySelector('.rb-caret, .rb-sr-light-caret');
      if (c) c.setAttribute('aria-expanded', 'false');
    });
  }

  /* ════════════ 布局模式菜单（原版移植 + 手动标记） ════════════ */

  function selectLayout(root, ctrl, value) {
    var home = ctrl.closest('.rb-home') || root.querySelector('.rb-home');
    if (!home) return;
    home.setAttribute('data-rb-layout-manual', '1'); // 手动选择后停用自动切换
    setLayoutVisible(home, value);
    var tickNode = ctrl.querySelector('.kd-menu-item-tick .rb-icon');
    var tickHtml = tickNode ? ('<span class="rb-icon rb-icon-16" data-icon="symbol_tick">' + tickNode.innerHTML + '</span>') : '';
    ctrl.querySelectorAll('.kd-menu-item').forEach(function (item) {
      var on = item.getAttribute('data-value') === value;
      item.classList.toggle('kd-menu-item-selected', on);
      item.setAttribute('aria-checked', on ? 'true' : 'false');
      var tick = item.querySelector('.kd-menu-item-tick');
      if (on) {
        if (!tick && tickHtml) {
          var span = document.createElement('span');
          span.className = 'kd-menu-item-tick';
          span.setAttribute('aria-hidden', 'true');
          span.innerHTML = tickHtml;
          item.insertBefore(span, item.firstChild);
        }
      } else if (tick) {
        tick.remove();
      }
    });
    schedule(root);
  }

  /* ════════════ 事件绑定（委托到常驻 root，只绑一次） ════════════ */

  function bindEvents(root) {
    root.addEventListener('click', function (e) {
      var t = e.target;

      /* split 按钮 caret */
      var caret = t.closest('.rb-split > .rb-caret, .rb-sr-light-split > .rb-sr-light-caret');
      if (caret && root.contains(caret)) {
        e.stopPropagation();
        var split = caret.closest('.rb-split, .rb-sr-light-split');
        var open = caret.getAttribute('aria-expanded') === 'true';
        closeAllSplits(root, split);
        split.classList.toggle('is-open', !open);
        caret.setAttribute('aria-expanded', open ? 'false' : 'true');
        return;
      }
      if (!t.closest('.rb-split, .rb-sr-light-split')) closeAllSplits(root, null);

      /* 布局模式菜单 */
      var ctrl = root.querySelector('[data-ribbon-layout-control]');
      if (ctrl) {
        var layoutBtn = t.closest('.rb-layout-mode-btn');
        var layoutItem = t.closest('[data-ribbon-layout-control] .kd-menu-item');
        if (layoutBtn && ctrl.contains(layoutBtn)) {
          e.stopPropagation();
          setMenuOpen(layoutBtn, ctrl.querySelector('.rb-layout-mode-menu'),
            layoutBtn.getAttribute('aria-expanded') !== 'true');
          return;
        }
        if (layoutItem && ctrl.contains(layoutItem) && !layoutItem.classList.contains('kd-menu-item-disabled')) {
          e.stopPropagation();
          selectLayout(root, ctrl, layoutItem.getAttribute('data-value') || 'double');
          setMenuOpen(ctrl.querySelector('.rb-layout-mode-btn'), ctrl.querySelector('.rb-layout-mode-menu'), false);
          return;
        }
        if (!t.closest('[data-ribbon-layout-control]')) {
          setMenuOpen(ctrl.querySelector('.rb-layout-mode-btn'), ctrl.querySelector('.rb-layout-mode-menu'), false);
        }
      }

      /* QAT 溢出菜单 */
      var group = qatGroup(root);
      if (group) {
        var qov = group.querySelector('[data-qat-overflow]');
        if (qov) {
          var qBtn = t.closest('.rb-qat-overflow-btn');
          if (qBtn && qov.contains(qBtn)) {
            e.stopPropagation();
            setMenuOpen(qBtn, qov.querySelector('.rb-qat-overflow-menu'),
              qBtn.getAttribute('aria-expanded') !== 'true');
            return;
          }
          if (t.closest('[data-qat-overflow-list] .kd-menu-item')) {
            e.stopPropagation();
            setMenuOpen(qov.querySelector('.rb-qat-overflow-btn'), qov.querySelector('.rb-qat-overflow-menu'), false);
            return;
          }
          if (!t.closest('[data-qat-overflow]')) {
            setMenuOpen(qov.querySelector('.rb-qat-overflow-btn'), qov.querySelector('.rb-qat-overflow-menu'), false);
          }
        }
      }

      /* 功能区 Tab 溢出菜单 */
      var nav = ribbonNav(root);
      if (nav) {
        var tov = nav.querySelector('[data-tabs-overflow]');
        if (tov) {
          var tBtn = t.closest('.rb-tabs-overflow-btn');
          if (tBtn && tov.contains(tBtn)) {
            e.stopPropagation();
            setMenuOpen(tBtn, tov.querySelector('.rb-tabs-overflow-menu'),
              tBtn.getAttribute('aria-expanded') !== 'true');
            return;
          }
          var tItem = t.closest('[data-tabs-overflow-list] .kd-menu-item');
          if (tItem && tov.contains(tItem)) {
            e.stopPropagation();
            var id = tItem.getAttribute('data-tab-id');
            var tab = id ? nav.querySelector('.kd-tabs-tab-bar[data-tab-id="' + id + '"]') : null;
            if (tab) { selectRibbonTab(root, tab); activateTab(root, tab); }
            setMenuOpen(tov.querySelector('.rb-tabs-overflow-btn'), tov.querySelector('.rb-tabs-overflow-menu'), false);
            return;
          }
          if (!t.closest('[data-tabs-overflow]')) {
            setMenuOpen(tov.querySelector('.rb-tabs-overflow-btn'), tov.querySelector('.rb-tabs-overflow-menu'), false);
          }
        }
      }

      /* 单行 ribbon 的「更多」溢出 */
      var sgl = singleBody(root);
      if (sgl) {
        var sBtn = t.closest('.rb-sr-overflow-btn');
        if (sBtn && sgl.contains(sBtn)) {
          e.stopPropagation();
          var menu = sgl.querySelector('.rb-sr-overflow-menu');
          if (menu) setMenuOpen(sBtn, menu, menu.hasAttribute('hidden'));
          return;
        }
        if (!t.closest('.rb-sr-overflow')) {
          setMenuOpen(sgl.querySelector('.rb-sr-overflow-btn'), sgl.querySelector('.rb-sr-overflow-menu'), false);
        }
      }

      /* WPS AI tab（与功能区 tab 互斥） */
      var aiT = t.closest('.rb-tabs-ai .kd-tabs-tab-bar[data-tab-id="wps-ai"]');
      if (aiT && root.contains(aiT)) {
        selectAiTab(root);
        schedule(root);
        return;
      }

      /* 功能区 tab 切换 */
      var rTab = t.closest('.kd-tabs-nav-list > .kd-tabs-tab-bar');
      if (rTab && nav && nav.contains(rTab) && !rTab.hasAttribute('hidden')) {
        selectRibbonTab(root, rTab);
        schedule(root);
      }
    });
  }

  /* 点击编辑器区域外时收起 ribbon 内所有弹出菜单（全局只装一次） */
  function bindGlobalClose() {
    document.addEventListener('click', function (e) {
      var root = document.getElementById('view-editor');
      if (!root || root.hidden || root.contains(e.target)) return;
      closeAllSplits(root, null);
      root.querySelectorAll('.rb-layout-mode-menu, .rb-qat-overflow-menu, .rb-tabs-overflow-menu, .rb-sr-overflow-menu').forEach(function (m) {
        show(m, false);
      });
    });
  }

  /* ════════════ 调度：rAF 合并，一次重算全部层级 ════════════ */

  function schedule(root) {
    if (root.__rbScheduled) return;
    root.__rbScheduled = true;
    requestAnimationFrame(function () {
      root.__rbScheduled = false;
      var nav = ribbonNav(root);
      if (nav) resetTabsFull(nav);
      fitQat(root);      // 中间区受压时优先收 QAT
      fitTabs(root);     // 再收 Tab
      fitLayout(root, root.__rbType); // 最后收命令区（双行 ladder → 单行 ladder）
    });
  }

  /* ════════════ 入口：每次编辑器渲染后调用 ════════════ */

  window.RibbonLadder = {
    init: function (root, type) {
      root.__rbType = type;
      if (!root.__rbBound) {
        root.__rbBound = true;
        bindEvents(root);
        bindGlobalClose();
        window.addEventListener('resize', function () { schedule(root); });
      }
      // 宽度依据 ribbon 容器自身：观察 ribbon 与顶栏，侧边栏开合也会触发
      if (root.__rbRO) root.__rbRO.disconnect();
      if (window.ResizeObserver) {
        var ro = root.__rbRO = new ResizeObserver(function () { schedule(root); });
        var ribbon = root.querySelector('.editor-ribbon');
        if (ribbon) ro.observe(ribbon);
        root.querySelectorAll('.rb-home, .rb-top, [data-ribbon-tabs]').forEach(function (el) { ro.observe(el); });
      }
      schedule(root);
    },
  };
})();

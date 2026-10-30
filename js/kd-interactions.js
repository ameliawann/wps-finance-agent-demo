/**
 * KDesign 组件交互脚本
 * 为 Tabs、Navigation、Select、Checkbox、Radio、Switch 提供点击切换能力
 * 无依赖，事件委托，自动发现组件
 */
;(function () {
  'use strict';

  // ── Tabs 交互 ──
  document.addEventListener('click', function (e) {
    var tabBar = e.target.closest('.kd-tabs-tab-bar');
    if (!tabBar || tabBar.classList.contains('kd-tabs-tab-bar-disabled')) return;
    // RibbonLadder 管理功能区；Editors 管理工作表及其独立数据模型。
    // 这些页签不能再按通用面板索引切换，否则会覆盖已完成的选择状态。
    if (tabBar.closest('.rb-ribbon') || tabBar.hasAttribute('data-et-sheet')) return;

    var nav = tabBar.closest('.kd-tabs-nav-list');
    if (!nav) return;

    var siblings = nav.querySelectorAll('.kd-tabs-tab-bar');
    siblings.forEach(function (t) { t.classList.remove('kd-tabs-tab-bar-active'); });
    tabBar.classList.add('kd-tabs-tab-bar-active');

    var tabsRoot = nav.closest('.kd-tabs');
    if (!tabsRoot) return;

    var index = Array.prototype.indexOf.call(siblings, tabBar);
    var panes = tabsRoot.querySelectorAll('.kd-tabs-pane');
    panes.forEach(function (p, i) {
      p.classList.toggle('kd-tabs-pane-active', i === index);
    });
  });

  // ── Checkbox 交互 ──
  document.addEventListener('change', function (e) {
    var input = e.target;
    if (!input.classList.contains('kd-checkbox-original')) return;
    var wrapper = input.closest('.kd-checkbox-input');
    if (!wrapper) return;
    wrapper.classList.toggle('is-checked', input.checked);
  });

  // ── Radio 交互 ──
  document.addEventListener('change', function (e) {
    var input = e.target;
    if (!input.classList.contains('kd-radio-original')) return;
    var name = input.getAttribute('name');
    if (name) {
      document.querySelectorAll('.kd-radio-original[name="' + name + '"]').forEach(function (r) {
        var w = r.closest('.kd-radio-input');
        if (w) w.classList.remove('is-checked');
      });
    }
    var wrapper = input.closest('.kd-radio-input');
    if (wrapper) wrapper.classList.add('is-checked');
  });

  // ── Switch 交互 ──
  document.addEventListener('change', function (e) {
    var input = e.target;
    if (!input.classList.contains('kd-switch-original')) return;
    var wrapper = input.closest('.kd-switch');
    if (!wrapper) return;
    wrapper.classList.toggle('is-checked', input.checked);
  });

  // ── Navigation 侧边导航交互 ──
  document.addEventListener('click', function (e) {
    var item = e.target.closest('.kd-navigation-item');
    if (!item || item.classList.contains('is-disabled')) return;

    var nav = item.closest('.kd-navigation-vertical');
    if (!nav) return;

    var siblings = nav.querySelectorAll('.kd-navigation-item');
    siblings.forEach(function (n) { n.classList.remove('is-active'); });
    item.classList.add('is-active');
  });

  // ── Select 下拉选择交互 ──

  var CLOSE_SVG = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 4L12 12M12 4L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  var TICK_SVG = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="#0A6CFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function getSelectRoot(el) {
    return el.closest('[data-select-mode]');
  }

  function getMode(root) {
    return root.getAttribute('data-select-mode') || 'single';
  }

  function getTrigger(root) {
    return root.querySelector('.kd-select-trigger');
  }

  function getDropdown(root) {
    return root.querySelector('.kd-select-dropdown');
  }

  function getInput(root) {
    return root.querySelector('.kd-input-inner');
  }

  function openSelect(root) {
    var trigger = getTrigger(root);
    var dropdown = getDropdown(root);
    if (!trigger || !dropdown) return;
    trigger.classList.add('is-open');
    dropdown.style.display = '';
  }

  function closeSelect(root) {
    var trigger = getTrigger(root);
    var dropdown = getDropdown(root);
    if (!trigger || !dropdown) return;
    trigger.classList.remove('is-open');
    dropdown.style.display = 'none';
  }

  function closeAllSelects(except) {
    document.querySelectorAll('[data-select-mode]').forEach(function (root) {
      if (root !== except) closeSelect(root);
    });
  }

  function createTag(label, value) {
    var tag = document.createElement('span');
    tag.className = 'kd-select-tag';
    tag.setAttribute('data-tag-value', value);
    tag.textContent = label;
    var btn = document.createElement('button');
    btn.className = 'kd-select-tag-close';
    btn.innerHTML = CLOSE_SVG;
    tag.appendChild(btn);
    return tag;
  }

  function getSelectedValues(root) {
    var tags = root.querySelectorAll('.kd-select-tag');
    var values = [];
    tags.forEach(function (t) { values.push(t.getAttribute('data-tag-value')); });
    return values;
  }

  function syncTicks(root) {
    var selected = getSelectedValues(root);
    var items = root.querySelectorAll('.kd-menu-item');
    items.forEach(function (item) {
      var val = item.getAttribute('data-value');
      var tick = item.querySelector('.kd-menu-item-tick');
      if (selected.indexOf(val) !== -1) {
        item.classList.add('kd-menu-item-selected');
        if (!tick) {
          var span = document.createElement('span');
          span.className = 'kd-menu-item-tick';
          span.innerHTML = TICK_SVG;
          item.insertBefore(span, item.firstChild);
        }
      } else {
        item.classList.remove('kd-menu-item-selected');
        if (tick) tick.remove();
      }
    });
  }

  // 点击触发器 toggle
  document.addEventListener('click', function (e) {
    // 跳过 tag-close 和 clear 按钮的点击
    if (e.target.closest('.kd-select-tag-close') || e.target.closest('.kd-select-clear')) return;

    var trigger = e.target.closest('.kd-select-trigger');
    if (!trigger || trigger.classList.contains('is-disabled')) return;

    var root = getSelectRoot(trigger);
    if (!root) return;

    // 如果点击了 menu-item，不在此处处理 toggle
    if (e.target.closest('.kd-menu-item')) return;

    var dropdown = getDropdown(root);
    if (!dropdown) return;

    var isOpen = trigger.classList.contains('is-open');
    closeAllSelects(root);
    if (isOpen) {
      closeSelect(root);
    } else {
      openSelect(root);
      // 搜索模式：聚焦 input
      if (root.hasAttribute('data-select-searchable')) {
        var input = getInput(root);
        if (input) { input.removeAttribute('readonly'); input.focus(); }
      }
    }
  });

  // 点击外部关闭
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-select-mode]')) {
      closeAllSelects(null);
    }
  });

  // 点击选项
  document.addEventListener('click', function (e) {
    var item = e.target.closest('.kd-menu-item');
    if (!item || item.classList.contains('kd-menu-item-disabled')) return;

    var root = getSelectRoot(item);
    if (!root) return;

    var mode = getMode(root);
    var value = item.getAttribute('data-value') || '';
    var label = item.textContent.trim();
    var input = getInput(root);

    if (mode === 'single') {
      // 清除旧 ticks
      root.querySelectorAll('.kd-menu-item').forEach(function (mi) {
        mi.classList.remove('kd-menu-item-selected');
        var tick = mi.querySelector('.kd-menu-item-tick');
        if (tick) tick.remove();
      });
      // 设置选中
      item.classList.add('kd-menu-item-selected');
      var tickSpan = document.createElement('span');
      tickSpan.className = 'kd-menu-item-tick';
      tickSpan.innerHTML = TICK_SVG;
      item.insertBefore(tickSpan, item.firstChild);
      // 更新 input
      if (input) input.value = label;
      closeSelect(root);
      // 标记有值（CSS 控制 hover 时显示 clear、隐藏 arrow）
      root.classList.add('has-value');
    } else {
      // 多选 toggle
      var existing = root.querySelector('.kd-select-tag[data-tag-value="' + value + '"]');
      if (existing) {
        existing.remove();
      } else {
        var tag = createTag(label, value);
        var inputEl = getInput(root);
        if (inputEl) inputEl.parentNode.insertBefore(tag, inputEl);
      }
      syncTicks(root);
    }
  });

  // 点击 Tag 关闭按钮
  document.addEventListener('click', function (e) {
    var closeBtn = e.target.closest('.kd-select-tag-close');
    if (!closeBtn) return;

    var tag = closeBtn.closest('.kd-select-tag');
    if (!tag) return;

    var root = getSelectRoot(tag);
    tag.remove();
    if (root) syncTicks(root);
  });

  // 点击 Clear 按钮
  document.addEventListener('click', function (e) {
    var clearBtn = e.target.closest('.kd-select-clear');
    if (!clearBtn) return;

    var root = getSelectRoot(clearBtn);
    if (!root) return;

    var mode = getMode(root);
    var input = getInput(root);

    if (mode === 'single') {
      if (input) { input.value = ''; }
      root.querySelectorAll('.kd-menu-item').forEach(function (mi) {
        mi.classList.remove('kd-menu-item-selected');
        var tick = mi.querySelector('.kd-menu-item-tick');
        if (tick) tick.remove();
      });
      root.classList.remove('has-value');
    } else {
      root.querySelectorAll('.kd-select-tag').forEach(function (t) { t.remove(); });
      syncTicks(root);
    }
    closeSelect(root);
  });

  // 搜索过滤
  document.addEventListener('input', function (e) {
    var input = e.target;
    if (!input.classList.contains('kd-input-inner')) return;

    var root = getSelectRoot(input);
    if (!root || !root.hasAttribute('data-select-searchable')) return;

    var keyword = input.value.toLowerCase();
    var items = root.querySelectorAll('.kd-menu-item');
    items.forEach(function (item) {
      var text = item.textContent.toLowerCase();
      item.style.display = text.indexOf(keyword) !== -1 ? '' : 'none';
    });

    // 如果面板未打开则打开
    var trigger = getTrigger(root);
    if (trigger && !trigger.classList.contains('is-open')) {
      openSelect(root);
    }
  });

})();

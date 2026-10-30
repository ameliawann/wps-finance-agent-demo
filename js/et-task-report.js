/* 任务执行报告：内容与会话一起保留，结构化呈现和复制使用同一份数据。 */
(function () {
  'use strict';
  function columnName(index) {
    var name = '';
    for (var n = index + 1; n > 0; n = Math.floor((n - 1) / 26)) name = String.fromCharCode(65 + (n - 1) % 26) + name;
    return name;
  }
  function create(task, result) {
    var report = {
      title: task.title + '执行报告',
      result: '已整理“' + task.title + '”的任务要求与执行计划，并输出执行报告。当前工作表数据保持不变。',
      changes: [
        ['任务输入', '对话记录', '已接收本次提交的任务要求。'],
        ['执行计划', '任务状态卡', '已输出执行计划。'],
        ['数据变更', '原工作表', '未写入、删除或修改业务数据。'],
        ['结果产物', '当前工作簿', '未生成业务结果工作表，已输出本执行报告。']
      ],
      findings: [
        ['数据状态', '原表未改动，业务结果待核验。']
      ],
      suggestions: ['确认数据范围和口径后再处理。']
    };
    report.locations = [[{label:'对话记录',kind:'conversation'}],[{label:'任务状态卡',kind:'progress'}],[{label:'原工作表',kind:'sheet'}],[{label:'执行报告',kind:'report'}]];
    if (!result) return report;
    var stats = result.stats, name = result.sheet.name, rows = result.sourceRows;
    var sourceNames=result.sourceSheetNames || ['渠道对账单','网关对账单'],keyLabels=result.keyLabels || ['BizId','orderid'];
    var statusCol = columnName(result.statusColumn), endRow = rows + 1;
    report.result = '已生成“' + name + '”工作表，复制主表 ' + rows + ' 条记录并新增“匹配状态”列。能匹配 ' + stats['能匹配'] + ' 条，重复 ' + stats['重复'] + ' 条，不能匹配 ' + stats['不能匹配'] + ' 条。';
    report.changes = [
      ['新增工作表', name, '保存本次对账结果，保留原工作表。'],
      ['复制主表', name + '!A1:' + columnName(result.statusColumn - 1) + endRow, '从'+sourceNames[0]+'复制全部 ' + rows + ' 条记录及原有字段。'],
      ['追加状态列', name + '!' + statusCol + '1:' + statusCol + endRow, '新增“匹配状态”，通过 IF、COUNTIF 公式逐行计算能匹配、重复、不能匹配。'],
      ['匹配口径', keyLabels.join(' ↔ '), '双方编号唯一且一致为能匹配；任一侧编号重复为重复；无对应编号为不能匹配。'],
      ['来源数据', sourceNames.join('、'), '原表业务数据未修改，未删除重复记录。']
    ];
    var keys = result.keyReferences || [];
    report.locations = [
      [{label:name,sheet:name,range:{r1:1,c1:0,r2:1,c2:0}}],
      [{label:name+'!A1:'+columnName(result.statusColumn-1)+endRow,sheet:name,range:{r1:1,c1:0,r2:endRow,c2:result.statusColumn-1}}],
      [{label:name+'!'+statusCol+'1:'+statusCol+endRow,sheet:name,range:{r1:1,c1:result.statusColumn,r2:endRow,c2:result.statusColumn}}],
      keys.map(function (ref) { return {label:ref.sheet+'!'+columnName(ref.range.c1)+ref.range.r1+':'+columnName(ref.range.c2)+ref.range.r2,sheet:ref.sheet,range:ref.range}; }),
      sourceNames.map(function(source){return {label:source,sheet:source};})
    ];
    report.findings = [
      ['待核查', '重复 '+stats['重复']+' 条，未匹配 '+stats['不能匹配']+' 条。'],
      ['核对范围', '仅核对编号，金额和币种待核验。']
    ];
    report.suggestions = [
      '先核查异常记录，再复核金额和币种。'
    ];
    if (result.matchingMode === 'exists') {
      report.changes[3][2] = '对方存在相同编号即为能匹配；没有相同编号为不能匹配，不将重复编号单独判为异常。';
      report.findings[0] = ['待核查','未匹配 '+stats['不能匹配']+' 条；本次按是否存在核对，不单独排查重复。'];
    }
    return report;
  }
  function text(report) {
    return report.title + '\n\n执行结果\n' + report.result + '\n\n变更汇总\n' +
      ['变更点 | 位置 | 内容'].concat(report.changes.map(function (row) { return row.join(' | '); })).join('\n') +
      '\n\n关键发现\n' + report.findings.map(function (item) { return '• ' + item[0] + '：' + item[1]; }).join('\n') +
      '\n\n后续建议\n' + report.suggestions.map(function (item) { return '• ' + item; }).join('\n');
  }
  function node(tag, className, content) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (content != null) element.textContent = content;
    return element;
  }
  function render(report, tabId) {
    var article = node('article', 'ag-task-report'); article.setAttribute('aria-label', report.title);
    function section(title) {
      var block = node('section'); block.appendChild(node('h4', '', title)); article.appendChild(block); return block;
    }
    var resultSection = section('执行结果'); resultSection.appendChild(node('p', '', report.result));
    if (report.legend) {
      var legend = node('div','ag-report-legend');
      report.legend.forEach(function (item) { legend.appendChild(node('span','kd-tag kd-tag--'+item.tone,item.label)); });
      resultSection.appendChild(legend);
    }
    var changes = section('变更汇总'), scroll = node('div', 'ag-report-table-scroll');
    scroll.tabIndex = 0; scroll.setAttribute('role', 'region'); scroll.setAttribute('aria-label', '变更汇总，可横向滚动');
    var wrapper = node('div', 'kd-table kd-table-bordered'), table = node('table');
    var colgroup = node('colgroup');
    ['ag-report-col-change', 'ag-report-col-location', 'ag-report-col-content'].forEach(function (name) { colgroup.appendChild(node('col', name)); });
    table.appendChild(colgroup);
    var head = node('thead'), header = node('tr', 'kd-table-header-tr');
    ['变更点', '位置', '内容'].forEach(function (title) { var th = node('th', 'kd-table-header-th', title); th.scope = 'col'; header.appendChild(th); });
    head.appendChild(header); table.appendChild(head);
    var body = node('tbody');
    report.changes.forEach(function (row, rowIndex) {
      var tr = node('tr', 'kd-table-row');
      row.forEach(function (value, colIndex) {
        var td = node('td', 'kd-table-cell');
        var locations = colIndex === 1 && report.locations && report.locations[rowIndex];
        if (locations && locations.length) {
          var stack = node('div','ag-report-locations');
          locations.forEach(function (location) {
          var chip = node('button', 'kd-tag kd-tag--info ag-report-location', location.label);
          chip.type = 'button'; chip.title = '定位到'+location.label; chip.setAttribute('aria-label','定位到'+location.label);
          chip.addEventListener('click',function () {
            if (!location.kind || location.kind === 'sheet') { Editors.navigateEtReference(tabId,location); return; }
            var session = window.Agent && Agent.sessions[tabId], view = session && session.view;
            if (!view) return;
            if (location.kind === 'progress') { var toggle = view.aside.querySelector('.ag-task-progress-toggle'); if (toggle) { if (toggle.getAttribute('aria-expanded') !== 'true') toggle.click(); toggle.scrollIntoView({block:'nearest'}); } }
            else if (location.kind === 'conversation') { var message = article.closest('.ag-msg-ai'); if (message && message.previousElementSibling) message.previousElementSibling.scrollIntoView({block:'nearest'}); }
            else article.scrollIntoView({block:'nearest'});
          });
          stack.appendChild(chip);
          });
          td.appendChild(stack);
        }
        else td.textContent = value;
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    table.appendChild(body); wrapper.appendChild(table); scroll.appendChild(wrapper); changes.appendChild(scroll);
    var findings = node('ul');
    report.findings.forEach(function (item) { var li = node('li'); li.appendChild(node('strong', '', item[0] + '：')); li.appendChild(document.createTextNode(item[1])); findings.appendChild(li); });
    section('关键发现').appendChild(findings);
    var suggestions = node('ul'); report.suggestions.forEach(function (item) { suggestions.appendChild(node('li', '', item)); });
    section('后续建议').appendChild(suggestions);
    return article;
  }
  function createHighlight(info) {
    function groups(rows) {
      if(!rows.length)return [];
      var first=rows[0];
      return [{label:info.sheetName+'!A'+first+':'+columnName(info.lastColumn)+first+'（首条）',sheet:info.sheetName,range:{r1:first,c1:0,r2:first,c2:info.lastColumn}}];
    }
    var count = info.duplicates.length + info.unmatched.length;
    var changes = [], locations = [], findings = [];
    if (info.markDuplicates) {
      changes.push(['重复记录标色',info.sheetName,'为 '+info.duplicates.length+' 条重复记录设置半透明明黄色整行底色。']);
      locations.push(groups(info.duplicates));
    }
    if (info.markUnmatched) {
      changes.push(['未匹配记录标色',info.sheetName,'为 '+info.unmatched.length+' 条未匹配记录设置半透明红色整行底色。']);
      locations.push(groups(info.unmatched));
    }
    changes.push(['保留数据与公式',info.sheetName,'仅调整目标记录底色，保留单元格数值、匹配状态公式和原表数据。']);
    locations.push([{label:info.sheetName,sheet:info.sheetName}]);
    findings.push(['数据完整', '仅调整底色，数据和公式未改动。']);
    return {
      title:'记录标色执行报告',
      result:'已在“'+info.sheetName+'”中完成记录标色，共 '+count+' 条。'+(info.markDuplicates?'重复记录 '+info.duplicates.length+' 条使用半透明明黄色；':'')+(info.markUnmatched?'未匹配记录 '+info.unmatched.length+' 条使用半透明红色。':''),
      legend:(info.markDuplicates?[{label:'重复 '+info.duplicates.length+' 条 · 半透明明黄色',tone:'warning'}]:[]).concat(info.markUnmatched?[{label:'未匹配 '+info.unmatched.length+' 条 · 半透明红色',tone:'error'}]:[]),
      changes:changes,locations:locations,findings:findings,
      suggestions:['按颜色定位异常，核查编号、日期和金额。']
    };
  }
  window.EtTaskReport = {create:create, createHighlight:createHighlight, render:render, toText:text};
})();

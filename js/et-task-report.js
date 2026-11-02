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
    if(result.matchingMode==='transaction'){
      report.layout='reconciliation';
      report.result='已生成“'+name+'”，共 '+rows+' 条记录。\n匹配 '+stats['能匹配']+' 条，重复待复核 '+stats['重复']+' 条，未匹配 '+stats['不能匹配']+' 条。';
      report.scope=[
        {label:'来源数据',locations:sourceNames.map(function(source){return {label:source,sheet:source,range:{r1:1,c1:0,r2:1,c2:0}};})},
        {label:'匹配路径',paired:true,locations:keys.map(function(ref){return {label:ref.sheet+'!'+columnName(ref.range.c1)+ref.range.r1+':'+columnName(ref.range.c2)+ref.range.r2,sheet:ref.sheet,range:ref.range};})},
        {label:'核对口径',text:'同币种下比较借贷金额，交易原币与换汇结算金额分开处理。'}
      ];
      report.findings=[
        ['待核查','重复 '+stats['重复']+' 条，未匹配 '+stats['不能匹配']+' 条。'],
        ['重复关联','预核对 '+result.initialDuplicateRows+' 条中，'+result.resolvedDuplicateRows+' 条已逐笔区分。'],
        ['完整核对情况','金额与币种状态已在明细中单独标记。']
      ];
      report.traceTitle='处理溯源';
      report.changes=report.changes.slice(0,3);report.locations=report.locations.slice(0,3);
      if(result.detailColumns){
        var lastStatusCol=columnName(result.detailColumns.decision||result.detailColumns.currency);
        report.changes[2][1]=name+'!'+statusCol+'1:'+lastStatusCol+endRow;
        report.changes[2][2]='使用公式分别标识匹配状态、金额核验与币种核验。';
        report.locations[2]=[{label:report.changes[2][1],sheet:name,range:{r1:1,c1:result.statusColumn,r2:endRow,c2:result.detailColumns.decision||result.detailColumns.currency}}];
      }
      if(result.duplicateDecision){
        report.scope.push({label:'重复处理',text:result.duplicateDecision.instruction+(result.duplicateDecision.customUnresolved?' 当前两条保留待核实。':'')});
        if(stats['待核实']){report.findings[0][1]+='待核实 '+stats['待核实']+' 条。';report.result+='\n另有 '+stats['待核实']+' 条记录保留待核实。';}
      }
      report.suggestionLead='接下来，我建议：';
      report.suggestions=['查看疑似项','生成修订预览','保留待核实项'];
      report.suggestionPrompts=['帮我查看本次对账中的重复、未匹配和待核实记录。','请根据本次对账结果生成修订预览，供我核查。','保留待核实记录，整理一份后续核查清单。'];
      var pending=(stats['不能匹配']||0)+(stats['待核实']||0);
      report.metrics=[
        {label:'总记录数',value:rows,tone:'info'},
        {label:'已匹配',value:stats['能匹配']||0,tone:'success'},
        {label:'待核查',value:pending,tone:'warning'},
        {label:'重复',value:stats['重复']||0,tone:'error'}
      ];
      report.advicePriority=stats['不能匹配']?'优先检查 '+stats['不能匹配']+' 条未匹配记录。':pending?'先核实 '+pending+' 条待确认记录。':stats['重复']?'先复核 '+stats['重复']+' 条重复记录。':'本次记录已全部匹配，建议再抽查关键交易。';
      report.adviceDetail=stats['待核实']?'另有 '+stats['待核实']+' 条记录等待业务确认，我可以继续帮你核实原因。':'我可以继续帮你分析未匹配原因，并整理复核清单。';
      if(!pending)report.adviceDetail=stats['重复']?'我可以继续帮你复核重复记录，或生成修订预览。':'我可以继续帮你抽查金额和币种，整理本次核对摘要。';
      report.statusLocation={label:name+'!'+statusCol+'2:'+statusCol+endRow,sheet:name,range:{r1:2,c1:result.statusColumn,r2:endRow,c2:result.statusColumn}};
      var matchedRow=result.pairs&&result.pairs.length?result.pairs[0].main:2;
      var duplicateRow=result.duplicateDecision?result.duplicateDecision.mainRows.find(function(row){return row!==result.duplicateDecision.keepRow;}):null;
      if(!duplicateRow)for(var rr=2;rr<=endRow;rr++)if(result.sheet.cells[statusCol+rr]==='重复'){duplicateRow=rr;break;}
      function example(label,col,row,explanation){
        var address=columnName(col)+row,formula=result.sheet.formulas[address];if(!formula)return null;
        return {label:label,formula:formula,value:result.sheet.cells[address],location:{label:name+'!'+address,sheet:name,range:{r1:row,c1:col,r2:row,c2:col}},explanation:explanation};
      }
      report.formulaExamples=[
        example('匹配判断',result.statusColumn,matchedRow,'先排除空编号，再核对编号、日期、商户、币种、渠道、地区及借贷金额；条件一致才标为能匹配。COUNTIF 检查重复编号，未找到对应项则标为不能匹配。'),
        duplicateRow?example('重复处理',result.statusColumn,duplicateRow,result.duplicateDecision?'先读取“重复记录处理”列中你确认的结论：重复导入标为重复，独立交易标为不能匹配，暂不判断标为待核实；保留匹配的记录继续正常核对。':'COUNTIF 统计编号在两份账单中的出现次数；未能逐笔配对、且任一侧编号重复的记录标为重复。'):null,
        result.detailColumns?example('金额核验',result.detailColumns.amount,matchedRow,'币种一致时，分别比较借方和贷方金额；ABS 计算金额差，差额不超过 0.005 才判为一致。币种不同则标为跨币种待核验；无配对记录时保留待核验。'):null,
        result.detailColumns?example('币种核验',result.detailColumns.currency,matchedRow,'TRIM 去除币种文本两侧空格，IF 判断双方币种是否一致；不直接比较交易原币与换汇结算金额。'):null
      ].filter(Boolean);
      report.memoryRows=report.scope.map(function(row){return Object.assign({},row);});
    }
    if (result.matchingMode === 'exists') {
      report.changes[3][2] = '对方存在相同编号即为能匹配；没有相同编号为不能匹配，不将重复编号单独判为异常。';
      report.findings[0] = ['待核查','未匹配 '+stats['不能匹配']+' 条；本次按是否存在核对，不单独排查重复。'];
    }
    return report;
  }
  function text(report) {
    if(report.layout==='reconciliation')return report.title+'\n\n'+(report.metrics||[]).map(function(metric){return metric.label+'：'+metric.value+' 条';}).join('\n')+'\n\n我的建议\n'+report.advicePriority+'\n异常状态：'+report.statusLocation.label+'\n'+report.adviceDetail+'\n\n处理依据与公式\n'+(report.formulaExamples||[]).map(function(item){return item.label+' · '+item.location.label+'\n'+item.formula+'\n公式解释：'+item.explanation;}).join('\n\n')+'\n\n下次我会记住\n'+(report.memoryRows||report.scope).map(function(row){return row.label+'：'+(row.locations?row.locations.map(function(location){return location.label;}).join(row.paired?' ↔ ':'、'):row.text);}).join('\n');
    return report.title + '\n\n执行结果\n' + report.result + '\n\n' + (report.traceTitle||'变更汇总') + '\n' +
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
  function inlineLocations(locations,tabId,paired){
    var group=node('div','ag-report-locations ag-report-inline-locations');
    locations.forEach(function(location,i){
      if(paired&&i){var separator=node('span','ag-report-path-separator','↔');separator.setAttribute('aria-hidden','true');group.appendChild(separator);}
      var chip=node('button','kd-tag kd-tag--info ag-report-location',location.label);
      chip.type='button';chip.title='定位到 '+location.label;chip.setAttribute('aria-label',chip.title);
      chip.addEventListener('click',function(){Editors.navigateEtReference(tabId,location);});group.appendChild(chip);
    });
    return group;
  }
  function renderReconciliation(report,tabId,article){
    article.className+=' ag-task-report--reconciliation';
    function section(title){var block=node('section');block.appendChild(node('h4','',title));article.appendChild(block);return block;}
    function keyValueTable(block,rows){
      var wrapper=node('div','ag-report-structured-table'),table=node('table'),body=node('tbody');
      wrapper.tabIndex=0;wrapper.setAttribute('role','region');wrapper.setAttribute('aria-label',block.querySelector('h4').textContent);
      rows.forEach(function(row){
        var tr=node('tr'),label=node('th','',row.label),content=node('td');label.scope='row';
        if(row.locations)content.appendChild(inlineLocations(row.locations,tabId,row.paired));else content.textContent=row.text;
        tr.appendChild(label);tr.appendChild(content);body.appendChild(tr);
      });
      table.appendChild(body);wrapper.appendChild(table);block.appendChild(wrapper);
    }
    var overview=node('section','ag-report-overview');overview.setAttribute('aria-label','本次对账核心指标');
    var metrics=node('div','ag-report-metrics');
    (report.metrics||[]).forEach(function(metric){
      var card=node('div','ag-report-metric ag-report-metric--'+metric.tone),value=node('div','ag-report-metric-value');
      card.appendChild(node('span','ag-report-metric-label',metric.label));value.appendChild(node('strong','',metric.value));value.appendChild(node('span','','条'));card.appendChild(value);metrics.appendChild(card);
    });overview.appendChild(metrics);article.appendChild(overview);
    var next=section('我的建议'),priority=node('p','ag-report-advice-priority');priority.appendChild(node('strong','',report.advicePriority));next.appendChild(priority);
    var where=node('p','ag-report-advice-location','我已在 ');where.appendChild(inlineLocations([report.statusLocation],tabId));where.appendChild(document.createTextNode(' 标出核对状态。'));next.appendChild(where);
    next.appendChild(node('p','ag-report-advice-detail',report.adviceDetail));var suggestions=node('ul','ag-report-suggestions-inline');
    report.suggestions.forEach(function(suggestion,i){
      var item=node('li'),button=node('button','ag-report-followup',suggestion);button.type='button';
      button.addEventListener('click',function(){if(window.Agent)Agent.fillEtSuggestion(tabId,report.suggestionPrompts&&report.suggestionPrompts[i]||suggestion);});
      item.appendChild(button);suggestions.appendChild(item);
    });next.appendChild(suggestions);
    var basis=section('处理依据与公式');
    keyValueTable(basis,report.scope.slice(0,3));
    var formulas=node('div','ag-report-formulas');
    (report.formulaExamples||[]).forEach(function(item){
      var entry=node('div','ag-report-formula'),heading=node('div','ag-report-formula-heading');
      heading.appendChild(node('span','',item.label));heading.appendChild(inlineLocations([item.location],tabId));entry.appendChild(heading);
      var code=node('pre','ag-report-formula-code');code.tabIndex=0;code.setAttribute('aria-label',item.label+'，实际写入的公式');code.appendChild(node('code','',item.formula));entry.appendChild(code);formulas.appendChild(entry);
    });basis.appendChild(formulas);
    var details=node('details','ag-report-formula-explanation');details.appendChild(node('summary','','公式解释'));
    var explanations=node('ul');(report.formulaExamples||[]).forEach(function(item){var li=node('li');li.appendChild(node('strong','',item.label));item.explanation.split(/[；。]/).filter(Boolean).forEach(function(line){li.appendChild(node('p','',line+'。'));});explanations.appendChild(li);});details.appendChild(explanations);basis.appendChild(details);
    keyValueTable(section('下次我会记住'),report.memoryRows||report.scope);
    return article;
  }
  function render(report, tabId) {
    var article = node('article', 'ag-task-report'); article.setAttribute('aria-label', report.title);
    if(report.layout==='reconciliation')return renderReconciliation(report,tabId,article);
    function section(title) {
      var block = node('section'); block.appendChild(node('h4', '', title)); article.appendChild(block); return block;
    }
    var resultSection = section('执行结果'); report.result.split('\n').forEach(function(line){resultSection.appendChild(node('p','',line));});
    if (report.legend) {
      var legend = node('div','ag-report-legend');
      report.legend.forEach(function (item) { legend.appendChild(node('span','kd-tag kd-tag--'+item.tone,item.label)); });
      resultSection.appendChild(legend);
    }
    var changes = section(report.traceTitle||'变更汇总'), scroll = node('div', 'ag-report-table-scroll');
    scroll.tabIndex = 0; scroll.setAttribute('role', 'region'); scroll.setAttribute('aria-label', (report.traceTitle||'变更汇总')+'，可横向滚动');
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

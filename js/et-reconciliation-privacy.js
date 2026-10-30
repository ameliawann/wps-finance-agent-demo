/* 对账脱敏：仅在临时副本中处理，每轮核验后还原结果，再保存偏好。 */
(function () {
  'use strict';
  var contexts = {}, sequence = 0;
  var sheetKeys = ['cells','formulas','sel','selRange','marks','cellStyles','columnCount','columnWidths','notice','pendingAi','chart','chartSelected'];
  function copy(value) { return JSON.parse(JSON.stringify(value)); }
  function sync(tab) {
    var m = tab.doc;
    if (!m.sheets || !m.sheets[m.activeSheet]) return;
    sheetKeys.forEach(function (key) { if (m[key] === undefined) delete m.sheets[m.activeSheet][key]; else m.sheets[m.activeSheet][key] = m[key]; });
  }
  function load(tab, sheet) {
    var m = tab.doc;
    m.activeSheet = m.sheets.indexOf(sheet);
    sheetKeys.forEach(function (key) { if (sheet[key] === undefined) delete m[key]; else m[key] = sheet[key]; });
  }
  function refresh(tab) {
    if (App.activeId !== tab.id) return;
    var root = document.querySelector('#view-editor');
    if (root) Editors.render(root,tab);
  }
  function column(address) { return address.match(/^[A-Z]+/)[0]; }
  function replaceReferences(formula, entries, reverse) {
    entries.forEach(function (entry) {
      var from = reverse ? entry.working.name : entry.source.name;
      var to = reverse ? entry.source.name : entry.working.name;
      formula = formula.split("'"+from.replace(/'/g,"''")+"'!").join("'"+to.replace(/'/g,"''")+"'!");
    });
    return formula;
  }
  function maskSheet(sheet, fields, context) {
    var protectedColumns = {};
    fields.forEach(function (field) { protectedColumns[field] = true; });
    Object.keys(sheet.cells).forEach(function (address) {
      var c = column(address), row = Number(address.match(/\d+$/)[0]), value = sheet.cells[address];
      var header = String(sheet.cells[c+'1'] || '');
      if (row === 1 || protectedColumns[c] || header === '匹配状态' || value == null || value === '' || typeof value !== 'string') return;
      // 编辑器将所有单元格转成字符串；按字段语义保留数值和日期，编号、账号仍按文字脱敏。
      if (/amount|balance|price|cost|fee|rate|quantity|金额|余额|单价|费用|费率|数量|汇率/i.test(header) && /^[-+]?\d[\d,.]*(?:%|[eE][-+]?\d+)?$/.test(value.trim())) return;
      if (/date|time|日期|时间/i.test(header) && /^\d{4}[-/]\d{1,2}[-/]\d{1,2}(?:[ T].*)?$/.test(value)) return;
      var token = '***'+context.id+'-'+(++context.nextToken)+'***';
      context.values[token] = value;
      sheet.cells[address] = token;
      // 文字公式只保留打码后的值，避免公式栏显示原文。
      if (sheet.formulas) delete sheet.formulas[address];
    });
    delete sheet.pendingAi;
    sheet.notice = '脱敏处理中 · 非匹配文字字段已打码 · 核验后自动还原';
  }
  function begin(tab, action) {
    if (contexts[tab.id]) throw new Error('上一轮脱敏尚未还原');
    sync(tab);
    var m = tab.doc, specs = action.sources || [], entries = [];
    specs.forEach(function (spec) {
      var sourceTab = !spec.book || spec.book === tab.name ? tab : App.tabs.find(function (item) { return item.type === 'et' && item.name === spec.book; });
      if (!sourceTab && window.MOCK_SEED && MOCK_SEED.etFiles[spec.book]) sourceTab = {name:spec.book,doc:Editors.createModel('et',spec.book,false)};
      if (sourceTab) sync(sourceTab);
      var source = sourceTab && sourceTab.doc.sheets && sourceTab.doc.sheets.find(function (sheet) { return sheet.name === spec.sheet; });
      if (!source) throw new Error('找不到待脱敏的工作表：'+spec.sheet);
      var entry = entries.find(function (item) { return item.source === source; });
      if (!entry) { entry = {source:source,fields:[],mutable:sourceTab === tab && !!source.demoResultId,originalFormulas:copy(source.formulas || {})}; entries.push(entry); }
      (spec.columns || []).forEach(function (c) { if (entry.fields.indexOf(c)<0) entry.fields.push(c); });
    });
    if (!entries.length) throw new Error('未指定脱敏工作表');
    var context = {id:++sequence,entries:entries,values:{},nextToken:0,originalActive:m.sheets[m.activeSheet],outputs:[]};
    entries.forEach(function (entry) {
      var working = copy(entry.source), name = entry.source.name+'_脱敏', suffix = 2;
      while (m.sheets.some(function (sheet) { return sheet.name === name; }) || entries.some(function (item) { return item.working && item.working.name === name; })) name = entry.source.name+'_脱敏'+suffix++;
      working.name = name; working.privacyTemporary = true;
      if (working.demoResultId) working.demoResultId = working.demoResultId+'-private-'+context.id;
      entry.working = working;
      maskSheet(working,entry.fields,context);
    });
    entries.forEach(function (entry) {
      Object.keys(entry.working.formulas || {}).forEach(function (address) { entry.working.formulas[address] = replaceReferences(entry.working.formulas[address],entries,false); });
      m.sheets.push(entry.working);
    });
    contexts[tab.id] = context;
    load(tab,entries[0].working); refresh(tab);
    return true;
  }
  function restoreSheet(sheet, context, originalFormulas) {
    Object.keys(sheet.cells).forEach(function (address) { var value = sheet.cells[address]; if (Object.prototype.hasOwnProperty.call(context.values,value)) sheet.cells[address] = context.values[value]; });
    if (originalFormulas) sheet.formulas = Object.assign({},originalFormulas,sheet.formulas);
    Object.keys(sheet.formulas || {}).forEach(function (address) { sheet.formulas[address] = replaceReferences(sheet.formulas[address],context.entries,true); });
  }
  function restore(tab, cancelled) {
    var context = contexts[tab.id];
    if (!context) return true;
    sync(tab);
    var m = tab.doc, selected = context.originalActive;
    context.entries.forEach(function (entry) {
      if (!entry.mutable) return;
      restoreSheet(entry.working,context,entry.originalFormulas);
      sheetKeys.forEach(function (key) { if (entry.working[key] === undefined) delete entry.source[key]; else entry.source[key] = entry.working[key]; });
      entry.source.notice = '对账结果 · 文字已还原，匹配状态、公式与本轮标色已保留';
      selected = entry.source;
    });
    context.outputs.forEach(function (sheet) { restoreSheet(sheet,context); sheet.notice = sheet.notice.replace('脱敏处理中','文字已还原'); selected = sheet; });
    m.sheets = m.sheets.filter(function (sheet) { return !context.entries.some(function (entry) { return entry.working === sheet; }); });
    delete contexts[tab.id];
    load(tab,selected);
    Editors.recalculateEtFormulas(tab);
    refresh(tab);
    return true;
  }
  function workingResultId(tab, id) {
    var context = contexts[tab.id], entry = context && context.entries.find(function (item) { return item.source.demoResultId === id; });
    return entry ? entry.working.demoResultId : id;
  }
  function prepareResult(tab, result) {
    var context = contexts[tab.id];
    if (!context) return result;
    var main = context.entries.find(function (entry) { return entry.source.name === '渠道对账单'; });
    var gateway = context.entries.find(function (entry) { return entry.source.name === '网关对账单'; });
    if (!main || !gateway) throw new Error('缺少对账所需的脱敏副本');
    var masked = Editors.prepareDemoReconciliation(tab,{main:main.working,gateway:gateway.working,matchingMode:result.matchingMode});
    if (!masked) throw new Error('脱敏副本无法生成对账结果');
    masked.sheet.name = result.sheet.name; masked.sheet.demoResultId = result.sheet.demoResultId;
    delete masked.sheet.privacyTemporary;
    masked.sheet.notice += ' · 脱敏处理中';
    Object.assign(masked.sheet.marks,result.sheet.marks);
    return masked;
  }
  function registerOutput(tab, sheet) { var context = contexts[tab.id]; if (context && context.outputs.indexOf(sheet)<0) context.outputs.push(sheet); }
  function refsForResult(result) {
    return result.keyReferences.map(function (ref) { return {sheet:ref.sheet,columns:[columnName(ref.range.c1)]}; });
  }
  function columnName(c) { var name = ''; for (var n=c+1;n>0;n=Math.floor((n-1)/26)) name=String.fromCharCode(65+(n-1)%26)+name; return name; }
  function sourcesFor(tab, script) {
    if (script.privacySources) return script.privacySources;
    var resultStep = script.steps.find(function (step) { return step.action && step.action.type === 'et.reconcileDemo'; });
    if (resultStep) return refsForResult(resultStep.action.result);
    var highlight = script.steps.find(function (step) { return step.action && step.action.type === 'et.highlightReconciliation'; });
    var result = highlight && tab.doc.sheets.find(function (sheet) { return sheet.demoResultId === highlight.action.info.resultId; });
    if (!result) result = tab.doc.sheets.find(function (sheet) { return sheet.demoResultId === tab.doc.lastReconciliationResultId; });
    var main = result || tab.doc.sheets.find(function (sheet) { return sheet.name === '渠道对账单'; });
    var gateway = tab.doc.sheets.find(function (sheet) { return sheet.name === '网关对账单'; });
    return [main,gateway].filter(Boolean).map(function (sheet) {
      var columns = Object.keys(sheet.cells).filter(function (address) { return /^[A-Z]+1$/.test(address) && /^(bizid|orderid)$/i.test(String(sheet.cells[address])); }).map(column);
      return {sheet:sheet.name,columns:columns};
    });
  }
  function wrap(tab, script, memoryKey) {
    if (!tab || tab.type !== 'et' || memoryKey !== 'finance-0' || script.privacyWrapped) return script;
    var memory = EtTaskMemory.get(tab,'finance-0');
    var enabled = typeof script.privacyMode === 'boolean' ? script.privacyMode : typeof tab.doc.reconciliationPrivacyEnabled === 'boolean' ? tab.doc.reconciliationPrivacyEnabled : !!(memory && memory.preferences.privacyMode);
    if (typeof script.privacyMode === 'boolean') tab.doc.reconciliationPrivacyEnabled = enabled;
    if (!enabled || !script.steps.some(function (step) { return step.type === 'tool_call'; })) return script;
    var stages = [], steps = [], body = script.steps.filter(function (step) { return !step.planTask && step.type !== 'done' && !(step.action && step.action.type === 'et.saveTaskMemory'); });
    var save = script.steps.find(function (step) { return step.action && step.action.type === 'et.saveTaskMemory'; });
    body.filter(function (step) { return step.type !== 'tool_call' && step.type !== 'clarification'; }).forEach(function (step) { steps.push(Object.assign({},step)); });
    steps.push({type:'tool_call',toolName:'plan_task',planTask:true,content:'生成任务计划：先脱敏，再执行与核验，最后还原结果并保存个性化设置'});
    function stage(title, step) { step = Object.assign({},step,{taskStage:stages.length}); stages.push(title); steps.push(step); }
    stage('脱敏处理',{type:'tool_call',toolName:'mask_reconciliation_data',content:'复制本轮涉及的工作表为临时副本，保留匹配字段、数值和日期，将其余文字字段打码',action:{type:'et.maskReconciliation',sources:sourcesFor(tab,script)}});
    body.filter(function (step) { return step.type === 'tool_call' || step.type === 'clarification'; }).forEach(function (step) { stage(script.taskPlan && script.taskPlan[step.taskStage] || step.content,step); });
    if (!/核验|复核/.test(stages[stages.length-1])) stage('核验计算与结果',{type:'tool_call',toolName:'verify_task_result',content:'复核本轮处理后的记录、计算和结果，再还原原始文字'});
    stage('还原脱敏数据',{type:'tool_call',toolName:'restore_reconciliation_data',content:'核验完成，还原结果中的原始文字，保留匹配状态、计算公式及本轮修改，收起临时脱敏副本',action:{type:'et.restoreReconciliation'}});
    save = save ? Object.assign({},save,{action:Object.assign({},save.action,{preferences:Object.assign({},save.action.preferences,{privacyMode:true})})}) : {type:'tool_call',toolName:'save_task_preferences',content:'保存脱敏偏好，后续每轮先脱敏、核验后还原',action:{type:'et.saveTaskMemory',taskKey:'finance-0',taskName:'账单勾稽核对',preferences:{privacyMode:true}}};
    stage('保存个性化设置',save);
    script.steps.filter(function (step) { return step.type === 'done'; }).forEach(function (step) {
      var done = Object.assign({},step);
      if (done.report) { done.report = copy(done.report); done.report.changes.push(['脱敏与还原','本轮工作表副本','先对非匹配文字字段打码，核验后还原原始文字；最终结果保留原文，脱敏偏好已记忆。']); if (done.report.locations) done.report.locations.push([]); }
      steps.push(done);
    });
    return Object.assign({},script,{privacyWrapped:true,memoryTaskKey:'finance-0',taskPlan:stages,steps:steps});
  }
  window.EtReconciliationPrivacy = {wrap:wrap,begin:begin,restore:restore,prepareResult:prepareResult,registerOutput:registerOutput,workingResultId:workingResultId,refsForResult:refsForResult,isActive:function (tab) { return !!contexts[tab.id]; }};
})();

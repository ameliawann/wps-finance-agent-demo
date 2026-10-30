/* 对账完成后的上下文追问：复用结果页，按匹配状态标色。 */
(function () {
  'use strict';
  function route(tabId, text) {
    var color = /颜色|上色|着色|标色|高亮|标.{0,8}色|底色|背景色/.test(text);
    var duplicates = /重复/.test(text), unmatched = /未匹配|不匹配|不能匹配|无法匹配|匹配不上|未能匹配|没匹配|没有匹配/.test(text);
    if (color && /异常记录|这两类|这两种/.test(text) && !duplicates && !unmatched) duplicates = unmatched = true;
    if (!color || !duplicates && !unmatched) return null;
    var tab = App.tabs.find(function (item) { return item.id === tabId && item.type === 'et'; });
    if (!tab) return null;
    var info = Editors.prepareReconciliationHighlight(tab,duplicates,unmatched);
    if (!info) return {steps:[{type:'done',content:'请先发起账单勾稽核对，生成对账结果后，我会按匹配状态为记录标色。'}]};
    var plan = ['读取对账结果','定位待标色记录','设置分类颜色','复核标色与数据','保存个性化设置'];
    var preferences = {};
    if (duplicates) preferences.duplicateColor = '整行使用半透明明黄色底色。';
    if (unmatched) preferences.unmatchedColor = '整行使用半透明红色底色。';
    var scope = (duplicates?'重复 '+info.duplicates.length+' 条（半透明明黄色）':'')+(duplicates&&unmatched?'，':'')+(unmatched?'未匹配 '+info.unmatched.length+' 条（半透明红色）':'');
    var steps = [
      {type:'understanding',keepVisible:true,content:'我会沿用“'+info.sheetName+'”的匹配状态，为记录设置整行底色：'+scope+'。保留原有数据与公式。'},
      {type:'tool_call',toolName:'plan_task',planTask:true,content:'规划读取、定位、标色、复核与保存设置五个阶段'},
      {type:'tool_call',toolName:'read_reconciliation_result',taskStage:0,content:'读取“'+info.sheetName+'”的匹配状态列，共 '+info.totalRows+' 条记录'},
      {type:'tool_call',toolName:'locate_reconciliation_rows',taskStage:1,content:'按匹配状态定位目标记录：'+scope},
      {type:'tool_call',toolName:'highlight_reconciliation_rows',taskStage:2,content:'在原结果页设置分类底色，不新增工作表，不改写数值和公式',action:{type:'et.highlightReconciliation',info:info}},
      {type:'tool_call',toolName:'verify_reconciliation_highlight',taskStage:3,content:'检查 '+(info.duplicates.length+info.unmatched.length)+' 条记录的颜色，确认数据、公式和其余记录保持原样'},
      {type:'tool_call',toolName:'save_task_preferences',taskStage:4,content:'将本次颜色设置保存到“账单勾稽核对”，保留已有的结果输出要求',action:{type:'et.saveTaskMemory',taskKey:'finance-0',taskName:'账单勾稽核对',preferences:preferences}},
      {type:'done',content:'标色完成，执行报告如下。',report:EtTaskReport.createHighlight(info)}
    ];
    return {memoryTaskKey:'finance-0',taskPlan:plan,steps:steps};
  }
  window.EtReconciliationFollowup = {route:route};
})();

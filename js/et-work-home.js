/* 财务助手回访首页：在同一侧栏查看任务进度、历史结果和下期工作。 */
(function () {
  'use strict';
  var key='wps-finance-agent.work-home.v1', records=[], returning=false;
  try { var saved=JSON.parse(localStorage.getItem(key)||'null');returning=!!saved;records=saved&&Array.isArray(saved.records)?saved.records.slice(0,3):[]; } catch(error){}
  function persist(){try{localStorage.setItem(key,JSON.stringify({visited:true,records:records}));}catch(error){}}
  function element(tag,className,text){var el=document.createElement(tag);if(className)el.className=className;if(text!=null)el.textContent=text;return el;}
  function owner(id){return App.tabs.find(function(tab){return tab.id===id;});}
  function eligible(s){var tab=owner(s.tabId);return s.type==='et'&&window.EtExperts&&EtExperts.isFinal()&&tab&&tab.doc.aiExpertId==='finance';}
  function shouldShow(s){if(!eligible(s))return false;persist();return returning||s.workHomeReturning||records.length>0;}
  function button(text,action,primary){var el=element('button','kd-button kd-button-'+(primary?'primary':'secondary')+' kd-button-m',text);el.type='button';el.addEventListener('click',action);return el;}
  function paragraph(parent,text,className){var p=element('p',className||'ag-work-description',text);parent.appendChild(p);return p;}
  function section(root,title){var el=element('section','ag-work-section');el.appendChild(element('h4','',title));root.appendChild(el);return el;}
  function activeTasks(){return Object.keys(Agent.sessions).map(function(id){return Agent.sessions[id];}).filter(function(s){return s.type==='et'&&s.taskProgress&&owner(s.tabId)&&(!s.taskProgress.complete&&(s.processing||s.clarification)||s.reconciliationFlow&&s.reconciliationFlow.status==='planned');});}
  function resume(s){var tab=owner(s.tabId);if(!tab)return;App.openDoc('et',tab.name);Agent.resumeEtWork(s.tabId);if(!Agent.isOpen())Agent.toggle();}
  function metrics(parent,report){
    var list=element('dl','ag-work-metrics');
    (report.metrics||[]).slice(1).forEach(function(metric){var item=element('div');item.appendChild(element('dt','',metric.label));item.appendChild(element('dd','ag-work-number ag-work-number--'+metric.tone,String(metric.value)));list.appendChild(item);});parent.appendChild(list);
  }
  function snapshot(tab){
    var model={};
    ['kind','cells','formulas','sel','selRange','marks','cellStyles','columnCount','columnWidths','sheets','activeSheet','aiExpertId','aiRecommendedExpertId'].forEach(function(name){if(tab.doc[name]!==undefined)model[name]=tab.doc[name];});
    return JSON.parse(JSON.stringify(model));
  }
  function complete(s,msg){
    if(!eligible(s)||s.processing)return;
    msg=msg||s.messages[s.messages.length-1];
    var step=msg&&msg.steps&&msg.steps.find(function(step){return step.report&&step.report.layout==='reconciliation';});
    if(!step||msg.workHomeSaved)return;
    var tab=owner(s.tabId),memory=window.EtTaskMemory&&EtTaskMemory.get(tab,'finance-0'),preferences=Object.assign({},memory&&memory.preferences),last=tab.doc.lastReconciliationTask;
    if(last&&window.EtTaskMemory){preferences.matchingRules=last.rules;preferences.matchingMode=last.matchingMode;preferences.rangeFields=EtTaskMemory.captureRangeFields(tab,last.ranges);}
    var record={id:Date.now()+'-'+s.tabId,tabId:s.tabId,workbook:tab.name,report:step.report,model:snapshot(tab),preferences:preferences,completedAt:Date.now()};
    records.unshift(record);records=records.slice(0,3);msg.workHomeSaved=true;persist();refreshAll();
  }
  function openResult(record){
    var tab=App.tabs.find(function(tab){return tab.type==='et'&&tab.name===record.workbook;});
    if(!tab){App.openDoc('et',record.workbook);tab=owner(App.activeId);Object.assign(tab.doc,JSON.parse(JSON.stringify(record.model)));App.openDoc('et',tab.name);}
    else {
      var location=record.report.statusLocation,hasResult=location&&(tab.doc.sheets||[]).some(function(sheet){return sheet.name===location.sheet;});
      if(!hasResult){
        if(Agent.sessions[tab.id]&&Agent.sessions[tab.id].processing){App.openDoc('et','历史结果_'+record.workbook);tab=owner(App.activeId);}
        Object.assign(tab.doc,JSON.parse(JSON.stringify(record.model)));
      }
      App.openDoc('et',tab.name);
    }
    if(!Agent.isOpen())Agent.toggle();
    Agent.showEtWorkHome(tab.id,record);
    if(record.report.statusLocation)Editors.navigateEtReference(tab.id,record.report.statusLocation);
    Agent.sessions[tab.id].view.body.scrollTop=0;
  }
  function renderReport(root,s,record){
    root.className='ag-welcome ag-work-home';root.replaceChildren();
    root.appendChild(button('返回我的工作',function(){s.workHomeReport=null;render(root,s);s.view.body.scrollTop=0;}));
    paragraph(root,'上期对账结果 · '+record.workbook,'ag-work-report-title');
    root.appendChild(EtTaskReport.render(record.report,s.tabId));
  }
  function startNext(s,record){
    if(window.RECON_NEXT_PERIOD){
      App.openDoc('et',RECON_NEXT_PERIOD.source);
      var tab=owner(App.activeId);if(!Agent.isOpen())Agent.toggle();
      if(record&&record.preferences&&window.EtTaskMemory)EtTaskMemory.save(tab,'finance-0','核对账单明细',record.preferences);
      Agent.startEtHomeTask(tab.id);
    }else Agent.startEtHomeTask(s.tabId);
  }
  function render(root,s){
    root.className='ag-welcome ag-work-home';root.replaceChildren();
    var header=element('header','ag-work-heading');header.appendChild(element('h3','','我的工作'));root.appendChild(header);
    paragraph(root,'欢迎回来，继续处理你的表格工作。','ag-work-intro');
    var current=section(root,'正在处理'),active=activeTasks();
    if(!active.length)paragraph(current,'当前没有正在处理的任务。','ag-work-empty');
    active.forEach(function(task){
      var card=element('div','ag-work-card ag-work-card--active'),plan=task.taskProgress,tab=owner(task.tabId),planned=task.reconciliationFlow&&task.reconciliationFlow.status==='planned';
      var row=element('div','ag-work-row');row.appendChild(element('strong','','渠道月度对账'));row.appendChild(element('span','kd-tag kd-tag--'+(plan.waiting?'warning':'info'),planned?'待开始':plan.waiting?'待你确认':'正在处理'));card.appendChild(row);
      paragraph(card,tab.name,'ag-work-file');
      paragraph(card,planned?'处理方案已准备好，等你确认开始。':plan.waiting?(plan.waitingLabel||'等待确认重复记录处理方式'):plan.current>=0?plan.stages[plan.current]:'正在整理任务计划');
      var finished=Math.min(plan.finished||0,plan.stages.length),percent=Math.round(finished/plan.stages.length*100);
      if(!planned){var progress=element('progress','ag-work-progress');progress.max=plan.stages.length;progress.value=finished;progress.setAttribute('aria-label','已完成 '+finished+' / '+plan.stages.length+' 个阶段');card.appendChild(progress);}
      var footer=element('div','ag-work-row');footer.appendChild(element('span','ag-work-caption',planned?'方案已就绪':finished+' / '+plan.stages.length+' 阶段 · '+percent+'%'));footer.appendChild(button(planned?'查看方案':plan.waiting?'前往确认':'查看进度',function(){resume(task);}));card.appendChild(footer);current.appendChild(card);
    });
    var recent=section(root,'最近完成');
    if(!records.length)paragraph(recent,'完成任务后，结果会保留在这里。','ag-work-empty');
    records.forEach(function(record,index){
      var card=element('div','ag-work-card'),row=element('div','ag-work-row');row.appendChild(element('strong','',index?'对账结果':'上期对账结果'));row.appendChild(element('span','ag-work-caption',new Date(record.completedAt).toLocaleDateString('zh-CN',{timeZone:'Asia/Shanghai',month:'numeric',day:'numeric'})));card.appendChild(row);
      paragraph(card,record.workbook,'ag-work-file');paragraph(card,'已生成结果表，并标记待核查记录。');metrics(card,record.report);
      card.appendChild(button('查看结果',function(){openResult(record);}));recent.appendChild(card);
    });
    var recommended=section(root,'建议执行'),card=element('div','ag-work-card');
    card.appendChild(element('strong','',records.length?'下一期对账':'核对账单明细'));
    paragraph(card,records.length?'按上次确认的规则，继续处理新账单。':'我先分析当前表格，再帮你核对匹配和异常。');
    var start=button('开始处理',function(){if(records.length)startNext(s,records[0]);else Agent.startEtHomeTask(s.tabId);},true);
    start.disabled=active.length>0;if(start.disabled)paragraph(card,'当前任务完成后，可以开始下一项工作。','ag-work-caption');
    card.appendChild(start);recommended.appendChild(card);
  }
  function refresh(s){if(s.workHomeOpen&&s.view&&s.view.workHomeEl&&s.view.workHomeEl.querySelector('.ag-work-heading'))render(s.view.workHomeEl,s);}
  function refreshAll(){Object.keys(Agent.sessions).forEach(function(id){var s=Agent.sessions[id];refresh(s);if(s.view&&s.view.welcomeEl&&s.view.welcomeEl.classList.contains('ag-work-home'))render(s.view.welcomeEl,s);});}
  window.EtWorkHome={eligible:eligible,shouldShow:shouldShow,render:render,renderReport:renderReport,complete:complete,refresh:refresh};
})();

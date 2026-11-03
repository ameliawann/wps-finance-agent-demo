/* 财务助手回访首页：在同一侧栏查看任务进度、历史结果和下期工作。 */
(function () {
  'use strict';
  // 演示每次刷新从首次使用开始；任务和记忆只在本轮体验内保留。
  var records=[], memories={};
  function element(tag,className,text){var el=document.createElement(tag);if(className)el.className=className;if(text!=null)el.textContent=text;return el;}
  function owner(id){return App.tabs.find(function(tab){return tab.id===id;});}
  function eligible(s){var tab=owner(s.tabId);return s.type==='et'&&window.EtExperts&&EtExperts.isFinal()&&tab&&tab.doc.aiExpertId==='finance';}
  function shouldShow(s){if(!eligible(s))return false;return !!(s.workHomeReturning||records.length||activeTasks().length);}
  function button(text,action){var el=element('button','kd-button kd-button-secondary kd-button-m',text);el.type='button';el.addEventListener('click',action);return el;}
  function paragraph(parent,text,className){var p=element('p',className||'ag-work-description',text);parent.appendChild(p);return p;}
  function section(root,title){var el=element('section','ag-work-section');el.appendChild(element('h4','',title));root.appendChild(el);return el;}
  function activeTasks(){return Object.keys(Agent.sessions).map(function(id){return Agent.sessions[id];}).filter(function(s){return s.type==='et'&&s.taskProgress&&owner(s.tabId)&&(!s.taskProgress.complete&&(s.processing||s.clarification)||s.reconciliationFlow&&s.reconciliationFlow.status==='planned');});}
  function resume(s){var tab=owner(s.tabId);if(!tab)return;App.openDoc('et',tab.name);Agent.resumeEtWork(s.tabId);if(!Agent.isOpen())Agent.toggle();}
  function conversation(s){
    return JSON.parse(JSON.stringify(s.messages.map(function(message){
      var copy={};['role','text','html','taskTitle','ctx','clarificationAnswer','feedback','suppressActions','progressOnly','workHomeSaved'].forEach(function(key){if(message[key]!==undefined)copy[key]=message[key];});
      if(message.steps)copy.steps=message.steps.map(function(step){var item={};['type','content','toolName','shown','phase','keepVisible','report','proposal','references','afterword'].forEach(function(key){if(step[key]!==undefined)item[key]=step[key];});return item;});
      if(message.role==='ai')copy.streaming=false;return copy;
    })));
  }
  function snapshot(tab){
    var model={};
    ['kind','cells','formulas','sel','selRange','marks','cellStyles','columnCount','columnWidths','sheets','activeSheet','aiExpertId','aiRecommendedExpertId'].forEach(function(name){if(tab.doc[name]!==undefined)model[name]=tab.doc[name];});
    return JSON.parse(JSON.stringify(model));
  }
  function complete(s,msg){
    if(!eligible(s)||s.processing)return;
    msg=msg||s.messages[s.messages.length-1];
    if(!msg||!msg.executionCompleted)return;
    var tab=owner(s.tabId);
    if(window.EtTaskMemory)EtExperts.getFinanceTasks().forEach(function(task,index){var memory=EtTaskMemory.get(tab,'finance-'+index);if(memory)memories[index]={updatedAt:memory.updatedAt||Date.now(),preferences:memory.preferences};});
    msg=msg||s.messages[s.messages.length-1];
    var step=msg&&msg.steps&&msg.steps.find(function(step){return step.report&&step.report.layout==='reconciliation';});
    if(!step||msg.workHomeSaved)return;
    var memory=window.EtTaskMemory&&EtTaskMemory.get(tab,'finance-0'),preferences=Object.assign({},memory&&memory.preferences),last=tab.doc.lastReconciliationTask;
    if(last&&window.EtTaskMemory){preferences.matchingRules=last.rules;preferences.matchingMode=last.matchingMode;preferences.rangeFields=EtTaskMemory.captureRangeFields(tab,last.ranges);}
    var record={id:Date.now()+'-'+s.tabId,tabId:s.tabId,workbook:tab.name,report:step.report,model:snapshot(tab),preferences:preferences,completedAt:Date.now(),conversation:conversation(s)};
    memories[0]={updatedAt:record.completedAt,preferences:preferences};
    records.unshift(record);records=records.slice(0,3);msg.workHomeSaved=true;refreshAll();
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
    if(record.report.statusLocation)Editors.navigateEtReference(tab.id,record.report.statusLocation);
    Agent.openEtWorkConversation(tab.id,record);
  }
  function startNext(s,record){
    if(window.RECON_NEXT_PERIOD){
      App.openDoc('et',RECON_NEXT_PERIOD.source);
      var tab=owner(App.activeId);if(!Agent.isOpen())Agent.toggle();
      if(record&&record.preferences&&window.EtTaskMemory)EtTaskMemory.save(tab,'finance-0','核对账单明细',record.preferences);
      Agent.startEtHomeTask(tab.id,0,true);
    }else Agent.startEtHomeTask(s.tabId);
  }
  function render(root,s){
    root.className='ag-welcome is-expert-welcome ag-work-home';root.innerHTML=EtExperts.welcomeHeader(s.tabId);
    var active=activeTasks(),current=active.length?section(root,'正在处理'):null;
    active.forEach(function(task){
      var card=element('div','ag-work-card ag-work-card--active'),plan=task.taskProgress,tab=owner(task.tabId),planned=task.reconciliationFlow&&task.reconciliationFlow.status==='planned';
      var row=element('div','ag-work-row');row.appendChild(element('strong','','渠道月度对账'));row.appendChild(element('span','kd-tag kd-tag--'+(plan.waiting?'warning':'info'),planned?'待开始':plan.waiting?'待你确认':'正在处理'));card.appendChild(row);
      paragraph(card,tab.name,'ag-work-file');
      paragraph(card,planned?'处理方案已准备好，等你确认开始。':plan.waiting?(plan.waitingLabel||'等待确认重复记录处理方式'):plan.current>=0?plan.stages[plan.current]:'正在整理任务计划');
      var finished=Math.min(plan.finished||0,plan.stages.length),percent=Math.round(finished/plan.stages.length*100);
      if(!planned){var progress=element('progress','ag-work-progress');progress.max=plan.stages.length;progress.value=finished;progress.setAttribute('aria-label','已完成 '+finished+' / '+plan.stages.length+' 个阶段');card.appendChild(progress);}
      var footer=element('div','ag-work-row');footer.appendChild(element('span','ag-work-caption',planned?'方案已就绪':finished+' / '+plan.stages.length+' 阶段 · '+percent+'%'));footer.appendChild(button(planned?'查看方案':plan.waiting?'前往确认':'查看进度',function(){resume(task);}));card.appendChild(footer);current.appendChild(card);
    });
    var recent=records.length?section(root,'最近完成的任务'):null;
    records.forEach(function(record){
      var card=element('button','ag-work-card ag-work-result');card.type='button';card.setAttribute('aria-label','查看上期对账结果，'+record.workbook);
      card.appendChild(element('strong','','上期对账结果'));paragraph(card,record.workbook,'ag-work-file');
      card.appendChild(EtTaskReport.renderMetrics(record.report));card.addEventListener('click',function(){openResult(record);});recent.appendChild(card);
    });
    var recommended=section(root,'接下来，我可以帮你'),tab=owner(s.tabId),tasks=EtExperts.getFinanceTasks(),used=[];
    tasks.forEach(function(task,index){var memory=index===0&&!records.length?null:window.EtTaskMemory&&EtTaskMemory.get(tab,'finance-'+index),saved=memories[index];if(memory||saved||index===0&&records.length)used.push({index:index,time:memory&&memory.updatedAt||saved&&saved.updatedAt||records[0].completedAt,preferences:memory&&memory.preferences||saved&&saved.preferences||records[0].preferences});});
    used.sort(function(a,b){return b.time-a.time;});
    var last=used[0],order=last?[last.index]:[];
    tasks.forEach(function(task,index){if(!used.some(function(item){return item.index===index;}))order.push(index);});
    order.forEach(function(index){
      var task=tasks[index],repeated=last&&last.index===index;
      var card=EtExperts.financeTaskCard(index,function(){if(repeated&&index===0){startNext(s,{preferences:last.preferences});return;}if(repeated&&window.EtTaskMemory)EtTaskMemory.save(tab,'finance-'+index,task.title,last.preferences);Agent.startEtHomeTask(s.tabId,index);},{title:repeated&&index===0?'下期对账':task.title,desc:repeated?'按上次确认的规则，继续处理新的'+(index===0?'账单。':'任务。'):task.desc,disabled:active.length>0});
      if(repeated){
        card.classList.add('ag-work-task--remembered');
        var heading=element('span','ag-work-task-heading');
        heading.appendChild(card.querySelector('.ag-card-title'));
        heading.appendChild(element('span','kd-tag kd-tag--info','沿用上次规则'));
        card.insertBefore(heading,card.firstChild);
      }else if(last){
        card.classList.add('ag-work-task--compact');
        card.querySelector('.ag-card-desc').remove();
        card.title=task.desc;
      }
      recommended.appendChild(card);
    });
  }
  function refresh(s){if(s.workHomeOpen&&!s.workConversation&&s.view&&s.view.workHomeEl)render(s.view.workHomeEl,s);}
  function refreshAll(){Object.keys(Agent.sessions).forEach(function(id){var s=Agent.sessions[id];refresh(s);if(s.view&&s.view.welcomeEl&&s.view.welcomeEl.classList.contains('ag-work-home'))render(s.view.welcomeEl,s);});}
  window.EtWorkHome={eligible:eligible,shouldShow:shouldShow,render:render,complete:complete,refresh:refresh};
})();

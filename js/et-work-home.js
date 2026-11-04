/* 财务助手回访首页：在同一侧栏查看任务进度、历史结果和下期工作。 */
(function () {
  'use strict';
  // 演示每次刷新从首次使用开始；任务和记忆只在本轮体验内保留。
  var records=[], memories={}, reminders={};
  function element(tag,className,text){var el=document.createElement(tag);if(className)el.className=className;if(text!=null)el.textContent=text;return el;}
  function owner(id){return App.tabs.find(function(tab){return tab.id===id;});}
  function eligible(s){var tab=owner(s.tabId);if(window.EtPayroll&&EtPayroll.isPayroll(tab))return EtPayroll.homeEligible(s);return s.type==='et'&&window.EtExperts&&EtExperts.isFinal()&&tab&&tab.doc.aiExpertId==='finance';}
  function shouldShow(s){if(window.EtPayroll&&EtPayroll.isPayroll(owner(s.tabId)))return EtPayroll.homeShouldShow(s);if(!eligible(s))return false;return !!(s.workHomeReturning||records.length||activeTasks().length);}
  function button(text,action,variant){var el=element('button','kd-button kd-button-'+(variant||'secondary')+' kd-button-m',text);el.type='button';el.addEventListener('click',action);return el;}
  function paragraph(parent,text,className){var p=element('p',className||'ag-work-description',text);parent.appendChild(p);return p;}
  function section(root,title){var el=element('section','ag-work-section');el.appendChild(element('h4','',title));root.appendChild(el);return el;}
  function activeTasks(){return Object.keys(Agent.sessions).map(function(id){return Agent.sessions[id];}).filter(function(s){return s.type==='et'&&s.taskProgress&&owner(s.tabId)&&!(window.EtPayroll&&EtPayroll.isPayroll(owner(s.tabId)))&&(!s.taskProgress.complete&&(s.processing||s.clarification)||s.reconciliationFlow&&s.reconciliationFlow.status==='planned');});}
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
    if(window.EtPayroll&&EtPayroll.isPayroll(owner(s.tabId)))return EtPayroll.homeComplete(s,msg);
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
  function headerHTML(){return '<header class="ag-work-greeting">'+EtBrand.identityHTML()+'<section class="ag-chat-bubble" aria-label="灵犀的工作问候"><p>早！我正在协助你处理当前表格。</p></section></header>';}
  function activeCard(options){
    var plan=options.plan,stages=plan.stages||[],card=element('div','ag-work-card ag-work-card--active'),row=element('div','ag-work-row');
    row.appendChild(element('strong','',options.title));row.appendChild(element('span','kd-tag kd-tag--'+(plan.waiting?'warning':'info'),options.planned?'待开始':plan.waiting?'待你确认':'正在处理'));card.appendChild(row);
    paragraph(card,options.file,'ag-work-file');paragraph(card,options.description);
    var finished=Math.min(plan.finished||0,stages.length),percent=stages.length?Math.round(finished/stages.length*100):0;
    if(!options.planned){var progress=element('progress','ag-work-progress');progress.max=stages.length||1;progress.value=finished;progress.setAttribute('aria-label','已完成 '+finished+' / '+stages.length+' 个阶段');card.appendChild(progress);}
    var footer=element('div','ag-work-row');footer.appendChild(element('span','ag-work-caption',options.planned?'方案已就绪':finished+' / '+stages.length+' 阶段 · '+percent+'%'));footer.appendChild(button(options.planned?'查看方案':plan.waiting?'前往确认':'查看进度',options.onResume));card.appendChild(footer);return card;
  }
  function resultCard(options){
    var card=element('button','ag-work-card ag-work-result');card.type='button';card.setAttribute('aria-label','查看'+options.title+'，'+options.file);card.appendChild(element('strong','',options.title));paragraph(card,options.file,'ag-work-file');
    if(options.report.metrics)card.appendChild(EtTaskReport.renderMetrics(options.report));card.addEventListener('click',options.onOpen);return card;
  }
  function recommendations(root,options){
    var index=options.mainIndex,task=options.tasks[index],remembered=!!options.remembered,card=element('div','ag-work-card ag-work-repeat'+(remembered?' ag-work-task--remembered':''));
    card.setAttribute('role','group');card.setAttribute('aria-label',task.title);card.dataset.workTask=index;
    var copy=element('div','ag-work-task-copy'),heading=element('div','ag-work-task-heading');heading.appendChild(element('strong','ag-card-title',task.title));if(remembered)heading.appendChild(element('span','ag-work-last-used','上次使用'));copy.appendChild(heading);paragraph(copy,options.description||task.desc,'ag-work-repeat-description');card.appendChild(copy);
    var actions=element('div','ag-work-task-actions');
    if(remembered){var reminder=button(options.reminder?'已设置提醒':'下个月提醒我',function(){var enabled=options.toggleReminder(index);reminder.textContent=enabled?'已设置提醒':'下个月提醒我';reminder.setAttribute('aria-pressed',String(enabled));reminder.title=enabled?'取消下个月提醒':'设置下个月提醒';});reminder.setAttribute('aria-pressed',String(!!options.reminder));reminder.title=options.reminder?'取消下个月提醒':'设置下个月提醒';actions.appendChild(reminder);}
    var begin=button('开始处理',function(){options.onStart(index,remembered);},'primary');begin.disabled=!!options.disabled;actions.appendChild(begin);card.appendChild(actions);root.appendChild(card);
    var links=element('div','ag-chat-suggestions ag-work-suggestions');links.setAttribute('role','group');links.setAttribute('aria-label','其他建议任务');
    options.tasks.forEach(function(item,i){if(i===index)return;var link=button('',function(){options.onStart(i,false);},'light');link.className='kd-button kd-button-light kd-button-sm';link.dataset.workTask=i;link.setAttribute('aria-label',item.title);link.title=item.desc;link.disabled=!!options.disabled;
      var prefix=element('span','kd-button-prefix-icon ag-chat-task-icon');prefix.setAttribute('aria-hidden','true');prefix.innerHTML=EtBrand.suggestionIconHTML(links.children.length+1);link.appendChild(prefix);link.appendChild(element('span','kd-button-children',options.labels[i]));links.appendChild(link);
    });root.appendChild(links);
  }
  function render(root,s){
    if(window.EtPayroll&&EtPayroll.isPayroll(owner(s.tabId)))return EtPayroll.renderHome(root,s);
    root.className='ag-welcome is-expert-welcome ag-work-home';root.innerHTML=headerHTML();
    var active=activeTasks(),current=active.length?section(root,'正在处理'):null;
    active.forEach(function(task){
      var plan=task.taskProgress,tab=owner(task.tabId),planned=task.reconciliationFlow&&task.reconciliationFlow.status==='planned';
      current.appendChild(activeCard({title:'渠道月度对账',file:tab.name,plan:plan,planned:planned,description:planned?'处理方案已准备好，等你确认开始。':plan.waiting?(plan.waitingLabel||'等待确认重复记录处理方式'):plan.current>=0?plan.stages[plan.current]:'正在整理任务计划',onResume:function(){resume(task);}}));
    });
    var recent=records.length?section(root,'最近完成的任务'):null;
    records.forEach(function(record){
      recent.appendChild(resultCard({title:'上期对账结果',file:record.workbook,report:record.report,onOpen:function(){openResult(record);}}));
    });
    var recommended=section(root,'接下来，我可以帮你'),tab=owner(s.tabId),tasks=EtExperts.getFinanceTasks(),used=[];
    tasks.forEach(function(task,index){var memory=index===0&&!records.length?null:window.EtTaskMemory&&EtTaskMemory.get(tab,'finance-'+index),saved=memories[index];if(memory||saved||index===0&&records.length)used.push({index:index,time:memory&&memory.updatedAt||saved&&saved.updatedAt||records[0].completedAt,preferences:memory&&memory.preferences||saved&&saved.preferences||records[0].preferences});});
    used.sort(function(a,b){return b.time-a.time;});
    var last=used[0],mainIndex=last?last.index:0;
    recommendations(recommended,{tasks:tasks,labels:['账单核对','差异分析','批量制证','单据入账'],mainIndex:mainIndex,remembered:!!last,description:last?'按上次确认的规则，继续处理新的'+(mainIndex===0?'账单。':'任务。'):tasks[mainIndex].desc,disabled:active.length>0,reminder:reminders[mainIndex],toggleReminder:function(index){return reminders[index]=!reminders[index];},onStart:function(index,repeated){if(repeated&&index===0){startNext(s,{preferences:last.preferences});return;}if(repeated&&window.EtTaskMemory)EtTaskMemory.save(tab,'finance-'+index,tasks[index].title,last.preferences);Agent.startEtHomeTask(s.tabId,index);}});
  }
  function refresh(s){if(s.workHomeOpen&&!s.workConversation&&s.view&&s.view.workHomeEl)render(s.view.workHomeEl,s);}
  function refreshAll(){Object.keys(Agent.sessions).forEach(function(id){var s=Agent.sessions[id];refresh(s);if(s.view&&s.view.welcomeEl&&s.view.welcomeEl.classList.contains('ag-work-home'))render(s.view.welcomeEl,s);});}
  window.EtWorkHome={eligible:eligible,shouldShow:shouldShow,render:render,complete:complete,refresh:refresh};
  window.EtWorkHomeUI={headerHTML:headerHTML,activeCard:activeCard,resultCard:resultCard,recommendations:recommendations};
})();

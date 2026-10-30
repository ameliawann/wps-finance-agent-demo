/* 从当前表格读取字段和编号分布，形成待确认的对账建议。 */
(function () {
  'use strict';
  var sequence = 0;
  function owner(id) { return App.tabs.find(function (tab) { return tab.id === id; }); }
  function esc(value) { return String(value == null ? '' : value).replace(/[&<>"']/g,function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function column(n) { var name=''; for(n++;n;n=Math.floor((n-1)/26))name=String.fromCharCode(65+(n-1)%26)+name; return name; }
  function keyKind(title) {
    var name=title.toLowerCase().replace(/[\s_\-]/g,'');
    if (/^(bizid|orderid|订单号|订单编号|业务编号|业务id)$/.test(name)) return 'order';
    if (/^(reconciliationid|对账编号|对账id)$/.test(name)) return 'reconciliation';
    if (/id$|编号$|单号$|流水号$/.test(name)) return name;
    return '';
  }
  function inspect(tab) {
    var model=tab.doc;
    return (model.sheets || [{name:'Sheet1',cells:model.cells,columnCount:model.columnCount}]).filter(function (sheet) {
      return !sheet.demoResultId && !sheet.privacyTemporary && sheet.name !== '补全说明';
    }).map(function (sheet) {
      var cells=model.sheets && model.sheets[model.activeSheet] === sheet ? model.cells : sheet.cells;
      var rows=new Set(),last=1,fields=[];
      Object.keys(cells || {}).forEach(function (address) {
        var match=/^([A-Z]+)(\d+)$/.exec(address);if(!match || cells[address]==null || cells[address]==='')return;
        var row=Number(match[2]);if(row>1){rows.add(row);last=Math.max(last,row);}
      });
      for(var c=0;c<(sheet.columnCount || model.columnCount || 24);c++) {
        var title=String(cells[column(c)+'1'] || ''),kind=keyKind(title);if(!kind)continue;
        var counts=new Map(),blanks=0;
        rows.forEach(function (r) { var raw=cells[column(c)+r],value=raw==null?'':String(raw).toLowerCase();if(!value){blanks++;return;}counts.set(value,(counts.get(value)||0)+1); });
        var duplicates=0;counts.forEach(function (count) { if(count>1)duplicates+=count; });
        fields.push({title:title,column:c,kind:kind,counts:counts,duplicates:duplicates,blanks:blanks});
      }
      return {name:sheet.name,rows:rows.size,last:last,fields:fields};
    }).filter(function (sheet) { return sheet.rows>0; });
  }
  function infer(tab) {
    var tables=inspect(tab),candidates=[];
    for(var i=0;i<tables.length;i++)for(var j=i+1;j<tables.length;j++) {
      tables[i].fields.forEach(function (left) { tables[j].fields.forEach(function (right) {
        if(left.kind!==right.kind)return;
        var overlap=0;left.counts.forEach(function (_,value) { if(right.counts.has(value))overlap++; });
        if(!overlap)return;
        var coverage=overlap/Math.max(1,Math.min(left.counts.size,right.counts.size));
        var priority=left.kind==='order'?100:left.kind==='reconciliation'?60:20;
        candidates.push({main:tables[i],other:tables[j],left:left,right:right,overlap:overlap,score:priority+coverage*30});
      }); });
    }
    candidates.sort(function (a,b) { return b.score-a.score; });
    return {tables:tables,candidate:candidates[0] || null,ambiguous:!!(candidates[1] && candidates[0].score-candidates[1].score<5)};
  }
  function rules(left,right,mode) {
    var text='按编号匹配，忽略大小写。';
    return text+(mode==='exists'?'对方有相同编号即为“能匹配”，否则为“不能匹配”；不单独判定重复。':'双方编号一致且各自唯一为“能匹配”；任一侧编号重复为“重复”；空值或无对应编号为“不能匹配”。');
  }
  function describe(tab,reference) {
    var match=/^(?:'\[[^\]]+\]((?:[^']|'')+)'|'((?:[^']|'')+)'|([^!]+))!([A-Z]+)/.exec(reference || '');
    if(!match)return '';
    var name=(match[1]||match[2]||match[3]).replace(/''/g,"'"),sheet=tab.doc.sheets && tab.doc.sheets.find(function (item) { return item.name===name; });
    var cells=sheet && (tab.doc.sheets[tab.doc.activeSheet]===sheet?tab.doc.cells:sheet.cells);
    return cells?String(cells[match[4]+'1'] || match[4]):'';
  }
  function apply(tab,state) {
    var candidate=state.result.candidate;if(!candidate)return;
    var memory=EtTaskMemory.get(tab,'finance-0'),prefs=memory?memory.preferences:{};
    var restored=memory && EtTaskMemory.rangesForCard(tab,memory);
    var references=[candidate.main.name,candidate.other.name].map(function (name,i) {
      var table=i?candidate.other:candidate.main,field=i?candidate.right:candidate.left,c=column(field.column);
      return "'["+tab.name.replace(/'/g,"''")+"]"+name.replace(/'/g,"''")+"'!"+c+'2:'+c+table.last;
    });
    // 仅恢复能在当前两张表中重新定位的完整字段对。
    if(restored && restored.length===2 && restored.every(function (ref) { return !!ref && !!describe(tab,ref); })) references=restored;
    var mode=prefs.matchingMode==='exists'?'exists':'unique';
    var left=describe(tab,references[0]),right=describe(tab,references[1]);
    var draft={ranges:references,rules:rules(left,right,mode),matchingMode:mode,privacyMode:!!prefs.privacyMode,memoryReadState:memory?'loaded':'',discovered:true,reviewEditing:false,discovery:state.result};
    tab.doc.reconciliationRangeDraft=draft;
    state.usedMemory=!!(memory && restored && references===restored);
  }
  var initialStages=['理解任务','分析表格','规划对账','确认方案','执行对账','核验结果','保存偏好'];
  function stagesFor(state){var stages=initialStages.slice();if(state.taskIndex){stages[2]='规划任务';stages[4]='执行任务';}return stages;}
  function review(id,state){
    state.status='review';
    Agent.updateEtTaskProgress(id,{stages:stagesFor(state),current:3,finished:3,waiting:true,waitingLabel:'等待确认方案',complete:false,planning:false});
    if(!state.draft){Agent.appendEtTaskMessage(id,'ai','请提供两张包含匹配字段的明细表。');return;}
    Agent.appendEtTaskMessage(id,'ai',state.taskIndex?'按此方案继续吗？':state.privacyConfirmed?'按此方案继续吗？':'是否脱敏执行？',snapshot(owner(id),state));
  }
  function start(id,taskIndex){
    var tab=owner(id),session=Agent.sessions[id];if(!tab||!session)return;
    cancel(id);
    var state={id:++sequence,phase:0,result:null,running:true,timers:[],status:'analyzing',pending:[],taskIndex:taskIndex||0,privacyConfirmed:false};
    tab.doc.reconciliationDiscovery=state;session.reconciliationFlow=state;
    Agent.appendEtTaskMessage(id,'user',EtExperts.getFinanceTasks()[state.taskIndex].title);
    Agent.updateEtTaskProgress(id,{stages:stagesFor(state),current:0,finished:0,waiting:false,complete:false,planning:true});
    function advance(delay,callback){state.timers.push(setTimeout(function(){if(owner(id)!==tab||tab.doc.reconciliationDiscovery!==state||!state.running)return;callback();},delay));}
    advance(400,function(){state.result=infer(tab);state.phase=1;Agent.updateEtTaskProgress(id,{current:1,finished:1});});
    advance(1000,function(){state.phase=2;Agent.updateEtTaskProgress(id,{current:2,finished:2});});
    advance(1600,function(){
      if(state.taskIndex){var memory=EtTaskMemory.get(tab,'finance-'+state.taskIndex);state.draft={instruction:memory&&memory.preferences.instruction||EtExperts.getFinanceTasks()[state.taskIndex].desc};}else{apply(tab,state);state.draft=tab.doc.reconciliationRangeDraft;}state.phase=3;state.running=false;state.status='review';
      if(state.pending.length){var pending=state.pending.join('，');state.pending=[];processInput(id,state,pending);}else review(id,state);
    });
  }
  function cancel(id){var tab=owner(id),state=tab&&tab.doc.reconciliationDiscovery;if(state){state.running=false;state.timers.forEach(clearTimeout);}}
  function resolved(tab,draft){
    return draft.ranges.map(function(reference){
      var match=/^'\[([^\]]+)\]((?:[^']|'')+)'!(.+)$/.exec(reference);
      return match?{book:match[1].replace(/''/g,"'"),sheet:match[2].replace(/''/g,"'"),address:match[3],reference:reference}:null;
    });
  }
  function snapshot(tab,state){
    if(state.taskIndex)return {kind:'task',title:EtExperts.getFinanceTasks()[state.taskIndex].title,source:tab.name,instruction:state.draft.instruction};
    var refs=resolved(tab,state.draft),names=refs.map(function(ref,i){return ref.sheet+' · '+describe(tab,state.draft.ranges[i]);});
    return {fields:names,rules:state.draft.matchingMode==='exists'?'忽略大小写，核对编号是否存在，不要求唯一。':'忽略大小写，一对一匹配；重复、未匹配单独标注。',output:'新增结果表，保留原表。',privacy:state.privacyConfirmed?(state.draft.privacyMode?'脱敏执行':'直接执行'):''};
  }
  function renderProposal(proposal){
    var card=document.createElement('section');card.className='ag-recon-proposal';card.setAttribute('aria-label',proposal.kind==='task'?proposal.title:'对账方案');
    if(proposal.kind==='task'){card.innerHTML='<h4>'+esc(proposal.title)+'</h4><dl><dt>数据范围</dt><dd>'+esc(proposal.source)+'</dd><dt>处理要求</dt><dd>'+esc(proposal.instruction)+'</dd></dl>';return card;}
    card.innerHTML='<h4>对账方案</h4><dl><dt>匹配字段</dt><dd>'+proposal.fields.map(esc).join('<br>')+'</dd><dt>匹配规则</dt><dd>'+esc(proposal.rules)+'</dd><dt>结果输出</dt><dd>'+esc(proposal.output)+'</dd>'+(proposal.privacy?'<dt>执行方式</dt><dd>'+esc(proposal.privacy)+'</dd>':'')+'</dl>';
    return card;
  }
  function matchFields(tab,draft,text){
    var refs=resolved(tab,draft),found=0;
    refs.forEach(function(ref,i){
      var sheet=tab.doc.sheets.find(function(item){return item.name===ref.sheet;}),cells=tab.doc.sheets[tab.doc.activeSheet]===sheet?tab.doc.cells:sheet.cells;
      var options=[];
      for(var c=0;c<(sheet.columnCount||24);c++){
        var title=String(cells[column(c)+'1']||'');if(title.length<2)continue;
        var escaped=title.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
        if(new RegExp('(^|[^a-z0-9_])'+escaped+'(?=$|[^a-z0-9_])','i').test(text))options.push({title:title,column:c});
      }
      if(options.length===1){var last=Object.keys(cells).reduce(function(n,a){return cells[a]==null||cells[a]===''?n:Math.max(n,Number(a.match(/\d+$/)[0]));},1),c=column(options[0].column);draft.ranges[i]="'["+tab.name.replace(/'/g,"''")+"]"+ref.sheet.replace(/'/g,"''")+"'!"+c+'2:'+c+last;found++;}
    });
    return found>0;
  }
  function interpret(text){
    var question=/什么|怎么|如何|为何|为什么|是否|能否|吗|？|\?/.test(text.replace(/(?:只)?核对是否存在/g,''));
    var privacy=null;
    if(!question){
      if(/不(?:用|要|需|需要|必)?脱敏|无需脱敏|直接(?:开始|执行|对账)|不需要|^不用[。！!]*$/.test(text))privacy=false;
      else if(/脱敏|^需要[。！!]*$/.test(text))privacy=true;
    }
    var mode=/只核对是否存在|核对是否存在|只要.{0,8}存在|不要求.{0,4}唯一|无需.{0,4}唯一|允许重复|不用一对一|不需要一对一/.test(text)?'exists':/一对一|双方唯一|各自唯一|编号唯一/.test(text)?'unique':null;
    return {privacy:privacy,mode:mode,question:question,proceed:!question&&(/开始|执行|继续|确认|可以|好的|^好[。！!]*$|^需要[。！!]*$|^不用[。！!]*$|不需要/.test(text)||privacy!==null)};
  }
  function processInput(id,state,text){
    var tab=owner(id),intent=interpret(text);
    if(intent.question){Agent.appendEtTaskMessage(id,'ai',/脱敏/.test(text)?'脱敏会在副本中对非匹配文字打码，核验后还原结果。':'当前方案按两表编号匹配，金额与币种暂不参与核对。');return;}
    if(/暂停|停止|取消/.test(text)){Agent.pauseEtTask(id);cancel(id);state.status='paused';Agent.updateEtTaskProgress(id,{waiting:true,waitingLabel:'已暂停'});return;}
    if(!state.draft){review(id,state);return;}
    if(state.taskIndex){
      if(state.status==='executing')Agent.pauseEtTask(id);
      if(intent.proceed){state.status='executing';Agent.runEtTaskScript(id,text,createGenericScript(state));}
      else{state.draft.instruction=text;review(id,state);}return;
    }
    var changed=matchFields(tab,state.draft,text);
    if(intent.mode){state.draft.matchingMode=intent.mode;changed=true;}
    if(intent.privacy!==null){state.draft.privacyMode=intent.privacy;state.privacyConfirmed=true;}
    if(state.status==='executing')Agent.pauseEtTask(id);
    state.status='review';
    state.draft.rules=rules(describe(tab,state.draft.ranges[0]),describe(tab,state.draft.ranges[1]),state.draft.matchingMode);
    if(!changed&&/按.{1,40}(匹配|核对)|金额|币种|日期|跨日/.test(text)&&intent.mode===null){Agent.appendEtTaskMessage(id,'ai','请说明两张表各使用哪个字段匹配。');Agent.updateEtTaskProgress(id,{waiting:true,waitingLabel:'等待补充字段'});return;}
    if(intent.proceed&&state.privacyConfirmed){
      var script=createScript(tab,state.draft);if(!script){Agent.appendEtTaskMessage(id,'ai','匹配字段已变化，请重新确认字段。');return;}
      state.status='executing';Agent.runEtTaskScript(id,text,script);return;
    }
    if(changed||intent.proceed||intent.privacy!==null)review(id,state);
    else Agent.appendEtTaskMessage(id,'ai','请说明要调整的字段或匹配规则。');
  }
  function handleInput(id,text){
    var session=Agent.sessions[id],state=session&&session.reconciliationFlow;
    if(!state)return false;
    if(state.status==='complete'){
      if(state.report&&/报告|明细|匹配结果/.test(text)&&!/标色|高亮|底色|背景|标红|标黄|颜色|上色/.test(text)){Agent.appendEtTaskMessage(id,'user',text);Agent.appendEtTaskMessage(id,'ai','',null,state.report);return true;}
      return false;
    }
    Agent.appendEtTaskMessage(id,'user',text);
    if(state.status==='analyzing'){state.pending.push(text);return true;}
    processInput(id,state,text);return true;
  }
  function createGenericScript(state){
    var task=EtExperts.getFinanceTasks()[state.taskIndex],key='finance-'+state.taskIndex;
    return {taskTitle:task.title,memoryTaskKey:key,taskPlan:['整理任务要求','核验处理口径','保存偏好'],steps:[
      {type:'tool_call',taskStage:0,content:'整理数据范围与任务要求'},
      {type:'tool_call',taskStage:1,content:'检查所需数据、模板与处理口径'},
      {type:'tool_call',taskStage:2,content:'保存任务要求',action:{type:'et.saveTaskMemory',taskKey:key,taskName:task.title,preferences:{instruction:state.draft.instruction}}},
      {type:'done',content:'任务方案已整理。',report:EtTaskReport.create(task,null)}
    ]};
  }
  function createScript(tab,draft){
    var refs=resolved(tab,draft);if(refs.some(function(ref){return !ref;}))return null;
    var result=Editors.prepareDemoReconciliation(tab,{references:refs,matchingMode:draft.matchingMode});if(!result)return null;
    EtTaskMemory.applyToResult(result,EtTaskMemory.get(tab,'finance-0'));
    var task=EtExperts.getFinanceTasks()[0];
    var preferences={privacyMode:draft.privacyMode,matchingMode:draft.matchingMode,matchingRules:draft.rules,rangeFields:EtTaskMemory.captureRangeFields(tab,refs),resultOutput:'新增结果表，保留原表。'};
    tab.doc.lastReconciliationTask={ranges:refs,rules:draft.rules,matchingMode:draft.matchingMode};
    return {taskTitle:task.title,memoryTaskKey:'finance-0',privacyMode:draft.privacyMode,taskPlan:['执行对账','核验结果','保存偏好'],steps:[
      {type:'tool_call',taskStage:0,content:'按确认字段和规则核对账单',action:{type:'et.reconcileDemo',result:result}},
      {type:'tool_call',taskStage:1,content:'核验记录数与匹配结果'},
      {type:'tool_call',taskStage:2,content:'保存匹配规则与脱敏偏好',action:{type:'et.saveTaskMemory',taskKey:'finance-0',taskName:task.title,preferences:preferences}},
      {type:'done',content:'对账完成。',report:EtTaskReport.create(task,result)}
    ]};
  }
  window.EtReconciliationDiscovery={start:start,cancel:cancel,infer:infer,inspect:inspect,rules:rules,describe:describe,handleInput:handleInput,renderProposal:renderProposal,interpret:interpret,matchFields:matchFields,createScript:createScript};
})();

/* 从当前表格读取字段和编号分布，逐步分析并交付完整方案。 */
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
  function sheetCells(tab,sheet){return tab.doc.sheets[tab.doc.activeSheet]===sheet?tab.doc.cells:sheet.cells;}
  function transactionEvidence(tab,state){
    var candidate=state.result.candidate,affected=0,fxSheets=[];
    if(candidate)candidate.left.counts.forEach(function(count,key){if(count>1||(candidate.right.counts.get(key)||0)>1)affected+=count;});
    (tab.doc.sheets||[]).forEach(function(sheet){
      if(sheet.privacyTemporary||sheet.demoResultId)return;
      var cells=sheetCells(tab,sheet)||{},headers=[];
      for(var c=0;c<(sheet.columnCount||24);c++)headers.push(String(cells[column(c)+'1']||'').toLowerCase());
      var buy=headers.indexOf('buycurrency'),sell=headers.indexOf('sellcurrency');
      if(buy>=0&&sell>=0&&Object.keys(cells).some(function(address){var match=/^([A-Z]+)(\d+)$/.exec(address);if(!match||Number(match[2])<2)return false;var row=match[2],left=cells[column(buy)+row],right=cells[column(sell)+row];return left&&right&&String(left).toUpperCase()!==String(right).toUpperCase();}))fxSheets.push(sheet.name);
    });
    return {duplicateRows:affected,fxSheets:fxSheets};
  }
  function transactionFields(tab,state){
    return [{locations:resolved(tab,state.draft).map(function(ref,i){
      var match=/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/.exec(ref.address);
      function colIndex(value){return value.split('').reduce(function(total,char){return total*26+char.charCodeAt(0)-64;},0)-1;}
      return {label:describe(tab,state.draft.ranges[i]),sheet:ref.sheet,address:ref.address,range:{r1:Number(match[2]),c1:colIndex(match[1]),r2:Number(match[4]),c2:colIndex(match[3])}};
    })}];
  }
  function planScript(tab,state){
    var task=EtExperts.getFinanceTasks()[state.taskIndex],result=state.result;
    var tables=result.tables.map(function(table){return '「'+table.name+'」'+table.rows+' 条数据';}).join('、');
    var candidate=result.candidate,evidence=transactionEvidence(tab,state);
    var fieldSummary=candidate?candidate.left.title+' 与 '+candidate.right.title+' 有 '+candidate.overlap+' 个共同编号'+(candidate.left.duplicates||candidate.right.duplicates?'，存在重复编号。':'。'):'未找到共同编号，需指定关联字段。';
    if(result.ambiguous)fieldSummary+='匹配字段有多个候选。';
    if(!state.taskIndex&&evidence.fxSheets.length)fieldSummary+='\n\n我注意到'+evidence.fxSheets.join('、')+'包含换汇数据。\n我会区分**交易原币与结算金额**，避免跨币种比较。';
    var steps=[
      {type:'understanding',content:'我先核实交易字段与重复风险，再为你整理'+(state.taskIndex?'任务':'对账')+'方案。'},
      {type:'tool_call',toolName:'inspect_workbook',taskStage:0,content:'分析工作表数据范围'},
      {type:'understanding',content:tables?tables+'。':'当前工作簿还没有可分析的数据区域。'},
      {type:'tool_call',toolName:'inspect_matching_fields',taskStage:1,content:state.taskIndex?'检查任务所需数据与处理口径':'检查关联字段与异常'},
      {type:'understanding',content:state.taskIndex?(state.taskIndex===2?'需提供凭证模板，先做样张再批量生成。':state.taskIndex===3?'先核对单据与台账字段，并检查重复记录。':'将区分缺失、不一致和重复记录，保留来源。'):fieldSummary},
      {type:'tool_call',toolName:'prepare_reconciliation_plan',taskStage:2,content:state.taskIndex?'整理任务方案与交付内容':'整理匹配规则与结果输出方案'},
      state.taskIndex||!state.draft?{type:'understanding',content:state.draft?'处理要求与交付内容已整理。':'已完成数据检查，暂时无法形成可靠的匹配方案。'}:null,
      {type:'done',content:state.draft?(state.taskIndex?'### 我已梳理这次任务的处理要求\n下面是我的建议。':'我已阅读当前文件，找到两份相关账单。\n我会集中处理**重复和异常记录**。\n\n### 我的分析与建议\n**数据识别**\n'+candidate.main.name+' **'+candidate.main.rows+' 条**，'+candidate.other.name+' **'+candidate.other.rows+' 条**。\n\n**字段关联**\n建议用 **'+candidate.left.title+' ↔ '+candidate.right.title+'** 关联。\n同时校验日期、商户、币种与金额。\n\n**发现问题**\n'+(evidence.duplicateRows?'**'+evidence.duplicateRows+' 条记录涉及重复匹配**，需进一步区分。':'预核对**未发现重复匹配**。')):'当前**缺少可关联的字段**。\n请补充明细表，或指定匹配字段。',proposal:state.draft?snapshot(tab,state):null}

    ].filter(Boolean);
    return {discoveryPlan:true,collapseBeforeResult:true,userMessageRecorded:true,taskTitle:task.title,taskPlan:['分析表格','检查字段与口径','整理方案'],steps:steps,onComplete:function(){state.running=false;state.status='planned';if(state.pending.length){var text=state.pending.join('，');state.pending=[];processInput(tab.id,state,text);}}};
  }
  function review(id,state){
    state.running=true;state.status='analyzing';
    Agent.runEtTaskScript(id,'',planScript(owner(id),state));
  }
  function start(id,taskIndex){
    var tab=owner(id),session=Agent.sessions[id];if(!tab||!session||session.processing)return;
    cancel(id);
    var state={id:++sequence,phase:0,result:infer(tab),running:true,timers:[],status:'analyzing',pending:[],taskIndex:taskIndex||0,privacyConfirmed:false};
    tab.doc.reconciliationDiscovery=state;session.reconciliationFlow=state;
    Agent.appendEtTaskMessage(id,'user',EtExperts.getFinanceTasks()[state.taskIndex].title);
    if(state.taskIndex){var memory=EtTaskMemory.get(tab,'finance-'+state.taskIndex);state.draft={instruction:memory&&memory.preferences.instruction||EtExperts.getFinanceTasks()[state.taskIndex].desc};}
    else{apply(tab,state);state.draft=state.result.candidate?tab.doc.reconciliationRangeDraft:null;}
    review(id,state);
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
    var evidence=transactionEvidence(tab,state);
    var locations=transactionFields(tab,state)[0].locations;
    return {tabId:tab.id,title:'我建议的处理方案',outputNote:'对账结果另存至新工作表，保留原表。',ranges:state.draft.ranges.slice(),fields:locations,
      ruleItems:[
        '用 '+locations.map(function(location){return location.label;}).join(' 与 ')+' 匹配，忽略大小写。',
        '未匹配记录单列；重复记录按日期、商户和同币种金额区分。\n重复 ID 依次追加 -1、-2，两表同步。'
      ]};
  }
  function renderProposal(proposal,tabId){
    var card=document.createElement('section');card.className='ag-recon-proposal';card.setAttribute('aria-label',proposal.title);
    if(proposal.kind==='task'){card.innerHTML='<h4>'+esc(proposal.title)+'</h4><dl><dt>数据范围</dt><dd>'+esc(proposal.source)+'</dd><dt>处理要求</dt><dd>'+esc(proposal.instruction)+'</dd></dl>';return card;}
    card.className+=' ag-recon-proposal--compact';
    card.innerHTML='<header class="ag-proposal-header"><img src="assets/et-experts/bulb.svg" width="16" height="16" alt="" aria-hidden="true"><h4>'+esc(proposal.title)+'</h4></header><p class="ag-proposal-output-note">'+esc(proposal.outputNote)+'</p><section class="ag-proposal-fields"><h5>匹配字段</h5><div class="ag-proposal-chips"></div></section><section class="ag-proposal-rules"><h5>匹配规则</h5><ol role="list">'+proposal.ruleItems.map(function(rule,i){var text=rule.split('\n').map(function(line){return '<p>'+esc(line).replace(/忽略大小写|未匹配记录|重复记录|重复 ID/g,'<strong>$&</strong>')+'</p>';}).join('');return '<li><span class="ag-proposal-rule-index" aria-hidden="true">'+String(i+1).padStart(2,'0')+'</span><div class="ag-proposal-rule-copy">'+text+'</div></li>';}).join('')+'</ol></section><footer class="ag-proposal-actions"><button type="button" class="kd-button kd-button-secondary kd-button-lg" data-proposal-adjust>调整规则</button><button type="button" class="kd-button kd-button-primary kd-button-lg" data-proposal-start>开始处理</button></footer>';
    var chips=card.querySelector('.ag-proposal-chips');
    proposal.fields.forEach(function(location,i){
      if(i){var separator=document.createElement('span');separator.className='ag-proposal-pair';separator.textContent='↔';separator.setAttribute('aria-hidden','true');chips.appendChild(separator);}
      var chip=document.createElement('button');chip.type='button';chip.className='kd-tag kd-tag--info ag-report-location';chip.textContent=location.label;
      chip.title=location.sheet+'!'+location.address;chip.setAttribute('aria-label','定位到 '+chip.title);
      chip.addEventListener('click',function(){Editors.navigateEtReference(tabId||proposal.tabId,location);});chips.appendChild(chip);
    });
    card.querySelector('[data-proposal-start]').addEventListener('click',function(){executeProposal(tabId||proposal.tabId,proposal);});
    card.querySelector('[data-proposal-adjust]').addEventListener('click',function(){Agent.fillEtSuggestion(tabId||proposal.tabId,'我想调整规则：');});
    return card;
  }
  function executeProposal(id,proposal){
    var tab=owner(id),session=Agent.sessions[id];if(!tab||!session||session.processing)return;
    var draft=Object.assign({},tab.doc.reconciliationRangeDraft,{ranges:proposal.ranges.slice(),privacyMode:false,matchingMode:'transaction',rules:proposal.ruleItems.join('\n')});
    var script=createScript(tab,draft);if(!script){Agent.appendEtTaskMessage(id,'ai','当前字段已变化，请重新分析这两张账单。');return;}
    if(session.reconciliationFlow)session.reconciliationFlow.status='executing';
    Agent.appendEtTaskMessage(id,'user','开始处理');
    Agent.runEtTaskScript(id,'开始处理',script);
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
    if(state.status==='clarifying'&&!/暂停|停止|取消/.test(text)){Agent.appendEtTaskMessage(id,'ai','请在澄清卡片中选择处理方式，或填写自定义要求。');return;}
    if(intent.question){Agent.appendEtTaskMessage(id,'ai',/脱敏/.test(text)?'可以先在副本中脱敏，保留核对所需的字段关系，复核后再还原结果。':'我建议先用 BizId 与 orderid 关联；未匹配记录单列，重复记录再结合日期、商户和同币种金额区分。');return;}
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
    if(!changed&&!intent.proceed&&/按.{1,40}(匹配|核对)|金额|币种|日期|跨日/.test(text)&&intent.mode===null){Agent.appendEtTaskMessage(id,'ai','请说明两张表各使用哪个字段匹配。');Agent.updateEtTaskProgress(id,{waiting:true,waitingLabel:'等待补充字段'});return;}
    if(intent.proceed){
      var script=createScript(tab,state.draft);if(!script){Agent.appendEtTaskMessage(id,'ai','当前字段已变化，请重新分析账单。');return;}
      state.status='executing';Agent.runEtTaskScript(id,text,script);return;
    }
    if(changed||intent.proceed||intent.privacy!==null)review(id,state);
    else {state.status='planned';Agent.appendEtTaskMessage(id,'ai','方案已经整理完成。如果需要调整，可以告诉我字段或匹配规则。');}
  }
  function handleInput(id,text){
    var session=Agent.sessions[id],state=session&&session.reconciliationFlow;
    if(!state)return false;
    if(state.status==='complete'&&!/开始处理|开始对账|开始核对|执行对账|按照.*方案.*(?:对账|核对|处理)/.test(text)){
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
  function duplicateCase(tab,refs){
    if(refs.length!==2)return null;
    var sheets=refs.map(function(ref){return tab.doc.sheets.find(function(sheet){return sheet.name===ref.sheet;});});
    if(sheets.some(function(sheet){return !sheet;}))return null;
    var cells=sheets.map(function(sheet){return sheetCells(tab,sheet);}),specs=[/^billdate$/i,/^merchantid$/i,/^currency$/i,/^debit amount$/i,/^credit amount$/i];
    var columns=sheets.map(function(sheet,i){return specs.map(function(pattern){for(var c=0;c<sheet.columnCount;c++)if(pattern.test(String(cells[i][column(c)+'1']||'')))return c;return -1;});});
    if(columns.some(function(list){return list.some(function(c){return c<0;});}))return null;
    function keyColumn(ref){return ref.address.match(/^[A-Z]+/)[0];}
    function fingerprint(i,row){return [cells[i][keyColumn(refs[i])+row]].concat(columns[i].map(function(c){return cells[i][column(c)+row];})).map(function(value){return String(value==null?'':value).trim().toLowerCase();}).join('\u001f');}
    var groups=[new Map(),new Map()];
    refs.forEach(function(ref,i){var range=ref.address.match(/\d+/g);for(var row=Number(range[0]);row<=Number(range[range.length-1]);row++){var key=cells[i][keyColumn(ref)+row];if(!key)continue;var signature=fingerprint(i,row),list=groups[i].get(signature)||[];list.push(row);groups[i].set(signature,list);}});
    var cases=[];groups[0].forEach(function(rows,signature){var other=groups[1].get(signature)||[];if(rows.length===2&&other.length===1)cases.push({mainRows:rows,gatewayRow:other[0],sheetNames:sheets.map(function(sheet){return sheet.name;}),lastColumns:sheets.map(function(sheet){return sheet.columnCount-1;})});});
    return cases.find(function(item){return item.mainRows[0]===13&&item.mainRows[1]===64&&item.gatewayRow===12;})||cases[0]||null;
  }
  function decisionFor(answer,issue){
    var outcome=answer.choice,instruction=answer.rule,unresolved=false,keepRow=issue.mainRows[0];
    if(outcome==='custom'){
      var understood=true;
      if(/暂不|待核实|暂缓|不判断|待查/.test(instruction))outcome='defer';
      else if(/两笔|独立交易|未匹配/.test(instruction))outcome='independent';
      else if(/重复导入|标.{0,4}重复|保留.{0,8}(一条|第?\s*\d+\s*行)|不参与匹配/.test(instruction))outcome='import';
      else{outcome='defer';understood=false;}
      unresolved=!understood;
      var second=issue.mainRows[1];if(new RegExp('保留.{0,4}'+second+'|'+second+'[ ]*行(?:参与匹配|保留)').test(instruction))keepRow=second;
    }
    return {choice:answer.choice,outcome:outcome,mainRows:issue.mainRows.slice(),gatewayRow:issue.gatewayRow,keepRow:keepRow,instruction:instruction,customUnresolved:unresolved};
  }
  function preparePlannedResult(tab,draft,refs){
    var result=Editors.prepareDemoReconciliation(tab,{references:refs,matchingMode:'unique'});if(!result)return null;
    var sheets=refs.map(function(ref){return tab.doc.sheets.find(function(sheet){return sheet.name===ref.sheet;});});
    var cells=sheets.map(function(sheet){return sheetCells(tab,sheet);});
    function findColumn(index,pattern){for(var c=0;c<sheets[index].columnCount;c++)if(pattern.test(String(cells[index][column(c)+'1']||'')))return c;return -1;}
    function value(index,row,col){return col<0?'':cells[index][column(col)+row];}
    function normalized(v){return String(v==null?'':v).trim().toLowerCase();}
    var schema=[/^billdate$/i,/^merchantid$/i,/^currency$/i,/^channel$/i,/^地区$/];
    var checks=schema.map(function(pattern){return [findColumn(0,pattern),findColumn(1,pattern)];});
    var amounts=[0,1].map(function(i){return [findColumn(i,/^debit amount$/i),findColumn(i,/^credit amount$/i)];});
    var ids=[findColumn(0,/^reconciliationid$/i),findColumn(1,/^reconciliationid$/i)];
    var keyCols=result.keyColumns,used=new Set(),pairs=[],stats={'能匹配':0,'重复':0,'不能匹配':0},decision=draft.duplicateDecision;
    function affected(row){return decision&&decision.mainRows.indexOf(row)>=0;}
    function held(row){return affected(row)&&decision.outcome==='defer';}
    function excluded(row){return affected(row)&&!held(row)&&row!==decision.keepRow;}
    var ranges=refs.map(function(ref){var numbers=ref.address.match(/\d+/g);return [Number(numbers[0]),Number(numbers[numbers.length-1])];});
    var ownCounts=new Map(),otherCounts=new Map();
    ranges.forEach(function(range,i){for(var r=range[0];r<=range[1];r++){var key=normalized(value(i,r,keyCols[i]));if(key){var counts=i?otherCounts:ownCounts;counts.set(key,(counts.get(key)||0)+1);}}});
    function agrees(left,right){
      if(checks.some(function(cols){return cols[0]>=0&&cols[1]>=0&&normalized(value(0,left,cols[0]))!==normalized(value(1,right,cols[1]));}))return false;
      for(var side=0;side<2;side++)if(amounts[0][side]>=0&&amounts[1][side]>=0){var a=Number(value(0,left,amounts[0][side])),b=Number(value(1,right,amounts[1][side]));if(!Number.isFinite(a)||!Number.isFinite(b)||Math.abs(a-b)>0.005)return false;}
      return true;
    }
    for(var r=2;r<=result.sourceRows+1;r++){
      var key=normalized(value(0,r,keyCols[0])),matches=[];
      if(!held(r)&&!excluded(r)&&r>=ranges[0][0]&&r<=ranges[0][1]&&key)for(var g=ranges[1][0];g<=ranges[1][1];g++)if(!used.has(g)&&normalized(value(1,g,keyCols[1]))===key&&agrees(r,g))matches.push(g);
      var status=held(r)?'待核实':excluded(r)?(decision.outcome==='independent'?'不能匹配':'重复'):matches.length?'能匹配':key&&((ownCounts.get(key)||0)>1||(otherCounts.get(key)||0)>1)?'重复':'不能匹配';
      if(matches.length){used.add(matches[0]);pairs.push({main:r,other:matches[0]});}
      result.sheet.cells[column(result.statusColumn)+r]=status;stats[status]=(stats[status]||0)+1;
    }
    result.sheet.formulas={};result.matchingMode='transaction';result.stats=stats;result.matchedPairs=pairs.length;result.pairs=pairs;result.duplicateDecision=decision;
    result.initialDuplicateRows=0;ownCounts.forEach(function(count,key){if(count>1||(otherCounts.get(key)||0)>1)result.initialDuplicateRows+=count;});
    result.resolvedDuplicateRows=pairs.filter(function(pair){var key=normalized(value(0,pair.main,keyCols[0]));return (ownCounts.get(key)||0)>1||(otherCounts.get(key)||0)>1;}).length;
    result.sourceUpdates=[];var assigned=new Set(),counts=new Map(),reserved=new Set();
    if(ids[0]>=0&&ids[1]>=0)[0,1].forEach(function(i){for(var row=ranges[i][0];row<=ranges[i][1];row++){var existing=normalized(value(i,row,ids[i]));if(existing)reserved.add(existing);}});
    if(ids[0]>=0&&ids[1]>=0)pairs.forEach(function(pair){
      var base=String(value(1,pair.other,ids[1])||value(0,pair.main,ids[0])||'').trim();if(!base)return;
      var normalizedBase=base.toLowerCase(),index=counts.get(normalizedBase)||0,newId=index?base+'-'+index:base;
      while(assigned.has(newId.toLowerCase())||(index>0&&reserved.has(newId.toLowerCase()))){index++;newId=base+'-'+index;}
      counts.set(normalizedBase,index+1);assigned.add(newId.toLowerCase());
      result.sourceUpdates.push({sheet:sheets[0].name,address:column(ids[0])+pair.main,value:newId},{sheet:sheets[1].name,address:column(ids[1])+pair.other,value:newId});
      result.sheet.cells[column(ids[0])+pair.main]=newId;
    });
    var gatewayName="'"+sheets[1].name.replace(/'/g,"''")+"'!";
    var ownRange='$'+column(keyCols[0])+'$'+ranges[0][0]+':$'+column(keyCols[0])+'$'+ranges[0][1];
    var gatewayRange=gatewayName+'$'+column(keyCols[1])+'$'+ranges[1][0]+':$'+column(keyCols[1])+'$'+ranges[1][1];
    var pairRows=new Map();pairs.forEach(function(pair){pairRows.set(pair.main,pair.other);});
    result.detailColumns={amount:result.statusColumn+1,currency:result.statusColumn+2};
    result.sheet.cells[column(result.detailColumns.amount)+'1']='金额核验';
    result.sheet.cells[column(result.detailColumns.currency)+'1']='币种核验';
    result.sheet.columnCount=Math.max(result.sheet.columnCount,result.detailColumns.currency+1);
    result.sheet.columnWidths=result.sheet.columnWidths||[];
    result.sheet.columnWidths[result.detailColumns.amount]=128;result.sheet.columnWidths[result.detailColumns.currency]=112;
    if(decision){result.detailColumns.decision=result.statusColumn+3;result.sheet.cells[column(result.detailColumns.decision)+'1']='重复记录处理';result.sheet.columnCount=Math.max(result.sheet.columnCount,result.detailColumns.decision+1);result.sheet.columnWidths[result.detailColumns.decision]=160;}
    for(var row=2;row<=result.sourceRows+1;row++){
      var keyCell=column(keyCols[0])+row,gatewayRow=pairRows.get(row);
      var fallback='IF(OR(COUNTIF('+ownRange+','+keyCell+')>1,COUNTIF('+gatewayRange+','+keyCell+')>1),"重复","不能匹配")';
      var statusExpression=fallback;
      if(gatewayRow){
        var conditions=['TRIM('+keyCell+')=TRIM('+gatewayName+column(keyCols[1])+gatewayRow+')'];
        checks.forEach(function(cols){if(cols[0]>=0&&cols[1]>=0)conditions.push('TRIM('+column(cols[0])+row+')=TRIM('+gatewayName+column(cols[1])+gatewayRow+')');});
        for(var side=0;side<2;side++)if(amounts[0][side]>=0&&amounts[1][side]>=0)conditions.push('ABS('+column(amounts[0][side])+row+'-'+gatewayName+column(amounts[1][side])+gatewayRow+')<=0.005');
        statusExpression='IF(AND('+conditions.join(',')+'),"能匹配",'+fallback+')';
      }
      if(decision&&affected(row)){var decisionCell=column(result.detailColumns.decision)+row;result.sheet.cells[decisionCell]=held(row)?'待核实':row===decision.keepRow?'保留匹配':decision.outcome==='independent'?'独立交易':'重复导入';statusExpression='IF('+decisionCell+'="待核实","待核实",IF('+decisionCell+'="独立交易","不能匹配",IF('+decisionCell+'="重复导入","重复",'+statusExpression+')))';}
      var formula='=IF('+keyCell+'="","不能匹配",'+statusExpression+')',address=column(result.statusColumn)+row;
      result.sheet.formulas[address]=formula;
      result.sheet.cells[address]=EtFormulas.evaluate(formula,result.sheet,[result.sheet].concat(tab.doc.sheets));
      var pending='=IF('+keyCell+'="","缺少编号","待核验")',currencyFormula=pending,amountFormula=pending;
      var currencyCols=checks[2];
      if(gatewayRow&&currencyCols[0]>=0&&currencyCols[1]>=0){
        var currencyCheck='TRIM('+column(currencyCols[0])+row+')=TRIM('+gatewayName+column(currencyCols[1])+gatewayRow+')';
        currencyFormula='=IF('+currencyCheck+',"一致","不一致")';
        var amountChecks=[];
        for(var side=0;side<2;side++)if(amounts[0][side]>=0&&amounts[1][side]>=0)amountChecks.push('ABS('+column(amounts[0][side])+row+'-'+gatewayName+column(amounts[1][side])+gatewayRow+')<=0.005');
        if(amountChecks.length)amountFormula='=IF('+currencyCheck+',IF(AND('+amountChecks.join(',')+'),"一致","不一致"),"跨币种待核验")';
      }
      [result.detailColumns.amount,result.detailColumns.currency].forEach(function(col,i){var target=column(col)+row,detailFormula=i?currencyFormula:amountFormula;result.sheet.formulas[target]=detailFormula;result.sheet.cells[target]=EtFormulas.evaluate(detailFormula,result.sheet,[result.sheet].concat(tab.doc.sheets));});
    }
    result.sheet.notice='对账结果 · 已配对 '+stats['能匹配']+' 条 · 重复待复核 '+stats['重复']+' 条 · 未匹配 '+stats['不能匹配']+' 条'+(stats['待核实']?' · 待核实 '+stats['待核实']+' 条':'');
    return result;
  }
  function createScript(tab,draft){
    // 每次新执行重新确认特殊重复记录；用户选择只属于本轮暂停与续跑。
    draft=Object.assign({},draft);delete draft.duplicateDecision;
    var refs=resolved(tab,draft);if(refs.some(function(ref){return !ref;}))return null;
    var result=preparePlannedResult(tab,draft,refs);if(!result)return null;
    var task=EtExperts.getFinanceTasks()[0],report=EtTaskReport.create(task,result),issue=duplicateCase(tab,refs);
    var state=Agent.sessions[tab.id]&&Agent.sessions[tab.id].reconciliationFlow;
    tab.doc.lastReconciliationTask={ranges:refs,rules:draft.rules,matchingMode:'transaction'};
    function tail(){return [
      {type:'tool_call',toolName:'resolve_reconciliation_duplicates',taskStage:2,content:'按确认规则处理重复编号'},
      {type:'understanding',content:'已区分 '+result.resolvedDuplicateRows+' 条重复关联记录。'+(result.duplicateDecision&&result.duplicateDecision.outcome==='defer'?'这两条特殊记录保留待核实，暂不自动配对。':'重复对账 ID 按顺序补后缀，两表同步。')},
      {type:'tool_call',toolName:'verify_reconciliation_results',taskStage:3,content:'核验金额、币种及匹配结果'},
      {type:'understanding',content:'已核验 '+result.matchedPairs+' 笔配对交易，每条网关记录只使用一次。\n交易原币金额与换汇结算金额分开核对。'},
      {type:'tool_call',toolName:'write_reconciliation_result',taskStage:4,content:'整理差异明细与最终结果',actionAtStart:true,action:{type:'et.reconcileDemo',result:result,progressive:true}},
      {type:'understanding',content:'已新建 '+result.sheet.name+'，通过公式标识重复和未匹配记录。'},
      {type:'done',content:'对账已完成。下面是本次核对结果和处理溯源。',report:report}
    ];}
    var script={taskTitle:task.title,memoryTaskKey:'finance-0',privacyMode:!!draft.privacyMode,requireSuccessfulActions:true,collapseBeforeResult:true,
      taskPlan:['识别账单与关联字段','建立候选匹配关系','按确认规则处理重复编号','核验金额、币种及匹配结果','整理差异明细与最终结果'],steps:[
        {type:'understanding',content:'我会先核实两份账单并建立匹配关系；遇到需要你判断的重复记录，会先确认，再继续核验并生成结果。'},
        {type:'tool_call',toolName:'identify_reconciliation_fields',taskStage:0,content:'识别账单与关联字段'},
        {type:'understanding',content:'已识别两份账单，关联字段为 '+result.keyLabels.join(' ↔ ')+'。'},
        {type:'tool_call',toolName:'build_reconciliation_candidates',taskStage:1,content:'建立候选匹配关系'},
        {type:'understanding',content:'按编号建立候选关系，结合日期、商户和同币种金额，逐笔配对。'}
      ].concat(tail()),onComplete:function(){if(state){state.status='complete';state.report=report;state.running=false;}}
    };
    if(issue&&!draft.duplicateDecision){
      var labels=issue.mainRows.map(function(row){return issue.sheetNames[0]+' '+row+'：'+row;});
      labels.push(issue.sheetNames[1]+' '+issue.gatewayRow+'：'+issue.gatewayRow);
      var references=issue.mainRows.map(function(row,i){return {label:labels[i],sheet:issue.sheetNames[0],range:{r1:row,c1:0,r2:row,c2:issue.lastColumns[0]}};});
      references.push({label:labels[2],sheet:issue.sheetNames[1],range:{r1:issue.gatewayRow,c1:0,r2:issue.gatewayRow,c2:issue.lastColumns[1]}});
      references.forEach(function(ref){ref.displayLabel=ref.range.r1+'：'+ref.range.r2;});
      var clarification={type:'clarification',toolName:'clarify_duplicate_transaction',taskStage:2,resumeInPlace:true,references:references,
        content:'这两条渠道记录的日期、商户、币种和金额一致，仅有一条网关记录对应。\n| '+issue.sheetNames[0]+' | '+labels[0]+' '+labels[1]+' |\n| '+issue.sheetNames[1]+' | '+labels[2]+' |\n我还不能判断是重复导入，还是两笔真实交易。\n你希望我如何处理？',
        question:'这组重复记录，你希望如何处理？',optionsLabel:'重复记录处理方式',customPlaceholder:'说明这两条记录的保留、匹配和标记方式',waitingLabel:'等待确认重复记录处理方式',
        options:[
          {value:'import',label:'按重复导入处理',desc:'保留一条参与匹配，另一条标记为重复。',rule:'按重复导入处理：保留一条参与匹配，另一条标记为重复。'},
          {value:'independent',label:'按两笔独立交易处理',desc:'两条都保留，第二条列入未匹配清单。',rule:'按两笔独立交易处理：两条都保留，第二条列入未匹配清单。'},
          {value:'defer',label:'暂不判断',desc:'两条都保留，单独列入待核实清单。',rule:'暂不判断：两条都保留，单独列入待核实清单。'},
          {value:'custom',label:'自定义处理方式',custom:true}
        ],onWait:function(){if(state)state.status='clarifying';},onResolve:function(answer,activeScript){
          draft.duplicateDecision=decisionFor(answer,issue);result=preparePlannedResult(tab,draft,refs);if(!result)throw new Error('所选账单已变化，请重新确认数据范围');
          report=EtTaskReport.create(task,result);activeScript.steps.splice(activeScript.steps.findIndex(function(step){return step.toolName==='clarify_duplicate_transaction';})+1,activeScript.steps.length,...tail());
          clarification.confirmation=draft.duplicateDecision.customUnresolved?'已记录自定义要求；这两条先保留待核实，其余记录继续对账。':'我会按你确认的方式处理这组记录，继续核对其余账单。';
          if(state)state.status='executing';
        }
      };
      script.steps.splice(5,0,clarification);
    }
    return script;
  }
  window.EtReconciliationDiscovery={start:start,cancel:cancel,infer:infer,inspect:inspect,rules:rules,describe:describe,handleInput:handleInput,renderProposal:renderProposal,interpret:interpret,matchFields:matchFields,createScript:createScript};
})();

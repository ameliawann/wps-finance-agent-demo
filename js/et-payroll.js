/* 人力薪酬场景：数据、文案和任务记忆按工作簿隔离；共用现有对话与任务组件。 */
(function () {
  'use strict';
  var sequence=0, records=[], reminders={};
  var tasks=[
    {title:'核对薪酬发放',desc:'核对薪酬核算表与银行流水，找出漏发、差额和重复发薪'},
    {title:'分析薪酬差异',desc:'整理金额差异、银行退回、未匹配项及人员异动线索'},
    {title:'汇总部门薪酬',desc:'按部门汇总应发、扣款和实发金额，区分人数与发薪笔数'},
    {title:'复核人员异动',desc:'关联入离职、调薪和转岗记录，整理需要复核的薪酬事项'}
  ];
  function owner(id){return App.tabs.find(function(t){return t.id===id;});}
  function isPayroll(tab){return !!(tab&&tab.type==='et'&&window.HR_PAYROLL_DEMO&&tab.name===HR_PAYROLL_DEMO.source);}
  function copy(value){return JSON.parse(JSON.stringify(value));}
  function col(n){var s='';for(n++;n;n=Math.floor((n-1)/26))s=String.fromCharCode(65+(n-1)%26)+s;return s;}
  function node(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e;}
  function button(label,action,variant){var b=node('button','kd-button kd-button-'+(variant||'secondary')+' kd-button-m',label);b.type='button';b.addEventListener('click',action);return b;}
  function normalized(v){return String(v==null?'':v).trim().toLowerCase();}
  function quote(name){return "'"+name.replace(/'/g,"''")+"'!";}
  function value(table,row,header){var c=table.header.indexOf(header);return c<0?'':table.cells[col(c)+row];}
  function number(table,row,header){var v=value(table,row,header);return v==null||v===''||!Number.isFinite(Number(v))?null:Number(v);}
  function table(tab,name){
    var model=tab.doc,sheet=model.sheets.find(function(s){return s.name===name;});
    if(!sheet)return null;
    var cells=model.sheets[model.activeSheet]===sheet?model.cells:sheet.cells,header=[],rows=[];
    for(var c=0;c<sheet.columnCount;c++){var h=cells[col(c)+'1'];if(h==null||h==='')break;header.push(String(h));}
    Object.keys(cells).forEach(function(a){var r=Number(a.match(/\d+$/)[0]);if(r>1&&cells[a]!=null&&cells[a]!==''&&rows.indexOf(r)<0)rows.push(r);});rows.sort(function(a,b){return a-b;});
    return {sheet:sheet,name:name,cells:cells,header:header,rows:rows};
  }
  function sources(tab){
    Editors.recalculateEtFormulas(tab);
    return HR_PAYROLL_DEMO.sheets.map(function(s){return table(tab,s.name);});
  }
  function draftFor(tab,repeat){
    var memory=EtTaskMemory.get(tab,'hr-0'),p=memory&&memory.preferences||{};
    return {keyField:p.keyField||'核算流水号',privacyMode:!!p.privacyMode,duplicateOutcome:repeat?p.duplicateOutcome:null,duplicateRule:repeat?p.duplicateRule:'',repeat:!!repeat};
  }
  function candidateRows(data,row,draft){
    var main=data[0],bank=data[1],key=normalized(value(main,row,draft.keyField));if(!key)return [];
    return bank.rows.filter(function(r){
      if(normalized(value(bank,r,draft.keyField))!==key)return false;
      return draft.keyField!=='员工工号'||['薪资月份','发薪批次'].every(function(h){return normalized(value(main,row,h))===normalized(value(bank,r,h));});
    });
  }
  function duplicateGroups(data,draft){return data[0].rows.map(function(r){return {main:r,bank:candidateRows(data,r,draft)};}).filter(function(x){return x.bank.length>1;});}
  function identity(tab){return EtBrand.identityHTML();}
  function renderWelcome(root,id){
    root.className='ag-welcome is-expert-welcome ag-chat-welcome';
    root.innerHTML=identity(owner(id))+EtBrand.greetingHTML()+'<section class="ag-chat-bubble" aria-label="灵犀的薪酬核对建议"><p>这份薪酬核算表，要不要交给我一起核对？</p><p>我会结合银行发薪流水和人员异动，先确认核对口径，再帮你找出漏发、差额与重复记录。</p><div class="ag-chat-main-task"></div></section><div class="ag-chat-suggestions" role="group" aria-label="其他人力任务"></div>';
    root.querySelector('.ag-chat-main-task').appendChild(button('现在开始',function(){Agent.openEtTask(id,0);},'primary'));
    ['薪酬差异','部门汇总','人员异动'].forEach(function(label,i){var b=button(label,function(){Agent.openEtTask(id,i+1);},'light');b.className='kd-button kd-button-light kd-button-sm';b.title=tasks[i+1].desc;b.setAttribute('aria-label',tasks[i+1].title);b.innerHTML='<span class="kd-button-prefix-icon ag-chat-task-icon" aria-hidden="true">'+EtBrand.suggestionIconHTML(i+1)+'</span><span class="kd-button-children">'+label+'</span>';root.querySelector('.ag-chat-suggestions').appendChild(b);});
  }
  function proposal(tab,state){
    var data=sources(tab),draft=state.draft;
    return {scene:'hr',tabId:tab.id,taskIndex:state.taskIndex,title:tasks[state.taskIndex].title+'方案',fields:data.slice(0,2).map(function(t){var c=t.header.indexOf(draft.keyField);return {label:t.name+' · '+draft.keyField,sheet:t.name,range:{r1:2,c1:Math.max(c,0),r2:Math.max.apply(null,t.rows),c2:Math.max(c,0)}};}),
      ruleItems:state.taskIndex===2?['按部门汇总薪酬核算表中的应发、社保公积金、个税、其他扣款与实发金额。','员工工号去重统计人数，发薪笔数另列；奖金、补发保留为独立记录。']:state.taskIndex===3?['按员工工号与影响薪资月份关联人员异动台账，列出对应薪酬记录。','入离职、调薪和转岗需结合生效日期与审批说明复核；未提供计薪规则时保留待核实。']:[
        '用 '+draft.keyField+(draft.keyField==='员工工号'?'、薪资月份与发薪批次':'')+' 关联薪酬核算表与银行发薪流水，不按姓名直接匹配。',
        '逐笔核对员工工号、薪资月份、发薪批次、实发金额与收款账户尾号。银行退回与重新提交先确认口径；每条银行流水最多使用一次。',
        '人员异动作为复核线索，奖金与补发单独核对；未匹配、金额差异、字段差异和待核实项分别标注。'
      ],outputNote:state.taskIndex===2?'新增部门薪酬汇总表，保留源表。':state.taskIndex===3?'新增人员异动复核表，保留审批说明与来源行号。':'新增薪酬核对结果和银行流水核查表，保留三张源表。',privacyMode:draft.privacyMode};
  }
  function renderProposal(p,id){
    var card=node('section','ag-recon-proposal ag-recon-proposal--compact');card.setAttribute('aria-label',p.title);
    var head=node('header','ag-proposal-header');head.appendChild(node('h4','',p.title));card.appendChild(head);card.appendChild(node('p','ag-proposal-output-note',p.outputNote));
    if(p.taskIndex<2){var fields=node('section','ag-proposal-fields');fields.appendChild(node('h5','','关联字段'));var chips=node('div','ag-proposal-chips');p.fields.forEach(function(loc,i){if(i)chips.appendChild(node('span','ag-proposal-pair','↔'));var chip=button(loc.label,function(){Editors.navigateEtReference(id||p.tabId,loc);});chip.className='kd-tag kd-tag--info ag-report-location';chip.title='定位到 '+loc.sheet;chips.appendChild(chip);});fields.appendChild(chips);card.appendChild(fields);}
    var rules=node('section','ag-proposal-rules');rules.appendChild(node('h5','','处理规则'));var list=node('ol');list.setAttribute('role','list');p.ruleItems.forEach(function(rule,i){var li=node('li');li.appendChild(node('span','ag-proposal-rule-index',String(i+1).padStart(2,'0')));li.appendChild(node('div','ag-proposal-rule-copy',rule));list.appendChild(li);});rules.appendChild(list);card.appendChild(rules);
    var label=node('label','kd-checkbox');label.innerHTML='<!-- [Checkbox: payroll privacy] --><span class="kd-checkbox-input"><span class="kd-checkbox-inner"></span><input type="checkbox" class="kd-checkbox-original"></span><span class="kd-checkbox-label">在临时副本中脱敏后执行</span>';
    var input=label.querySelector('input');input.checked=!!p.privacyMode;label.querySelector('.kd-checkbox-input').classList.toggle('is-checked',input.checked);
    input.addEventListener('change',function(){var state=owner(id||p.tabId).doc.reconciliationDiscovery;if(state){state.draft.privacyMode=input.checked;p.privacyMode=input.checked;}label.querySelector('.kd-checkbox-input').classList.toggle('is-checked',input.checked);});card.appendChild(label);
    var footer=node('footer','ag-proposal-actions');footer.appendChild(button('调整规则',function(){Agent.fillEtSuggestion(id||p.tabId,'我想调整薪酬核对规则：');}));footer.appendChild(button('开始处理',function(){var tab=owner(id||p.tabId),state=tab&&tab.doc.reconciliationDiscovery,session=Agent.sessions[id||p.tabId];if(!state||session.processing||state.status==='complete'||state.taskIndex!==p.taskIndex)return;state.draft.privacyMode=input.checked;Agent.appendEtTaskMessage(tab.id,'user','开始处理');execute(tab,state);},'primary'));card.appendChild(footer);return card;
  }
  function start(id,index,repeat){
    var tab=owner(id),session=Agent.sessions[id];if(!isPayroll(tab)||!session||session.processing)return;
    var state={scene:'hr',id:++sequence,taskIndex:index||0,status:'analyzing',running:true,timers:[],pending:[],draft:draftFor(tab,repeat)};
    tab.doc.reconciliationDiscovery=state;session.reconciliationFlow=state;
    Agent.appendEtTaskMessage(id,'user',repeat?'沿用已确认的规则，再次核对当前薪酬表':tasks[state.taskIndex].title);
    if(repeat){execute(tab,state);return;}review(tab,state);
  }
  function review(tab,state){
    var data=sources(tab);if(data.some(function(t){return !t;})){Agent.appendEtTaskMessage(tab.id,'ai','缺少薪酬核算表、银行发薪流水或人员异动台账，请补充后再核对。');return;}
    var groups=duplicateGroups(data,state.draft),salaryIds=new Set(data[0].rows.map(function(r){return normalized(value(data[0],r,'核算流水号'));})),bankOnly=data[1].rows.filter(function(r){return !salaryIds.has(normalized(value(data[1],r,'核算流水号')));}).length;
    state.running=true;state.status='analyzing';
    Agent.runEtTaskScript(tab.id,'',{discoveryPlan:true,userMessageRecorded:true,collapseBeforeResult:true,taskTitle:tasks[state.taskIndex].title,taskPlan:['识别薪酬数据','检查发薪口径与异常','整理人力任务方案'],steps:[
      {type:'understanding',content:'收到。我先查看薪酬核算、银行发薪与人员异动数据，整理核对范围和待确认规则。**你确认后，我再开始处理。**'},
      {type:'tool_call',toolName:'inspect_payroll_workbook',taskStage:0,content:'识别三张人力数据表与原有实发金额公式'},
      {type:'understanding',content:data.map(function(t){return '「'+t.name+'」'+t.rows.length+' 条记录';}).join('，')+'。薪酬记录按发薪笔数统计，奖金与补发单独保留。'},
      {type:'tool_call',toolName:'inspect_payroll_payment',taskStage:1,content:'检查核算流水号、银行反馈与人员异动关联'},
      {type:'understanding',content:'发现 '+groups.length+' 组薪酬记录对应多条银行流水，'+bankOnly+' 条银行流水在薪酬核算表中没有对应流水号。银行反馈含退回记录，需确认重新提交的处理口径。'},
      {type:'tool_call',toolName:'prepare_payroll_plan',taskStage:2,content:'整理匹配规则、薪酬异常与结果输出方案'},
      {type:'done',content:'### 我的分析与建议\n以**'+state.draft.keyField+'**关联薪酬核算表与银行流水，复核实发金额、员工信息、发薪批次与银行反馈。\n人员异动作为解释差异的线索，计薪规则不明确的项目保留待核实。',proposal:proposal(tab,state)}
    ],onComplete:function(){state.running=false;state.status='planned';if(state.pending.length){var text=state.pending.join('，');state.pending=[];processInput(tab,state,text);}}});
  }
  function makeSheet(name,header,rows,id){
    var s={name:name,scene:'hr',demoResultId:id,cells:{},formulas:{},marks:{1:'header'},cellStyles:{},sel:{r:1,c:0},selRange:null,columnCount:Math.max(24,header.length),columnWidths:header.map(function(h){return /说明|线索|审批/.test(h)?256:144;})};
    [header].concat(rows).forEach(function(row,i){row.forEach(function(v,c){if(v!=null&&v!=='')s.cells[col(c)+(i+1)]=String(v);});});return s;
  }
  function uniqueName(tab,base){var name=base,n=2;while(tab.doc.sheets.some(function(s){return s.name===name;}))name=base+n++;return name;}
  function prepare(tab,draft){
    var data=sources(tab),main=data[0],bank=data[1],events=data[2],issues=duplicateGroups(data,draft),used=new Set(),pairs=[],bankNotes={},rows=[],stats={'已核对':0,'金额差异':0,'未匹配':0,'待核实':0,'字段差异':0,'发薪退回':0};
    var statusCol=main.header.length,formulas={},sourceRefs={},id='payroll-'+tab.id+'-'+(++sequence),mainName=uniqueName(tab,'薪酬核对结果'),bankName=uniqueName(tab,'银行流水核查');
    main.rows.forEach(function(r,idx){
      var outRow=idx+2,all=candidateRows(data,r,draft),eligible=all.slice(),status='',note='',selected=null;
      if(all.length>1&&draft.duplicateOutcome==='success')eligible=all.filter(function(br){return value(bank,br,'银行反馈状态')==='成功';});
      if(all.length>1&&draft.duplicateOutcome!=='success'){status='待核实';note='同一薪酬记录对应多条银行流水，待确认退回与重发口径。';}
      else if(eligible.length>1){status='待核实';note='存在多条候选发薪流水，无法唯一配对。';}
      else if(!eligible.length){status='未匹配';note=all.length?'没有成功发薪流水，需核查银行退回原因。':'银行流水未找到对应记录，待核实是否漏发或尚未回传。';}
      else if(used.has(eligible[0])){status='待核实';note='银行流水已用于其他薪酬记录，不重复配对。';}
      else {selected=eligible[0];used.add(selected);pairs.push({main:r,bank:selected});
        var net=number(main,r,'实发金额(元)'),paid=number(bank,selected,'打款金额(元)');
        if(net===null||paid===null){status='待核实';note='实发金额缺失或不是有效数值。';}
        else if(value(bank,selected,'银行反馈状态')!=='成功'){status='发薪退回';note='银行反馈未成功，请核查发薪状态。';}
        else if(['员工工号','薪资月份','发薪批次','收款账户尾号'].some(function(h){return !normalized(value(main,r,h))||normalized(value(main,r,h))!==normalized(value(bank,selected,h));})){status='字段差异';note='员工工号、薪资月份、批次或收款账户尾号不一致。';}
        else if(Math.abs(Math.round((paid-net)*100))>0){status='金额差异';note='银行实发额与核算表实发金额不一致，原因待复核。';}
        else {status='已核对';note=all.length>1?'按确认口径使用成功流水，退回记录单列保留。':'发薪关联字段与实发金额一致。';}
      }
      var key=value(main,r,draft.keyField),mainDuplicate=main.rows.filter(function(mr){return normalized(value(main,mr,draft.keyField))===normalized(key);}).length>1;
      if(draft.keyField==='核算流水号'&&mainDuplicate){status='待核实';note='薪酬核算表存在重复核算流水号，需先确认业务含义。';}
      var eventRows=events.rows.filter(function(er){return normalized(value(events,er,'员工工号'))===normalized(value(main,r,'员工工号'))&&value(events,er,'影响薪资月份')===value(main,r,'薪资月份');});
      var eventNote=eventRows.map(function(er){return value(events,er,'异动类型')+' '+value(events,er,'生效日期');}).join('；')||'无本期异动记录';
      var row=main.header.map(function(h,c){var address=col(c)+outRow;sourceRefs[address]={sheet:main.name,address:col(c)+r};return value(main,r,h);});
      row.push(status,selected?value(bank,selected,'打款金额(元)'):'',selected&&number(main,r,'实发金额(元)')!==null&&number(bank,selected,'打款金额(元)')!==null?Math.round((number(bank,selected,'打款金额(元)')-number(main,r,'实发金额(元)'))*100)/100:'',selected?value(bank,selected,'银行反馈状态'):'',selected?bank.name+'!'+selected:'',eventNote,note);rows.push(row);stats[status]++;
      if(selected){bankNotes[selected]=status;sourceRefs[col(statusCol+1)+outRow]={sheet:bank.name,address:col(bank.header.indexOf('打款金额(元)'))+selected};}
      Object.keys(main.sheet.formulas||{}).forEach(function(a){if(Number(a.match(/\d+$/)[0])===r){var c=a.match(/^[A-Z]+/)[0];formulas[c+outRow]='='+quote(main.name)+a;}});
      if(selected&&number(main,r,'实发金额(元)')!==null&&number(bank,selected,'打款金额(元)')!==null){
        var bq=quote(bank.name),netCol=col(main.header.indexOf('实发金额(元)')),paidRef=bq+col(bank.header.indexOf('打款金额(元)'))+selected;
        formulas[col(statusCol+1)+outRow]='='+paidRef;
        formulas[col(statusCol+2)+outRow]='=ROUND('+paidRef+'-'+netCol+outRow+',2)';
        if(!mainDuplicate||draft.keyField!=='核算流水号'){
          var checks=['核算流水号','员工工号','薪资月份','发薪批次','收款账户尾号'].filter(function(h){return h!=='核算流水号'||draft.keyField==='核算流水号';}).map(function(h){var a=col(main.header.indexOf(h))+outRow,b=bq+col(bank.header.indexOf(h))+selected;return 'AND('+a+'<>"",'+a+'='+b+')';});
          formulas[col(statusCol)+outRow]='=IF('+bq+col(bank.header.indexOf('银行反馈状态'))+selected+'<>"成功","发薪退回",IF(AND('+checks.join(',')+'),IF(ABS('+col(statusCol+2)+outRow+')<0.005,"已核对","金额差异"),"字段差异"))';
        }
      }
    });
    var bankOnly=0;
    var bankRows=bank.rows.map(function(r){var same=main.rows.filter(function(mr){return normalized(value(main,mr,'核算流水号'))===normalized(value(bank,r,'核算流水号'));}),status=bankNotes[r],note='';
      if(!same.length){status='银行单边';note='薪酬核算表无对应核算流水号，需补充发薪依据。';bankOnly++;}
      else if(!status&&value(bank,r,'银行反馈状态')!=='成功'){status=draft.duplicateOutcome==='success'?'退回已单列':'待核实';note='保留银行退回记录，需结合重新提交及成功流水复核。';}
      else if(!status){status='待核实';note='未参与唯一配对，需复核重复或异常流水。';}
      return bank.header.map(function(h){return value(bank,r,h);}).concat([status,note||'已关联薪酬核算记录。',same.map(function(mr){return main.name+'!'+mr;}).join('、')]);
    });
    var output=makeSheet(mainName,main.header.concat(['核对状态','银行打款金额(元)','发放差额(元)','银行反馈','银行来源行','人员异动线索','核查说明']),rows,id);
    output.formulas=formulas;output.sourceRefs=sourceRefs;output.statusColumn=statusCol;output.payrollRows=rows.length;
    var memory=EtTaskMemory.get(tab,'hr-0');if(memory&&memory.preferences.highlightExceptions)for(var mr=2;mr<=rows.length+1;mr++){var ms=output.cells[col(statusCol)+mr];if(ms!=='已核对')output.marks[mr]=ms==='待核实'?'recon-duplicate':'recon-unmatched';}
    var bankOutput=makeSheet(bankName,bank.header.concat(['核查状态','核查说明','薪酬来源行']),bankRows,id+'-bank');bankOutput.statusColumn=bank.header.length;bankOutput.payrollRows=bankRows.length;
    bankOutput.sourceRefs={};bank.rows.forEach(function(r,i){bank.header.forEach(function(h,c){bankOutput.sourceRefs[col(c)+(i+2)]={sheet:bank.name,address:col(c)+r};});});
    updateNotice(output);updateNotice(bankOutput);
    return {outputs:[output,bankOutput],stats:stats,main:main,bank:bank,events:events,bankOnly:bankOnly,issues:issues,pairs:pairs,total:rows.length,statusColumn:statusCol};
  }
  function updateNotice(sheet){
    if(sheet.statusColumn==null){sheet.notice=sheet.name+' · '+(sheet.payrollRows||0)+' 条记录';return;}
    var counts={};for(var r=2;r<=(sheet.payrollRows||0)+1;r++){var s=sheet.cells[col(sheet.statusColumn)+r]||'待核实';counts[s]=(counts[s]||0)+1;}
    sheet.notice=sheet.name+' · '+Object.keys(counts).map(function(k){return k+' '+counts[k]+' 条';}).join(' / ');
  }
  function reportFor(result,draft,taskIndex){
    var s=result.stats,pending=s['未匹配']+s['待核实']+s['字段差异']+s['发薪退回'],output=result.outputs[0];
    var report={layout:'reconciliation',scene:'hr',title:tasks[taskIndex].title+'执行报告',result:'已核对 '+result.total+' 条薪酬记录，生成“'+output.name+'”与“'+result.outputs[1].name+'”。',
      metrics:[{label:'薪酬记录',value:result.total,tone:'info'},{label:'已核对',value:s['已核对'],tone:'success'},{label:'金额差异',value:s['金额差异'],tone:'error'},{label:'其他待核查',value:pending,tone:'warning'}],
      basisRows:[{label:'来源数据',locations:[result.main,result.bank,result.events].map(function(t){return {label:t.name,sheet:t.name};})},{label:'关联字段',text:draft.keyField+(draft.keyField==='员工工号'?' + 薪资月份 + 发薪批次':'')+'；逐笔校验员工、月份、批次、账户尾号与实发金额。'},{label:'核对结果',locations:result.outputs.map(function(s){return {label:s.name,sheet:s.name,range:{r1:1,c1:s.statusColumn,r2:Math.min(12,s.payrollRows+1),c2:s.statusColumn+1}};})},{label:'银行单边',text:result.bankOnly+' 条银行流水无对应核算流水号，已在银行流水核查表单列。'},{label:'异动复核',text:'人员异动保留生效日期与审批说明作为线索；计薪天数、调薪依据需按业务规则另行核实。'}],
      memoryRows:[{label:'发薪口径',text:draft.duplicateOutcome==='success'?'同一薪酬记录出现退回与重新提交时，仅以唯一成功流水核对，退回记录保留。':'多条发薪流水无法唯一配对时保留待核实。'},{label:'奖金与补发',text:'以发薪记录逐笔核对，员工工号相同不直接判为重复。'},{label:'隐私偏好',text:draft.privacyMode?'使用临时副本脱敏，核验后还原姓名与文本。':'直接核对当前薪酬表。'}],
      closing:'下次收到薪酬表后，我可以沿用这次确认的核对规则，继续帮你检查薪酬发放。',changes:[],locations:[],findings:[],suggestions:[]};
    report.statusLocation={label:output.name,sheet:output.name,range:{r1:1,c1:result.statusColumn,r2:Math.min(12,result.total+1),c2:result.statusColumn+2}};return report;
  }
  function aggregate(tab,index){
    var data=sources(tab),main=data[0],events=data[2],rows=[],header;
    if(index===2){
      header=['部门','员工人数','发薪笔数','应发金额(元)','社保公积金(元)','个税(元)','其他扣款(元)','实发金额(元)'];
      var groups={};main.rows.forEach(function(r){var key=value(main,r,'部门')||'部门缺失',g=groups[key]||(groups[key]={ids:new Set(),count:0,totals:[0,0,0,0,0],missing:false});var employee=value(main,r,'员工工号');if(employee)g.ids.add(employee);g.count++;header.slice(3).forEach(function(h,i){var n=number(main,r,h);if(n===null)g.missing=true;else g.totals[i]+=n;});});
      Object.keys(groups).forEach(function(key){var g=groups[key];rows.push([key,g.ids.size,g.count].concat(g.totals.map(function(n){return g.missing?'金额缺失待核实':Math.round(n*100)/100;})));});
    }else{
      header=events.header.concat(['关联薪酬笔数','关联薪酬来源行','复核提示']);
      events.rows.forEach(function(r){var found=main.rows.filter(function(mr){return value(main,mr,'员工工号')===value(events,r,'员工工号')&&value(main,mr,'薪资月份')===value(events,r,'影响薪资月份');});rows.push(events.header.map(function(h){return value(events,r,h);}).concat([found.length,found.map(function(mr){return main.name+'!'+mr;}).join('、'),found.length?'核实异动生效日、审批及计薪规则，当前仅建立关联。':'本期薪酬无对应员工记录，需核实漏计或不适用。']));});
    }
    var sheet=makeSheet(uniqueName(tab,index===2?'部门薪酬汇总':'人员异动复核'),header,rows,'payroll-summary-'+(++sequence));sheet.payrollRows=rows.length;updateNotice(sheet);
    sheet.sourceRefs={};if(index===3)events.rows.forEach(function(r,i){events.header.forEach(function(h,c){sheet.sourceRefs[col(c)+(i+2)]={sheet:events.name,address:col(c)+r};});});
    else rows.forEach(function(row,i){var r=main.rows.find(function(mr){return value(main,mr,'部门')===row[0];});if(r)sheet.sourceRefs['A'+(i+2)]={sheet:main.name,address:col(main.header.indexOf('部门'))+r};});
    return {outputs:[sheet],report:{scene:'hr',title:tasks[index].title+'执行报告',result:'已生成“'+sheet.name+'”，共 '+rows.length+' 条'+(index===2?'部门汇总':'异动复核')+'记录。',changes:[['新增工作表',sheet.name,index===2?'按部门汇总薪酬金额，员工人数按编号去重，发薪笔数单列。':'保留全部人员异动，按员工工号及薪资月份关联薪酬，列明来源行和复核提示。']],locations:[[{label:sheet.name,sheet:sheet.name}]],findings:[['处理口径',index===2?'同一员工的工资、奖金与补发可对应多条发薪记录。':'未提供完整计薪规则，不自动认定调薪或入离职工资计算正确。']],suggestions:[index===2?'复核部门归属及奖金、补发口径。':'结合生效日期与审批说明复核计薪依据。'],statusLocation:{label:sheet.name,sheet:sheet.name}}};
  }
  function execute(tab,state){
    var session=Agent.sessions[tab.id];if(!session||session.processing)return;
    var draft=state.draft,index=state.taskIndex,task=tasks[index],result=index<2?prepare(tab,draft):aggregate(tab,index),report=index<2?reportFor(result,draft,index):result.report;
    var script={taskTitle:task.title,memoryTaskKey:'hr-'+index,userMessageRecorded:true,collapseBeforeResult:true,requireSuccessfulActions:true,privacyMode:!!draft.privacyMode,payrollPrivacy:true,taskPlan:['识别薪酬与人事数据','确认发薪处理口径','核验薪酬金额与人员信息','生成核查结果','保存人力任务记忆'],steps:[
      {type:'understanding',content:draft.repeat?'已读取人力任务记忆，我会按已确认口径再次核对当前薪酬表；新的薪酬月份需导入对应数据后再处理。':'我会按确认方案处理薪酬数据，遇到发薪退回与重新提交的歧义先与你确认，再继续核验。'},
      {type:'tool_call',toolName:'identify_payroll_sources',taskStage:0,content:'读取薪酬核算、银行流水和人员异动数据'}
    ]};
    state.status='executing';state.running=true;
    var groups=index<2?result.issues:[];
    var clarification;
    function tail(){return [
      {type:'tool_call',toolName:'verify_payroll_amounts',taskStage:2,content:index<2?'逐笔核验实发金额、员工工号、月份、批次及收款账户尾号':task.desc},
      {type:'tool_call',toolName:'write_payroll_result',taskStage:3,content:'新增人力结果工作表并保留源数据',action:{type:'et.writePayrollResult',outputs:result.outputs}},
      {type:'tool_call',toolName:'save_payroll_memory',taskStage:4,content:'保存本次薪酬处理规则与隐私偏好',action:{type:'et.saveTaskMemory',taskKey:'hr-'+index,taskName:task.title,preferences:{keyField:draft.keyField,privacyMode:!!draft.privacyMode,duplicateOutcome:draft.duplicateOutcome,duplicateRule:draft.duplicateRule,matchingRules:proposal(tab,state).ruleItems.join('\n')}}},
      {type:'done',content:index<2?'薪酬核对已完成，下面是本次发薪核查结果。':'人力任务已完成，下面是本次处理结果。',report:report}
    ];}
    if(groups.length&&!draft.duplicateOutcome){
      var first=groups[0],data=sources(tab),salary=value(data[0],first.main,'核算流水号');
      clarification={type:'clarification',toolName:'clarify_payroll_reissue',taskStage:1,resumeInPlace:true,question:'同一笔薪酬对应退回与重新提交，如何核对？',optionsLabel:'发薪退回与重新提交的处理口径',waitingLabel:'等待确认退回与重发口径',content:'核算流水号 '+salary+' 对应 '+first.bank.length+' 条银行流水，反馈为 '+first.bank.map(function(r){return value(data[1],r,'银行反馈状态');}).join('、')+'。\n银行备注提到退回后重新提交，我建议保留全部流水，以唯一成功记录核对，避免将退回记录认定为重复发薪。',references:[{label:data[0].name+' 第 '+first.main+' 行',sheet:data[0].name,range:{r1:first.main,c1:0,r2:first.main,c2:17}}].concat(first.bank.map(function(r){return {label:data[1].name+' 第 '+r+' 行',sheet:data[1].name,range:{r1:r,c1:0,r2:r,c2:15}};})),options:[
        {value:'success',label:'按成功发薪核对',desc:'仅使用唯一成功流水，退回记录单列保留。',rule:'退回后重新提交，仅以唯一成功银行流水核对薪酬，保留退回记录。'},
        {value:'defer',label:'保留待核实',desc:'不自动配对这组记录，其余薪酬继续核对。',rule:'退回与重新提交记录保留待核实，其余薪酬继续核对。'},
        {value:'custom',label:'自定义处理方式',custom:true}
      ],onWait:function(){state.status='clarifying';},onResolve:function(answer,activeScript){draft.duplicateOutcome=answer.choice==='success'?'success':'defer';draft.duplicateRule=answer.rule;result=prepare(tab,draft);report=reportFor(result,draft,index);state.status='executing';clarification.confirmation=answer.choice==='success'?'已确认：保留全部银行流水，使用唯一成功记录继续核对薪酬。':'已记录：这组发薪记录保留待核实，继续核对其余薪酬。';var at=activeScript.steps.findIndex(function(s){return s.toolName==='clarify_payroll_reissue';});activeScript.steps.splice(at+1,activeScript.steps.length,...tail());}};
      script.steps.push(clarification);
    }else script.steps.push({type:'tool_call',toolName:'confirm_payroll_rules',taskStage:1,content:index<2?'按已确认的退回、重发及唯一配对口径处理':'确认部门汇总或异动复核口径'});
    script.steps=script.steps.concat(tail());
    if(draft.privacyMode){
      script.privacyWrapped=true;
      script.steps.splice(1,0,{type:'tool_call',toolName:'mask_payroll_data',content:'建立临时副本，对姓名、部门与非匹配文字脱敏，保留金额和核对字段',action:{type:'et.maskReconciliation',sources:sources(tab).map(function(t){return {sheet:t.name,columns:t.header.map(function(h,c){return /流水号|员工工号|月份|批次|账户尾号|金额|实发额|个税|扣款|日期|反馈状态/.test(h)?col(c):null;}).filter(Boolean)};})}});
      // 在保存任务记忆之前还原，澄清时重建 tail 仍保留这个步骤。
      var originalTail=tail;
      tail=function(){var steps=originalTail();steps.splice(2,0,{type:'tool_call',toolName:'restore_payroll_data',content:'核验完成，还原人力结果中的原始文字并收起临时脱敏副本',action:{type:'et.restoreReconciliation'}});return steps;};
      var saveAt=script.steps.findIndex(function(s){return s.toolName==='save_payroll_memory';});script.steps.splice(saveAt,0,{type:'tool_call',toolName:'restore_payroll_data',content:'核验完成，还原人力结果中的原始文字并收起临时脱敏副本',action:{type:'et.restoreReconciliation'}});
    }
    script.onComplete=function(){state.status='complete';state.running=false;state.report=report;Agent.updateEtTaskProgress(tab.id,{memoryUpdated:true,memoryTaskKey:'hr-'+index});};
    Agent.runEtTaskScript(tab.id,'开始处理',script);
  }
  Editors.actions.et.writePayrollResult=function(tab,action){
    var model=tab.doc,privacy=EtReconciliationPrivacy.isActive(tab),last;
    action.outputs.forEach(function(raw){
      var output=copy(raw);
      if(privacy){
        Object.keys(output.sourceRefs||{}).forEach(function(a){var ref=output.sourceRefs[a],source=model.sheets.find(function(s){return s.privacyTemporary&&s.name.indexOf(ref.sheet+'_脱敏')===0;});if(source&&source.cells[ref.address]!=null)output.cells[a]=source.cells[ref.address];});
      }
      delete output.sourceRefs;var found=model.sheets.findIndex(function(s){return s.demoResultId===output.demoResultId;});
      if(found<0)model.sheets.push(output);else model.sheets[found]=output;
      if(privacy)EtReconciliationPrivacy.registerOutput(tab,output);last=output;
    });
    if(last){var first=model.sheets.findIndex(function(s){return s.demoResultId===action.outputs[0].demoResultId;});Editors.switchEtSheet(tab,first);Editors.recalculateEtFormulas(tab);if(App.activeId===tab.id){Editors.render(document.getElementById('view-editor'),tab);Editors.navigateEtReference(tab.id,{sheet:action.outputs[0].name,range:{r1:1,c1:action.outputs[0].statusColumn||0,r2:12,c2:(action.outputs[0].statusColumn||0)+2}});}}return !!last;
  };
  function processInput(tab,state,text){
    if(/暂停|停止|取消/.test(text)){Agent.pauseEtTask(tab.id);state.status='paused';return;}
    if(state.status==='clarifying'){Agent.appendEtTaskMessage(tab.id,'ai','请在下方选择发薪退回与重新提交的处理方式，或填写自定义要求。');return;}
    var intent=EtReconciliationDiscovery.interpret(text),changed=false;
    if(/员工工号/.test(text)&&/按|改用|使用/.test(text)){state.draft.keyField='员工工号';changed=true;}
    else if(/核算流水号/.test(text)&&/按|改用|使用/.test(text)){state.draft.keyField='核算流水号';changed=true;}
    if(intent.privacy!==null){state.draft.privacyMode=intent.privacy;changed=true;}
    if(/仅|只/.test(text)&&/成功/.test(text)&&!intent.question){state.draft.duplicateOutcome='success';state.draft.duplicateRule='仅以唯一成功银行流水核对，退回记录保留。';changed=true;}
    if(intent.question){Agent.appendEtTaskMessage(tab.id,'ai',/脱敏/.test(text)?'可以在临时副本中对姓名与非匹配文字脱敏，保留核对字段与金额，核验后还原。':'建议按核算流水号逐笔关联，并复核员工工号、薪资月份、发薪批次、账户尾号、实发金额和银行反馈。奖金与补发不能仅因员工相同就判为重复。');return;}
    if(state.status==='executing'){Agent.appendEtTaskMessage(tab.id,'ai','正在按已确认的方案核对薪酬。可先暂停，再调整规则。');return;}
    if(intent.proceed){execute(tab,state);return;}
    if(changed){review(tab,state);return;}
    Agent.appendEtTaskMessage(tab.id,'ai','可以告诉我改用“核算流水号”或“员工工号 + 月份 + 批次”关联、是否脱敏，或只使用成功流水。其他规则需说明具体字段与判断方式，确认前不会执行。');
  }
  function handleInput(id,text){
    var tab=owner(id),session=Agent.sessions[id],state=session&&session.reconciliationFlow;
    if(!state){
      if(/薪酬|工资|发薪|薪资|人事|人员异动|部门汇总/.test(text)){start(id,/部门|汇总/.test(text)?2:/异动/.test(text)?3:0);return true;}Agent.appendEtTaskMessage(id,'user',text);Agent.appendEtTaskMessage(id,'ai','我可以帮你核对薪酬发放、分析薪酬差异、汇总部门薪酬或复核人员异动。请告诉我本次要处理的任务。');return true;
    }
    if(state.status==='complete'){
      Agent.appendEtTaskMessage(id,'user',text);
      if(/颜色|标色|高亮|底色|标红|标黄/.test(text)){highlight(tab,state,text);return true;}
      if(/报告|明细|结果/.test(text)){Agent.appendEtTaskMessage(id,'ai','',null,state.report);return true;}
      if(/重新|再次|开始|继续核对/.test(text)){state.draft.repeat=true;execute(tab,state);return true;}
      Agent.appendEtTaskMessage(id,'ai','本次薪酬核对已完成。可以查看结果、给异常标色，或回到工作首页选择部门薪酬汇总和人员异动复核。');return true;
    }
    Agent.appendEtTaskMessage(id,'user',text);if(state.status==='analyzing'){state.pending.push(text);return true;}processInput(tab,state,text);return true;
  }
  function highlight(tab,state,text){
    var sheet=tab.doc.sheets.find(function(s){return state.report.statusLocation&&s.name===state.report.statusLocation.sheet;});if(!sheet||sheet.statusColumn==null){Agent.appendEtTaskMessage(tab.id,'ai','请先生成薪酬核对结果，再按核对状态标色。');return;}
    var markPending=/待核实|未匹配|异常|差异/.test(text),markDup=/重复/.test(text),count=0;
    Editors.recalculateEtFormulas(tab);
    for(var r=2;r<=sheet.payrollRows+1;r++){var status=sheet.cells[col(sheet.statusColumn)+r];if((markPending||!markDup)&&status!=='已核对'||markDup&&status==='待核实'){sheet.marks[r]=status==='待核实'?'recon-duplicate':'recon-unmatched';count++;}}
    if(tab.doc.sheets[tab.doc.activeSheet]===sheet)tab.doc.marks=sheet.marks;
    Editors.navigateEtReference(tab.id,state.report.statusLocation);Editors.render(document.getElementById('view-editor'),tab);
    EtTaskMemory.save(tab,'hr-0',tasks[0].title,{highlightExceptions:true});EtTaskMemory.recordInput(tab,'hr-0',EtTaskMemory.createInput(text));Agent.updateEtTaskProgress(tab.id,{memoryUpdated:true,memoryTaskKey:'hr-0'});
    Agent.appendEtTaskMessage(tab.id,'ai','已为 '+count+' 条薪酬异常记录标色：待核实使用黄色，其余未匹配或差异使用红色，原有金额与公式保留。');
  }
  function homeEligible(s){return s.type==='et'&&isPayroll(owner(s.tabId));}
  function activeTasks(){return Object.keys(Agent.sessions).map(function(id){return Agent.sessions[id];}).filter(function(s){return isPayroll(owner(s.tabId))&&s.taskProgress&&(!s.taskProgress.complete&&(s.processing||s.clarification)||s.reconciliationFlow&&s.reconciliationFlow.status==='planned');});}
  function homeShouldShow(s){return homeEligible(s)&&!!(s.workHomeReturning||records.length||activeTasks().length);}
  function homeComplete(s,msg){
    if(!msg||!msg.executionCompleted||msg.workHomeSaved)return;
    var tab=owner(s.tabId),step=msg.steps&&msg.steps.find(function(p){return p.report&&p.report.scene==='hr';});if(!step)return;
    var conversation=s.messages.map(function(message){var item={};['role','text','html','taskTitle','ctx','clarificationAnswer','feedback','suppressActions'].forEach(function(k){if(message[k]!==undefined)item[k]=copy(message[k]);});if(message.steps)item.steps=message.steps.map(function(p){var o={};['type','content','shown','phase','keepVisible','report','proposal','references'].forEach(function(k){if(p[k]!==undefined)o[k]=copy(p[k]);});return o;});if(message.role==='ai')item.streaming=false;return item;});
    var model={};['kind','cells','formulas','sel','selRange','marks','cellStyles','columnCount','columnWidths','sheets','activeSheet','aiExpertId','aiRecommendedExpertId'].forEach(function(k){if(tab.doc[k]!==undefined)model[k]=tab.doc[k];});
    records.unshift({workbook:tab.name,model:copy(model),report:copy(step.report),conversation:conversation,taskIndex:s.reconciliationFlow&&s.reconciliationFlow.taskIndex||0});records=records.slice(0,3);msg.workHomeSaved=true;
  }
  function renderHome(root,s){
    root.className='ag-welcome is-expert-welcome ag-work-home';root.innerHTML=EtWorkHomeUI.welcomeHTML();
    var active=activeTasks();function section(title){var e=node('section','ag-work-section');e.appendChild(node('h4','',title));root.appendChild(e);return e;}
    var workspace=active.length||records.length?section('我的工作台'):null;
    if(active.length){var running=workspace;active.forEach(function(current){var state=current.reconciliationFlow,plan=current.taskProgress,planned=state.status==='planned';running.appendChild(EtWorkHomeUI.activeCard({title:tasks[state.taskIndex].title,file:owner(current.tabId).name,plan:plan,planned:planned,description:planned?'处理方案已准备好，等你确认开始。':plan.waiting?(plan.waitingLabel||'等待确认退回与重发口径'):plan.current>=0?plan.stages[plan.current]:'正在整理任务计划',onResume:function(){App.openDoc('et',owner(current.tabId).name);Agent.resumeEtWork(current.tabId);if(!Agent.isOpen())Agent.toggle();}}));});}
    if(records.length){var recent=workspace;records.forEach(function(record){recent.appendChild(EtWorkHomeUI.resultCard({title:tasks[record.taskIndex].title+'结果',file:record.workbook,report:record.report,onOpen:function(){App.openDoc('et',record.workbook);var tab=owner(App.activeId);if(!tab.doc.sheets.some(function(sheet){return sheet.name===record.report.statusLocation.sheet;})){Object.assign(tab.doc,copy(record.model));Editors.render(document.getElementById('view-editor'),tab);}if(!Agent.isOpen())Agent.toggle();Editors.navigateEtReference(tab.id,record.report.statusLocation);Agent.openEtWorkConversation(tab.id,record);}}));});}
    var next=root.querySelector('.ag-work-recommended'),tab=owner(s.tabId);
    var used=tasks.map(function(task,index){return {index:index,memory:EtTaskMemory.get(tab,'hr-'+index)};}).filter(function(item){return item.memory;});used.sort(function(a,b){return b.memory.updatedAt-a.memory.updatedAt;});var last=used[0],mainIndex=last?last.index:0;
    EtWorkHomeUI.recommendations(next,{tasks:tasks,labels:['薪酬核对','薪酬差异','部门汇总','人员异动'],mainIndex:mainIndex,remembered:!!last,description:last?'按上次确认的规则，继续处理当前薪酬表。':tasks[mainIndex].desc,disabled:active.length>0,reminder:reminders[mainIndex],toggleReminder:function(index){return reminders[index]=!reminders[index];},onStart:function(index,repeated){Agent.startEtHomeTask(tab.id,index,repeated&&index===0);}});
  }
  window.EtPayroll={isPayroll:isPayroll,renderWelcome:renderWelcome,start:start,renderProposal:renderProposal,handleInput:handleInput,updateNotice:updateNotice,prepare:prepare,homeEligible:homeEligible,homeShouldShow:homeShouldShow,homeComplete:homeComplete,renderHome:renderHome};
})();

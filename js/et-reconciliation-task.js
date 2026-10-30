/* 可折叠任务单与表格选区引用。选区只读取编辑器模型，不修改数据。 */
(function () {
  'use strict';
  var picker=null;
  function rangeLabel(index){return '组'+(Math.floor(index/2)+1)+' · 区域'+(index%2+1);}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function owner(id){return App.tabs.find(function(t){return t.id===id;});}
  function col(n){var s='';for(n++;n;n=Math.floor((n-1)/26))s=String.fromCharCode(65+(n-1)%26)+s;return s;}
  function colNumber(s){return s.replace(/\$/g,'').toUpperCase().split('').reduce(function(n,c){return n*26+c.charCodeAt(0)-64;},0);}
  function sheetName(doc){return doc.doc.sheets?doc.doc.sheets[doc.doc.activeSheet||0].name:'Sheet1';}
  function qualify(book,sheet,address){return "'["+book.replace(/'/g,"''")+"]"+sheet.replace(/'/g,"''")+"'!"+address;}
  function tableList(){
    var names=(window.MOCK_FILES||[]).filter(function(f){return f.type==='et';}).map(function(f){return f.name;});
    App.tabs.filter(function(t){return t.type==='et';}).forEach(function(t){if(names.indexOf(t.name)<0)names.push(t.name);});
    var result=[];
    names.forEach(function(name){var open=App.tabs.find(function(t){return t.type==='et'&&t.name===name;}),seed=window.MOCK_SEED.etFiles[name]||window.MOCK_SEED.et;
      var sheets=open?(open.doc.sheets||[{name:'Sheet1'}]):(seed.sheets||[{name:'Sheet1'}]);
      sheets.forEach(function(s){result.push({book:name,sheet:s.name});});
    });return result;
  }
  function parseRange(text,doc){
    var raw=text.trim(),bang=raw.lastIndexOf('!'),head=bang<0?'':raw.slice(0,bang),address=(bang<0?raw:raw.slice(bang+1)).replace(/\$/g,'').toUpperCase();
    var book=doc.name,sheet=sheetName(doc);
    if(head){if(head[0]==="'"&&head[head.length-1]==="'")head=head.slice(1,-1).replace(/''/g,"'");var qualified=head.match(/^\[([^\]]+)\](.+)$/);if(qualified){book=qualified[1];sheet=qualified[2];}else sheet=head;}
    var table=tableList().find(function(t){return t.book.toLowerCase()===book.toLowerCase()&&t.sheet.toLowerCase()===sheet.toLowerCase();});
    if(!table)return {error:'找不到引用的工作簿或工作表。'};book=table.book;sheet=table.sheet;
    var cells=address.match(/^([A-Z]{1,3})([1-9]\d*)(?::([A-Z]{1,3})([1-9]\d*))?$/),columns=address.match(/^([A-Z]{1,3}):([A-Z]{1,3})$/),rows=address.match(/^([1-9]\d*):([1-9]\d*)$/);
    if(cells){if(colNumber(cells[1])>16384||Number(cells[2])>1048576||cells[3]&&(colNumber(cells[3])>16384||Number(cells[4])>1048576||colNumber(cells[3])<colNumber(cells[1])||Number(cells[4])<Number(cells[2])))return {error:'区域范围无效。'};}
    else if(columns){if(colNumber(columns[1])>colNumber(columns[2])||colNumber(columns[2])>16384)return {error:'列范围无效。'};}
    else if(rows){if(Number(rows[1])>Number(rows[2])||Number(rows[2])>1048576)return {error:'行范围无效。'};}
    else return {error:'请输入有效区域，如 C:C 或 C2:C55。'};
    return {book:book,sheet:sheet,address:address,reference:qualify(book,sheet,address)};
  }
  function displayReference(value,doc){var parsed=parseRange(value,doc);return !parsed.error&&parsed.book===doc.name?"'"+parsed.sheet.replace(/'/g,"''")+"'!"+parsed.address:value;}
  function cancelPicker(){if(picker){picker.bar.remove();picker=null;}document.body.classList.remove('is-et-range-picking');document.querySelectorAll('.is-picking-range').forEach(function(e){e.classList.remove('is-picking-range');});}
  function positionPicker(){
    if(!picker)return;if(!owner(picker.ownerId)){cancelPicker();return;}
    var grid=document.querySelector('#view-editor:not([hidden]) .et-grid-wrap');
    picker.bar.hidden=!grid;if(!grid)return;
    if(picker.moved)return;
    var r=grid.getBoundingClientRect(),width=Math.min(520,r.width-32);
    picker.bar.style.width=width+'px';picker.bar.style.left=r.left+(r.width-width)/2+'px';picker.bar.style.top=r.top+(r.height-picker.bar.offsetHeight)/2+'px';
  }
  function finishPicker(){
    if(!picker)return;var p=picker,doc=owner(p.ownerId),active=owner(App.activeId);if(!doc){cancelPicker();return;}
    var parsed=parseRange(p.bar.querySelector('input').value,active&&active.type==='et'?active:doc);
    var error=p.bar.querySelector('[role="alert"]');if(parsed.error){error.textContent=parsed.error;error.hidden=false;return;}
    doc.doc.reconciliationRangeDraft.ranges[p.index]=parsed.reference;
    if(doc.doc.reconciliationRangeDraft.discovered)doc.doc.reconciliationRangeDraft.userEdited=true;
    cancelPicker();
    if(App.activeId!==doc.id)App.openDoc('et',doc.name);else Agent.refreshEtExpert(doc.id,false);
    var field=document.querySelector('#recon-range-'+p.index);if(field)field.focus();
  }
  function startPicker(tabId,index){
    cancelPicker();var doc=owner(tabId);if(!doc)return;
    var bar=document.createElement('section');bar.className='et-range-picker';bar.setAttribute('role','region');bar.setAttribute('aria-label','选择匹配区域');
    bar.innerHTML='<header><span>选择'+rangeLabel(index)+'</span><button type="button" class="kd-button kd-button-light kd-button-icon kd-button-m" aria-label="取消选区">'+window.icon('symbol_cross_two',16)+'</button></header><div class="et-range-picker-row"><div class="kd-input kd-input-large"><div class="kd-input-wrap"><input class="kd-input-inner" aria-label="选区地址" placeholder="在表格中选择列或区域"></div></div><button type="button" class="kd-button kd-button-primary kd-button-lg" data-confirm-range>确定</button></div><p role="alert" hidden></p>';
    picker={ownerId:tabId,index:index,bar:bar,mode:'cell',moved:false};bar.querySelector('input').value=doc.doc.reconciliationRangeDraft.ranges[index]||'';
    document.body.appendChild(bar);document.body.classList.add('is-et-range-picking');var field=document.querySelector('#recon-range-'+index);if(field)field.closest('.kd-input').classList.add('is-picking-range');
    bar.querySelector('[aria-label="取消选区"]').addEventListener('click',cancelPicker);bar.querySelector('[data-confirm-range]').addEventListener('click',finishPicker);
    bar.querySelector('input').addEventListener('input',function(){bar.querySelector('[role="alert"]').hidden=true;});
    bar.querySelector('header').addEventListener('mousedown',function(e){
      if(e.target.closest('button'))return;e.preventDefault();var r=bar.getBoundingClientRect(),dx=e.clientX-r.left,dy=e.clientY-r.top;
      function move(e){if(!picker)return;picker.moved=true;bar.style.left=Math.max(8,Math.min(innerWidth-r.width-8,e.clientX-dx))+'px';bar.style.top=Math.max(8,Math.min(innerHeight-r.height-8,e.clientY-dy))+'px';}
      function up(){document.removeEventListener('mousemove',move);document.removeEventListener('mouseup',up);}
      document.addEventListener('mousemove',move);document.addEventListener('mouseup',up);
    });positionPicker();
  }
  function readSelection(){
    if(!picker)return;var doc=owner(App.activeId);if(!doc||doc.type!=='et')return;
    var m=doc.doc,r=m.selRange||{r1:m.sel.r,r2:m.sel.r,c1:m.sel.c,c2:m.sel.c},address;
    if(picker.mode==='column')address=col(r.c1)+':'+col(r.c2);
    else if(picker.mode==='row')address=r.r1+':'+r.r2;
    else address=col(r.c1)+r.r1+(r.r1===r.r2&&r.c1===r.c2?'':':'+col(r.c2)+r.r2);
    picker.bar.querySelector('input').value=qualify(doc.name,sheetName(doc),address);picker.bar.querySelector('[role="alert"]').hidden=true;
  }
  document.addEventListener('mousedown',function(e){if(!picker||!e.target.closest('.et-grid-wrap'))return;picker.selecting=true;picker.mode=e.target.closest('th[data-c]')?'column':e.target.closest('.row-head')?'row':'cell';},true);
  document.addEventListener('mouseup',function(){if(picker&&picker.selecting){picker.selecting=false;requestAnimationFrame(readSelection);}});
  document.addEventListener('click',function(){if(picker)requestAnimationFrame(positionPicker);});
  document.addEventListener('dblclick',function(e){if(picker&&e.target.closest('.et-grid-wrap')){e.preventDefault();e.stopImmediatePropagation();}},true);
  document.addEventListener('keydown',function(e){
    if(!picker)return;
    if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();cancelPicker();return;}
    if(e.key==='Enter'){e.preventDefault();e.stopImmediatePropagation();finishPicker();return;}
    if(e.target.closest('.et-grid-wrap')&&!/^(ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Shift|Control|Alt|Meta|Tab|Home|End|PageUp|PageDown)$/.test(e.key)&&!((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='c')){e.preventDefault();e.stopImmediatePropagation();}
  },true);
  ['paste','cut','beforeinput'].forEach(function(type){document.addEventListener(type,function(e){if(picker&&e.target.closest('.et-grid-wrap')){e.preventDefault();e.stopImmediatePropagation();}},true);});
  document.addEventListener('keyup',function(e){if(picker&&e.target.closest('.et-grid-wrap')&&/^Arrow/.test(e.key)){picker.mode='cell';readSelection();}});
  window.addEventListener('resize',function(){if(picker){picker.moved=false;positionPicker();}});

  function matchingModeForRules(rules){return /只核对是否存在|只要.{0,8}存在|不要求.{0,4}唯一|无需.{0,4}唯一|允许重复/.test(rules)?'exists':'unique';}
  function addMatchingClarification(script,doc,task,draft,resolved){
    script.taskPlan.splice(1,0,'确认匹配方式');
    script.steps.forEach(function(step){if(typeof step.taskStage==='number'&&step.taskStage>=1)step.taskStage++;});
    var firstMatch=script.steps.findIndex(function(step){return step.toolName==='task_stage_2';});
    var clarification={type:'clarification',toolName:'clarify_matching',taskStage:1,
      content:'匹配规则尚未填写，请在下方确认匹配方式后继续。',question:'你希望如何匹配这些数据？',
      context:'沿用已选择的 '+resolved.length/2+' 组匹配区域。',
      options:[
        {value:'unique',label:'一对一匹配',desc:'双方字段值一致且各自唯一；重复和未匹配单独标注。',rule:'按编号一对一匹配，重复和未匹配记录单独标注。'},
        {value:'exists',label:'只核对是否存在',desc:'对方存在相同字段值即为匹配，不要求编号唯一。',rule:'按编号只核对是否存在，不要求编号唯一，标注未匹配记录。'},
        {value:'custom',label:'自定义规则',custom:true}
      ],
      onResolve:function(answer,activeScript){
        draft.rules=answer.rule;draft.matchingMode=answer.choice==='exists'?'exists':matchingModeForRules(answer.rule);
        var result=Editors.prepareDemoReconciliation(doc,{matchingMode:draft.matchingMode});
        EtTaskMemory.applyToResult(result,EtTaskMemory.get(doc,'finance-0'));
        activeScript.steps.forEach(function(step){
          if(step.action&&step.action.type==='et.reconcileDemo'){
            if(result)step.action=Object.assign({},step.action,{result:result});else delete step.action;
          }
          if(step.action&&step.action.type==='et.saveTaskMemory')step.action=Object.assign({},step.action,{preferences:Object.assign({},step.action.preferences,{matchingRules:answer.rule,matchingMode:draft.matchingMode})});
          if(step.toolName==='task_stage_2')step.content=answer.rule;
          if(result&&step.toolName==='task_stage_3')step.content='复制主表数据，追加匹配状态列，生成“'+result.sheet.name+'”工作表';
          if(result&&step.toolName==='task_stage_4')step.content='核验 '+result.sourceRows+' 条记录：能匹配 '+result.stats['能匹配']+' 条，重复 '+result.stats['重复']+' 条，不能匹配 '+result.stats['不能匹配']+' 条';
          if(step.type==='done'){
            var previous=step.report,report=EtTaskReport.create(task,result);
            if(activeScript.privacyWrapped&&previous){var privacyRow=previous.changes.find(function(row){return row[0]==='脱敏与还原';});if(privacyRow){report.changes.push(privacyRow);report.locations.push([]);}}
            step.report=report;
          }
        });
        doc.doc.lastReconciliationTask={ranges:resolved,rules:answer.rule,matchingMode:draft.matchingMode};
      }
    };
    script.steps.splice(firstMatch,0,clarification);
    script.steps[0].content='我会先检查你选择的匹配区域，再确认匹配方式，随后核对账单并整理结果。';
    script.steps[1].content='生成任务计划：检查数据后确认匹配方式，最后保存个性化设置';
  }

  function render(welcome,tabId,index){
    var doc=owner(tabId);if(!doc)return;var task=EtExperts.getFinanceTasks()[index];
    if(index===0&&window.EtReconciliationDiscovery&&EtReconciliationDiscovery.render(welcome,tabId))return;
    var memoryKey='finance-'+index, memory=EtTaskMemory.get(doc,memoryKey), preferences=memory?memory.preferences:{};
    var draft;
    if(index===0){draft=doc.doc.reconciliationRangeDraft||(doc.doc.reconciliationRangeDraft={ranges:['',''],rules:doc.doc.reconciliationDraft?doc.doc.reconciliationDraft.rules:'',memoryReadState:memory?'loading':'',privacyMode:!!preferences.privacyMode});if(draft.ranges.length%2)draft.ranges.push('');}
    else{var drafts=doc.doc.financeTaskDrafts||(doc.doc.financeTaskDrafts={});draft=drafts[index]||(drafts[index]={instruction:preferences.instruction||task.prompt});}
    if(index===0&&typeof draft.privacyMode!=='boolean')draft.privacyMode=!!preferences.privacyMode;
    var discovered=index===0&&draft.discovered;
    welcome.classList.toggle('is-agent-first',!!discovered);
    welcome.classList.remove('is-record-welcome');welcome.classList.add('is-expert-welcome','is-reconciliation-welcome');
    var content=index===0?'<section class="recon-section"><h4>1. 选择匹配区域</h4><p class="recon-rules-help">每组中的两个区域相互匹配。</p><div class="recon-ranges"></div><button type="button" class="kd-button kd-button-light kd-button-lg recon-add" data-add-range>'+window.icon('insert',16)+'<span>添加匹配区域</span></button></section><section class="recon-section"><h4><label for="recon-rules">2. 匹配规则</label></h4><p class="recon-rules-help" id="recon-rules-help">可填写匹配方式；留空时，我会在执行中向你确认。</p><div class="kd-textarea"><textarea id="recon-rules" name="rules" class="kd-textarea-inner" rows="4" aria-describedby="recon-rules-help" placeholder="例如：按编号匹配，重复和未匹配记录单独标注">'+esc(draft.rules)+'</textarea></div></section>':'<section class="recon-section"><h4><label for="recon-instruction">任务要求</label></h4><div class="kd-textarea"><textarea id="recon-instruction" name="instruction" class="kd-textarea-inner" rows="9">'+esc(draft.instruction)+'</textarea></div></section>';
    var privacy=index===0?'<div class="recon-privacy"><!-- [Checkbox: unchecked] --><label class="kd-checkbox"><span class="kd-checkbox-input'+(draft.privacyMode?' is-checked':'')+'"><span class="kd-checkbox-inner"></span><input type="checkbox" class="kd-checkbox-original" name="privacyMode" aria-describedby="recon-privacy-help"'+(draft.privacyMode?' checked':'')+'></span><span class="kd-checkbox-label">脱敏模式</span></label><!-- [Tooltip: top] --><span class="kd-tooltip kd-tooltip-top recon-privacy-help"><button type="button" class="recon-privacy-help-trigger" aria-label="了解脱敏模式" aria-describedby="recon-privacy-help">'+window.icon('question')+'</button><span class="kd-tooltip-content" id="recon-privacy-help" role="tooltip"><span class="recon-privacy-tip">每轮先对副本中的非匹配文字打码，核验后还原结果，并记住此偏好。</span><span class="kd-tooltip-arrow"></span></span></span></div>':'';
    if(discovered){
      var source=draft.discovery.candidate, discoveryState=doc.doc.reconciliationDiscovery;
      var facts='已读取 2 张表 · '+(source.main.rows+source.other.rows)+' 条记录';
      content='<p class="recon-proposal-intro" role="status">我推测你想按业务编号核对两张账单。</p><p class="recon-proposal-evidence">'+esc(facts)+'</p>'+(discoveryState&&discoveryState.usedMemory?'<p class="recon-proposal-evidence">已沿用上次确认的匹配字段和执行偏好。</p>':'')+'<section class="recon-section"><div class="recon-section-heading"><h4>匹配字段</h4><button type="button" class="kd-button kd-button-light kd-button-lg" data-edit-proposal aria-expanded="'+String(!!draft.reviewEditing)+'">'+(draft.reviewEditing?'完成调整':'调整方案')+'</button></div><div class="recon-ranges"></div></section><section class="recon-section"><h4>匹配规则</h4><div class="recon-mode-options"'+(draft.reviewEditing?'':' hidden')+'>'+['unique','exists'].map(function(mode){return '<label class="kd-radio"><span class="kd-radio-input'+(draft.matchingMode===mode?' is-checked':'')+'"><span class="kd-radio-inner"></span><input type="radio" class="kd-radio-original" name="matchingMode" value="'+mode+'"'+(draft.matchingMode===mode?' checked':'')+'></span><span class="kd-radio-label">'+(mode==='unique'?'一对一匹配':'核对是否存在')+'</span></label>';}).join('')+'</div><p id="recon-rules" class="recon-proposed-rules"></p><details class="recon-analysis-evidence"><summary>查看分析依据</summary><p class="recon-proposal-evidence" data-discovery-diagnostics></p></details></section><section class="recon-section"><h4>结果输出</h4><p data-proposal-output>新增结果表并标注匹配状态，保留原表。</p><p class="recon-proposal-evidence">金额与币种暂不参与本轮匹配。</p></section>';
      privacy='<h4 class="recon-privacy-question">需要脱敏后执行吗？</h4><p class="recon-proposal-evidence">脱敏时在副本中对非匹配文字打码，完成后还原结果。</p><div class="recon-execution-choices"><button type="submit" class="kd-button kd-button-primary kd-button-lg" data-privacy-choice="true">脱敏并开始对账</button><button type="submit" class="kd-button kd-button-secondary kd-button-lg" data-privacy-choice="false">直接开始对账</button></div>';
    }
    var actions=['确认并发起对账','确认并开始分析','确认并生成凭证','确认并登记入账'];
    welcome.innerHTML=EtExperts.welcomeHeader(tabId)+(discovered?'<div class="ag-try">我整理好了对账方案，请你确认</div>':'<div class="ag-try">需要我帮你做这些工作吗？</div>')+'<section class="recon-task'+(discovered?' is-proposal':'')+(discovered&&draft.reviewEditing?' is-editing':'')+'" aria-label="'+esc(task.title)+'"><header class="ag-card ag-capability-card ag-finance-task recon-heading"><div class="recon-title-line"><button type="button" class="recon-heading-title" aria-expanded="true" data-recon-back><span class="ag-card-title">'+esc(task.title)+'</span></button><button type="button" class="recon-memory-read" aria-label="查看任务记忆" hidden></button><button type="button" class="et-task-toggle" aria-expanded="true" aria-label="收起任务" data-recon-back>'+window.icon('arrow_up_s',16)+'</button></div><span class="ag-card-desc">'+esc(task.desc)+'</span></header><form class="recon-form" novalidate><div class="recon-fields">'+content+'</div><footer class="recon-footer">'+privacy+'<p class="recon-error" role="alert" hidden></p>'+(discovered?'':'<button type="submit" class="kd-button kd-button-primary kd-button-xl recon-submit">'+actions[index]+'</button>')+'</footer></form></section>';
    var form=welcome.querySelector('form'),error=form.querySelector('.recon-error');
    if(index===0&&!discovered){
      draft.memoryReadForm=form; draft.memoryReadStatus=welcome.querySelector('.recon-memory-read');
      function paintMemoryRead(){
        var currentForm=draft.memoryReadForm,status=draft.memoryReadStatus;
        if(!currentForm||!currentForm.isConnected)return;
        var loading=draft.memoryReadState==='loading';
        status.hidden=!draft.memoryReadState;status.disabled=loading;status.innerHTML='<span class="ag-memory-icon" aria-hidden="true">'+EtTaskMemory.iconHTML()+'</span><span role="status" aria-live="polite">'+(loading?'读取记忆':'已读取记忆')+'</span>';status.classList.toggle('is-loading',loading);
        currentForm.elements.rules.readOnly=loading;currentForm.elements.privacyMode.disabled=loading;currentForm.elements.privacyMode.closest('.kd-checkbox').classList.toggle('is-disabled',loading);currentForm.elements.privacyMode.closest('.kd-checkbox-input').classList.toggle('is-disabled',loading);currentForm.querySelector('[type="submit"]').disabled=loading;
        if(draft.memoryReadState==='loaded'){currentForm.elements.rules.value=draft.rules;currentForm.elements.privacyMode.checked=draft.privacyMode;currentForm.elements.privacyMode.closest('.kd-checkbox-input').classList.toggle('is-checked',draft.privacyMode);}
      }
      paintMemoryRead();
      if(draft.memoryReadState==='loading'&&!draft.memoryReadStarted){
        draft.memoryReadStarted=true;
        setTimeout(function(){
          draft.rules=EtTaskMemory.rulesForCard(memory);draft.privacyMode=!!preferences.privacyMode;
          var restored=EtTaskMemory.rangesForCard(doc,memory);if(restored)draft.ranges=restored;
          draft.memoryReadState='loaded';
          if(draft.memoryReadForm&&draft.memoryReadForm.isConnected)ranges();
          paintMemoryRead();
        },1200);
      }
    }
    function clearError(){error.hidden=true;form.querySelectorAll('[aria-invalid]').forEach(function(e){e.removeAttribute('aria-invalid');e.closest('.kd-input, .kd-textarea').classList.remove('kd-input-status-error','kd-textarea-status-error');});}
    function fail(message,input){error.textContent=message;error.hidden=false;if(input){input.setAttribute('aria-invalid','true');var w=input.closest('.kd-input, .kd-textarea');w.classList.add(w.classList.contains('kd-input')?'kd-input-status-error':'kd-textarea-status-error');input.focus();}}
    function ranges(){
      var groups=[];
      for(var start=0;start<draft.ranges.length;start+=2){
        var group=start/2+1,rows='';
        for(var i=start;i<start+2;i++){
          var value=draft.ranges[i];
          rows+='<div class="recon-range-row"><label for="recon-range-'+i+'">'+(discovered?(i%2?'参照表':'主表'):'区域'+(i%2+1))+'</label><div class="kd-input kd-input-large"><div class="kd-input-wrap"><input id="recon-range-'+i+'" class="kd-input-inner" data-range="'+i+'" aria-label="'+rangeLabel(i)+'" value="'+esc(displayReference(value,doc))+'" title="'+esc(value)+'" placeholder="选择列或区域"'+(discovered&&!draft.reviewEditing?' readonly':'')+'><button type="button" class="kd-input-icon" data-pick-range="'+i+'" aria-label="选择'+rangeLabel(i)+'"><img src="assets/et-experts/select_area.svg" alt="" width="16" height="16"></button></div></div></div>';
        }
        groups.push('<section class="recon-range-group" aria-labelledby="recon-group-'+group+'"><header class="recon-group-heading"><h5 id="recon-group-'+group+'">'+(discovered?esc(EtReconciliationDiscovery.describe(doc,draft.ranges[start])+' ↔ '+EtReconciliationDiscovery.describe(doc,draft.ranges[start+1])):'组'+group)+'</h5>'+(draft.ranges.length>2?'<button type="button" class="kd-button kd-button-light kd-button-sm" data-remove-group="'+start+'" aria-label="删除组'+group+'">删除</button>':'')+'</header>'+rows+'</section>');
      }
      (discovered?form:(draft.memoryReadForm||form)).querySelector('.recon-ranges').innerHTML=groups.join('');
    }
    if(index===0){ranges();if(picker&&picker.ownerId===tabId){var activeInput=form.querySelector('#recon-range-'+picker.index);if(activeInput)activeInput.closest('.kd-input').classList.add('is-picking-range');}}
    function paintProposal(){
      if(!discovered)return;
      var left=EtReconciliationDiscovery.describe(doc,draft.ranges[0])||'主表字段',right=EtReconciliationDiscovery.describe(doc,draft.ranges[1])||'参照表字段';
      draft.rules=EtReconciliationDiscovery.rules(left,right,draft.matchingMode);
      form.querySelector('.recon-proposed-rules').textContent=draft.rules;
      form.querySelector('.recon-group-heading h5').textContent=left+' ↔ '+right;
      var source=draft.discovery.candidate;
      form.querySelector('[data-discovery-diagnostics]').textContent=draft.userEdited?'已调整方案，将按当前字段和规则执行。':source.main.name+' '+source.main.rows+' 条，'+source.other.name+' '+source.other.rows+' 条；重复编号记录分别为 '+source.left.duplicates+'、'+source.right.duplicates+' 条，两侧共有 '+source.overlap+' 个相同编号。'+(draft.discovery.ambiguous?'多组字段可能对应，请确认建议。':'该对应关系是根据表头和编号重合情况推测的，待你确认。');
      var output=form.querySelector('[data-proposal-output]');
      if(output)output.textContent='新增结果表并标注匹配状态，保留原表。';
    }
    paintProposal();
    if(discovered&&draft.memoryReadState==='loaded'){
      var memoryButton=welcome.querySelector('.recon-memory-read');memoryButton.hidden=false;memoryButton.textContent='已读取记忆';
    }
    welcome.querySelector('.recon-heading').addEventListener('click',function(event){
      if(event.target.closest('.recon-memory-read')){if(draft.memoryReadState==='loaded')EtTaskMemory.open(tabId,memoryKey);return;}
      cancelPicker();Agent.closeEtReconciliation(tabId);
    });
    form.addEventListener('input',function(e){if(e.target.hasAttribute('data-range'))draft.ranges[Number(e.target.dataset.range)]=e.target.value;else if(e.target.name)draft[e.target.name]=e.target.type==='checkbox'?e.target.checked:e.target.value;if(discovered){draft.userEdited=true;paintProposal();}clearError();});
    form.addEventListener('change',function(e){if(discovered&&e.target.name==='matchingMode'){draft.matchingMode=e.target.value;draft.userEdited=true;paintProposal();}});
    form.addEventListener('focusin',function(e){if(e.target.name==='privacyMode')e.target.closest('.kd-checkbox-input').classList.toggle('is-keyboard-focus',e.target.matches(':focus-visible'));});
    form.addEventListener('focusout',function(e){if(e.target.name==='privacyMode')e.target.closest('.kd-checkbox-input').classList.remove('is-keyboard-focus');});
    form.addEventListener('mousedown',function(){var checkbox=form.querySelector('.kd-checkbox-input');if(checkbox)checkbox.classList.remove('is-keyboard-focus');});
    form.addEventListener('focusout',function(e){if(!e.target.hasAttribute('data-range'))return;var parsed=parseRange(e.target.value,doc);if(!parsed.error){var i=Number(e.target.dataset.range);draft.ranges[i]=parsed.reference;e.target.value=displayReference(parsed.reference,doc);e.target.title=parsed.reference;}});
    form.addEventListener('click',function(e){
      if(e.target.closest('[data-edit-proposal]')){draft.reviewEditing=!draft.reviewEditing;cancelPicker();render(welcome,tabId,index);var edit=welcome.querySelector('[data-edit-proposal]');if(edit)edit.focus({preventScroll:true});return;}
      var pick=e.target.closest('[data-pick-range]');if(pick){startPicker(tabId,Number(pick.dataset.pickRange));return;}
      if(e.target.closest('[data-add-range]')){cancelPicker();draft.ranges.push('','');ranges();clearError();form.querySelector('#recon-range-'+(draft.ranges.length-2)).focus();}
      var remove=e.target.closest('[data-remove-group]');if(remove&&draft.ranges.length>2){cancelPicker();var removed=Number(remove.dataset.removeGroup);draft.ranges.splice(removed,2);ranges();clearError();form.querySelector('#recon-range-'+Math.min(removed,draft.ranges.length-2)).focus();}
    });
    form.addEventListener('submit',function(e){
      e.preventDefault();if(draft.memoryReadState==='loading')return;cancelPicker();clearError();var text,resolved=[];
      if(discovered){var choice=e.submitter&&e.submitter.getAttribute('data-privacy-choice');if(choice==null)return fail('请选择脱敏执行或直接执行。');draft.privacyMode=choice==='true';paintProposal();}
      if(index===0){
        var seen={};for(var i=0;i<draft.ranges.length;i++){var input=form.querySelector('#recon-range-'+i);if(!draft.ranges[i].trim())return fail('请选择'+rangeLabel(i)+'。',input);var parsed=parseRange(draft.ranges[i],doc);if(parsed.error)return fail(rangeLabel(i)+'：'+parsed.error,input);var identity=parsed.reference.toLowerCase();if(seen[identity])return fail(rangeLabel(i)+' 与其他区域重复。',input);seen[identity]=true;resolved.push(parsed);}
        text='请发起账单勾稽核对。\n\n匹配区域（每组中的两个区域相互匹配）：\n'+resolved.map(function(r,i){return (i%2===0?(i?'\n':'')+'组'+(i/2+1)+'\n':'')+'区域'+(i%2+1)+'：'+r.reference;}).join('\n')+'\n\n匹配规则：\n'+(draft.rules.trim()||'待确认');
      }else{if(!draft.instruction.trim())return fail('请填写任务要求。',form.elements.instruction);text=task.title+'\n\n'+draft.instruction.trim();}
      var plans=[
        ['读取并检查数据','按规则匹配账单','整理匹配结果与差异','核验计算与结果'],
        ['确认数据与比较口径','计算并拆解差异','整理差异原因','核验差额与汇总'],
        ['检查账单与凭证模板','映射字段与整理明细','批量填制凭证','核验凭证与金额'],
        ['提取并检查单据信息','检查重复与字段对应','登记台账明细','核验入账记录与金额']
      ];
      var understandings=[
        '我会按你填写的规则核对这 '+resolved.length/2+' 组匹配区域，整理匹配结果与差异，最后核验记录和金额的一致性。',
        '我会先对齐比较口径，逐项拆解差异并整理原因，最后复核差额与汇总结果。',
        '我会按你提供的模板整理账单，批量填制凭证或提单，最后核验字段、金额与来源的对应关系。',
        '我会先提取单据信息并检查重复与缺失，再按台账字段登记明细，最后复核入账记录与金额。'
      ];
      var details=[
        ['检查匹配区域中的字段、空值及日期与金额格式','按填写的匹配规则逐项关联，处理重复记录与未匹配项','整理已匹配明细、未匹配记录与金额差异清单','逐项复核匹配关系、记录数量及金额汇总的一致性'],
        ['检查比较数据与期间，确认预算或实际等比较口径','计算差额与差异率，按字段和业务维度拆解差异','整理差异明细与待确认原因，形成分析结果','复核明细差额、差异率与汇总结果的计算关系'],
        ['检查账单字段、模板结构与必填信息是否齐全','按模板建立字段对应关系，整理凭证所需明细','按单据或业务编号逐份填制模板并整理凭证清单','复核凭证必填项、借贷金额及与来源账单的对应关系'],
        ['提取单据编号、日期、往来单位与金额等信息','检查单据重复与缺失信息，确认台账字段对应关系','按台账字段整理并登记单据明细，标明来源','复核入账记录、原始单据及金额汇总的一致性']
      ];
      if(index===0){if(!discovered)draft.privacyMode=form.elements.privacyMode.checked;text+='\n\n脱敏模式：'+(draft.privacyMode?'开启':'关闭');}
      if(discovered){
        if(resolved.length!==2||resolved.some(function(ref){return ref.book!==doc.name;}))return fail('当前方案需要当前工作簿中两张表各一个匹配字段。');
        for(var ri=0;ri<resolved.length;ri++){
          var ref=resolved[ri],sheet=doc.doc.sheets.find(function(item){return item.name===ref.sheet;}),range=ref.address.match(/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/),whole=ref.address.match(/^([A-Z]+):([A-Z]+)$/);
          var last=Object.keys(sheet.cells).reduce(function(n,a){return sheet.cells[a]==null||sheet.cells[a]===''?n:Math.max(n,Number(a.match(/\d+$/)[0]));},1);
          if(!(range&&range[1]===range[3]&&Number(range[2])===2&&Number(range[4])===last)&&!(whole&&whole[1]===whole[2]))return fail('请保留完整的单列明细范围，或选择整列。',form.querySelector('#recon-range-'+ri));
        }
      }
      var demoResult=index===0&&Editors.prepareDemoReconciliation(doc,{matchingMode:discovered?draft.matchingMode:matchingModeForRules(draft.rules),references:discovered?resolved:null});
      if(discovered&&!demoResult)return fail('匹配字段已经变化，请重新分析当前表格后再执行。');
      EtTaskMemory.applyToResult(demoResult,EtTaskMemory.get(doc,memoryKey));
      if(demoResult){
        understandings[0]='我会按你确认的方案核对 '+demoResult.keyLabels.join(' 与 ')+'。'+(demoResult.matchingMode==='exists'?'对方有相同编号即为匹配，不要求编号唯一。':'双方唯一为能匹配，任一侧重复为重复，无对应编号为不能匹配。')+'结果保存在新工作表。';
        details[0]=['读取 '+demoResult.keyLabels.join(' 和 ')+'，检查编号与记录数量',demoResult.matchingMode==='exists'?'按编号核对是否存在，标注未匹配记录，不单独判定重复异常':'按编号匹配规则检查两侧的唯一、重复和未匹配记录','复制主表数据，追加匹配状态列，生成“'+demoResult.sheet.name+'”工作表','核验主表 '+demoResult.sourceRows+' 条记录与结果一致：能匹配 '+demoResult.stats['能匹配']+' 条，重复 '+demoResult.stats['重复']+' 条，不能匹配 '+demoResult.stats['不能匹配']+' 条'];
      }
      plans[index].push('保存个性化设置');
      details[index].push('将本次的处理要求保存到“'+task.title+'”，供下次执行沿用');
      var memoryPatch=index===0?{privacyMode:draft.privacyMode,matchingMode:discovered?draft.matchingMode:matchingModeForRules(draft.rules),matchingRules:draft.rules.trim(),rangeFields:EtTaskMemory.captureRangeFields(doc,resolved),resultOutput:'在新工作表中新增“匹配状态”列，标注能匹配、重复和未匹配记录。'}:{instruction:draft.instruction.trim()};
      var script={taskTitle:task.title,memoryTaskKey:memoryKey,taskPlan:plans[index],steps:[
        {type:'understanding',keepVisible:true,content:understandings[index]},
        {type:'tool_call',toolName:'plan_task',planTask:true,content:'根据任务要求生成五个阶段的计划，最后保存个性化设置'}
      ]};
      plans[index].forEach(function(title,i){var step={type:'tool_call',toolName:'task_stage_'+(i+1),taskStage:i,content:details[index][i]};if(demoResult&&i===2)step.action={type:'et.reconcileDemo',result:demoResult};if(title==='保存个性化设置')step.action={type:'et.saveTaskMemory',taskKey:memoryKey,taskName:task.title,preferences:memoryPatch};script.steps.push(step);});
      script.steps.push({type:'done',content:demoResult?'任务完成，执行报告如下。':'任务计划已整理，执行报告如下。',report:EtTaskReport.create(task,demoResult)});
      if(index===0){script.privacyMode=draft.privacyMode;if(!demoResult)script.privacySources=resolved.map(function(ref){var match=ref.address.match(/^([A-Z]+)(?::|[0-9])/),end=ref.address.match(/:([A-Z]+)/),columns=[];if(match){var first=colNumber(match[1])-1,last=end?colNumber(end[1])-1:first;for(var c=first;c<=last;c++)columns.push(col(c));}return {book:ref.book,sheet:ref.sheet,columns:columns};});}
      if(index===0&&!draft.rules.trim())addMatchingClarification(script,doc,task,draft,resolved);
      if(Agent.submitEtReconciliation(tabId,text,script)&&index===0)doc.doc.lastReconciliationTask={ranges:resolved,rules:draft.rules};
    });
  }
  window.EtReconciliation={render:render,cancelPicker:cancelPicker,addMatchingClarification:addMatchingClarification};
})();

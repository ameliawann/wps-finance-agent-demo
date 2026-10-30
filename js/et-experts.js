/* 文档级助手演示。方案为全局演示偏好，当前助手跟随各文档保存。 */
(function () {
  'use strict';
  var experts = [
    {id:'business',name:'经营分析助手',role:'把业务数据变成经营判断',desc:'围绕销售、成本和利润梳理关键指标，比较业务表现，定位变化与异常，帮助你形成可汇报的分析结论。',tags:['指标拆解','经营复盘','趋势分析'],scene:'销售台账、经营月报、渠道与产品分析',skills:['按时间、地区、产品等维度汇总核心指标','对比目标与实际，拆解增长、下滑和异常','整理关键发现，形成经营复盘要点'],prompts:['按产品分析本月销售额与毛利，找出值得关注的变化','对比各区域目标完成率，整理三条经营建议']},
    {id:'finance',name:'财务报表助手',role:'从账单核对到凭证与台账入账',desc:'核对两份账单、定位差异明细，按你提供的模板批量生成凭证或提单，并将原始单据登记到台账。',tags:['账单对账','差异分析','制证入账'],scene:'渠道与网关对账单、银行流水与回单、预算执行表、凭证模板与记账台账',skills:['按业务字段一对一核对账单，列出匹配与未匹配记录','逐项拆解账务差异，分析预算与实际的执行偏差','按给定模板批量填制凭证或提单，保留来源关联','提取原始单据信息，核对后登记到指定记账台账'],prompts:[]},
    {id:'clean',name:'数据清洗助手',role:'先把杂乱数据整理可靠',desc:'从重复、缺失、格式不一致等常见问题入手，帮助统一数据口径，为后续计算与分析准备整洁的数据。',tags:['去重补全','格式统一','拆分提取'],scene:'导出明细、客户名单、跨来源合并的数据',skills:['识别重复、空值和格式不一致的字段','按规则拆分、提取或合并文本字段','给出清洗规则与待确认的异常记录'],prompts:['检查这份客户名单的重复手机号，统一日期格式','将地址拆成省市区，并列出无法识别的记录']},
    {id:'visual',name:'图表可视化助手',role:'让数据重点一眼可见',desc:'根据比较、趋势和构成等表达目标选择图表，整理标题、标注和排版，帮助读者快速理解数据重点。',tags:['选图建议','图表制作','视觉表达'],scene:'汇报图表、经营看板、季度复盘与分析报告',skills:['根据数据结构和表达目的推荐图表','制作对比、趋势或构成图并突出重点','统一图表标题、配色与数字展示格式'],prompts:['用合适的图表展示各渠道销售占比，并突出前三名','把月度收入和利润做成便于汇报的组合图']},
    {id:'hr',name:'人事薪酬助手',role:'把人员与薪酬数据理清楚',desc:'围绕人员台账、考勤和薪酬明细进行整理与汇总，帮助核对规则、检查差异并形成清晰的人事报表。',tags:['人员统计','考勤汇总','薪酬核对'],scene:'员工花名册、考勤明细、薪酬台账',skills:['按部门与岗位汇总人员结构和变动','按明确规则汇总考勤与薪酬字段','检查缺失、重复和需要人工确认的差异'],prompts:['按部门汇总员工人数，标出缺少入职日期的记录','按给定规则汇总本月考勤，并列出异常明细']},
    {id:'project',name:'项目管理助手',role:'让进度、成本和风险有据可查',desc:'把项目计划、任务进度和预算数据联系起来，整理延期、超支与资源安排，帮助团队持续跟进项目。',tags:['进度跟踪','预算对比','风险识别'],scene:'项目台账、任务清单、预算与工时明细',skills:['按项目与负责人汇总任务进度','比较计划与实际日期、预算和工时','整理逾期事项、风险和下一步跟进行动'],prompts:['找出本周逾期任务，按负责人整理跟进清单','对比各项目预算和实际支出，标出超支项目']}
  ];
  var extraTasks = {
    business: [['看销售趋势','按月汇总销售额，找出增长或下滑明显的月份'],['检查目标达成','按地区比较销售目标与实际完成情况，列出重点问题']],
    clean: [['处理缺失信息','检查表格中的空值，列出需要补充的字段和记录'],['整理杂乱文本','清理文本中的多余空格和换行，统一数据格式']],
    visual: [['比较产品表现','生成柱状图，比较各产品的销售额'],['推荐合适图表','根据数据结构推荐图表，突出最值得关注的信息']],
    hr: [['整理人员结构','按部门和岗位统计员工人数，形成结构汇总'],['检查人事台账','检查员工编号重复和关键信息缺失，列出待核对记录']],
    project: [['汇总任务进度','按项目和负责人汇总任务完成情况'],['整理项目风险','汇总延期、超支和资源冲突，形成跟进清单']]
  };
  var taskTitles = {
    business:['分析销售与毛利','比较目标完成率'],
    clean:['检查客户名单','拆分地址信息'], visual:['展示渠道占比','制作收入利润图'],
    hr:['汇总人员信息','汇总考勤异常'], project:['跟进逾期任务','检查预算超支']
  };
  // 卡片使用简短说明，点击后回填可编辑的完整任务要求。
  // 财务任务属于助手配置，所有表格文档共用，不依赖演示文件名。
  var financeTasks = [
    {
      title:'核对账单明细',
      desc:'我先分析表格，再帮你核对匹配和异常',
      prompt:'请帮我核对两份账单，输出匹配明细、未匹配项和金额差异。如果当前工作簿包含渠道对账单和网关对账单，请按渠道、地区、MerchantId、币种和借贷金额进行一对一匹配，每笔记录只能使用一次。优先匹配 BillDate 同一天的记录，同日同金额按原行序逐笔配对；剩余同金额记录按日期先后配对，跨日匹配范围先与我确认。ReconciliationId 比较时忽略大小写，将匹配到的网关 reconciliationid 回填到渠道 ReconciliationId。若配对后同一个 ID 重复出现，第 2 次追加 -1、第 3 次追加 -2，依次递增，并在渠道与网关两表同步更新；编号前先确认重复 ID 的计数范围，检查新 ID 是否冲突。沿用 CIMB 参照逻辑，如参照未提供或存在歧义，请先列出待确认规则。缺少或标注为推测的匹配字段需先核实；先展示匹配和双表 ID 变更预览，确认后再写回。若为银行流水与回单，请核对流水对应回单是否齐全，列出缺失回单。'
    },
    {
      title:'分析账务差异',
      desc:'我来定位差异、梳理线索，整理复核清单',
      prompt:'请分析两份账单的差异，若已有对账结果请直接沿用。逐笔列出差异记录、来源表和行号、差异字段、双方原值、差额及待核查原因，区分单边缺失、金额不符、日期不符、商户或渠道不符、重复记录和 ID 不一致；原因判断需给出数据依据，无法确定的标为待核实。如果提供的是预算与实际数据，请按期间、部门和费用项目对齐，计算差异额（实际减预算）、差异率和预算执行率，预算为零时单独标记，拆解主要偏差项目；未提供的原因信息不要推断为事实。输出差异明细、分类汇总与复核建议。'
    },
    {
      title:'批量填制凭证',
      desc:'我先按模板做一份样张，确认后再批量生成',
      prompt:'请按我提供的凭证模板（或提单模板），将账单记录批量填入并生成多份凭证或提单。先核对账单、模板、字段映射，以及逐笔生成还是按日期或收付对象合并的规则；缺少模板或规则时请先向我索取。按模板填写日期、摘要、收付对象、金额及所需字段，保留每份结果与来源记录的对应关系。记账凭证的会计科目和借贷方向以我提供的规则为准，检查借贷平衡、必填项和重复制单；缺失或不确定的内容列为待补充，先给出一份样张供确认，再批量生成。'
    },
    {
      title:'登记单据入账',
      desc:'我来提取回单、发票信息，核对后登记台账',
      prompt:'请将我提供的银行回单、发票或其他原始单据，录入指定的台账记账表。先识别日期、单据编号、收付对象、摘要、金额、收支方向和所需科目，按现有台账字段映射，检查缺失字段及重复单据。若有多份银行回单，先合并整理并按收付类别、时间排序；保留原始单据关联，便于与银行流水核查。先展示待入账明细及拟追加位置，无法识别的内容列为待确认，核对后追加到台账并给出录入结果。'
    }
  ];
  var mode='transition', root=null, tab=null, originalContent='', normalMode='', menu=null, anchor=null, previewId='', menuSource='ribbon';
  try { if(localStorage.getItem('wps-ai-edit.et.expert-scheme')==='final')mode='final'; } catch(e){}
  if (/(?:[&#])expert=final(?:&|$)/.test(location.hash)) mode='final';
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function find(id){return experts.find(function(e){return e.id===id;})||experts[0];}
  function documentById(id){return window.App&&App.tabs.find(function(t){return t.id===id;});}
  function ensureDocument(doc){
    if(!doc.doc.aiRecommendedExpertId){
      var name=doc.name||doc.title||'';
      doc.doc.aiRecommendedExpertId=/薪酬|考勤|员工|人事/.test(name)?'hr':/财务|费用|账|收支/.test(name)?'finance':/项目|任务|进度/.test(name)?'project':/清洗|名单/.test(name)?'clean':'business';
    }
    if(!doc.doc.aiExpertId)doc.doc.aiExpertId=doc.doc.aiRecommendedExpertId;
    return find(doc.doc.aiExpertId);
  }
  function active(){return ensureDocument(tab);}
  function portrait(e,size){return '<span class="et-expert-avatar et-expert-avatar-'+e.id+' '+(size||'')+'" role="img" aria-label="'+e.name+'头像"></span>';}
  function arrow(){return window.icon('arrow_down_s',12);}
  function mainButton(e,composer){return '<button type="button" class="'+(composer?'et-expert-composer-main':'rb-large-split-main')+'" data-et-ai-capability="assistant" aria-label="打开'+e.name+'" title="打开灵犀">'+(composer?portrait(e,'is-small')+'<span>'+e.name+'</span>':'<span class="rb-large-icon">'+portrait(e)+'</span>')+'</button>';}
  function triggerButton(e,composer){return '<button type="button" class="'+(composer?'et-expert-composer-menu':'rb-large-split-menu')+'" data-et-expert-trigger="'+(composer?'composer':'ribbon')+'" aria-label="'+(composer?'输入框':'功能区')+'助手库：'+e.name+'" aria-haspopup="menu" aria-expanded="false" aria-controls="et-expert-menu">'+(composer?portrait(e,'is-small')+'<span>'+e.name+'</span>'+arrow():'<span class="rb-large-label">'+e.name+arrow()+'</span>')+'</button>';}
  var dashboardIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" requiredCustomFeatures=\"data-kd-color-scheme\" km_stroke-width=\"1\" km_darkmode=\"true\"><desc>看板视图</desc><style>\n    .kd-stroke-width-icon-regular { \n       stroke-width: var(--kd-stroke-width-icon-regular, 1px)\n    }\n    .kd-color-icon-primary {\n       fill: var(--kd-color-icon-primary, #333333);\n       stroke: var(--kd-color-icon-primary, #333333);\n       km_fill: #333333;\n       km_stroke: #333333;\n       km_darkmode_fill: #C7C7C7;\n       km_darkmode_stroke: #C7C7C7; \n    }</style><g id=\"et-dashboard-group-0\" class=\"kd-color-icon-primary kd-stroke-width-icon-regular\"><path id=\"et-dashboard-line\" d=\"M1.5 2C1.5 1.72386 1.72386 1.5 2 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V2Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"et-dashboard-line_2\" d=\"M9.5 4C9.5 3.72386 9.72386 3.5 10 3.5H12C12.2761 3.5 12.5 3.72386 12.5 4V9C12.5 9.27614 12.2761 9.5 12 9.5H10C9.72386 9.5 9.5 9.27614 9.5 9V4Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/><path id=\"et-dashboard-line_3\" d=\"M3.5 4C3.5 3.72386 3.72386 3.5 4 3.5H6C6.27614 3.5 6.5 3.72386 6.5 4V12C6.5 12.2761 6.27614 12.5 6 12.5H4C3.72386 12.5 3.5 12.2761 3.5 12V4Z\" fill=\"none\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"round\"/></g></svg>";
  function presentationSubButton(html){
    var holder=document.createElement('div');holder.innerHTML=html;
    var button=holder.firstElementChild;button.className='rb-tool rb-menu has-label';
    var icon=button.querySelector('.rb-icon');icon.className='rb-icon rb-icon-16';
    var wrapper=button.querySelector('.rb-large-icon');if(wrapper)wrapper.replaceWith(icon);
    button.querySelector('.rb-large-label').className='rb-tool-label';
    return button.outerHTML;
  }
  function renderDashboardEntry(){
    var group=root.querySelector('[aria-label="数据呈现"]');if(!group)return;
    if(!root.etPresentation){
      root.etPresentation={
        chart:group.querySelector('[data-et-ai-capability="chart"]').outerHTML,
        beautify:group.querySelector('[data-et-ai-capability="beautify"]').outerHTML,
        format:group.querySelector('[data-et-format-entry]').innerHTML
      };
    }
    var saved=root.etPresentation;
    var proofread=root.querySelector('[data-et-proofread-entry], [data-et-ai-capability="proofread"]');
    if(proofread){
      proofread.setAttribute('data-et-proofread-entry','');
      if(!proofread.etProofreadHTML)proofread.etProofreadHTML=proofread.innerHTML;
      proofread.setAttribute('aria-label',mode==='final'?'AI 数据校对':'AI 格式设置');
      if(mode==='final'){proofread.setAttribute('data-et-ai-capability','proofread');proofread.innerHTML=proofread.etProofreadHTML;}
      else{proofread.removeAttribute('data-et-ai-capability');proofread.innerHTML=saved.format;}
    }
    var content=group.querySelector('.rb-group-content');
    if(mode==='transition'){content.innerHTML=saved.chart+saved.beautify;return;}
    var dashboard='<button type="button" class="rb-large" aria-label="AI 数据看板" data-et-ai-capability="dashboard"><span class="rb-large-icon"><span class="rb-icon rb-icon-24" aria-hidden="true">'+dashboardIcon+'</span></span><span class="rb-large-label">AI 数据看板</span></button>';
    content.innerHTML=dashboard+'<div class="rb-stack">'+presentationSubButton(saved.chart)+presentationSubButton(saved.beautify)+'</div>';
  }
  function renderEntry(){
    if(!root||!tab)return;
    renderDashboardEntry();
    var group=root.querySelector('.rb-et-assistant');if(!group)return;
    var content=group.querySelector('.rb-group-content');
    if(mode==='transition'){content.innerHTML=originalContent;group.querySelector('.rb-group-label').textContent='智能助手';}
    else{var e=active();content.innerHTML='<div class="rb-large-split rb-et-expert-split" role="group" aria-label="'+e.name+'">'+mainButton(e,false)+triggerButton(e,false)+'</div>';group.querySelector('.rb-group-label').textContent='智能助手';}
    root.querySelectorAll('.rb-et-ai button[title], .rb-et-ai-menu button[title]').forEach(function(button){button.removeAttribute('title');});
    root.querySelectorAll('[data-expert-scheme]').forEach(function(btn){var on=btn.getAttribute('data-expert-scheme')===mode;btn.classList.toggle('is-active',on);btn.setAttribute('aria-pressed',String(on));});
  }
  function renderComposer(aside,doc){
    if(!aside)return;
    var old=aside.querySelector('.et-expert-composer, .ag-mode');if(!old)return;
    if(mode==='transition'){
      if(old.classList.contains('et-expert-composer')){var t=document.createElement('template');t.innerHTML=normalMode;old.replaceWith(t.content.firstChild);}
      return;
    }
    var e=ensureDocument(doc),box=document.createElement('div');box.className='et-expert-composer';box.setAttribute('role','group');box.setAttribute('aria-label','输入框当前助手');box.innerHTML=triggerButton(e,true);old.replaceWith(box);
  }
  function syncAll(resetWelcome){
    renderEntry();if(root&&tab){renderComposer(root.querySelector('.agent-sidebar'),tab);if(window.Agent&&Agent.refreshEtExpert)Agent.refreshEtExpert(tab.id,resetWelcome);}
  }
  function closeMenu(returnFocus){
    var previous=anchor;if(menu)menu.remove();menu=null;anchor=null;
    if(previous&&previous.isConnected){previous.setAttribute('aria-expanded','false');var split=previous.closest('.rb-et-expert-split, .et-expert-composer');if(split)split.classList.remove('is-open');if(returnFocus)previous.focus();}
  }
  function position(){
    if(!menu||!anchor||!anchor.isConnected){closeMenu(false);return;}
    var target=menuSource==='composer'?anchor.closest('.et-expert-composer'):anchor;
    var r=target.getBoundingClientRect(),width=menu.offsetWidth,height=menu.offsetHeight;
    var top=menuSource==='composer'?r.top-height-8:r.bottom+8;
    if(top<8)top=r.bottom+8;
    if(top+height>innerHeight-8)top=r.top-height-8;
    menu.style.left=Math.max(8,Math.min(r.left,innerWidth-width-8))+'px';menu.style.top=Math.max(8,Math.min(top,innerHeight-height-8))+'px';
  }
  function renderPreview(id){
    previewId=id;var e=find(id),isCurrent=e.id===active().id;
    menu.querySelector('.et-experts-preview').innerHTML='<div class="et-experts-profile">'+portrait(e,'is-profile')+'<div><span class="et-experts-eyebrow">'+(isCurrent?'当前助手':'助手介绍')+'</span><h3>'+e.name+'</h3></div></div><p class="et-experts-role">'+e.role+'</p><p>'+e.desc+'</p><div class="et-experts-tags">'+e.tags.map(function(t){return '<span>'+t+'</span>';}).join('')+'</div><h4>适用文档</h4><p>'+e.scene+'</p><h4>可以帮你</h4><ul>'+e.skills.map(function(t){return '<li>'+t+'</li>';}).join('')+'</ul>';
  }
  function renderList(){
    var query=menu.querySelector('input').value.trim().toLowerCase();var items=experts.filter(function(e){return(e.name+e.tags.join('')+e.scene).toLowerCase().indexOf(query)>=0;});
    menu.querySelector('[role="menu"]').innerHTML=items.length?items.map(function(e){var current=e.id===active().id;return '<button type="button" role="menuitemradio" aria-checked="'+String(current)+'" class="kd-menu-item et-experts-row '+(current?'is-selected':'')+'" data-expert-id="'+e.id+'">'+portrait(e,'is-list')+'<span class="et-experts-row-copy"><strong>'+e.name+'</strong><small>'+e.tags.slice(0,2).join(' · ')+'</small></span>'+(current?'<span class="et-experts-state">当前</span>':e.id===tab.doc.aiRecommendedExpertId?'<span class="et-experts-state">推荐</span>':'')+'</button>';}).join(''):'<p class="et-experts-empty">没有找到匹配的助手</p>';
  }
  function openMenu(button,focusItem){
    if(menu&&anchor===button){closeMenu(true);return;}closeMenu(false);anchor=button;menuSource=button.getAttribute('data-et-expert-trigger');
    menu=document.createElement('section');menu.className='kd-menu et-experts-menu';menu.id='et-expert-menu';menu.setAttribute('role','region');menu.setAttribute('aria-label','助手库');
    menu.innerHTML='<header><div><h3>助手库</h3><p>为当前文档选择一位助手</p></div><button type="button" class="kd-button kd-button-light kd-button-icon kd-button-sm" aria-label="关闭助手库">'+window.icon('symbol_cross_two',16)+'</button></header><label class="kd-input kd-input-large"><span class="kd-input-wrap"><input type="search" class="kd-input-inner" aria-label="搜索助手" placeholder="搜索名称或擅长领域"></span></label><div class="et-experts-menu-body"><div class="et-experts-library" role="menu" aria-label="切换助手"></div><aside class="et-experts-preview" aria-label="助手说明"></aside></div><footer>悬停查看介绍，点击切换当前文档助手</footer>';
    document.body.appendChild(menu);button.setAttribute('aria-expanded','true');var split=button.closest('.rb-et-expert-split, .et-expert-composer');if(split)split.classList.add('is-open');
    renderList();renderPreview(active().id);position();
    menu.querySelector('input').addEventListener('input',renderList);
    menu.addEventListener('pointerover',function(e){var item=e.target.closest('[data-expert-id]');if(item&&!item.contains(e.relatedTarget))renderPreview(item.getAttribute('data-expert-id'));});
    menu.addEventListener('focusin',function(e){var item=e.target.closest('[data-expert-id]');if(item)renderPreview(item.getAttribute('data-expert-id'));});
    menu.addEventListener('click',function(e){
      if(e.target.closest('[aria-label="关闭助手库"]')){closeMenu(true);return;}
      var item=e.target.closest('[data-expert-id]');if(!item)return;
      tab.doc.aiExpertId=item.getAttribute('data-expert-id');var source=menuSource;closeMenu(false);syncAll(true);root.querySelector('[data-et-expert-trigger="'+source+'"]').focus();
    });
    menu.addEventListener('keydown',function(e){
      if(e.key==='Escape'){e.preventDefault();e.stopPropagation();closeMenu(true);return;}
      if(e.key==='Tab'){closeMenu(false);return;}
      if(['ArrowDown','ArrowUp','Home','End'].indexOf(e.key)<0)return;
      if(e.target.tagName==='INPUT'&&e.key!=='ArrowDown')return;
      e.preventDefault();var items=Array.from(menu.querySelectorAll('[role="menuitemradio"]'));if(!items.length)return;var i=items.indexOf(document.activeElement);
      if(e.key==='Home')i=0;else if(e.key==='End')i=items.length-1;else i=(i+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items[i].focus();
    });
    if(focusItem)menu.querySelector('[aria-checked="true"]')?.focus();else menu.querySelector('input').focus();
  }
  function welcomeHeader(id){var doc=documentById(id);if(!doc)return '';var e=ensureDocument(doc);return '<div class="ag-expert-hero">'+portrait(e,'is-welcome')+'<h3>你的表格助手</h3><p>正在协助你处理当前表格。</p></div>';}
  function renderWelcome(welcome,id){
    var doc=documentById(id);if(!doc||!welcome)return;var e=ensureDocument(doc);
    welcome.classList.remove('is-record-welcome');welcome.classList.add('is-expert-welcome');welcome.innerHTML=welcomeHeader(id)+'<div class="ag-try">需要我帮你做这些工作吗？</div>';
    var tasks=e.id==='finance'?financeTasks:e.prompts.map(function(p,i){return[taskTitles[e.id][i],p];}).concat(extraTasks[e.id]).map(function(task){return{title:task[0],desc:task[1],prompt:task[1]};});
    var order=e.id==='finance'?(doc.doc.etTaskOrder || [0,1,2,3]):tasks.map(function(_,i){return i;});
    order.forEach(function(i){var task=tasks[i],button=document.createElement('button');button.type='button';button.className='ag-card ag-capability-card'+(e.id==='finance'?' ag-finance-task':'');button.innerHTML='<span class="ag-card-title">'+esc(task.title)+'</span><span class="ag-card-desc">'+esc(task.desc)+'</span>'+'';if(e.id==='finance')button.dataset.financeTask=i;button.addEventListener('click',function(){if(e.id==='finance'&&window.Agent&&Agent.openEtTask){Agent.openEtTask(id,i);return;}if(window.Agent&&Agent.fillEtSuggestion)Agent.fillEtSuggestion(id,task.prompt);});welcome.appendChild(button);});
  }
  window.EtExperts={
    isFinal:function(){return mode==='final';},welcomeHeader:welcomeHeader,renderWelcome:renderWelcome,getFinanceTasks:function(){return financeTasks;},
    mountSidebar:function(aside,doc){var standard=aside.querySelector('.ag-mode');if(standard)normalMode=standard.outerHTML;ensureDocument(doc);renderComposer(aside,doc);},
    init:function(editorRoot,docTab){
      closeMenu(false);root=editorRoot;tab=docTab;ensureDocument(tab);var group=root.querySelector('.rb-et-assistant');if(!group)return;originalContent=group.querySelector('.rb-group-content').innerHTML;
      var standard=root.querySelector('.ag-mode');if(standard)normalMode=standard.outerHTML;
      var control=document.createElement('div');control.className='skills-demo-switch et-experts-scheme';control.setAttribute('role','group');control.setAttribute('aria-label','助手入口方案');control.innerHTML='<span class="skills-demo-label">入口方案</span><button type="button" data-expert-scheme="transition">过渡态</button><button type="button" data-expert-scheme="final">最终态</button>';root.appendChild(control);
      control.addEventListener('click',function(e){var button=e.target.closest('[data-expert-scheme]');if(!button)return;closeMenu(false);mode=button.getAttribute('data-expert-scheme');try{localStorage.setItem('wps-ai-edit.et.expert-scheme',mode);}catch(err){}syncAll(false);});syncAll(false);
    }
  };
  document.addEventListener('click',function(e){var button=e.target.closest('[data-et-expert-trigger]');if(button&&root&&root.contains(button)){openMenu(button,false);return;}if(menu&&!menu.contains(e.target))closeMenu(false);});
  document.addEventListener('keydown',function(e){var button=e.target.closest('[data-et-expert-trigger]');if(button&&(e.key==='ArrowDown'||e.key==='Enter'&&button.getAttribute('aria-expanded')==='false')){e.preventDefault();openMenu(button,true);}});
  window.addEventListener('resize',position);document.addEventListener('scroll',function(e){if(menu&&!menu.contains(e.target))position();},true);
})();

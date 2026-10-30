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
  function start(id) {
    var tab=owner(id);if(!tab)return;
    cancel(id);
    var state={id:++sequence,phase:0,result:null,running:true,timers:[]};tab.doc.reconciliationDiscovery=state;
    function advance(delay,callback) { state.timers.push(setTimeout(function () { if(owner(id)!==tab || tab.doc.reconciliationDiscovery!==state || !state.running)return;callback();Agent.refreshEtExpert(id,false); },delay)); }
    advance(400,function () { state.result=infer(tab);state.phase=1; });
    advance(1000,function () { state.phase=2; });
    advance(1600,function () { apply(tab,state);state.phase=3;state.running=false; });
  }
  function cancel(id) {
    var tab=owner(id),state=tab && tab.doc.reconciliationDiscovery;
    if(state){state.running=false;state.timers.forEach(clearTimeout);}
  }
  function render(welcome,id) {
    var tab=owner(id),state=tab && tab.doc.reconciliationDiscovery;
    if(!state)return false;
    if(state.phase===3 && state.result.candidate)return false;
    var candidate=state.result && state.result.candidate;
    var labels=['读取当前工作簿的表头与数据','比较编号字段的重合与重复情况','整理匹配字段和对账规则'];
    var completed=state.phase===3;
    welcome.classList.add('is-expert-welcome','is-reconciliation-welcome','is-agent-first');
    welcome.innerHTML=EtExperts.welcomeHeader(id)+'<section class="recon-discovery" aria-label="分析对账任务"><p class="recon-discovery-intro">我先看看当前表格，帮你整理一份对账方案。</p><ol class="recon-discovery-steps" aria-live="polite">'+labels.map(function (label,i) {
      var done=i<state.phase,current=i===state.phase;
      var detail=i===0 && state.result?'已读取 '+state.result.tables.length+' 张数据表，共 '+state.result.tables.reduce(function (n,s) { return n+s.rows; },0)+' 条记录':i===1 && candidate?'发现 '+candidate.left.title+' 与 '+candidate.right.title+' 有 '+candidate.overlap+' 个相同编号':'';
      return '<li class="'+(done?'is-done':current?'is-active':'')+'"><span class="recon-discovery-indicator" aria-hidden="true">'+(i+1)+'</span><div><span>'+label+'</span>'+(detail?'<small>'+esc(detail)+'</small>':'')+'</div><span class="recon-discovery-state">'+(done?'已完成':current?'分析中':'待开始')+'</span></li>';
    }).join('')+'</ol>'+(completed?'<p role="status">我还没找到可靠对应的编号字段。请确认当前工作簿中有两张包含业务编号的明细表，再让我分析。</p>':'<p class="recon-discovery-note">分析完成后，我会请你确认方案和执行方式。</p>')+'<button type="button" class="kd-button kd-button-light kd-button-lg" data-discovery-back>返回任务</button></section>';
    welcome.querySelector('[data-discovery-back]').addEventListener('click',function () { Agent.closeEtReconciliation(id); });
    return true;
  }
  window.EtReconciliationDiscovery={start:start,cancel:cancel,render:render,infer:infer,inspect:inspect,rules:rules,describe:describe};
})();

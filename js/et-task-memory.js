/* 每次打开页面从空记忆开始；本轮体验中按助手和任务跨账期复用。 */
(function () {
  'use strict';
  var records = {}, layer = null, cleanup = null, iconSequence = 0, inputSequence = 0;
  function iconHTML() {
    var suffix = '-task-memory-'+(++iconSequence);
    return window.icon('book',16).replace(/\bid="([^"]+)"/g,function (attribute,id) { return 'id="'+id+suffix+'"'; });
  }
  function identity(tab, taskKey) { return JSON.stringify(['expert:finance',taskKey]); }
  function normalize(memory) {
    if (!memory) return null;
    var copy = Object.assign({},memory,{preferences:Object.assign({},memory.preferences)});
    if (copy.preferences.duplicateColor) copy.preferences.duplicateColor = '整行使用半透明明黄色底色。';
    if (copy.preferences.unmatchedColor) copy.preferences.unmatchedColor = '整行使用半透明红色底色。';
    return copy;
  }
  function get(tab, taskKey) {
    var memory = records[identity(tab,taskKey)];
    if (!memory) {
      Object.keys(records).forEach(function (key) {
        try { var parts = JSON.parse(key); if (parts[1] === taskKey && (!memory || records[key].updatedAt > memory.updatedAt)) memory = records[key]; } catch (error) {}
      });
    }
    return normalize(memory);
  }
  function rulesForCard(memory) {
    if (!memory) return '';
    var prefs = memory.preferences;
    var rules = (prefs.matchingRules || '').trim();
    if (prefs.resultOutput && prefs.duplicateColor && prefs.unmatchedColor) {
      if (!rules || /^(新增一列标注重复和(?:未匹配|不匹配)的记录|重复或未匹配的记录新增一列标注出来)[。.]*$/.test(rules)) return '新增一列标注重复和未匹配的记录，并给重复的记录和未匹配的记录标注不同的颜色。';
      if (!/颜色|标色|高亮|底色/.test(rules)) return rules.replace(/[。.]+$/,'')+'，并给重复的记录和未匹配的记录标注不同的颜色。';
    }
    return rules;
  }
  function save(tab, taskKey, taskName, preferences) {
    var old = get(tab,taskKey), memory = {taskName:taskName,preferences:Object.assign({},old && old.preferences,preferences),inputs:old && old.inputs ? old.inputs.slice() : [],updatedAt:Date.now()};
    records[identity(tab,taskKey)] = memory;
    return memory;
  }
  function createInput(content) { return {id:'input-'+Date.now()+'-'+(++inputSequence),content:String(content || '').trim(),createdAt:Date.now()}; }
  function colName(index) { var name=''; for(var n=index+1;n>0;n=Math.floor((n-1)/26))name=String.fromCharCode(65+(n-1)%26)+name;return name; }
  function colIndex(name) { return name.toUpperCase().split('').reduce(function(n,ch){return n*26+ch.charCodeAt(0)-64;},0)-1; }
  function sheetData(tab,name) {
    var model=tab.doc,index=model&&model.sheets?model.sheets.findIndex(function(sheet){return sheet.name===name;}):-1;
    if(index<0)return null;
    var sheet=model.sheets[index],cells=index===model.activeSheet?model.cells:sheet.cells,header=[];
    for(var c=0;c<(sheet.columnCount||model.columnCount||24);c++)header.push(String(cells[colName(c)+'1']||''));
    var lastRow=Object.keys(cells).reduce(function(last,addr){return Math.max(last,Number(addr.match(/\d+$/)[0]));},1);
    return {header:header,lastRow:lastRow};
  }
  function captureRangeFields(tab,resolved) {
    return resolved.map(function(ref){
      var source=App.tabs.find(function(item){return item.name===ref.book&&item.type==='et';});
      var data=source&&sheetData(source,ref.sheet);
      if(!data){var seed=window.MOCK_SEED&&MOCK_SEED.etFiles[ref.book],sheet=seed&&seed.sheets&&seed.sheets.find(function(item){return item.name===ref.sheet;});if(sheet)data={header:sheet.header};}
      var columns=ref.address.match(/^([A-Z]+):([A-Z]+)$/),cells=ref.address.match(/^([A-Z]+)(\d+)(?::([A-Z]+)(\d+))?$/);
      if(!data||!columns&&!cells)return null;
      var first=colIndex(columns?columns[1]:cells[1]),last=colIndex(columns?columns[2]:cells[3]||cells[1]);
      var fields=data.header.slice(first,last+1);if(fields.length!==last-first+1||!fields.length||fields.some(function(value){return !value;}))return null;
      return {sheet:ref.sheet,fields:fields,wholeColumn:!!columns,includeHeader:!!cells&&Number(cells[2])===1};
    });
  }
  function rangesForCard(tab,memory) {
    var saved=memory&&memory.preferences.rangeFields;if(!saved||saved.length<2||saved.length%2)return null;
    var restored=saved.map(function(ref){
      if(!ref)return '';
      var data=sheetData(tab,ref.sheet);if(!data)return '';
      var indexes=ref.fields.map(function(field){return data.header.findIndex(function(name){return name.toLowerCase()===field.toLowerCase();});});
      if(indexes.some(function(index,i){return index<0||i&&index!==indexes[i-1]+1;}))return '';
      var first=colName(indexes[0]),last=colName(indexes[indexes.length-1]);
      var address=ref.wholeColumn?first+':'+last:first+(ref.includeHeader?1:2)+':'+last+Math.max(2,data.lastRow);
      return "'["+tab.name.replace(/'/g,"''")+"]"+ref.sheet.replace(/'/g,"''")+"'!"+address;
    });
    return restored.some(function(value){return !!value;})?restored:null;
  }
  function recordInput(tab, taskKey, input) {
    var old = get(tab,taskKey);
    if (!old || !input || !input.content) return false;
    var inputs = (old.inputs || []).slice();
    if (inputs.some(function (item) { return item.id === input.id; })) return true;
    inputs.push(Object.assign({},input,{workbook:tab.name}));
    records[identity(tab,taskKey)] = Object.assign({},old,{inputs:inputs,updatedAt:Date.now()});
    return true;
  }
  function applyToResult(result, memory) {
    if (!result || !memory) return;
    var prefs = memory.preferences, sheet = result.sheet;
    Object.keys(sheet.cells).forEach(function (addr) {
      var match = /^([A-Z]+)(\d+)$/.exec(addr);
      if (+match[2] < 2 || !sheet.formulas[addr]) return;
      if (sheet.cells[addr] === '重复' && prefs.duplicateColor) sheet.marks[match[2]] = 'recon-duplicate';
      if (['不能匹配','未匹配','不匹配'].indexOf(sheet.cells[addr])>=0 && prefs.unmatchedColor) sheet.marks[match[2]] = 'recon-unmatched';
    });
  }
  function close() { if (cleanup) cleanup(); cleanup = null; if (layer) layer.remove(); layer = null; }
  function open(tabId, taskKey) {
    close();
    var tab = App.tabs.find(function (item) { return item.id === tabId; }), memory = tab && get(tab,taskKey);
    var grid = document.querySelector('#view-editor:not([hidden]) .et-grid-wrap');
    if (!memory || !grid) return;
    var previous = document.activeElement;
    layer = document.createElement('div'); layer.className = 'et-task-memory-layer';
    layer.innerHTML = '<div class="kd-modal-mask"></div><div class="kd-modal-wrap"><!-- [Modal: sm C1] 按轮次展示用户输入，无白卡片 --><section class="kd-modal kd-modal-sm et-task-memory-modal" role="dialog" aria-modal="true" aria-labelledby="et-task-memory-title"><div class="kd-modal-content"><header class="kd-modal-header"><h2 class="kd-modal-title" id="et-task-memory-title">任务记忆</h2><button type="button" class="kd-modal-close" aria-label="关闭任务记忆">'+window.icon('symbol_cross_two',16)+'</button></header><div class="kd-modal-body-wrap"><p class="et-task-memory-name"></p><ol class="et-task-memory-inputs" aria-label="已保存的用户输入"></ol><p class="et-task-memory-time"></p></div><footer class="kd-modal-footer"><button type="button" class="kd-button kd-button-primary kd-button-m" data-memory-close>知道了</button></footer></div></section></div>';
    layer.querySelector('.et-task-memory-name').textContent = memory.taskName;
    var inputs = layer.querySelector('.et-task-memory-inputs');
    (memory.inputs || []).forEach(function (input,index) {
      var row = document.createElement('li'), label = document.createElement('span'), content = document.createElement('p');
      label.className = 'et-task-memory-round'; label.textContent = '第'+(index+1)+'轮'; content.textContent = input.content; row.append(label,content); inputs.appendChild(row);
    });
    layer.querySelector('.et-task-memory-time').textContent = '更新于 '+new Date(memory.updatedAt).toLocaleString('zh-CN',{timeZone:'Asia/Shanghai',hour12:false});
    document.body.appendChild(layer);
    function position() {
      if (!layer || !grid.isConnected) { close(); return; }
      var r = grid.getBoundingClientRect();
      ['.kd-modal-mask','.kd-modal-wrap'].forEach(function (selector) { var el = layer.querySelector(selector); el.style.left = r.left+'px'; el.style.top = r.top+'px'; el.style.width = r.width+'px'; el.style.height = r.height+'px'; });
      var modal = layer.querySelector('.et-task-memory-modal'); modal.style.width = Math.max(0,Math.min(480,r.width-32))+'px'; modal.style.maxHeight = Math.max(0,r.height-32)+'px';
    }
    layer.addEventListener('click',function (event) { if (event.target.closest('.kd-modal-close, [data-memory-close]') || event.target.classList.contains('kd-modal-wrap') || event.target.classList.contains('kd-modal-mask')) close(); });
    layer.addEventListener('keydown',function (event) {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); }
      if (event.key === 'Tab') { var buttons = layer.querySelectorAll('button'), first = buttons[0], last = buttons[buttons.length-1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } }
    });
    window.addEventListener('resize',position);
    cleanup = function () { window.removeEventListener('resize',position); if (previous && previous.isConnected) previous.focus(); };
    position(); layer.querySelector('.kd-modal-close').focus();
  }
  window.EtTaskMemory = {get:get,save:save,createInput:createInput,recordInput:recordInput,captureRangeFields:captureRangeFields,rangesForCard:rangesForCard,rulesForCard:rulesForCard,applyToResult:applyToResult,open:open,close:close,iconHTML:iconHTML};
})();

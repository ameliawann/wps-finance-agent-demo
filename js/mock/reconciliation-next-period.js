/* 新账期沿用同一份账单结构，业务日期和单据编号切换到九月。 */
(function () {
  'use strict';
  var data = JSON.parse(JSON.stringify(window.RECON_DEMO));
  function september(value) { return typeof value === 'string' ? value.replace(/2026-08/g,'2026-09').replace(/202608/g,'202609') : value; }
  data.source = september(data.source);
  data.sheets.forEach(function (sheet,index) {
    sheet.rows = sheet.rows.map(function (row) { return row.map(september); });
    var state=202609+index;
    for(var i=sheet.rows.length-1;i>0;i--){state=(Math.imul(state,1664525)+1013904223)>>>0;var j=state%(i+1),row=sheet.rows[i];sheet.rows[i]=sheet.rows[j];sheet.rows[j]=row;}
    sheet.notice = sheet.name+' · '+sheet.rows.length+' 条记录 · 待核对';
  });
  window.RECON_NEXT_PERIOD = data;
  window.MOCK_SEED.etFiles[data.source] = data;
  window.MOCK_FILES.unshift({name:data.source,type:'et',location:'我的文件',creator:'我',modified:'2026-10-30',size:'120 条记录'});
})();

/* 编号核对使用的公式计算：IF、OR、COUNTIF、单元格及跨表区域引用。 */
(function () {
  'use strict';
  function column(name) { return name.replace(/\$/g, '').split('').reduce(function (n, ch) { return n * 26 + ch.charCodeAt(0) - 64; }, 0) - 1; }
  function address(c, r) {
    var name = '';
    for (var n = c + 1; n > 0; n = Math.floor((n - 1) / 26)) name = String.fromCharCode(65 + (n - 1) % 26) + name;
    return name + r;
  }
  function evaluate(formula, current, sheets) {
    var source = formula.replace(/^=/, ''), pos = 0, token;
    function next() {
      source = source.slice(pos).trimStart(); pos = 0;
      if (!source) { token = {type:'end'}; return; }
      var m;
      if ((m = /^(?:'((?:[^']|'')+)'!)?(\$?[A-Z]+\$?[1-9]\d*)(?::(\$?[A-Z]+\$?[1-9]\d*))?/i.exec(source))) {
        token = {type:'ref', sheet:m[1] ? m[1].replace(/''/g, "'") : current.name, start:m[2].replace(/\$/g,'').toUpperCase(), end:m[3] ? m[3].replace(/\$/g,'').toUpperCase() : null};
      } else if ((m = /^"((?:[^"]|"")*)"/.exec(source))) token = {type:'value', value:m[1].replace(/""/g,'"')};
      else if ((m = /^\d+(?:\.\d+)?/.exec(source))) token = {type:'value', value:Number(m[0])};
      else if ((m = /^(IF|OR|COUNTIF)\b/i.exec(source))) token = {type:'function', value:m[0].toUpperCase()};
      else if ((m = /^(>=|<=|<>|[=><(),])/.exec(source))) token = {type:m[0]};
      else throw new Error('不支持的公式');
      pos = m[0].length;
    }
    function take(type) { if (token.type !== type) throw new Error('公式格式有误'); next(); }
    function sheet(name) { return sheets.find(function (s) { return s.name === name; }); }
    function primary() {
      var item = token;
      if (item.type === 'value') { next(); return item.value; }
      if (item.type === 'ref') {
        next(); var target = sheet(item.sheet); if (!target) throw new Error('找不到工作表');
        if (item.end) return {sheet:target,start:item.start,end:item.end};
        return target.cells[item.start] == null ? '' : target.cells[item.start];
      }
      if (item.type === '(') { next(); var value = expression(); take(')'); return value; }
      if (item.type !== 'function') throw new Error('公式格式有误');
      next(); take('('); var args = [expression()];
      while (token.type === ',') { next(); args.push(expression()); }
      take(')');
      if (item.value === 'IF') { if (args.length !== 3) throw new Error('IF 参数有误'); return args[0] ? args[1] : args[2]; }
      if (item.value === 'OR') return args.some(function (v) { return !!v; });
      var range = args[0]; if (args.length !== 2 || !range || !range.sheet) throw new Error('COUNTIF 参数有误');
      var a = /^([A-Z]+)(\d+)$/.exec(range.start), b = /^([A-Z]+)(\d+)$/.exec(range.end), count = 0;
      var criterion = String(args[1]).toLowerCase();
      for (var r = +a[2]; r <= +b[2]; r++) for (var c = column(a[1]); c <= column(b[1]); c++) {
        var cell = range.sheet.cells[address(c,r)];
        if (String(cell == null ? '' : cell).toLowerCase() === criterion) count++;
      }
      return count;
    }
    function expression() {
      var left = primary(), op = token.type;
      if (['=','<>','>','<','>=','<='].indexOf(op) < 0) return left;
      next(); var right = primary();
      if (typeof left === 'string') left = left.toLowerCase();
      if (typeof right === 'string') right = right.toLowerCase();
      if (op === '=') return left === right;
      if (op === '<>') return left !== right;
      if (op === '>') return left > right;
      if (op === '<') return left < right;
      if (op === '>=') return left >= right;
      return left <= right;
    }
    try { next(); var result = expression(); if (token.type !== 'end') throw new Error('公式格式有误'); return result; }
    catch (error) { return '#VALUE!'; }
  }
  window.EtFormulas = {evaluate:evaluate};
})();

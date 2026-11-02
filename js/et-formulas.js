/* 编号核对使用的公式计算：IF、OR、AND、ABS、TRIM、COUNTIF、算术及跨表引用。 */
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
      else if ((m = /^(IF|OR|AND|ABS|TRIM|COUNTIF)\b/i.exec(source))) token = {type:'function', value:m[0].toUpperCase()};
      else if ((m = /^(>=|<=|<>|[=><(),+*/\-])/.exec(source))) token = {type:m[0]};
      else throw new Error('不支持的公式');
      pos = m[0].length;
    }
    function take(type) { if (token.type !== type) throw new Error('公式格式有误'); next(); }
    function sheet(name) { return sheets.find(function (s) { return s.name === name; }); }
    function primary() {
      if(token.type==='-'||token.type==='+'){var sign=token.type;next();var unary=Number(primary());return sign==='-'?-unary:unary;}
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
      if (item.value === 'AND') return args.every(function (v) { return !!v; });
      if (item.value === 'ABS') {if(args.length!==1)throw new Error('ABS 参数有误');return Math.abs(Number(args[0]));}
      if (item.value === 'TRIM') {if(args.length!==1)throw new Error('TRIM 参数有误');return String(args[0]==null?'':args[0]).trim();}
      var range = args[0]; if (args.length !== 2 || !range || !range.sheet) throw new Error('COUNTIF 参数有误');
      var a = /^([A-Z]+)(\d+)$/.exec(range.start), b = /^([A-Z]+)(\d+)$/.exec(range.end), count = 0;
      var criterion = String(args[1]).toLowerCase();
      for (var r = +a[2]; r <= +b[2]; r++) for (var c = column(a[1]); c <= column(b[1]); c++) {
        var cell = range.sheet.cells[address(c,r)];
        if (String(cell == null ? '' : cell).toLowerCase() === criterion) count++;
      }
      return count;
    }
    function product(){var left=primary();while(token.type==='*'||token.type==='/'){var op=token.type;next();var right=primary();if(op==='/'&&Number(right)===0)throw new Error('除数为零');left=op==='*'?Number(left)*Number(right):Number(left)/Number(right);}return left;}
    function sum(){var left=product();while(token.type==='+'||token.type==='-'){var op=token.type;next();var right=product();left=op==='+'?Number(left)+Number(right):Number(left)-Number(right);}return left;}
    function expression() {
      var left = sum(), op = token.type;
      if (['=','<>','>','<','>=','<='].indexOf(op) < 0) return left;
      next(); var right = sum();
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

/* 澄清是当前任务的暂停点；只替换底部输入区，保留任务计划和执行上下文。 */
(function () {
  'use strict';
  function node(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (text != null) el.textContent = text;
    return el;
  }
  function answerFor(state) {
    var option = state.definition.options.find(function (item) { return item.value === state.choice; });
    if (!option) return null;
    var rule = option.custom ? state.customText.trim() : option.rule;
    return rule ? {choice:option.value,label:option.label,rule:rule} : null;
  }
  function render(s) {
    if (!s.view) return;
    var old = s.view.aside.querySelector('.ag-clarification');
    if (old) old.remove();
    var state = s.clarification;
    s.view.aside.classList.toggle('is-task-clarifying',!!state);
    s.view.inputCard.hidden = !!state;
    if (!state) return;
    var form = node('form','ag-clarification');
    form.setAttribute('aria-label','确认匹配方式'); form.noValidate = true;
    var question = node('h4','ag-clarification-title',state.definition.question);
    question.id = 'clarification-title-'+s.tabId; form.setAttribute('aria-labelledby',question.id); form.appendChild(question);
    if (state.definition.context) form.appendChild(node('p','ag-clarification-context',state.definition.context));
    var options = node('fieldset','ag-clarification-options'); options.setAttribute('aria-label','匹配方式');
    state.definition.options.forEach(function (option) {
      var label = node('label','kd-radio ag-clarification-option');
      label.innerHTML = '<!-- [Radio: matching method] --><span class="kd-radio-input"><span class="kd-radio-inner"></span><input type="radio" class="kd-radio-original"></span><span class="kd-radio-label"></span>';
      var input = label.querySelector('input'); input.name = 'clarification-'+s.tabId; input.value = option.value; input.checked = state.choice === option.value;
      label.querySelector('.kd-radio-input').classList.toggle('is-checked',input.checked);
      var copy = label.querySelector('.kd-radio-label'); copy.appendChild(node('span','ag-clarification-option-name',option.label));
      if (option.desc) copy.appendChild(node('span','ag-clarification-option-desc',option.desc));
      options.appendChild(label);
    });
    form.appendChild(options);
    var custom = node('div','ag-clarification-custom');
    custom.innerHTML = '<!-- [Textarea: custom matching rule] --><div class="kd-textarea"><textarea class="kd-textarea-inner" rows="3" aria-label="自定义匹配规则" placeholder="例如：按编号匹配，重复和未匹配记录单独标注"></textarea></div>';
    var textarea = custom.querySelector('textarea'); textarea.value = state.customText; form.appendChild(custom);
    var error = node('p','ag-clarification-error'); error.setAttribute('role','alert'); error.hidden = true; form.appendChild(error);
    var submit = node('button','kd-button kd-button-primary kd-button-lg ag-clarification-submit','确认并继续'); submit.type = 'submit'; form.appendChild(submit);
    function paint() {
      var selected = state.definition.options.find(function (item) { return item.value === state.choice; });
      custom.hidden = !(selected && selected.custom);
      textarea.required = !custom.hidden;
      submit.disabled = !answerFor(state);
      error.hidden = true;
    }
    form.addEventListener('change',function (event) {
      if (event.target.type !== 'radio') return;
      state.choice = event.target.value; paint();
      if (!custom.hidden) textarea.focus();
    });
    textarea.addEventListener('input',function () { state.customText = textarea.value; paint(); });
    form.addEventListener('focusin',function (event) { if (event.target.type === 'radio') event.target.closest('.kd-radio-input').classList.toggle('is-keyboard-focus',event.target.matches(':focus-visible')); });
    form.addEventListener('focusout',function (event) { if (event.target.type === 'radio') event.target.closest('.kd-radio-input').classList.remove('is-keyboard-focus'); });
    form.addEventListener('submit',function (event) {
      event.preventDefault();
      if (s.clarification !== state || state.settled) return;
      var answer = answerFor(state);
      if (!answer) { error.hidden = false; error.textContent = state.choice === 'custom' ? '请填写自定义匹配规则。' : '请选择一种匹配方式。'; return; }
      state.settled = true; submit.disabled = true;
      s.clarification = null; render(s); state.resolve(answer);
    });
    s.view.inputCard.insertAdjacentElement('afterend',form); paint();
  }
  function wait(s, definition) {
    return new Promise(function (resolve) {
      s.clarification = {definition:definition,choice:'',customText:'',resolve:resolve,settled:false};
      render(s);
      if (s.view) { var first=s.view.aside.querySelector('.ag-clarification input[type="radio"]'); if(first)first.focus({preventScroll:true}); }
    });
  }
  function cancel(s) {
    var state = s.clarification;
    s.clarification = null; render(s);
    if (state && !state.settled) { state.settled = true; state.resolve(null); }
  }
  window.EtTaskClarification = {wait:wait,render:render,cancel:cancel,answerFor:answerFor};
})();

// Point to the next required answer without moving focus or repeating a sparkle.
export function bindAnswerCues(form, { checks, pendingMessage, readyMessage }) {
  const guidance = document.createElement('p');
  guidance.id = 'answer-guidance'; guidance.className = 'answer-guidance';
  guidance.setAttribute('aria-live', 'polite'); form.before(guidance);
  const fields = checks.map(check => {
    const input = form.querySelector(`#${check.id}`);
    const wrapper = document.createElement('span'); wrapper.className = 'answer-field';
    input.before(wrapper); wrapper.append(input);
    const marker = document.createElement('span'); marker.className = 'answer-ready';
    marker.textContent = '✓ Ready'; marker.setAttribute('aria-hidden', 'true'); wrapper.append(marker);
    input.setAttribute('aria-describedby', guidance.id); input.addEventListener('input', refresh);
    return { ...check, input, wrapper };
  });
  let required = null;
  function refresh() {
    const current = fields.find(field => !field.valid(field.input.value)); required = current?.input || null;
    for (const field of fields) {
      const valid = field.valid(field.input.value);
      field.wrapper.classList.toggle('is-current', field === current); field.wrapper.classList.toggle('is-ready', valid);
      field.input.dataset.answerState = valid ? 'ready' : field === current ? 'required' : 'waiting';
      field.input.setAttribute('aria-invalid', String(Boolean(field.input.value.trim()) && !valid));
    }
    guidance.classList.toggle('is-ready', !current);
    guidance.textContent = current ? `${pendingMessage} Next: ${current.label}.` : readyMessage;
  }
  refresh();
  return { refresh, focusRequired() { required?.focus({ preventScroll: true }); }, reveal() {
    const current = fields.find(field => field.input === required);
    if (current) { current.wrapper.classList.remove('is-current'); void current.wrapper.offsetWidth; current.wrapper.classList.add('is-current'); }
  } };
}

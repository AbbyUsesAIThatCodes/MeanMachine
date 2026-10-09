import { message as contentMessage } from './content-runtime.js';
// Each new field prompts gently until engaged. Validation never restarts a
// field the student already acknowledged; a new form creates fresh prompts.
export function bindAnswerCues(form, { checks, pendingMessage, readyMessage }) {
  const guidance = document.createElement('p');
  guidance.id = 'answer-guidance'; guidance.className = 'answer-guidance';
  guidance.setAttribute('aria-live', 'polite'); form.before(guidance);
  const fields = checks.map(check => {
    const input = form.querySelector(`#${check.id}`);
    const wrapper = document.createElement('span'); wrapper.className = 'answer-field';
    input.before(wrapper); wrapper.append(input);
    const particles = document.createElement('span'); particles.className = 'answer-particles'; particles.setAttribute('aria-hidden', 'true');
    for (let index = 0; index < 3; index++) {
      const particle = document.createElement('span'); particle.className = `answer-particle${index === 1 ? ' is-translucent' : ''}`;
      particle.innerHTML = '<svg viewBox="0 0 14 14" focusable="false"><path d="M2 1.5 L12 7 L2 12.5 Z" /></svg>';
      particles.append(particle);
    }
    wrapper.append(particles);
    const marker = document.createElement('span'); marker.className = 'answer-ready';
    marker.textContent = contentMessage("answer-cues.ready"); marker.setAttribute('aria-hidden', 'true'); wrapper.append(marker);
    const field = { ...check, input, wrapper, engaged: false };
    input.setAttribute('aria-describedby', guidance.id);
    for (const event of ['pointerdown', 'click', 'keydown', 'input']) {
      input.addEventListener(event, () => { field.engaged = true; refresh(); });
    }
    return field;
  });
  let required = null;
  function engageRequired() {
    const field = fields.find(field => field.input === required);
    if (field) field.engaged = true;
    refresh();
  }
  // Capture engagement before validation can report or focus an invalid answer.
  for (const event of ['pointerdown', 'click']) form.addEventListener(event, event => {
    if (event.target.closest('button[type="submit"], button:not([type]), input[type="submit"]')) engageRequired();
  }, true);
  form.addEventListener('submit', engageRequired, true);
  function refresh() {
    const current = fields.find(field => !field.valid(field.input.value)); required = current?.input || null;
    for (const field of fields) {
      const valid = field.valid(field.input.value);
      field.wrapper.classList.toggle('is-current', field === current); field.wrapper.classList.toggle('is-ready', valid);
      field.wrapper.classList.toggle('needs-attention', field === current && !field.engaged);
      field.input.dataset.answerState = valid ? 'ready' : field === current ? 'required' : 'waiting';
      field.input.dataset.cueEngaged = String(field.engaged);
      field.input.setAttribute('aria-invalid', String(Boolean(field.input.value.trim()) && !valid));
    }
    guidance.classList.toggle('is-ready', !current);
    guidance.textContent = current ? contentMessage("answer-cues.next", { v0: pendingMessage, v1: current.label }) : readyMessage;
  }
  refresh();
  return { refresh, focusRequired() { required?.focus({ preventScroll: true }); }, reveal: refresh };
}

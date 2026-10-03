import './style.css';
import * as math from './math-state.js';
import { createPresentation } from './scene.js';
import { familyFor } from './gear-families.js';

const $ = selector => document.querySelector(selector);
let state = math.createState();
let selected = null;
let source = 2;
let destination = 0;
let stageRendered = null;
let inIntro = true;
let dragging = false;
const motion = $('#reduce-motion');
motion.checked = matchMedia('(prefers-reduced-motion: reduce)').matches;
const presentation = createPresentation($('#scene'), selectPallet, { onArrive() {
  inIntro = false; $('#intro').hidden = true; $('#app').hidden = false; $('#view-controls').hidden = false;
  render(); chooseStageFocus();
}, onStatus: announce, onDragActive(active) { dragging = active; render(); }, onTransfer(from, to) {
  if (inIntro || state.stage !== 'sharing' || state.pending) return false;
  try { source = from; destination = to; animateAction(math.move(state, from, to)); return true; }
  catch (error) { announce(error.message); return false; }
} });
presentation.setReducedMotion(motion.checked);
const manifest = __BUILD_MANIFEST__;
$('#compact-build').textContent = `${manifest.version} · ${manifest.codename} · Build ${String(manifest.ordinal).padStart(3, '0')}`;
$('#build-id').textContent = `${manifest.mode === 'development' ? 'Live Development • ' : 'Local Review • '}${manifest.id}`;
$('#build-provenance').textContent = `${manifest.id}\nBuilt: ${manifest.builtAt}\nSource: ${manifest.revision}${manifest.dirty ? ' (Dirty Sources)' : ''}\nFingerprint: ${manifest.fingerprint}\nScope: ${manifest.scope}; Ordinal: ${manifest.ordinal}; Mode: ${manifest.mode}`;

function announce(message) { $('#feedback').textContent = message; }
function safely(action) {
  try { action(); } catch (error) { announce(error.message); }
}
function chooseStageFocus() { $('#stage-title').focus({ preventScroll: true }); }
const stageTitles = { prediction: 'What Is Your Prediction?', sharing: 'Make Equal Shares', calculation: 'Connect The Calculation', explanation: 'Explain The Equal Share', complete: 'Shipment Complete' };
const letters = ['A', 'B', 'C'];
function render() {
  const focusedPallet = document.activeElement?.dataset?.pallet;
  const busy = Boolean(state.pending) || inIntro || dragging;
  const sharing = state.stage === 'sharing';
  const values = math.loads(state);
  $('#shipment-code').textContent = `${math.SHIPMENTS[state.key].code} • ${math.SHIPMENTS[state.key].title}`;
  $('#originals').innerHTML = state.originals.map((value, index) => `<div class="original-row"><span><span class="identity">${math.ORIGINS[index].glyph}</span> Pallet ${letters[index]}</span><strong>${value}</strong></div>`).join('');
  $('#prediction-record').hidden = state.prediction === null;
  $('#prediction-record').textContent = `First prediction: ${state.prediction} units per pallet`;
  $('#loads').innerHTML = state.pallets.map((pieces, index) => {
    const top = pieces.at(-1);
    return `<button class="load" data-pallet="${index}" aria-label="Pallet ${letters[index]}, current load ${values[index] / 2} units${top ? `, top piece ${familyFor(top).name}, ${top.halves / 2} unit from ${math.ORIGINS[top.origin].symbol}` : ', empty'}" aria-pressed="${selected === index}" ${!sharing || busy ? 'disabled' : ''}><span class="pallet-name">Pallet ${letters[index]}</span><span class="value">${math.formatQuantity(values[index])}</span><span class="label">Current Load</span><span class="piece">${top ? `Top: ${familyFor(top).name}<br>${math.ORIGINS[top.origin].glyph} ${top.halves === 1 ? '½ Layer' : '1 Ring'}` : 'Empty Pallet'}</span></button>`;
  }).join('');
  $('#loads').querySelectorAll('button').forEach(button => button.addEventListener('click', () => selectPallet(Number(button.dataset.pallet))));
  $('#undo').disabled = busy || !sharing || !state.history.length;
  for (const id of ['reset', 'replay', 'next']) $(`#${id}`).disabled = busy;
  for (const id of ['overview', 'front-view']) $(`#${id}`).disabled = busy;
  $('#next').textContent = state.key === 'whole' ? 'Try Half-Rings' : 'Try Whole Rings';
  $('#stage-title').textContent = stageTitles[state.stage];
  document.querySelectorAll('#steps li').forEach(li => { const active = li.dataset.step === (state.stage === 'complete' ? 'explanation' : state.stage); if (active) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current'); });
  if (stageRendered !== state.stage) { stageRendered = state.stage; renderStage(); }
  $('#stage-content').querySelectorAll('button, input, select, textarea').forEach(control => { control.disabled = busy; });
  if ($('#split')) $('#split').disabled = busy || state.pallets[source]?.at(-1)?.halves !== 2;
  if ($('#source')) { $('#source').value = String(source); $('#destination').value = String(destination); }
  if ($('#selection-note')) $('#selection-note').textContent = selected === null ? 'Drag a top gear to another pallet. Or select a source and destination using the buttons below.' : `Pallet ${letters[selected]} selected. Choose a destination; select it again to cancel.`;
  if ($('#move')) { const top = state.pallets[source]?.at(-1); $('#move').textContent = top?.halves === 1 ? 'Move Top ½ Layer' : 'Move Top Ring'; $('#move').disabled = busy || !top || source === destination; }
  presentation.sync(state, selected);
  if (focusedPallet !== undefined && !busy && sharing) $(`[data-pallet="${focusedPallet}"]`)?.focus({ preventScroll: true });
}
function renderStage() {
  const host = $('#stage-content');
  if (state.stage === 'prediction') {
    host.innerHTML = '<p>Imagine sharing all the cargo equally. How many ring units might each pallet receive?</p><form id="prediction-form"><label for="prediction">My Predicted Share</label><input id="prediction" name="prediction" inputmode="decimal" autocomplete="off" placeholder="Your prediction" required /><button class="primary">Record Prediction</button></form><p class="small">A prediction is a starting idea. You can investigate even if it turns out differently.</p>';
    $('#prediction-form').addEventListener('submit', event => { event.preventDefault(); safely(() => { state = math.predict(state, $('#prediction').value); announce('Prediction recorded. Explore the cargo and make equal shares.'); render(); chooseStageFocus(); }); });
  } else if (state.stage === 'sharing') {
    const options = state.pallets.map((_, index) => `<option value="${index}">Pallet ${letters[index]}</option>`).join('');
    host.innerHTML = `<p id="selection-note" class="selection-note"></p><div class="control-row"><div><label for="source">From</label><select id="source">${options}</select></div><div><label for="destination">To</label><select id="destination">${options}</select></div></div><div class="control-stack"><button id="move">Move Top Ring</button>${math.SHIPMENTS[state.key].halves ? '<button id="split">Split Top Ring Into Halves</button>' : ''}<button id="dispatch" class="primary">Dispatch: Check Equal Shares</button></div><p class="small">Keep every unit of cargo. All pallets must have the same <strong>quantity</strong>.</p>`;
    $('#source').addEventListener('change', () => { source = Number($('#source').value); selected = source; render(); });
    $('#destination').addEventListener('change', () => { destination = Number($('#destination').value); render(); });
    $('#move').addEventListener('click', () => safely(() => animateAction(math.move(state, source, destination))));
    $('#split')?.addEventListener('click', () => safely(() => animateAction(math.split(state, source))));
    $('#dispatch').addEventListener('click', () => safely(() => { const result = math.dispatch(state); state = result.state; selected = null; announce(result.message); render(); if (result.success) chooseStageFocus(); }));
  } else if (state.stage === 'calculation') {
    host.innerHTML = '<p>Your loads are equal. Use the <strong>original observations</strong> to complete the calculation.</p><form id="calculation-form"><label for="total">Total Quantity<input id="total" inputmode="decimal" required /></label><label for="count">Number Of Observations<input id="count" inputmode="numeric" required /></label><label for="mean">Mean: Units Per Observation<input id="mean" inputmode="decimal" required /></label><button class="primary">Check Calculation</button></form>';
    $('#calculation-form').addEventListener('submit', event => { event.preventDefault(); safely(() => { const result = math.checkCalculation(state, { total: $('#total').value, count: $('#count').value, mean: $('#mean').value }); state = result.state; announce(result.message); render(); if (result.success) chooseStageFocus(); }); });
  } else if (state.stage === 'explanation') {
    const mean = math.total(state) / 2 / state.originals.length;
    host.innerHTML = `<p class="equation">(${state.originals.join(' + ')}) ÷ ${state.originals.length}<br />= ${state.key === 'halves' ? '3½ = 3.5' : mean}</p><p>Why divide by ${state.originals.length}? What changed, and what stayed the same? Compare the mean with your prediction of ${state.prediction}.</p><form id="explanation-form"><label for="explanation">My Explanation / Discussion Notes</label><textarea id="explanation" rows="3" required></textarea><button class="primary">Finish Shipment</button></form><p class="small">Discuss your reasoning with your teacher. Written reasoning is not automatically graded or saved after you leave.</p>`;
    $('#explanation-form').addEventListener('submit', event => { event.preventDefault(); safely(() => { state = math.explain(state, $('#explanation').value); announce('Equal sharing and calculation are complete. Keep your explanation in your classroom notebook.'); render(); chooseStageFocus(); }); });
  } else {
    host.innerHTML = '<p>You shared the total equally and connected it to the mean.</p><p id="completed-equation" class="equation"></p><p class="small">Your Discussion Notes</p><p id="completed-explanation"></p><p class="small">For your skimmer trials, use your recorded distances, keep their units, and calculate before rounding the reported mean.</p>';
    $('#completed-equation').textContent = `${math.total(state) / 2} ÷ ${state.originals.length} = ${math.total(state) / 2 / state.originals.length}`;
    $('#completed-explanation').textContent = state.explanation;
  }
}
function selectPallet(index) {
  if (inIntro || dragging || state.stage !== 'sharing' || state.pending) return;
  safely(() => {
    if (selected === null) {
      if (!state.pallets[index].length) { announce('This pallet is empty. Choose a source with cargo.'); return; }
      selected = index; source = index; announce(`Pallet ${letters[index]} selected.`); render();
    } else if (selected === index) { selected = null; announce('Selection canceled.'); render(); }
    else { destination = index; animateAction(math.move(state, selected, index)); }
  });
}
async function animateAction(next) {
  const focusId = document.activeElement?.id;
  const focusPallet = document.activeElement?.dataset?.pallet;
  const previous = state;
  state = next;
  selected = null;
  announce(state.pending.type === 'split' ? 'One whole ring becomes two half-layers. The quantity stays the same.' : `Moving ${math.formatQuantity(state.pending.halves)} unit. The original observations stay unchanged.`);
  render();
  try { await presentation.animate(previous, state, motion.checked); }
  catch { announce('The cargo animation stopped. The exact move is complete; you can continue or undo it.'); }
  finally { state = math.settle(state); render(); if (focusId) document.getElementById(focusId)?.focus({ preventScroll: true }); else if (focusPallet !== undefined) $(`[data-pallet="${focusPallet}"]`)?.focus({ preventScroll: true }); }
}
$('#undo').addEventListener('click', () => safely(() => { state = math.undo(state); selected = null; announce('Last move or split undone.'); render(); }));
$('#reset').addEventListener('click', () => safely(() => { state = math.reset(state); selected = null; announce('Original arrangement restored. Your first prediction is retained.'); render(); }));
$('#replay').addEventListener('click', () => safely(() => { state = math.replay(state); selected = null; announce('Same shipment, fresh prediction.'); render(); chooseStageFocus(); }));
$('#next').addEventListener('click', () => { if (state.pending) return; state = math.createState(state.key === 'whole' ? 'halves' : 'whole'); selected = null; source = state.pallets.length - 1; destination = 0; stageRendered = null; announce('New shipment ready. Start with a prediction.'); render(); chooseStageFocus(); });
$('#reference-button').addEventListener('click', () => { const open = $('#reference').hidden; $('#reference').hidden = !open; $('#reference-button').setAttribute('aria-expanded', String(open)); if (open) $('#close-reference').focus(); });
function closeReference() { $('#reference').hidden = true; $('#reference-button').setAttribute('aria-expanded', 'false'); $('#reference-button').focus(); }
$('#close-reference').addEventListener('click', closeReference);
$('#enter-factory').addEventListener('click', () => { $('#enter-factory').disabled = true; $('#intro-title').textContent = 'Entering The Factory'; presentation.startIntro(); });
$('#skip-intro').addEventListener('click', () => presentation.skipIntro());
motion.addEventListener('change', () => presentation.setReducedMotion(motion.checked));
$('#overview').addEventListener('click', () => { presentation.setView('overview'); $('#overview').setAttribute('aria-pressed', 'true'); $('#front-view').setAttribute('aria-pressed', 'false'); });
$('#front-view').addEventListener('click', () => { presentation.setView('front'); $('#overview').setAttribute('aria-pressed', 'false'); $('#front-view').setAttribute('aria-pressed', 'true'); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#reference').hidden) closeReference(); });
$('#fullscreen').addEventListener('click', async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch { announce('Fullscreen is unavailable here. You can keep using the window.'); } });
render();

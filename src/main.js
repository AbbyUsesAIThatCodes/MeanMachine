import { message as contentMessage } from './content-runtime.js';
import './style.css';
import * as math from './math-state.js';
import { createPresentation } from './scene.js';
import { familyFor } from './gear-families.js';
import { bindAnswerCues } from './answer-cues.js';
import { bindContentUI } from './content-ui.js';
import { LAYOUT_REVIEWS } from './layout-review.js';

const $ = selector => document.querySelector(selector);
let state = math.createState();
let selected = null;
let source = 2;
let destination = 0;
let stageRendered = null;
let inIntro = true;
let dragging = false;
let answerCue = null;
let layoutReview = false;
const contentUI = bindContentUI({ canRestart: () => !state.pending && !dragging && !inIntro, restart() {
  state = math.createState(); selected = null; source = 2; destination = 0; stageRendered = null; layoutReview = false;
  announce(''); render(); chooseStageFocus();
} });
const motion = $('#reduce-motion');
motion.checked = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.toggle('reduce-motion', motion.checked);
const presentation = createPresentation($('#scene'), selectPallet, { onArrive() {
  inIntro = false; $('#intro').hidden = true; $('#app').hidden = false; $('#view-controls').hidden = false;
  render(); answerCue?.reveal(); chooseStageFocus();
}, onStatus: announce, onDragActive(active) { dragging = active; render(); }, onTransfer(from, to) {
  if (inIntro || state.stage !== 'sharing' || state.pending) return false;
  try { source = from; destination = to; animateAction(math.move(state, from, to)); return true; }
  catch (error) { announce(error.message); return false; }
}, onPieceAction(pieceId) {
  if (inIntro || dragging || state.stage !== 'sharing' || state.pending) return false;
  try { source = math.pieceAction(state, pieceId)?.source ?? source; animateAction(math.actOnPiece(state, pieceId)); return true; }
  catch (error) { announce(error.message); return false; }
}, onHint(message) {
  $('#gear-hint').textContent = message; $('#gear-hint').hidden = !message;
}, onBlocked() {
  announce($('#answer-guidance')?.textContent || contentMessage("main.gear-movement-is-paused-at-this-step-use-reset-arrangement-to-re"));
  answerCue?.focusRequired();
} });
presentation.setReducedMotion(motion.checked);
const manifest = __BUILD_MANIFEST__;
$('#compact-build').textContent = `${manifest.version} · ${manifest.codename} · Build ${String(manifest.ordinal).padStart(3, '0')}`;
$('#build-id').textContent = `${manifest.mode === 'development' ? 'Live Development • ' : 'Local Review • '}${manifest.id}`;
$('#build-provenance').textContent = `${manifest.id}\nBuilt: ${manifest.builtAt}\nSource: ${manifest.revision}${manifest.dirty ? ' (Dirty Sources)' : ''}\nFingerprint: ${manifest.fingerprint}\nScope: ${manifest.scope}; Ordinal: ${manifest.ordinal}; Mode: ${manifest.mode}`;

function announce(message) { $('#feedback').textContent = message; }
function safely(action) {
  try { action(); } catch (error) { announce(error.message); answerCue?.refresh(); answerCue?.focusRequired(); }
}
function chooseStageFocus() { $('#stage-title').focus({ preventScroll: true }); }
const stageTitles = () => ({ prediction: contentMessage("main.what-is-your-prediction"), sharing: contentMessage("main.make-equal-shares"), calculation: contentMessage("main.connect-the-calculation"), explanation: contentMessage("main.explain-the-equal-share"), complete: contentMessage("main.shipment-complete") });
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
function render() {
  contentUI.updateActivity(layoutReview ? `layout-${state.originals.length}` : state.key);
  const focusedPallet = document.activeElement?.dataset?.pallet;
  const busy = Boolean(state.pending) || inIntro || dragging;
  const sharing = state.stage === 'sharing';
  const values = math.loads(state);
  document.body.dataset.palletCount = String(state.pallets.length);
  $('#shipment-code').textContent = contentMessage("main.text-3", { v0: math.SHIPMENTS[state.key].code, v1: math.SHIPMENTS[state.key].title });
  $('#originals').innerHTML = state.originals.map((value, index) => contentMessage("main.pallet-2", { v0: math.ORIGINS[index].glyph, v1: letters[index], v2: value })).join('');
  $('#prediction-record').hidden = state.prediction === null;
  if (layoutReview) $('#shipment-code').textContent = contentMessage("main.pallet-layout-review", { v0: state.pallets.length });
  $('#prediction-record').textContent = contentMessage("main.first-prediction-units-per-pallet", { v0: state.prediction });
  $('#loads').innerHTML = state.pallets.map((pieces, index) => {
    const top = pieces.at(-1);
    return contentMessage("main.pallet-current-load", { v0: index, v1: letters[index], v2: values[index] / 2, v3: top ? contentMessage("main.top-piece-unit-from", { v0: familyFor(top).name, v1: top.halves / 2, v2: math.ORIGINS[top.origin].symbol }) : contentMessage("main.empty"), v4: selected === index, v5: !sharing || busy ? 'disabled' : '', v6: letters[index], v7: math.formatQuantity(values[index]), v8: top ? contentMessage("main.top", { v0: familyFor(top).name, v1: math.ORIGINS[top.origin].glyph, v2: top.halves === 1 ? contentMessage("main.layer") : contentMessage("main.1-ring") }) : contentMessage("main.empty-pallet") });
  }).join('');
  $('#loads').querySelectorAll('button').forEach(button => button.addEventListener('click', () => selectPallet(Number(button.dataset.pallet))));
  $('#undo').disabled = busy || !sharing || !state.history.length;
  for (const id of ['reset', 'replay', 'next', 'six-pallet-example']) $(`#${id}`).disabled = busy;
  for (const id of ['overview', 'front-view']) $(`#${id}`).disabled = busy;
  $('#next').textContent = state.key === 'whole' ? contentMessage("main.try-half-rings") : contentMessage("main.try-whole-rings");
  $('#stage-title').textContent = stageTitles()[state.stage];
  document.querySelectorAll('#steps li').forEach(li => { const active = li.dataset.step === (state.stage === 'complete' ? 'explanation' : state.stage); if (active) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current'); });
  if (stageRendered !== state.stage) { stageRendered = state.stage; renderStage(); }
  $('#stage-content').querySelectorAll('button, input, select, textarea').forEach(control => { control.disabled = busy; });
  if ($('#split')) $('#split').disabled = busy || state.pallets[source]?.at(-1)?.halves !== 2;
  if ($('#merge')) $('#merge').disabled = busy || !math.compatibleTopHalves(state, source);
  $('#open-layout-review').disabled = busy;
  if ($('#source')) { $('#source').value = String(source); $('#destination').value = String(destination); }
  if ($('#selection-note')) $('#selection-note').textContent = selected === null ? contentMessage("main.drag-a-top-gear-to-another-pallet-or-select-a-source-and-destina") : contentMessage("main.pallet-selected-choose-a-destination-select-it-again-to-cancel", { v0: letters[selected] });
  if ($('#move')) { const top = state.pallets[source]?.at(-1); $('#move').textContent = top?.halves === 1 ? contentMessage("main.move-top-layer") : contentMessage("main.move-top-ring"); $('#move').disabled = busy || !top || source === destination; }
  presentation.sync(state, selected);
  if (focusedPallet !== undefined && !busy && sharing) $(`[data-pallet="${focusedPallet}"]`)?.focus({ preventScroll: true });
}
function renderStage() {
  const host = $('#stage-content');
  answerCue = null;
  if (state.stage === 'prediction') {
    host.innerHTML = contentMessage("main.imagine-sharing-all-the-cargo-equally-how-many-ring-units-might");
    $('#prediction-form').addEventListener('submit', event => { event.preventDefault(); safely(() => { state = math.predict(state, $('#prediction').value); announce(contentMessage("main.prediction-recorded-explore-the-cargo-and-make-equal-shares")); render(); chooseStageFocus(); }); });
    $('#prediction-form').noValidate = true;
    answerCue = bindAnswerCues($('#prediction-form'), {
      checks: [{ id: 'prediction', label: contentMessage("main.your-predicted-share"), valid: value => { const number = math.numericAnswer(value); return Number.isFinite(number) && number >= 0 && number <= 1000; } }],
      pendingMessage: contentMessage("main.gear-movement-is-paused-until-you-record-your-prediction-answer"),
      readyMessage: contentMessage("main.prediction-ready-choose-record-prediction-to-unlock-gear-movemen"),
    });
  } else if (state.stage === 'sharing') {
    const options = state.pallets.map((_, index) => contentMessage("main.pallet", { v0: index, v1: letters[index] })).join('');
    host.innerHTML = contentMessage("main.from-to-move-top-ring-split-top-gear-into-halves-merge-matching", { v0: options, v1: options });
    $('#source').addEventListener('change', () => { source = Number($('#source').value); selected = source; render(); });
    $('#destination').addEventListener('change', () => { destination = Number($('#destination').value); render(); });
    $('#move').addEventListener('click', () => safely(() => animateAction(math.move(state, source, destination))));
    $('#split')?.addEventListener('click', () => safely(() => animateAction(math.split(state, source))));
    $('#merge').addEventListener('click', () => safely(() => animateAction(math.merge(state, source))));
    for (const id of ['split', 'merge']) {
      for (const event of ['focus', 'mouseenter']) $(`#${id}`).addEventListener(event, () => presentation.previewAction(id, source));
      for (const event of ['blur', 'mouseleave']) $(`#${id}`).addEventListener(event, () => presentation.previewAction(null));
    }
    $('#dispatch').addEventListener('click', () => safely(() => { const result = math.dispatch(state); state = result.state; selected = null; announce(result.message); render(); if (result.success) chooseStageFocus(); }));
  } else if (state.stage === 'calculation') {
    host.innerHTML = contentMessage("main.your-loads-are-equal-use-the-original-shipment-to-complete-the-c");
    $('#calculation-form').addEventListener('submit', event => { event.preventDefault(); safely(() => { const result = math.checkCalculation(state, { total: $('#total').value, count: $('#count').value, mean: $('#mean').value }); state = result.state; announce(result.message); render(); if (result.success) chooseStageFocus(); else { answerCue.refresh(); answerCue.focusRequired(); } }); });
    const expectedTotal = math.total(state) / 2, expectedCount = state.originals.length;
    answerCue = bindAnswerCues($('#calculation-form'), {
      checks: [{ id: 'total', label: contentMessage("main.total-gears"), valid: value => math.numericAnswer(value) === expectedTotal }, { id: 'count', label: contentMessage("main.number-of-pallets"), valid: value => math.numericAnswer(value) === expectedCount }, { id: 'mean', label: contentMessage("main.gears-per-pallet"), valid: value => math.numericAnswer(value) === expectedTotal / expectedCount }],
      pendingMessage: contentMessage("main.gear-movement-is-paused-while-you-record-the-equal-shares-answer"),
      readyMessage: contentMessage("main.all-three-answers-are-ready-choose-check-calculation-to-continue"),
    });
  } else if (state.stage === 'explanation') {
    const mean = math.total(state) / 2 / state.originals.length;
    host.innerHTML = contentMessage("main.why-divide-by-pallets-what-changed-and-what-stayed-the-same-comp", { v0: state.originals.join(' + '), v1: state.originals.length, v2: Number.isInteger(mean) ? mean : contentMessage("main.text-2", { v0: math.formatQuantity(mean * 2), v1: mean }), v3: state.originals.length, v4: state.prediction });
    $('#explanation-form').addEventListener('submit', event => { event.preventDefault(); safely(() => { state = math.explain(state, $('#explanation').value); announce(contentMessage("main.equal-sharing-and-calculation-are-complete-keep-your-explanation")); render(); chooseStageFocus(); }); });
    answerCue = bindAnswerCues($('#explanation-form'), {
      checks: [{ id: 'explanation', label: contentMessage("main.your-explanation-or-discussion-notes"), valid: value => Boolean(value.trim()) }],
      pendingMessage: contentMessage("main.gear-movement-stays-paused-to-keep-your-equal-shares-add-your-ex"),
      readyMessage: contentMessage("main.your-explanation-is-ready-choose-finish-shipment-to-complete-thi"),
    });
  } else {
    host.innerHTML = contentMessage("main.you-shared-the-total-equally-and-connected-it-to-the-mean-your-d");
    $('#completed-equation').textContent = contentMessage("main.text", { v0: math.total(state) / 2, v1: state.originals.length, v2: math.total(state) / 2 / state.originals.length });
    $('#completed-explanation').textContent = state.explanation;
  }
}
function selectPallet(index) {
  if (inIntro || dragging || state.stage !== 'sharing' || state.pending) return;
  safely(() => {
    if (selected === null) {
      if (!state.pallets[index].length) { announce(contentMessage("main.this-pallet-is-empty-choose-a-source-with-cargo")); return; }
      selected = index; source = index; announce(contentMessage("main.pallet-selected", { v0: letters[index] })); render();
    } else if (selected === index) { selected = null; announce(contentMessage("main.selection-canceled")); render(); }
    else { destination = index; animateAction(math.move(state, selected, index)); }
  });
}
async function animateAction(next) {
  const focusId = document.activeElement?.id;
  const focusPallet = document.activeElement?.dataset?.pallet;
  const previous = state;
  state = next;
  selected = null;
  announce(state.pending.type === 'split' ? contentMessage("main.one-whole-gear-becomes-two-halves-the-quantity-stays-the-same") : state.pending.type === 'merge' ? contentMessage("main.these-two-matching-halves-become-one-whole-gear-the-quantity-sta") : contentMessage("main.moving-gear-unit-the-original-pallet-records-stay-unchanged", { v0: math.formatQuantity(state.pending.halves) }));
  render();
  try { await presentation.animate(previous, state, motion.checked); }
  catch { announce(contentMessage("main.the-cargo-animation-stopped-the-exact-move-is-complete-you-can-c")); }
  finally { state = math.settle(state); render(); if (focusId) document.getElementById(focusId)?.focus({ preventScroll: true }); else if (focusPallet !== undefined) $(`[data-pallet="${focusPallet}"]`)?.focus({ preventScroll: true }); }
}
$('#undo').addEventListener('click', () => safely(() => { state = math.undo(state); selected = null; announce(contentMessage("main.last-move-split-or-merge-undone")); render(); }));
$('#reset').addEventListener('click', () => safely(() => { state = math.reset(state); selected = null; announce(contentMessage("main.original-arrangement-restored-your-first-prediction-is-retained")); render(); }));
$('#replay').addEventListener('click', () => safely(() => { state = math.replay(state); selected = null; stageRendered = null; announce(contentMessage("main.same-shipment-fresh-prediction")); render(); chooseStageFocus(); }));
$('#next').addEventListener('click', () => { if (state.pending || dragging) return; state = math.createState(state.key === 'whole' ? 'halves' : 'whole'); layoutReview = false; selected = null; source = state.pallets.length - 1; destination = 0; stageRendered = null; announce(contentMessage("main.new-shipment-ready-start-with-a-prediction")); render(); chooseStageFocus(); });
$('#reference-button').addEventListener('click', () => { const open = $('#reference').hidden; $('#reference').hidden = !open; $('#reference-button').setAttribute('aria-expanded', String(open)); if (open) $('#close-reference').focus(); });
function closeReference() { $('#reference').hidden = true; $('#reference-button').setAttribute('aria-expanded', 'false'); $('#reference-button').focus(); }
$('#close-reference').addEventListener('click', closeReference);
$('#enter-factory').addEventListener('click', () => { $('#enter-factory').disabled = true; $('#intro-title').textContent = contentMessage("main.entering-the-factory"); presentation.startIntro(); });
$('#skip-intro').addEventListener('click', () => presentation.skipIntro());
motion.addEventListener('change', () => { document.documentElement.classList.toggle('reduce-motion', motion.checked); presentation.setReducedMotion(motion.checked); });
function openLayoutReview(count) {
  if (state.pending || dragging || inIntro) return;
  const values = LAYOUT_REVIEWS[count];
  if (!values) return;
  state = math.createState('halves', values); layoutReview = true;
  selected = null; source = state.pallets.length - 1; destination = 0; stageRendered = null;
  if (!$('#reference').hidden) closeReference();
  announce(contentMessage("main.pallet-example-ready-start-with-your-prediction", { v0: state.pallets.length })); render(); chooseStageFocus();
}
$('#open-layout-review').addEventListener('click', () => openLayoutReview(Number($('#review-pallet-count').value)));
$('#six-pallet-example').addEventListener('click', () => openLayoutReview(6));
$('#overview').addEventListener('click', () => { presentation.setView('overview'); $('#overview').setAttribute('aria-pressed', 'true'); $('#front-view').setAttribute('aria-pressed', 'false'); });
$('#front-view').addEventListener('click', () => { presentation.setView('front'); $('#overview').setAttribute('aria-pressed', 'false'); $('#front-view').setAttribute('aria-pressed', 'true'); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#reference').hidden) closeReference(); });
$('#fullscreen').addEventListener('click', async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch { announce(contentMessage("main.fullscreen-is-unavailable-here-you-can-keep-using-the-window")); } });
render();

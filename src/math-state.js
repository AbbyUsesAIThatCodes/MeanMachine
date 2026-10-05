import { message as contentMessage } from './content-runtime.js';
// Quantity is measured in exact half-ring units; a piece is never an observation.
import { startingFamily, familyFor } from './gear-families.js';
export { SHIPMENTS } from "./content-runtime.js";
import { SHIPMENTS } from "./content-runtime.js";
export const ORIGINS = Object.freeze([
  Object.freeze({ color: '#e85972', relief: 'ribbed', symbol: 'Star', glyph: '★' }),
  Object.freeze({ color: '#28aabc', relief: 'grooved', symbol: 'Diamond', glyph: '◆' }),
  Object.freeze({ color: '#f2b83f', relief: 'studded', symbol: 'Circle', glyph: '●' }),
  Object.freeze({ color: '#44b877', relief: 'smooth', symbol: 'Square', glyph: '■' }),
  Object.freeze({ color: '#578fea', relief: 'smooth', symbol: 'Triangle', glyph: '▲' }),
  Object.freeze({ color: '#ce79cb', relief: 'smooth', symbol: 'Hexagon', glyph: '⬢' }),
]);
export const formatQuantity = halves => halves % 2 ? `${Math.floor(halves / 2) || ''}½` : String(halves / 2);
export const loads = state => state.pallets.map(pieces => pieces.reduce((sum, piece) => sum + piece.halves, 0));
export const total = state => state.originals.reduce((sum, value) => sum + value * 2, 0);
const copyPallets = pallets => pallets.map(pieces => pieces.map(piece => ({ ...piece })));
function startingPallets(values) {
  return values.map((value, origin) => Array.from({ length: value }, (_, ring) => ({ id: `${origin}-${ring}`, root: `${origin}-${ring}`, origin, family: startingFamily(origin, ring), halves: 2 })));
}
export function createState(key = 'whole', values = null) {
  const shipment = SHIPMENTS[key];
  if (!shipment) throw new Error(contentMessage("math-state.unknown-shipment"));
  const originals = values ? [...values] : [...shipment.values];
  if (originals.length < 1 || originals.length > 6 || originals.some(value => !Number.isInteger(value) || value < 0)) throw new Error(contentMessage("math-state.choose-one-to-six-pallets-with-whole-starting-gear-quantities"));
  const quantity = originals.reduce((sum, value) => sum + value, 0);
  if (quantity * 2 % originals.length) throw new Error(contentMessage("math-state.choose-a-total-that-can-be-shared-equally-in-whole-or-half-gears"));
  return { key, originals, pallets: startingPallets(originals), stage: 'prediction', prediction: null, pending: null, history: [], explanation: '', hintUsed: false };
}
export function assertConserved(state) {
  if (state.pallets.length !== state.originals.length) throw new Error(contentMessage("math-state.every-original-observation-needs-one-pallet"));
  const pieces = state.pallets.flat();
  if (new Set(pieces.map(piece => piece.id)).size !== pieces.length) throw new Error(contentMessage("math-state.a-piece-occurs-more-than-once"));
  for (let origin = 0; origin < state.originals.length; origin++) {
    if (pieces.filter(piece => piece.origin === origin).reduce((sum, piece) => sum + piece.halves, 0) !== state.originals[origin] * 2) throw new Error(contentMessage("math-state.original-quantity-was-not-conserved"));
  }
  for (const piece of pieces) {
    familyFor(piece);
    if (![1, 2].includes(piece.halves) || !Number.isInteger(piece.origin) || !state.originals.hasOwnProperty(piece.origin)) throw new Error(contentMessage("math-state.invalid-piece"));
  }
  return true;
}
function requireReady(state) {
  if (state.pending) throw new Error(contentMessage("math-state.wait-for-the-cargo-to-settle"));
}
function requireSharing(state) {
  requireReady(state);
  if (state.stage !== 'sharing') throw new Error(state.stage === 'prediction' ? contentMessage("math-state.record-a-prediction-before-sharing") : contentMessage("math-state.gear-movement-is-paused-while-you-complete-this-step"));
}
function requirePallet(state, index) {
  if (!Number.isInteger(index) || !state.pallets[index]) throw new Error(contentMessage("math-state.choose-a-labeled-pallet"));
}
export function numericAnswer(text) {
  const input = String(text).trim();
  if (/^\d+(?:\.\d+)?$/.test(input)) return Number(input);
  const half = input.match(/^(\d*)\s*½$/);
  if (half) return Number(half[1] || 0) + 0.5;
  const mixed = input.match(/^(?:(\d+)\s+)?(\d+)\/(\d+)$/);
  if (mixed && Number(mixed[3]) > 0) return Number(mixed[1] || 0) + Number(mixed[2]) / Number(mixed[3]);
  return NaN;
}
export function predict(state, value) {
  if (state.stage !== 'prediction') throw new Error(contentMessage("math-state.your-first-prediction-is-already-recorded"));
  const prediction = numericAnswer(value);
  if (!Number.isFinite(prediction) || prediction < 0 || prediction > 1000) throw new Error(contentMessage("math-state.enter-a-quantity-such-as-4-or-3-5"));
  return { ...state, prediction, stage: 'sharing' };
}
function changed(state, pallets, pending) {
  const next = { ...state, pallets, pending, history: [...state.history, copyPallets(state.pallets)] };
  assertConserved(next);
  return next;
}
export function move(state, source, destination) {
  requireSharing(state); requirePallet(state, source); requirePallet(state, destination);
  if (source === destination) throw new Error(contentMessage("math-state.choose-a-different-destination"));
  if (!state.pallets[source].length) throw new Error(contentMessage("math-state.this-pallet-is-empty-choose-a-pallet-with-cargo"));
  const pallets = copyPallets(state.pallets);
  const piece = pallets[source].pop();
  pallets[destination].push(piece);
  return changed(state, pallets, { type: 'move', source, destination, pieceId: piece.id, halves: piece.halves });
}
export function split(state, source) {
  requireSharing(state); requirePallet(state, source);
  const top = state.pallets[source].at(-1);
  if (!top || top.halves !== 2) throw new Error(contentMessage("math-state.choose-a-whole-top-gear-to-split-into-halves"));
  const pallets = copyPallets(state.pallets);
  pallets[source].pop();
  pallets[source].push({ ...top, id: `${top.id}-a`, halves: 1 }, { ...top, id: `${top.id}-b`, halves: 1 });
  return changed(state, pallets, { type: 'split', source, pieceId: top.id, children: [`${top.id}-a`, `${top.id}-b`] });
}
export function compatibleTopHalves(state, source) {
  const pieces = state.pallets[source];
  const lower = pieces?.at(-2), upper = pieces?.at(-1);
  return lower && upper && lower.halves === 1 && upper.halves === 1 &&
    lower.root === upper.root && lower.origin === upper.origin && lower.family === upper.family
    ? [lower, upper] : null;
}
export function merge(state, source) {
  requireSharing(state); requirePallet(state, source);
  const pair = compatibleTopHalves(state, source);
  if (!pair) throw new Error(contentMessage("math-state.place-the-two-matching-halves-together-at-the-top-of-the-same-pa"));
  const pallets = copyPallets(state.pallets);
  const whole = { ...pair[0], id: pair[0].root, halves: 2 };
  pallets[source].splice(-2, 2, whole);
  return changed(state, pallets, { type: 'merge', source, pieceId: pair[0].id, children: pair.map(piece => piece.id), mergedId: whole.id });
}
// Only exposed top pieces qualify. Never search other pallets for a partner.
export function pieceAction(state, pieceId) {
  if (state.stage !== 'sharing' || state.pending) return null;
  for (let source = 0; source < state.pallets.length; source++) {
    const top = state.pallets[source].at(-1);
    if (top?.id === pieceId && top.halves === 2) return { type: 'split', source, pieceIds: [pieceId] };
    const pair = compatibleTopHalves(state, source);
    if (pair?.some(piece => piece.id === pieceId)) return { type: 'merge', source, pieceIds: pair.map(piece => piece.id) };
  }
  return null;
}
export function actOnPiece(state, pieceId) {
  requireSharing(state);
  const action = pieceAction(state, pieceId);
  if (!action) throw new Error(contentMessage("math-state.choose-a-whole-top-gear-or-either-of-the-highlighted-matching-to"));
  return action.type === 'split' ? split(state, action.source) : merge(state, action.source);
}
export function settle(state) { return { ...state, pending: null }; }
export function undo(state) {
  requireSharing(state);
  if (!state.history.length) throw new Error(contentMessage("math-state.there-is-no-move-to-undo"));
  return { ...state, pallets: copyPallets(state.history.at(-1)), history: state.history.slice(0, -1) };
}
export function reset(state) {
  requireReady(state);
  return { ...createState(state.key, state.originals), prediction: state.prediction, stage: state.prediction === null ? 'prediction' : 'sharing', hintUsed: state.hintUsed };
}
export function replay(state) { requireReady(state); return createState(state.key, state.originals); }
export function dispatch(state) {
  requireSharing(state); assertConserved(state);
  const current = loads(state);
  const success = current.every(value => value === current[0]);
  return { success, state: success ? { ...state, stage: 'calculation' } : state,
    message: success ? contentMessage("math-state.equal-shares-all-original-cargo-is-accounted-for-now-connect-the") : contentMessage("math-state.the-current-loads-are-compare-the-largest-and-smallest-loads-and", { v0: current.map(formatQuantity).join(', ') }) };
}
export function calculationRequirement(state, answers) {
  const expectedTotal = total(state) / 2;
  const count = state.originals.length;
  if (numericAnswer(answers.total) !== expectedTotal) return { field: 'total', message: contentMessage("math-state.recheck-the-total-gears-add-every-value-in-original-shipment-two") };
  if (numericAnswer(answers.count) !== count) return { field: 'count', message: contentMessage("math-state.count-the-labeled-pallets-not-the-gears-or-half-gears-each-origi") };
  if (numericAnswer(answers.mean) !== expectedTotal / count) return { field: 'mean', message: contentMessage("math-state.divide-the-total-gears-by-the-number-of-pallets-keep-any-half-ge") };
  return null;
}
export function checkCalculation(state, answers) {
  requireReady(state);
  if (state.stage !== 'calculation') throw new Error(contentMessage("math-state.dispatch-equal-loads-before-calculating"));
  const requirement = calculationRequirement(state, answers);
  return { success: !requirement, field: requirement?.field, message: requirement?.message || contentMessage("math-state.your-total-gears-pallet-count-and-mean-all-agree-with-the-equal"), state: requirement ? state : { ...state, stage: 'explanation' } };
}
export function explain(state, explanation) {
  if (state.stage !== 'explanation') throw new Error(contentMessage("math-state.check-the-calculation-first"));
  if (!String(explanation).trim()) throw new Error(contentMessage("math-state.add-your-explanation-or-discussion-notes-before-finishing"));
  return { ...state, explanation: String(explanation).trim(), stage: 'complete' };
}

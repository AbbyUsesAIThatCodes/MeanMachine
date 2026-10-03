// Quantity is measured in exact half-ring units; a piece is never an observation.
import { startingFamily, familyFor } from './gear-families.js';
export const SHIPMENTS = Object.freeze({
  whole: Object.freeze({ code: 'MM-01', title: 'The First Shipment', values: [2, 4, 9], halves: false }),
  halves: Object.freeze({ code: 'MM-02', title: 'A Share Between Whole Numbers', values: [2, 5], halves: true }),
});
export const ORIGINS = Object.freeze([
  Object.freeze({ color: '#e85972', relief: 'ribbed', symbol: 'Star', glyph: '★' }),
  Object.freeze({ color: '#28aabc', relief: 'grooved', symbol: 'Diamond', glyph: '◆' }),
  Object.freeze({ color: '#f2b83f', relief: 'studded', symbol: 'Circle', glyph: '●' }),
]);
export const formatQuantity = halves => halves % 2 ? `${Math.floor(halves / 2) || ''}½` : String(halves / 2);
export const loads = state => state.pallets.map(pieces => pieces.reduce((sum, piece) => sum + piece.halves, 0));
export const total = state => state.originals.reduce((sum, value) => sum + value * 2, 0);
const copyPallets = pallets => pallets.map(pieces => pieces.map(piece => ({ ...piece })));
function startingPallets(values) {
  return values.map((value, origin) => Array.from({ length: value }, (_, ring) => ({ id: `${origin}-${ring}`, root: `${origin}-${ring}`, origin, family: startingFamily(origin, ring), halves: 2 })));
}
export function createState(key = 'whole') {
  const shipment = SHIPMENTS[key];
  if (!shipment) throw new Error('Unknown shipment.');
  return { key, originals: [...shipment.values], pallets: startingPallets(shipment.values), stage: 'prediction', prediction: null, pending: null, history: [], explanation: '', hintUsed: false };
}
export function assertConserved(state) {
  if (state.pallets.length !== state.originals.length) throw new Error('Every original observation needs one pallet.');
  const pieces = state.pallets.flat();
  if (new Set(pieces.map(piece => piece.id)).size !== pieces.length) throw new Error('A piece occurs more than once.');
  for (let origin = 0; origin < state.originals.length; origin++) {
    if (pieces.filter(piece => piece.origin === origin).reduce((sum, piece) => sum + piece.halves, 0) !== state.originals[origin] * 2) throw new Error('Original quantity was not conserved.');
  }
  for (const piece of pieces) {
    familyFor(piece);
    if (![1, 2].includes(piece.halves) || !Number.isInteger(piece.origin) || !state.originals.hasOwnProperty(piece.origin)) throw new Error('Invalid piece.');
  }
  return true;
}
function requireReady(state) {
  if (state.pending) throw new Error('Wait for the cargo to settle.');
}
function requireSharing(state) {
  requireReady(state);
  if (state.stage !== 'sharing') throw new Error('Record a prediction before sharing.');
}
function requirePallet(state, index) {
  if (!Number.isInteger(index) || !state.pallets[index]) throw new Error('Choose a labeled pallet.');
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
  if (state.stage !== 'prediction') throw new Error('Your first prediction is already recorded.');
  const prediction = numericAnswer(value);
  if (!Number.isFinite(prediction) || prediction < 0 || prediction > 1000) throw new Error('Enter a quantity, such as 4 or 3.5.');
  return { ...state, prediction, stage: 'sharing' };
}
function changed(state, pallets, pending) {
  const next = { ...state, pallets, pending, history: [...state.history, copyPallets(state.pallets)] };
  assertConserved(next);
  return next;
}
export function move(state, source, destination) {
  requireSharing(state); requirePallet(state, source); requirePallet(state, destination);
  if (source === destination) throw new Error('Choose a different destination.');
  if (!state.pallets[source].length) throw new Error('This pallet is empty. Choose a pallet with cargo.');
  const pallets = copyPallets(state.pallets);
  const piece = pallets[source].pop();
  pallets[destination].push(piece);
  return changed(state, pallets, { type: 'move', source, destination, pieceId: piece.id, halves: piece.halves });
}
export function split(state, source) {
  requireSharing(state); requirePallet(state, source);
  if (!SHIPMENTS[state.key].halves) throw new Error('This shipment uses whole rings.');
  const top = state.pallets[source].at(-1);
  if (!top || top.halves !== 2) throw new Error('Choose a whole top ring to split into halves.');
  const pallets = copyPallets(state.pallets);
  pallets[source].pop();
  pallets[source].push({ ...top, id: `${top.id}-a`, halves: 1 }, { ...top, id: `${top.id}-b`, halves: 1 });
  return changed(state, pallets, { type: 'split', source, pieceId: top.id, children: [`${top.id}-a`, `${top.id}-b`] });
}
export function settle(state) { return { ...state, pending: null }; }
export function undo(state) {
  requireSharing(state);
  if (!state.history.length) throw new Error('There is no move to undo.');
  return { ...state, pallets: copyPallets(state.history.at(-1)), history: state.history.slice(0, -1) };
}
export function reset(state) {
  requireReady(state);
  return { ...createState(state.key), prediction: state.prediction, stage: state.prediction === null ? 'prediction' : 'sharing', hintUsed: state.hintUsed };
}
export function replay(state) { requireReady(state); return createState(state.key); }
export function dispatch(state) {
  requireSharing(state); assertConserved(state);
  const current = loads(state);
  const success = current.every(value => value === current[0]);
  return { success, state: success ? { ...state, stage: 'calculation' } : state,
    message: success ? 'Equal shares! All original cargo is accounted for. Now connect the model to a calculation.' : `The current loads are ${current.map(formatQuantity).join(', ')}. Compare the largest and smallest loads and keep sharing.` };
}
export function checkCalculation(state, answers) {
  requireReady(state);
  if (state.stage !== 'calculation') throw new Error('Dispatch equal loads before calculating.');
  const expectedTotal = total(state) / 2;
  const count = state.originals.length;
  let message = '';
  if (numericAnswer(answers.total) !== expectedTotal) message = 'Recheck the total: add every value in Original Shipment.';
  else if (numericAnswer(answers.count) !== count) message = 'Count the original observations: one labeled pallet per observation. Rings and half-layers are units of quantity.';
  else if (numericAnswer(answers.mean) !== expectedTotal / count) message = 'Divide the total by the number of original observations. Keep any half-unit.';
  return { success: !message, message: message || 'Your total, observation count, and mean all agree with the equal shares.', state: message ? state : { ...state, stage: 'explanation' } };
}
export function explain(state, explanation) {
  if (state.stage !== 'explanation') throw new Error('Check the calculation first.');
  if (!String(explanation).trim()) throw new Error('Add your explanation or discussion notes before finishing.');
  return { ...state, explanation: String(explanation).trim(), stage: 'complete' };
}

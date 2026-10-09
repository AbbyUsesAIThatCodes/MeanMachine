// Geometry-independent placement for the canonical shared cargo adapter.
// A fractional piece contributes its quantity to height, never an extra gap.
export function stackLayout(pieces, wholeThickness, deckHeight = 0) {
  if (!(wholeThickness > 0) || !Number.isFinite(wholeThickness) || !Number.isFinite(deckHeight)) throw new Error('Provide finite deck and whole-ring dimensions.');
  let halfUnits = 0;
  return pieces.map(piece => {
    if (![1, 2].includes(piece.halves)) throw new Error('Expected an exact whole or half ring.');
    const placement = {
      id: piece.id,
      origin: piece.origin,
      fraction: piece.halves / 2,
      y: deckHeight + halfUnits * wholeThickness / 2,
      height: piece.halves * wholeThickness / 2,
    };
    halfUnits += piece.halves;
    return placement;
  });
}

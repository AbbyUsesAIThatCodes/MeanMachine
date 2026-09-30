# Shared Asset Integration

The Median Depot worker is the sole canonical author of the shared factory exterior, cargo, pallets and starting camera. Mean Machine has deliberately not authored replacements. `src/scene.js` is currently a Three.js renderer seam with no geometry; the mathematical flow is independently usable through the accessible controls. Do not present this interim state as the finished 3D game.

## Requested Contract

- Plain ES modules using one installed Three.js instance.
- Ring constructor with independent color, relief and symbol; a fractional thickness parameter for exact half-layers. The nominal whole-ring thickness and pallet deck height must be exported or documented.
- Pallet constructor and a factory-world constructor.
- Shared exterior camera pose and a Mean route ending at the interior teaching view; skip and reduced motion must arrive at the exact same endpoint.
- Teaching-area bounds, pallet row coordinates and orientation. The Mean UI reserves a compact left original-data card and right activity card on student laptops.
- A revision and license/provenance record for the copied shared module(s). Identical copies can be hash-checked across the two local repositories.

Actual export names can follow the canonical worker's API. Mean will adapt to that API rather than requiring this draft naming.

## Mean-Owned Presentation

`src/math-state.js` holds the authoritative quantities. Each piece has `{ id, root, origin, halves }`; `halves` is 1 or 2, with 2 representing one whole ring. Original group appearance is in `ORIGINS`, independent of destination. `loads(state)` returns exact half-unit sums. A pallet stays one observation when a ring is split.

Piece placement will accumulate quantities rather than add a gap per physical piece. Two half-layers therefore occupy exactly one whole-ring height. Animations may deform temporarily, but settled geometry must restore the precise scale and position. The state locks moves, split, dispatch, undo, reset and replay until presentation settles.

Transfer motion should be a small hop. Splitting should have anticipation, squash/stretch, separation overshoot and bounded settling. Reduce Motion skips those deformations without changing the mathematical operation.

## Current Status

- Exact state and accessible classroom controls: Implemented.
- Canonical assets and shared entry camera: Awaiting parent contract.
- 3D piece placement, hit testing, split/transfer motion: Pending that contract.
- No external issues, PRs, pushes, merges, deployments or settings changes.

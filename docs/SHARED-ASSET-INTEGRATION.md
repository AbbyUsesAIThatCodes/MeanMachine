# Shared Asset Integration

Mean Machine consumes the frozen `foam-factory-world@1.0.0` source from Median Depot local commit `871ca3d2e5d605524cd846db13de3e22a1ea9658`. Median Depot remains the canonical author of the factory exterior, cargo, pallets and starting camera. The complete shared source is copied unchanged into `src/shared/`.

## Accepted Frozen Contract

- Handoff ZIP SHA-256: `8ea6a139f9d3147ef7569e2405f0840590a24fc5f4a06ae14deccc355592833e`.
- [Consumer Instructions](shared-assets/CONSUMER-INSTRUCTIONS.md) and [Consumer Lock](shared-assets/CONSUMER-LOCK.json) retain the complete pinned API and byte hashes, including the manifest and license.
- Three.js is pinned to `0.186.1`; its MIT license is preserved in `public/licenses/three-LICENSE.txt` and every review ZIP.
- `.gitattributes` disables text normalization for the frozen source, contract records and license. `tests/shared-assets.test.mjs` checks all copied bytes against the consumer lock.
- Initial position `[22,18,32]`, target `[-6,2,-4]`, FOV 35 and zero roll are exact, with no initial view offset. The game uses `sampleIntro('mean', elapsedMs, fittedEndpoint)` and hides the shell after 60% of the route. Skip, reduced motion and animated arrival share the fitted endpoint.
- Mean's pallet row is centered at `[-14,0.14,-7.1]`, with 2.7 units between pallets. Teaching framing accounts for the left original-data card, right activity card, viewport size and two/three-pallet count. The final camera offset eases in during arrival.

Do not edit `src/shared/` or regenerate its manifest in this consumer. A later shared change needs a new canonical handoff and refreshed lock.

## Mean-Owned Presentation

`src/math-state.js` holds the authoritative quantities. Each piece has `{ id, root, origin, halves }`; `halves` is 1 or 2, with 2 representing one whole ring. Original group appearance is in `ORIGINS`, independent of destination. `loads(state)` returns exact half-unit sums. A pallet stays one observation when a ring is split.

For the authorized #5 review, pieces additionally retain an immutable `family` assignment from `src/gear-families.js`. Original observation symbols stay separate. `src/gear-presentation.js` extends the canonical `createFoamRing` result with Mean-owned family profiles and contours, retaining its material, fraction tag, group identity and exact `RING_THICKNESS` contract. The frozen `src/shared/` files and their lock remain unchanged. Eight stable shape/color families mix at creation with no adjacent duplicate families; legal transfers and splits may create matching neighbors. This is a MeanMachine presentation extension, not a new shared-world version or a companion-repository change.

`src/piece-layout.js` accumulates quantity rather than adding a gap per physical piece. Two half-layers occupy exactly one whole-ring height. `src/scene.js` creates empty canonical pallets and fills them with individually identified canonical rings. Current tags are replaced using the shared label helper. Settled geometry restores precise scale and position. The state locks moves, split, dispatch, undo, reset and replay until presentation settles.

Transfers use a 620 ms hop and soft landing. Splitting uses 1150 ms of anticipation, volume-preserving squash/stretch, layer separation and bounded settling. Reduce Motion skips or finishes the presentation without changing the mathematical operation. Hidden-tab interruption and context loss settle pending operations; accessible controls continue to use the same exact math state.

Issue #4 updates ordinary transfers to a 520 ms arc with tilt and squash/stretch landing. During pickup the source state stays unchanged; a valid release commits one existing `move` action. Escape, invalid release, pointer cancellation, lost capture, resize or focus loss cancels the pickup. Only the top piece can be dragged. From/To controls and source/destination buttons remain available as keyboard/touch alternatives. The exact state and all transforms settle before the next move.

## Current Status

- Exact state and accessible classroom controls: Implemented.
- Canonical assets and shared entry camera: Implemented from the frozen handoff.
- 3D piece placement, hit testing, split/transfer motion: Implemented and locally verified.
- No external issues, PRs, pushes, merges, deployments or settings changes.

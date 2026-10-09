# Cue And Example Discovery Review

This document records Build011. The subsequent clockwise particle and stable camera correction is described in [Clockwise Particles And Stable Camera Review](CLOCKWISE-CAMERA-REVIEW.md).

The owner accepted Build008's splitting, merging and drag separation after Vivaldi play. This isolated follow-up changes only example discovery and answer-cue behavior. The scene, exact math, pallet layout, fixed examples and accepted lesson order are preserved.

## Six-Pallet Access

Inspection of Build008's actual standalone HTML confirmed that the six-pallet example exists: `[1,5,2,4,3,3]`. It was hidden behind **Reference → Larger Layout Review**, whose details section starts collapsed. Opening Reference alone did not reveal the selector.

The main shipment toolbar now includes **Try 6-Pallet Example**. It starts that same fixed task and clearly shows **6-Pallet Layout Review** with six labeled pallets. The existing Reference selector remains available for four/five/six examples. No task bank, recipe generator or new example data was added. Busy/drag guards apply to the new button.

## Answer Cue Lifecycle

The required field has a gentle four-second gold halo and sparkle cycle that repeats until the student engages the field or applicable answer button. Field clicks, pointer input, typing and keyboard submission count as engagement. Animation stops immediately even for an empty or incorrect answer; the readable border, guidance and validation state remain.

Acknowledgment belongs to each field for that form's lifetime. Incorrect submissions, refocusing, editing a previously valid answer, and reduced-motion toggles do not restart an acknowledged field. An unacknowledged next field gets its own cue. A new stage, replay or new shipment creates fresh prompts. Replay explicitly refreshes its form even when already at prediction. Reduced-motion preferences retain static cues without the animation.

## Verification

`browser-tests/cue-discovery.spec.js` checks direct access and unobscured controls at 1366×768 and 1024×768, persistence beyond a full cycle, field/button engagement before submission, incorrect answers, repeated prompts, keyboard input, ready-to-invalid transitions and reduced-motion toggles. The accepted interaction suite remains required. Actual ZIP validation opens the direct six-pallet route offline and completes both original lessons plus all larger examples.

Final evidence is generated in `.build/focused-browser-production.json`, `.build/portable-review/verification.json`, and `.build/CURRENT_BUILD.md`. The separate Build008 checkout and its evidence are preserved. No installation, publication, new owner-facing window or sound is required for this local correction.

# Clockwise Particles And Stable Camera Review

The owner approved fixed wider six-pallet framing after reviewing the exact-camera clipping issue. This local correction preserves accepted Build011 and the earlier Build008/004 checkouts and artifacts. No installation, publication, unrelated layout changes, or new owner-facing window is included.

## Implemented Correction

Required-answer particles are three gold triangles (solid, translucent fill, solid) traveling clockwise along all four field borders on an eight-second continuous circuit. The existing gentle halo remains. Engagement, incorrect-answer acknowledgment, fresh-prompt resets and static reduced-motion behavior are retained.

The camera jump came from `arrange()` calling `fitTeachingView()`, `applyPose()` and `fitOverlay()` after cargo changes. Fitting used the current maximum stack height and available overlay area, so a transfer could change camera distance, target and offset. The candidate removes camera writes from cargo arrangement. Existing Overview/Front View and resize controls remain intentional framing actions; reset/undo/split/merge preserve the chosen pose.

Six pallets keep the original three-pallet Overview/Front View directions and field of view, with one wider framing per chosen view and viewport. Framing uses immutable original quantities and reserves vertical space for the maximum possible stack; its overlay area is retained until layout/viewport changes. Cargo actions cannot change the camera. Switching views intentionally selects the corresponding fixed pose; returning to a view restores its same framing even after transfers. The original two/three-pallet behavior and accepted staggered geometry remain intact.

## Resolved Fit Conflict

At both 1366×768 and 1024×768, the exact original Overview camera places Pallet A's top-gear target and label/drop target under the Original Shipment panel. Pallet B and C label/drop targets sit under the Current Loads cards. Original Front View still places B/C label/drop targets under those cards. The six-pallet geometry is wider/deeper than the original single-row lesson.

Evidence: `.build/camera-diagnosis.json` and `.build/baseline-six-{1366,1024}-{overview,front-view}.png`. The diagnosis also reproduces Build011's camera jump after moving a gear from B to A. These measured occlusions were reported for an owner decision because the earlier instruction requested the exact original camera and required reporting clipping before adjusting it.

The owner explicitly approved one fixed wider six-pallet view using the existing angle and controls because visibility is important. The correction fits the unchanged geometry into the teaching area once, without action-driven refitting. The baseline diagnosis and screenshots remain historical evidence of why the adjustment was needed.

## Verification

The browser suite measures clockwise rendered particle positions along all four sides, gold fill/outline and middle translucency, engagement/lifecycle/reduced motion, and unchanged camera transforms across repeated front/back moves and split/merge/undo/reset for counts two through six. Six-pallet framing tests compare the original camera directions/FOV and check top gears, drop targets and all projected placard corners against the UI at 1366×768 and 1024×768. View round-trips after transfers must restore the same pose. Existing interaction, lesson, production identity and offline regressions remain required.

Final generated evidence lives in `.build/focused-browser-production.json`, `.build/portable-review/verification.json` and `.build/CURRENT_BUILD.md`. The review branch is `review/clockwise-cue-stable-camera-20261004`. This checkout's `.build/ledger.jsonl` is the sole continuation allocator, retaining all earlier reservations including the diagnostic; older ledgers remain preserved. Automated QA uses installed Edge; manual Vivaldi review of this correction remains for the owner.

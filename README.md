# Play Online

**[Play MeanMachine Online](https://abbyusesaithatcodes.github.io/MeanMachine/)**

The October 9 publication promotes the existing tested runtime. See [Verified Pages Release](deployment/RELEASE.md) for identity, checks, and retained limitations. Earlier local-only status below is historical.

# Mean Machine JSON Content Review

This isolated review retrofits tested Build018 with editable content. Start with [Content Authoring](docs/content/AUTHORING.md), [Architecture](docs/content/ARCHITECTURE.md), and [Validation Evidence](docs/content/REVIEW.md). The current local artifact is recorded in `.build/CURRENT_BUILD.md`; older build references below are historical.

# Mean Machine

A local 3D classroom game for exploring the arithmetic mean by sharing colorful foam packing rings equally among pallets.

**Status: Local Review.** Prediction, sharing, calculation, and explanation remain in that order. Gold triangles travel clockwise around the required field until it or its answer button is engaged; the steady border and ready cue remain. Whole top gears split on double-click; either of two matching adjacent top halves can merge the pair. Keyboard controls provide the same actions. Original pallet records remain visible and fixed. No publication or deployment is authorized.

## Run The Local Prototype

Six pallets retain the original Overview/Front View angles and controls with closer fixed framing. Cargo moves, splits, merges, undo and reset do not refit the camera. Dragged gears stay level above the floor until their stack landing. The accepted clockwise arrows complete a circuit every 1.6 seconds. See [Tighter Framing And Level Drag Review](docs/TIGHTER-FRAMING-LEVEL-DRAG-REVIEW.md).

Use Node 22.12+ and the pinned dependencies already present in this review checkout. Run `npm test`, then `npm run dev` and open `http://127.0.0.1:4174` (or set `MEAN_DEV_PORT`). These invoke the same package scripts as pnpm. No dependency or browser installation is part of this review. The two invented shipments remain **2, 4, 9** and **2, 5**. Record a prediction, share equally, dispatch, calculate, and explain.

Choose **Try 6-Pallet Example** beside the shipment controls for direct access to the existing six-pallet task. **Reference → Larger Layout Review** retains all three fixed four-, five-, and six-pallet examples. Larger arrangements use two staggered rows, camera fitting, and readable pallet letters/quantities. No generated exercise bank was added. See [Cue And Example Discovery Review](docs/CUE-DISCOVERY-REVIEW.md) and [Focused Local Review](docs/FOCUSED-REVIEW.md).

`npm run build` creates an identified folder and review ZIP under `artifacts/`. Extract the ZIP and open **Start-Mean-Machine.html** in Vivaldi or Edge to play offline without a server or dependency install. Automated verification uses installed Edge; Vivaldi is the requested manual review browser. The build includes the Three.js MIT license and full build manifest.

`npm run preview` serves the existing build on `http://127.0.0.1:4175` (or `MEAN_PREVIEW_PORT`) without minting another identity. Browser tests expect a running server: set `MEAN_BASE_URL`, `MEAN_BROWSER_CHANNEL=msedge`, `MEAN_PRODUCTION=1`, and `MEAN_OFFLINE=1`, then run `npm run test:browser`. `MEAN_BROWSER_EXECUTABLE` optionally selects an installed executable. `node scripts/verify-build.mjs` verifies artifact identity; `node scripts/verify-portable-review.mjs` extracts the actual ZIP, completes both original lessons and all larger review examples offline, and compares their scene states with the served build. Its results are saved under `.build/portable-review/`.

See [Local Classroom Slice](docs/LOCAL-ROADMAP.md), [Shared Asset Integration](docs/SHARED-ASSET-INTEGRATION.md), [Build Identity](docs/BUILD_IDENTITY.md), and [Working Guidance](AGENTS.md). Generated current-build details are in `.build/CURRENT_BUILD.md` after a successful build.

## Accepted Design Direction

**Chosen Cargo:** Big, stackable foam rings on wooden pallets, accepted September 28, 2026. Programmatic color and a small collection of raised/recessed surface patterns vary independently. Rings divide into equal, labeled layers with especially bouncy squash and stretch, overshoot, and settling; ordinary transfers have a smaller bounce. See [Colorful Foam Rings And Pallets](docs/MECHANICS-AND-3D-PROPOSAL.md#colorful-foam-rings-and-pallets) for the shared Mean Machine/Median Depot direction and the rules for preserving quantity.

Start with the [Mechanics And 3D Proposal](docs/MECHANICS-AND-3D-PROPOSAL.md), recorded September 28, 2026. It describes a proposed round, controls, fractional equal sharing, curriculum evidence, and the shared factory introduction with Median Depot. It distinguishes confirmed teacher direction from new recommendations.

The [Original Non-Binding Concept Notes](docs/CONCEPT-NOTES.md), recorded September 27, preserve the earlier discussion. The [Skimmer Statistics Curricular Goals](docs/curriculum/DM-1.4-Skimmer-Statistics-Curricular-Goals.md) provide a public planning adaptation with all 54 local audit IDs and links to the full DM reference. The complete audit is not copied verbatim because it includes quoted and reproduced PLTW content.

The historical proposals preserve the design discussion. Current local implementation scope is in [Local Classroom Slice](docs/LOCAL-ROADMAP.md); issues and PRs still require separate authorization.

Companion project: [Skimmer Data Center](https://github.com/AbbyUsesAIThatCodes/SkimmerDataCenter), focused on spreadsheet skills and interpreting skimmer flight data. The projects are separate so each can be developed and tested independently.

[Median Depot](https://github.com/AbbyUsesAIThatCodes/MedianDepot) is the companion median game. The shared 3D introduction begins outside a cartoon factory: Mean Machine enters the building, while Median Depot heads toward the rail yard. Students redistribute quantities in Mean Machine and sort intact observations in Median Depot.

Student laptops are the primary device target, with readable classroom projection. Worksheet development follows the playable game. The local prototype and its verification limits are recorded in [Local Checkpoint Verification](docs/VERIFICATION.md); no deployment is authorized.

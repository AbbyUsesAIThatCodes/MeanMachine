# Mean Machine

A proposed educational factory game for exploring the arithmetic mean by sharing colorful foam packing rings equally among pallets.

**Status: Local Development.** A bounded equal-sharing classroom prototype is being implemented. The exact math state, prediction/sharing/calculation/explanation controls, and build tooling are present. Canonical 3D asset integration and the shared factory entry remain pending; this checkpoint is not the finished 3D game. No publication or deployment is authorized.

## Run The Local Prototype

Use Node 22.12+ and pnpm. Run `pnpm install`, `pnpm test`, then `pnpm dev` and open `http://127.0.0.1:4174`. The two invented shipments are **2, 4, 9** and **2, 5**. Record a prediction, click a source and destination or use the keyboard controls, dispatch equal loads, then calculate and explain.

`pnpm build` creates an identified local artifact under `artifacts/`. `pnpm preview` serves that existing build on `http://127.0.0.1:4175` without minting another identity. `pnpm test:browser` expects the local dev server to be running; set `MEAN_BASE_URL` to test the production preview instead. Tests use installed Chrome.

See [Local Classroom Slice](docs/LOCAL-ROADMAP.md), [Shared Asset Integration](docs/SHARED-ASSET-INTEGRATION.md), [Build Identity](docs/BUILD_IDENTITY.md), and [Working Guidance](AGENTS.md). Generated current-build details are in `.build/CURRENT_BUILD.md` after a successful build.

## Accepted Design Direction

**Chosen Cargo:** Big, stackable foam rings on wooden pallets, accepted September 28, 2026. Programmatic color and a small collection of raised/recessed surface patterns vary independently. Rings divide into equal, labeled layers with especially bouncy squash and stretch, overshoot, and settling; ordinary transfers have a smaller bounce. See [Colorful Foam Rings And Pallets](docs/MECHANICS-AND-3D-PROPOSAL.md#colorful-foam-rings-and-pallets) for the shared Mean Machine/Median Depot direction and the rules for preserving quantity.

Start with the [Mechanics And 3D Proposal](docs/MECHANICS-AND-3D-PROPOSAL.md), recorded September 28, 2026. It describes a proposed round, controls, fractional equal sharing, curriculum evidence, and the shared factory introduction with Median Depot. It distinguishes confirmed teacher direction from new recommendations.

The [Original Non-Binding Concept Notes](docs/CONCEPT-NOTES.md), recorded September 27, preserve the earlier discussion. The [Skimmer Statistics Curricular Goals](docs/curriculum/DM-1.4-Skimmer-Statistics-Curricular-Goals.md) provide a public planning adaptation with all 54 local audit IDs and links to the full DM reference. The complete audit is not copied verbatim because it includes quoted and reproduced PLTW content.

The intended planning sequence is concept notes, a focused roadmap conversation, concrete issues, and implementation PRs.

Companion project: [Skimmer Data Center](https://github.com/AbbyUsesAIThatCodes/SkimmerDataCenter), focused on spreadsheet skills and interpreting skimmer flight data. The projects are separate so each can be developed and tested independently.

[Median Depot](https://github.com/AbbyUsesAIThatCodes/MedianDepot) is the companion median game. The shared 3D introduction begins outside a cartoon factory: Mean Machine enters the building, while Median Depot heads toward the rail yard. Students redistribute quantities in Mean Machine and sort intact observations in Median Depot.

Student laptops are the primary device target, with readable classroom projection. Worksheet development follows the playable game. The local prototype and its verification limits are recorded in [Local Checkpoint Verification](docs/VERIFICATION.md); no deployment is authorized.

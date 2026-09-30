# Build Identity

## Release And Compatibility

`release.json` is the authoritative release record. The first local prototype is development version `0.1.0`, milestone **Foam Rings**, covering the `0.1` development series. There is no published release, save format or public API. Local work uses scope `local-20260930-mean`; a real PR number will get its own scope and new ordinal on the next build, only after publication is authorized.

## Identity Inventory

| Surface | Source And Status |
| --- | --- |
| Version, Codename, Scope, Target | `release.json`; implemented. |
| Allocation | `scripts/build-identity.mjs`, `allocateOrdinal`; atomic directory lock and durable `.build/ledger.jsonl`; implemented. |
| Source Provenance | Full Git SHA, dirty flag and SHA-256 of tracked/unignored inputs; implemented. |
| Build-Time UTC | Captured once by `reserveBuild`, immediately before Vite injection; implemented. |
| Build Console | `scripts/build.mjs` / `scripts/dev.mjs`; full identity printed; implemented. |
| Artifact Directory | `artifacts/<full-id>/`; implemented. |
| Embedded Manifest | `build-manifest.json` via Vite emission; implemented. |
| Visible UI | Persistent wrapping/copyable footer in `src/main.js`; implemented. |
| Current Local Report | Generated `.build/CURRENT_BUILD.md` and `.build/latest.json`; implemented. |
| Local Development | Explicit Live Development Session label; HMR is not a release artifact. Restart the dev server for a new identity after changing build inputs. |
| CI, PR, Deployment | Not applicable to this local-only checkpoint. No published identity. |
| ZIP Filename | Pending final playable shared-asset integration; must retain full artifact identity. |

## Commands And Verification

Use Node 22.12+ (verified locally with Node 24) and pnpm. `pnpm install`, `pnpm test`, `pnpm dev`, `pnpm build` are the supported entrypoints. Vite's direct CLI build is not a supported artifact entrypoint because it would bypass identity injection. `pnpm dev` binds only `127.0.0.1:4174`.

Every artifact-producing build consumes an ordinal. Reservations are retained on failures; gaps are expected. A filesystem lock serializes allocation. Never delete `.build/ledger.jsonl` to reset a counter. The directory is local durable state and intentionally not committed; another checkout must use its own explicit local session scope or share the ledger. Public PR allocation is not implemented yet.

`tests/build-identity.test.mjs` checks concurrent reservations and scope separation. Browser verification compares the full footer ID with the embedded manifest. Two actual local builds must be checked for distinct identities before delivery, then the final reused artifact keeps its ID.

Generated manifests, current reports and build artifacts are ignored to avoid a timestamp/rebuild commit loop. Source reports should link to this inventory and the generated current-build record instead of asserting a stale timestamp.

# Traceability Matrix: Banana Platformer MVP

This table links feature requirements to tests. Keep FR/SC IDs in both test names/comments and this matrix.

| Requirement ID | Story | Test File | Test Name/Comment Ref | Notes |
|---|---|---|---|---|
| FR-001 | US2 | specs/001-banana-platformer/manual-test-checklist.md | FR-001/FR-017 checklist row | Static full-screen, no camera movement |
| FR-003 | US1 | tests/unit/us1-movement.test.ts | "moves left" and "moves right" | Left/right controls |
| FR-003 | US1 | tests/integration/us1-controls.integration.test.ts | "maps keyboard state for movement and jump" | Keyboard mapping |
| FR-004 | US1 | tests/unit/us1-jump-gravity.test.ts | "applies gravity over time" | Gravity behavior |
| FR-005 | US2 | tests/unit/us2-oneway-platforms.test.ts | "lands when crossing" and "does not block upward" | One-way platform behavior |
| FR-006 | US2 | tests/unit/us2-walls-bounds.test.ts | "blocks crossing into a wall" | Wall blocking |
| FR-010 | US3 | tests/unit/us3-respawn.test.ts | "schedules respawn" | Respawn timing and trigger |
| FR-013 | US4 | tests/unit/us4-completion-sequence.test.ts | "hides player after completion delay" | Completion sequence timing |
| FR-022 | US3 | tests/unit/us3-respawn.test.ts | "restores spawn defaults" | Respawn reset behavior |
| FR-023 | US3 | tests/unit/us3-collectibles.test.ts | "collects mini bananas once" | Collectibles stay collected |
| FR-024 | Cross | tests/integration/helpers/performanceProbe.ts | isPerformanceAcceptable | Performance threshold validation |
| SC-003 | Cross | specs/001-banana-platformer/manual-test-checklist.md | SC-003 checklist row | Two-tester bug-threshold outcome |
| SC-005 | Cross | specs/001-banana-platformer/manual-test-checklist.md | SC-005 checklist row | Sequence readability outcome |
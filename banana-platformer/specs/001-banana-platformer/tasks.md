# Tasks: Banana Platformer MVP

**Input**: Design documents from `/specs/001-banana-platformer/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: This task plan includes tests because the specification and constitution require test-first behavior checks for gameplay rules.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize TypeScript + PixiJS + Vite + Vitest project tooling and baseline structure

- [x] T001 Initialize npm project metadata and scripts in banana-platformer/package.json
- [ ] T002 Install and lock runtime/dev dependencies in banana-platformer/package-lock.json
- [x] T003 Configure TypeScript compiler options in banana-platformer/tsconfig.json
- [x] T004 [P] Configure Vite development and build settings in banana-platformer/vite.config.ts
- [x] T005 [P] Configure Vitest settings and test environment in banana-platformer/vitest.config.ts
- [x] T006 [P] Configure manual acceptance test workflow in banana-platformer/specs/001-banana-platformer/manual-test-checklist.md
- [x] T007 [P] Configure linting and formatting rules in banana-platformer/eslint.config.js
- [x] T008 [P] Add formatting defaults and ignore patterns in banana-platformer/.prettierrc
- [x] T009 Create app entry HTML shell for canvas host in banana-platformer/index.html
- [x] T010 Create base source and test directory structure with placeholders in banana-platformer/src/main.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build shared architecture and deterministic runtime blocks required by all user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T011 Record agreed requirement clarifications from chat in banana-platformer/specs/001-banana-platformer/spec.md
- [x] T012 Define shared runtime types and entity interfaces in banana-platformer/src/game/entities/types.ts
- [x] T013 [P] Define gameplay constants (sizes, timings, visibility, 60 FPS average / 50 FPS floor target, and browser support) in banana-platformer/src/game/config/gameConstants.ts
- [x] T014 [P] Implement normalized input state mapper for Arrow and A/W/D keys in banana-platformer/src/input/keyboardInput.ts
- [x] T015 [P] Implement fixed timestep simulation loop in banana-platformer/src/game/systems/fixedStepLoop.ts
- [x] T016 Implement geometry primitives and overlap checks in banana-platformer/src/game/physics/collision.ts
- [x] T017 Implement level metrics and coordinate helpers in banana-platformer/src/game/level/layoutMetrics.ts
- [x] T018 Implement level builder for floor, elevated platform, walls, flag, and pickup route in banana-platformer/src/game/level/buildLevel1.ts
- [x] T019 Implement game session state machine (intro, playing, respawning, completed) in banana-platformer/src/game/systems/gameSession.ts
- [x] T020 [P] Initialize Pixi application with pixel rendering settings in banana-platformer/src/render/pixiApp.ts
- [x] T021 [P] Create scene graph bootstrap and layer containers in banana-platformer/src/render/sceneGraph.ts
- [x] T022 Create deterministic simulation test harness utilities in banana-platformer/tests/unit/helpers/simHarness.ts
- [x] T023 Create requirements-to-tests traceability matrix scaffold using FR/SC IDs in banana-platformer/specs/001-banana-platformer/traceability.md

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Move the banana through a small side-view level (Priority: P1) 🎯 MVP

**Goal**: Deliver responsive left/right movement, jump, gravity, grounding, and basic control wiring

**Independent Test**: Launch game and verify left/right movement, facing direction, single jump behavior, gravity, and stable landing without clipping

### Tests for User Story 1

- [x] T024 [P] [US1] Add movement and facing unit tests in banana-platformer/tests/unit/us1-movement.test.ts
- [x] T025 [P] [US1] Add jump, gravity, and single-jump lockout tests in banana-platformer/tests/unit/us1-jump-gravity.test.ts
- [x] T026 [P] [US1] Add control mapping integration test for Arrow and A/W/D inputs in banana-platformer/tests/integration/us1-controls.integration.test.ts

### Implementation for User Story 1

- [x] T027 [US1] Implement player movement and facing update system in banana-platformer/src/game/systems/playerController.ts
- [x] T028 [US1] Implement vertical motion integration and gravity application in banana-platformer/src/game/physics/verticalMotion.ts
- [x] T029 [US1] Implement ground contact resolution for stable landing in banana-platformer/src/game/physics/groundResolver.ts
- [x] T030 [US1] Render banana player with direction-facing visual update in banana-platformer/src/render/playerSprite.ts
- [x] T031 [US1] Wire input, simulation step, and player systems in banana-platformer/src/game/scenes/levelScene.ts
- [x] T032 [US1] Connect scene startup and update loop in banana-platformer/src/main.ts
- [x] T033 [US1] Map US1 requirements to tests in banana-platformer/specs/001-banana-platformer/traceability.md

**Checkpoint**: User Story 1 should be fully functional and independently testable

---

## Phase 4: User Story 2 - Explore platforms and avoid walls while progressing (Priority: P1)

**Goal**: Deliver one-way platform behavior (up allowed, down not allowed), wall blocking, and static level boundaries

**Independent Test**: Player can jump through one-way platforms from below, land from above, and cannot pass through vertical walls or leave play area

### Tests for User Story 2

- [x] T034 [P] [US2] Add one-way platform behavior unit tests in banana-platformer/tests/unit/us2-oneway-platforms.test.ts
- [x] T035 [P] [US2] Add wall collision and boundary clamp unit tests in banana-platformer/tests/unit/us2-walls-bounds.test.ts
- [x] T036 [P] [US2] Add traversal integration test for floor-to-elevated route in banana-platformer/tests/integration/us2-platform-traversal.integration.test.ts

### Implementation for User Story 2

- [x] T037 [US2] Implement one-way platform collision solver in banana-platformer/src/game/physics/oneWayPlatform.ts
- [x] T038 [US2] Implement wall and world-boundary lateral blockers in banana-platformer/src/game/physics/bounds.ts
- [x] T039 [US2] Integrate platform and wall collision order in banana-platformer/src/game/scenes/levelScene.ts
- [x] T040 [US2] Render floor, elevated platform, and wall visuals with retro game style in banana-platformer/src/render/levelSprites.ts
- [x] T041 [US2] Validate platform center and vertical spacing constants in banana-platformer/src/game/level/layoutMetrics.ts
- [x] T042 [US2] Map US2 requirements to tests in banana-platformer/specs/001-banana-platformer/traceability.md

**Checkpoint**: User Stories 1 and 2 both function independently

---

## Phase 5: User Story 3 - Collect optional mini bananas and finish the level (Priority: P1)

**Goal**: Deliver optional collectible pickups, flag completion, and respawn recovery flow

**Independent Test**: Mini bananas disappear once on overlap, flag completes level regardless of collectible count, and falling out triggers 2-second respawn

### Tests for User Story 3

- [x] T043 [P] [US3] Add one-time collectible pickup unit tests in banana-platformer/tests/unit/us3-collectibles.test.ts
- [x] T044 [P] [US3] Add flag completion and optional-collectible unit tests in banana-platformer/tests/unit/us3-flag-completion.test.ts
- [x] T045 [P] [US3] Add respawn timing and reset-state unit tests in banana-platformer/tests/unit/us3-respawn.test.ts
- [x] T046 [P] [US3] Add end-to-end level completion integration test in banana-platformer/tests/integration/us3-level-completion.integration.test.ts

### Implementation for User Story 3

- [x] T047 [US3] Implement mini-banana placement and collection system in banana-platformer/src/game/systems/collectiblesSystem.ts
- [x] T048 [US3] Implement finish flag overlap and completion state transition in banana-platformer/src/game/systems/flagSystem.ts
- [x] T049 [US3] Implement hazard boundary detection (player top below screen) in banana-platformer/src/game/systems/hazardSystem.ts
- [x] T050 [US3] Implement respawn scheduler and player reset behavior in banana-platformer/src/game/systems/respawnSystem.ts
- [x] T051 [US3] Render mini bananas and flag state color swap in banana-platformer/src/render/objectSprites.ts
- [x] T052 [US3] Integrate collectible, flag, hazard, and respawn systems in banana-platformer/src/game/scenes/levelScene.ts
- [x] T053 [US3] Map US3 requirements to tests in banana-platformer/specs/001-banana-platformer/traceability.md

**Checkpoint**: User Stories 1, 2, and 3 are independently functional

---

## Phase 6: User Story 4 - Start and finish animations support arcade feel (Priority: P2)

**Goal**: Deliver intro text timing, character reveal, completion text animation, and delayed player disappearance

**Independent Test**: Intro displays for 3 seconds, player reveal occurs after intro, completion text animates clearly, and player disappears after short delay

### Tests for User Story 4

- [x] T054 [P] [US4] Add intro timing and reveal unit tests in banana-platformer/tests/unit/us4-intro-sequence.test.ts
- [x] T055 [P] [US4] Add completion sequence timing unit tests (including 1.5s delay) in banana-platformer/tests/unit/us4-completion-sequence.test.ts
- [x] T056 [P] [US4] Add sequence integration test from intro to completed state in banana-platformer/tests/integration/us4-sequences.integration.test.ts

### Implementation for User Story 4

- [x] T057 [US4] Implement intro sequence state transitions and timers in banana-platformer/src/game/systems/introSystem.ts
- [x] T058 [US4] Implement completion sequence timing and player disappearance in banana-platformer/src/game/systems/completionSystem.ts
- [x] T059 [US4] Implement yellow-on-black framed UI text box renderer with agreed text sizing in banana-platformer/src/render/uiTextBox.ts
- [x] T060 [US4] Integrate intro and completion animation systems in banana-platformer/src/game/scenes/levelScene.ts
- [x] T061 [US4] Map US4 requirements to tests in banana-platformer/specs/001-banana-platformer/traceability.md

**Checkpoint**: All user stories are independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final quality, compatibility, and delivery-readiness checks across all stories

- [x] T062 [P] Add manual end-to-end acceptance checklist mapped to FR/SC in banana-platformer/specs/001-banana-platformer/manual-test-checklist.md
- [x] T063 [P] Add browser compatibility manual verification steps for Chrome, Firefox, and Edge in banana-platformer/specs/001-banana-platformer/manual-test-checklist.md
- [x] T064 [P] Add performance probe helper for FPS floor checks in banana-platformer/tests/integration/helpers/performanceProbe.ts
- [x] T065 [P] Document browser support and accessibility scope decision in banana-platformer/specs/001-banana-platformer/quickstart.md
- [x] T066 [P] Create 2-tester bug-log template and severity definitions in banana-platformer/specs/001-banana-platformer/playtest-report-template.md
- [x] T067 [P] Complete FR/SC to test-case traceability mapping in banana-platformer/specs/001-banana-platformer/traceability.md
- [x] T068 Run lint, unit, and integration test commands and record outcomes in banana-platformer/specs/001-banana-platformer/playtest-results.md
- [x] T069 Validate quickstart commands against actual project scripts in banana-platformer/specs/001-banana-platformer/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies, start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 and blocks all user story work
- **User Story Phases (Phase 3-6)**: Depend on Phase 2 completion
- **Polish (Phase 7)**: Depends on desired user stories being complete

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2, no story dependency
- **US2 (P1)**: Can start after Phase 2, independent of US1 for core mechanics
- **US3 (P1)**: Can start after Phase 2, uses shared physics/session systems
- **US4 (P2)**: Can start after Phase 2, integrates with completion/session states from US3

### Within Each User Story

- Write tests first and confirm fail state before implementation
- Implement core systems before render adapters that depend on them
- Update traceability mapping before story checkpoint sign-off

### Parallel Opportunities

- Phase 1 tasks marked [P] can run concurrently
- Phase 2 tasks T013, T014, T015, T020, T021 can run in parallel after T012
- Within each story, all [P] tests can run in parallel
- Rendering tasks can run in parallel with logic tasks when files do not overlap

---

## Parallel Example: User Story 3

```bash
Task: "T043 [US3] Add one-time collectible pickup unit tests in banana-platformer/tests/unit/us3-collectibles.test.ts"
Task: "T044 [US3] Add flag completion and optional-collectible unit tests in banana-platformer/tests/unit/us3-flag-completion.test.ts"
Task: "T045 [US3] Add respawn timing and reset-state unit tests in banana-platformer/tests/unit/us3-respawn.test.ts"

Task: "T047 [US3] Implement mini-banana placement and collection system in banana-platformer/src/game/systems/collectiblesSystem.ts"
Task: "T051 [US3] Render mini bananas and flag state color swap in banana-platformer/src/render/objectSprites.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2
2. Complete Phase 3 (US1)
3. Validate US1 independently before expanding scope

### Incremental Delivery

1. Deliver US1 movement loop
2. Add US2 collision and level boundary depth
3. Add US3 collectibles and completion loop
4. Add US4 presentation polish
5. Execute Phase 7 release-quality checks

### Parallel Team Strategy

1. Team completes Phase 1 and Phase 2 together
2. One developer handles logic systems while another handles render adapters for each story
3. Merge at story checkpoints after tests pass

---

## Notes

- [P] tasks indicate independent files and low coupling
- [US#] labels provide direct story traceability
- Keep deterministic simulation and pure game logic boundaries intact
- Use clarified requirement values in spec as source of truth

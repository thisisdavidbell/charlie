# Research: Banana Platformer MVP

## Decision Summary

Final implementation choice: TypeScript + PixiJS + Vite + Vitest.

Fallback options intentionally retained:
- Option B: Python 3 + Pygame CE + pytest
- Option C: JavaScript + PixiJS/Canvas + Vitest/Jest

## Goals Driving the Decision

- Reliability for core gameplay logic (movement, collision, completion state)
- Maintainability as features expand (more levels, hazards, simple enemies)
- Practical testing in constrained environments (logic first, structured manual gameplay checks)
- Strong fit for crisp 8-bit visual style
- Lightweight approach that respects project constitution (no heavyweight game engine)

## Options Reviewed

### Option A: TypeScript + PixiJS + Vite + Vitest

Pros:
- Strong type safety for safer refactors and clearer interfaces
- Good test ergonomics for pure game-logic modules
- Browser distribution is easy for players
- Excellent support for pixel-art scaling and sprite rendering

Cons:
- Tooling setup complexity is higher than raw JavaScript
- Requires architecture discipline to prevent rendering logic from leaking into core rules

Decision:
- Selected as primary path due to best reliability/maintainability balance.

### Option B: Python 3 + Pygame CE + pytest

Pros:
- Very readable language and rapid iteration
- Straightforward for desktop prototype development

Cons:
- Distribution and install path less convenient for non-technical players
- UI/input automation less streamlined than browser-based workflows

Decision:
- Kept as contingency if web stack overhead becomes a blocker.

### Option C: JavaScript + PixiJS/Canvas + Vitest/Jest

Pros:
- Lower up-front complexity
- Familiar web runtime

Cons:
- Less long-term safety during refactors (no static typing by default)
- Larger risk of subtle runtime regressions as the codebase grows

Decision:
- Kept as fallback for emergency simplification only.

### Option D: Heavyweight engine (Godot/Unity)

Pros:
- Rich editor ecosystem and built-in systems

Cons:
- Conflicts with constitution preference for a lightweight build
- Unnecessary complexity for MVP scope

Decision:
- Rejected for current scope.

## Key Technical Research Outcomes

### 1. Rendering and Pixel Fidelity

Chosen approach:
- Use PixiJS with nearest-neighbor scaling and integer-aligned positions where practical.

Reason:
- Maintains sharp 8-bit visuals and reduces blur artifacts.

### 2. Maintainable Architecture Pattern

Chosen approach:
- Keep game rules in pure TypeScript modules under src/game.
- Treat PixiJS as a rendering adapter layer under src/render.

Reason:
- Core behavior remains unit-testable without graphics runtime.

### 3. Physics and Collision Confidence

Chosen approach:
- Deterministic fixed-timestep update loop for simulation logic.
- Define explicit collision rules for floor, one-way platforms, walls, and hazards.

Reason:
- Improves test reproducibility and reduces frame-rate dependent bugs.

### 4. Testing Strategy

Chosen approach:
- Unit tests: physics, collision, pickup collection, finish detection, respawn timing.
- Integration tests: scene-level update with mocked input timeline.
- Manual acceptance checklist: browser launch, controls, sequence readability, and completion flow.

Reason:
- Fast feedback at unit level plus practical confidence that the game boots and plays in supported desktop browsers.

## Risks and Mitigations

Risk: Rendering code and gameplay logic become tightly coupled.
Mitigation: Enforce module boundaries and test logic without Pixi in unit tests.

Risk: Jump feel and collisions regress as new features are added.
Mitigation: Add behavior tests before changes and maintain tuning constants in one config module.

Risk: Browser differences affect behavior.
Mitigation: Run a structured manual browser matrix checklist across Chrome, Firefox, and Edge.

Risk: Team may need to switch stack later.
Mitigation: Keep alternative options and tradeoffs documented in plan.md and this research file.

## Environment Note

- In the current Linux Mint environment, Playwright browser execution requires system dependencies that are not installable without elevated access.
- The delivery path remains fully viable by prioritizing Vitest unit/integration coverage plus structured manual playtesting.

## Final Research Recommendation

Proceed with Option A for implementation and tasks generation.
Keep fallback options documented and unchanged for future reevaluation checkpoints.

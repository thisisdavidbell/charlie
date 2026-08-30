# Implementation Plan: Banana Platformer MVP

**Branch**: `001-banana-platformer` | **Date**: 2026-08-30 | **Spec**: `/specs/001-banana-platformer/spec.md`

**Input**: Feature specification from `/specs/001-banana-platformer/spec.md`

## Summary

Build a single-level 2D banana platformer with clear movement, jump physics, one-way platforms, optional mini-banana pickups, and a finish flag. Prioritize a reliable and maintainable codebase with strong automated testing and easy future feature growth (more levels, hazards, basic enemies, simple UI states).

Recommended direction: TypeScript + HTML5 Canvas (using PixiJS for rendering only) with game logic in pure TypeScript modules and deterministic physics/collision tests.

## Technology Options and Decision Support

This section compares practical stacks for this project and user profile (non-technical owner, high reliability goal, easy future updates, and retro 8-bit style).

### Option A (Recommended): TypeScript + PixiJS + Vite + Vitest

**What it is**
- Language: TypeScript
- Rendering: PixiJS (2D rendering library)
- Build/dev: Vite
- Testing: Vitest (unit), Playwright (smoke end-to-end)

**Pros**
- Strong maintainability from TypeScript static typing and editor tooling.
- High testability when game rules are kept in pure logic modules (movement, collision, win state, pickup state).
- Easy distribution: runs in browser, no install for players.
- Great fit for 8-bit style via nearest-neighbor scaling, sprite sheets, and palette control.
- Good long-term path for adding menus, settings, and more levels without re-architecture.

**Cons**
- Slightly steeper setup than plain JavaScript.
- Requires discipline to keep logic separated from rendering.
- Web tooling (npm, bundler) introduces some project overhead.

**Best for this project because**
- It balances reliability, maintainability, and easy testing better than alternatives for a small-to-medium browser game.

### Option B: Python 3 + Pygame Community Edition + pytest

**What it is**
- Language: Python 3
- Rendering/input loop: Pygame CE
- Testing: pytest

**Pros**
- Very beginner-friendly syntax and fast iteration.
- Simple local setup for a desktop prototype.
- Excellent for readable game logic and quick experimentation.
- 8-bit graphics are straightforward to implement.

**Cons**
- Distribution is harder for non-technical players (desktop packaging or Python runtime needed).
- Automated UI/input tests are usually less ergonomic than modern browser testing.
- Type safety is optional, so large future growth may need extra discipline.

**When to choose this**
- Choose if local desktop play is enough and fastest early learning/prototyping is the top priority.

### Option C: JavaScript (no TypeScript) + Canvas/PixiJS + Jest/Vitest

**What it is**
- Language: JavaScript
- Rendering: Canvas API directly or PixiJS
- Testing: Jest or Vitest

**Pros**
- Lowest learning friction for web delivery.
- Smaller setup than TypeScript.

**Cons**
- Lower long-term maintainability due to weaker type safety.
- Refactors and feature additions are riskier over time.

**When to choose this**
- Choose only if immediate simplicity is more important than future safety.

### Option D (Not recommended for this constitution): Full game engines (Godot/Unity)

**Pros**
- Mature tooling and built-in systems.

**Cons**
- Violates or strains the constitution preference to avoid heavyweight external engines/tooling.
- Adds complexity not required for the MVP.

**When to choose this**
- Not suitable for the current project constraints.

## Final Recommendation

Choose **Option A: TypeScript + PixiJS + Vite + Vitest (+ Playwright smoke tests)**.

Reasoning:
- Most reliable and maintainable over time for adding features.
- Easiest to test at both logic level and playable-browser level.
- Strong match for pixel/8-bit style.
- Aligns with constitution goals: simple delivery, test-first iteration, no heavyweight engine.

If you strongly prefer Python learning flow, Option B is a valid second-best path for local desktop play, but it is less future-proof for easy sharing and browser-based testing.

## Technical Context

**Language/Version**: TypeScript 5.x (ES2022 target), Node.js 20 LTS for tooling

**Primary Dependencies**:
- `pixi.js` (rendering)
- `vite` (dev server/build)
- `vitest` (unit tests)
- `playwright` (smoke browser test)
- `eslint` + `@typescript-eslint/*` + `prettier` (quality/consistency)

**Storage**: N/A for MVP (optional localStorage later for settings only)

**Testing**:
- Unit: `vitest` for physics, collision, collectible handling, level completion, respawn timer logic
- Integration/smoke: `playwright` for basic launch and input sanity

**Target Platform**: Desktop and laptop web browsers (latest Chrome/Firefox/Edge)

**Project Type**: Single-project web game

**Performance Goals**:
- Stable 60 FPS on mainstream laptop hardware
- Input-to-motion latency perceived as immediate (< 100 ms end-to-end)

**Constraints**:
- Static camera only (no scrolling)
- 8-bit readability and high-contrast visuals
- Keep systems small and modular; avoid heavyweight engines

**Scale/Scope**:
- MVP: one level, one player character, optional collectibles, one finish condition
- Near-term extension path: 3-5 levels, basic hazards, simple start/pause/restart UI

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Player-First Gameplay**: PASS. Stack supports deterministic movement and collision testing.
- **II. 8-Bit Integrity**: PASS. Pixel rendering, constrained palette, and sprite-based visuals are first-class.
- **III. Test-First Iteration**: PASS. Vitest + Playwright allow fail-then-fix loops.
- **IV. Collectible-Driven Progression**: PASS. Optional collectible state is easy to enforce in pure logic.
- **V. Simple, Playable Delivery**: PASS. Lightweight web stack, no heavyweight engine.

No constitution violations identified.

## Project Structure

### Documentation (this feature)

```text
specs/001-banana-platformer/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
banana-platformer/
├── src/
│   ├── game/
│   │   ├── config/
│   │   ├── entities/
│   │   ├── physics/
│   │   ├── systems/
│   │   ├── level/
│   │   └── scenes/
│   ├── render/
│   ├── input/
│   ├── assets/
│   └── main.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   └── smoke/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── playwright.config.ts
```

**Structure Decision**: Single TypeScript web game with strict separation between pure game logic (`src/game`) and rendering/input adapters (`src/render`, `src/input`) to maximize testability and maintainability.

## Complexity Tracking

No constitution exceptions requiring justification.
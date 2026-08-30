# Quickstart: Banana Platformer MVP

## Prerequisites

- Node.js 20 LTS
- npm 10+
- Modern browser (Chrome, Firefox, or Edge)

## Initial Setup

1. Open a terminal in banana-platformer.
2. Install dependencies.

```bash
npm install
```

## Run the Game in Development

```bash
npm run dev
```

Expected result:
- Vite dev server starts.
- Browser shows the game with a static black background.
- Start text appears for 3 seconds before player controls become active.

## Build for Production

```bash
npm run build
```

Expected result:
- Optimized output emitted to dist/.

## Run Tests

Unit and integration tests:

```bash
npm run test
```

Watch mode (optional while developing):

```bash
npm run test:watch
```

Smoke browser test:

```bash
npm run test:smoke
```

## Suggested npm Scripts

- dev: vite
- build: vite build
- preview: vite preview
- lint: eslint .
- format: prettier --check .
- test: vitest run
- test:watch: vitest
- test:smoke: playwright test

## First Implementation Checklist

- Create fixed timestep game loop in src/game.
- Implement player movement and single-jump rules.
- Implement one-way platform collision and wall blocking.
- Implement hazard fall + 2-second respawn.
- Implement mini-banana collection and flag completion.
- Implement start and completion animation state transitions.
- Add unit tests for every rule above before final polish.

## Fallback Trigger Checkpoint

Re-evaluate stack only if one of the following occurs:
- Build/test toolchain repeatedly blocks progress for more than one day.
- Browser smoke tests are unstable after basic stabilization.
- Team cannot maintain TypeScript project structure despite agreed conventions.

If triggered, use documented fallback options in plan.md and research.md.

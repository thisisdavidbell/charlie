# Agents

## Banana Platformer

### Project Summary
- Name: Banana Platformer
- Location: banana-platformer/
- Type: 2D browser platformer
- Status: Completed and playtested

### Tech Stack
- TypeScript
- PixiJS
- Vite
- Vitest

### Common Commands

```bash
cd banana-platformer
npm install
npm run dev
```

Optional validation commands:

```bash
npm run lint
npm run test
npm run build
```

### Notes
- The game starts in a browser from the Vite dev server URL (usually http://localhost:5173).
- Manual acceptance steps are documented in specs/001-banana-platformer/manual-test-checklist.md.
- Requirements-to-tests traceability is documented in specs/001-banana-platformer/traceability.md.

## Development

See [DEVELOPMENT-PROCESS.md](DEVELOPMENT-PROCESS.md) for the project's spec-driven development process.



## AI Assistance

- The AI Agent must follow the users instructions at all times.
- The AI Agent can make suggestions and provide feedback.
- The AI Agent must never implement any changes without confirming with the user first.
- The AI must never perform its own tasks, or implement ideas without confirmation.
- The AI agent must never automtically pick an idea unless told to do so  

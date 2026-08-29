<!--
Sync Impact Report
Version change: unversioned -> 1.0.0
Modified principles: none -> I. Player-First Gameplay, II. 8-Bit Integrity, III. Test-First Iteration, IV. Collectible-Driven Progression, V. Simple, Playable Delivery
Added sections: Project Constraints, Development Workflow
Removed sections: none
Follow-up TODOs: none
-->

# Banana Platformer Constitution

## Core Principles

### I. Player-First Gameplay
The player must always feel in control of a responsive banana character. Movement, jumping, collision, and level progression must prioritize readability, fairness, and fun over complexity. If a mechanic causes confusion or frustration without a clear reward, it must be simplified or removed.

This principle exists because the project is a short, playable arcade experience. The core goal is to make the banana feel satisfying to move, easy to understand, and rewarding to complete.

### II. 8-Bit Integrity
All visual and audio choices must support a crisp, retro 2D platformer aesthetic inspired by classic 8-bit games. Levels should use simple shapes, clear contrast, limited palettes, and readable silhouettes so the banana, hazards, platforms, and collectibles remain instantly recognizable.

This principle prevents the game from drifting into overly realistic or visually ambiguous design. The 8-bit style is part of the product identity and must be preserved in both art and gameplay readability.

### III. Test-First Iteration
Before implementing a major mechanic, collision fix, or level rule, the team must define the expected behavior in a small, testable check. The prioritised workflow is: define the behavior, verify it fails before the change, implement the minimal fix, then verify the behavior again.

This principle keeps movement, pickups, win states, and hazard logic reliable. It also reduces regressions when adding new platforms, enemy patterns, or level layouts.

### IV. Collectible-Driven Progression
The banana's objective is to reach the end of the level, and collecting mini bananas is optional for completion. Collectibles must be clearly visible, easy to track, and rewarding to collect when the player chooses to explore for them, but they must never gate progress or make a level feel mandatory to finish.

This principle ensures the core loop remains legible: explore, collect, move, survive, finish. Mini bananas are optional rewards that add fun and personality without making the level frustrating or unfair.

### V. Simple, Playable Delivery
The project must remain intentionally small, focused, and playable. Scope additions are allowed only when they directly improve the banana platformer loop, readability, or user experience. Feature creep, over-engineering, and non-essential polish are discouraged unless they are required for clarity or fun.

This principle preserves momentum and keeps the project achievable. The game should ship as a compact arcade experience instead of a sprawling system with uncertain scope.

## Project Constraints

The game must be a 2D platformer built around a banana player character with a clear win condition: reach the end of the level. Collecting mini bananas is encouraged as optional bonus fun, not a requirement to finish. The experience should feel like a simple, playful prototype or short level sequence without dependency on an external game engine or heavyweight tooling.

The project must keep the code and art readable and maintainable. Core systems include player movement, platforms, collision detection, collectible pickups, win detection, and basic level layout. Visual choices should favour a constrained palette, pixel-like shapes, and readable 8-bit design.

This is a fun personal project, not a commercial product or app launch effort. The project must not add unnecessary complexity unless it directly improves the fun or playability of the banana platformer. Gameplay rules should be easy to explain, test, and debug.

## Development Workflow

All meaningful additions must be reviewed against the constitution before they are merged into the main project direction. Changes that alter movement feel, hazard logic, win conditions, or collectible design require explicit check against the player-first and collectible-driven progression principles.

The default workflow is:
- define the intended game behavior in plain terms;
- test the behavior before implementation;
- implement the smallest change that satisfies the requirement;
- verify the result in the playable loop;
- document any intentional design trade-off that affects fun, readability, or retro style.

This project values short feedback loops and visible progress. A feature is considered acceptable only when it improves the banana platformer feel, clarity, or completeness without weakening the original design goals.

## Governance

This constitution is the governing standard for the Banana Platformer project as a fun personal build. It guides design decisions when they conflict, but it does not turn the project into a formal app production process. The goal is to keep the game playful, readable, and enjoyable while making steady progress on a small creative project.

Amendments require a clear rationale, a brief description of the changed behavior, and confirmation that the revised rule remains consistent with the project's core goals. Material changes to movement, win conditions, or collectible structure must be documented before they become permanent. Minor wording or formatting revisions may be accepted without a large review process, but they still require version tracking.

Compliance is reviewed by checking whether the current work preserves the player's clarity, the retro 8-bit identity, the test-first habit, and the relaxed fun-first objective of the project. If a feature weakens any of these principles, it should be revised or explicitly justified before continuing.

**Version**: 1.0.0 | **Ratified**: 2026-08-29 | **Last Amended**: 2026-08-29

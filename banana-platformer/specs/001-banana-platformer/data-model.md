# Data Model: Banana Platformer MVP

## Modeling Approach

The MVP uses in-memory runtime state only. No persistent storage is required.

Goal:
- Keep state small, explicit, and easy to test.
- Separate pure simulation state from rendering objects.

## Core Entities

### Player

Purpose:
- Represents the controllable banana character and movement state.

Fields:
- id: string
- position: Vector2
- velocity: Vector2
- size: Size
- facing: "left" | "right"
- onGround: boolean
- jumpConsumed: boolean
- state: "hidden" | "spawning" | "active" | "respawning" | "completed"
- respawnAtMs: number | null

Rules:
- jumpConsumed becomes true after a jump starts, and resets on landing.
- onGround true is required to trigger a new jump in MVP.

### Platform

Purpose:
- Solid horizontal surfaces including floor and elevated platform.

Fields:
- id: string
- rect: Rect
- type: "floor" | "elevated" | "start"
- color: string
- oneWay: boolean

Rules:
- oneWay true means collision from above only.

### Wall

Purpose:
- Vertical boundaries that block lateral movement.

Fields:
- id: string
- rect: Rect
- side: "left" | "right"

Rules:
- Walls are always fully solid.

### Flag

Purpose:
- Marks level completion zone and visual state.

Fields:
- id: string
- rect: Rect
- state: "inactive" | "completed"

Rules:
- Player overlap with inactive flag transitions level to completed.

### MiniBanana

Purpose:
- Optional collectible pickups on route.

Fields:
- id: string
- rect: Rect
- collected: boolean

Rules:
- Pickup is one-time; collected items are removed from active collision checks.

### Level

Purpose:
- Static layout and generated entity placement.

Fields:
- id: string
- width: number
- height: number
- platforms: Platform[]
- walls: Wall[]
- flag: Flag
- miniBananas: MiniBanana[]
- spawnPoint: Vector2

Rules:
- Dimensions and object sizes must obey FR-018 through FR-021.

### GameSession

Purpose:
- Top-level runtime state machine.

Fields:
- phase: "intro" | "playing" | "respawning" | "completed"
- level: Level
- player: Player
- elapsedMs: number
- introEndsAtMs: number
- completionStartedAtMs: number | null

Rules:
- Intro lasts 3000 ms, then phase transitions to playing.
- Respawn delay is 2000 ms.

## Shared Value Types

### Vector2
- x: number
- y: number

### Size
- width: number
- height: number

### Rect
- x: number
- y: number
- width: number
- height: number

### InputState
- left: boolean
- right: boolean
- jumpPressed: boolean

## Domain Events

- IntroStarted
- IntroFinished
- PlayerJumped
- PlayerLanded
- PlayerFellOutOfBounds
- PlayerRespawnScheduled
- PlayerRespawned
- MiniBananaCollected
- FlagReached
- LevelCompleted

## Invariants

- Player, flag, and platform height all equal screenHeight / 6.
- Wall width equals player height.
- Mini banana width and height are 0.5 x player width and height.
- Collectibles never gate completion.
- One-way platforms do not block upward jump-through motion.

## Test-Critical State Transitions

- playing -> respawning when player crosses hazard boundary
- respawning -> playing after 2000 ms and spawn reset
- playing -> completed on first flag overlap
- active pickup -> collected on first overlap only

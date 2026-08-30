# Gameplay Contract: Banana Platformer MVP

## Purpose

Defines behavior-level contracts that implementation and tests must satisfy.

## Contract 1: Horizontal Movement

Given:
- Phase is playing
- Player state is active

When:
- Left input is held

Then:
- Player x position decreases each update tick until blocked by a wall
- Player facing becomes left

And when:
- Right input is held

Then:
- Player x position increases each update tick until blocked by a wall
- Player facing becomes right

## Contract 2: Jump and Gravity

Given:
- Player onGround is true

When:
- Jump input is pressed

Then:
- Upward velocity impulse is applied once
- jumpConsumed becomes true

And:
- A second jump is not permitted while airborne
- Gravity continuously increases downward velocity until landing

## Contract 3: One-Way Platform Behavior

Given:
- Platform.oneWay is true

When:
- Player approaches platform from below while moving upward

Then:
- No blocking collision occurs

When:
- Player descends from above onto same platform

Then:
- Player lands and vertical penetration is resolved

## Contract 4: Wall and Boundary Blocking

Given:
- Player moves laterally into left or right wall

Then:
- Horizontal position is clamped to non-penetrating boundary
- Player cannot pass through wall

## Contract 5: Respawn on Fall

Given:
- Player crosses hazard threshold (bottom out-of-bounds)

Then:
- Player transitions to respawning state
- Respawn time is scheduled at currentTime + 2000 ms

When:
- Current time reaches scheduled respawn time

Then:
- Player position resets to spawn point
- Velocity resets to zero
- State returns to active playing

## Contract 6: Mini Banana Collection

Given:
- Uncollected mini banana overlaps player

Then:
- miniBanana.collected becomes true once
- Collected mini banana no longer appears or collides

## Contract 7: Level Completion

Given:
- Player overlaps inactive flag

Then:
- Flag state becomes completed immediately
- Game phase transitions to completed
- Completion animation sequence begins

And:
- Mini banana collection is not required before completion

## Contract 8: Intro and Completion Sequences

Given:
- Level has just loaded

Then:
- Intro phase lasts exactly 3000 ms with visible level title text

When:
- Completion phase starts

Then:
- Completion text animates into visible center area
- Player disappearance effect occurs after short delay

## Non-Functional Contract

- Simulation updates must be deterministic under fixed timestep.
- Rule logic must be unit-testable without rendering runtime.
- Visual implementation must preserve crisp, readable 8-bit style.

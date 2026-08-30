# Feature Specification: Banana Platformer MVP

**Feature Branch**: `001-banana-platformer`

**Created**: 2026-08-30

**Status**: Draft

**Input**: User description: "Build a single-level banana platformer with a banana player character, side-scrolling style physics, collectible mini bananas, and a level-completion flag, using the provided example asset guidance and level design rules."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Move the banana through a small side-view level (Priority: P1)

The player needs to control a banana character that moves left and right, jumps, and stays grounded on platforms while traversing a complete level.

**Why this priority**: This is the core gameplay loop. If movement and collision feel wrong, the entire game fails to be playable.

**Independent Test**: A player can launch the level, press left/right or A/D, use jump controls, and reach the finish flag without falling through the floor or passing through walls.

**Acceptance Scenarios**:

1. **Given** the level has loaded and the player character is on a platform, **When** the player presses the right arrow or D, **Then** the character moves right and faces right while staying inside the level bounds.
2. **Given** the level has loaded and the player character is on a platform, **When** the player presses the left arrow or A, **Then** the character moves left and faces left while staying inside the level bounds.
3. **Given** the player character is on a platform, **When** the player presses jump, **Then** the banana jumps upward, briefly travels upward against gravity, and lands back on the platform if the jump is not over a gap.
4. **Given** the player character falls off the level or through a gap, **When** the character reaches a hazard area, **Then** the player is respawned at the start position after a 2 second delay.

---

### User Story 2 - Explore labelled platforms and avoid walls while progressing (Priority: P1)

The player must navigate a level made of horizontal platforms, vertical walls, and a visible finish flag while respecting the rules of one-way solid surfaces and level boundaries.

**Why this priority**: The game is defined by precise platforming movement, not by freeform motion, so the level geometry and collision rules matter directly to fun and fairness.

**Independent Test**: A player can move between platforms by jumping upward or falling from one ledge to another, and cannot pass through walls or leave the visible level screen.

**Acceptance Scenarios**:

1. **Given** the character is standing on a platform, **When** the player jumps upward toward a higher platform, **Then** the character can land on it if the jump height is sufficient and the surface is reachable.
2. **Given** the character is on a platform, **When** they move beyond the level boundary or into a wall, **Then** the movement stops and the character stays inside the play area.
3. **Given** a platform is higher than the current one, **When** the player moves downward off the edge, **Then** the character falls to a lower platform or the floor rather than passing through it.

---

### User Story 3 - Collect optional mini bananas and finish the level (Priority: P1)

The player is encouraged to collect optional mini bananas placed along the route, then reach the flag to complete the level.

**Why this priority**: The win state and collectible loop define the structure of the game and create a satisfying objective beyond movement alone.

**Independent Test**: A player can overlap a mini banana to collect it, see it disappear, and then overlap the end flag to complete the level and trigger the finish animation.

**Acceptance Scenarios**:

1. **Given** a mini banana is placed along the route, **When** the character overlaps it, **Then** the mini banana disappears.
2. **Given** the character reaches the end flag, **When** they overlap the flag, **Then** the flag changes from black-and-white checkers to red-and-white checkers and the level is marked as complete.
3. **Given** the level is complete, **When** the completion text appears, **Then** the player character eventually disappears with the intended slide-down effect after a short delay.

---

### User Story 4 - Start and finish animations support the polished arcade feel (Priority: P2)

The player sees a clear level start and end presentation, including text and transitions that feel like a short retro arcade game.

**Why this priority**: These animations improve readability and reward the player immediately, but they are secondary to movement and completion gameplay.

**Independent Test**: The game shows "Level 1" for the first 3 seconds, then reveals the player character from below the start platform, and later shows "Level 1 Completed" in a black framed box.

**Acceptance Scenarios**:

1. **Given** the level begins, **When** the start sequence starts, **Then** the text "Level 1" appears and remains visible for the first 3 seconds.
2. **Given** the start sequence ends, **When** the character appears, **Then** the banana emerges from the platform as rising from the ground and is not shown below the platform.
3. **Given** the level is complete, **When** the end animation begins, **Then** the text "Level 1 Completed" falls from the top of the screen and settles in the middle before the character disappears.

---

### Edge Cases

- If the player attempts to move left or right while already against a wall, the character must stop without clipping through the wall.
- If the player falls into a bottom gap, the character must respawn at the start after 2 seconds instead of remaining in the level.
- If the player overlaps a mini banana multiple times due to collision timing, it must only be collected once and never reappear.
- If the player reaches the flag before collecting all mini bananas, the level still completes successfully because collectibles are optional.
- If the player presses jump while airborne, the character must not receive a second jump unless the game later adds a separate mechanic; the default behavior is a single jump.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The game MUST present a single playable level in a fixed full-screen view with no camera scrolling.
- **FR-002**: The game MUST render the player character as a banana sprite inspired by the provided example, with a simple smiling face, legs, and a direction-facing rule that matches horizontal movement.
- **FR-003**: The game MUST allow the player to move left and right using the left/right arrow keys or A/D, and jump using the up arrow, W, or Space.
- **FR-004**: The game MUST apply gravity so the character falls toward the bottom of the level unless it is standing on a platform, and must remain grounded while touching a solid surface.
- **FR-005**: The game MUST include horizontal platforms that are solid from above and allow the player to jump upward through a higher platform from below without falling through it.
- **FR-006**: The game MUST include vertical walls (that look like platforms but turned a one-quarter turn) that prevent the player from passing through them and clearly mark the left and right edges of the level.
- **FR-007**: The game MUST include a start platform that is orange and may be located along the bottom or in a higher part of the level, and the player must always begin on a horizontal platform rather than a wall.
- **FR-008**: The game MUST include a finish flag of similar size to the character, using a black-and-white checker pattern before completion and a red-and-white checker pattern after completion.
- **FR-009**: The game MUST complete the level when the character overlaps the flag, and must trigger the completion state immediately after overlap.
- **FR-010**: The game MUST respawn the player at the start position after falling through a gap or other out-of-bounds hazard, with a 2 second delay before reappearing.
- **FR-011**: The game MUST place a small number of optional mini bananas along the route from the start to the finish, with each banana disappearing when collected.
- **FR-012**: The game MUST show a start animation that displays "Level 1" for the first 3 seconds and reveals the player character emerging from the platform after that interval.
- **FR-013**: The game MUST show a completion animation that displays "Level 1 Completed" falling from the top of the screen and settling near the middle before the player character disappears.
- **FR-014**: All on-screen text MUST use yellow text on a black framed box with high enough visibility against the black background and game art.
- **FR-015**: The default level background MUST be plain black and all example images must be treated as references rather than direct assets to be copied.
- **FR-016**: The game MUST not maintain a score or collection counter, and collecting mini bananas MUST be optional without affecting the win condition or level progression.
- **FR-017**: The game MUST keep the level small enough and readable enough that the whole area fits within a static view without camera scrolling.

### Key Entities

- **Player / Character**: The banana-controlled avatar used to move through the level, with movement state, facing direction, jump state, and respawn behavior.
- **Level**: The complete playable area containing the start platform, additional platforms, walls, the finish flag, and optional mini bananas.
- **Platform**: A solid horizontal surface the player can stand on, jump from, and jump through from below when attempting to reach a higher platform.
- **Wall**: A solid vertical obstacle that looks like the platform but turned 90 degrees that prevents passing through the left or right boundaries and blocks lateral movement through level boundaries.
- **Flag**: The level finish marker that begins in a black-and-white checkered state and changes to a red-and-white pattern when the player completes the level.
- **Mini Banana**: A small collectible pickup inspired by the banana character but without a face or legs, placed along the route and removed when overlapped by the player.
- **Respawn State**: The player reset condition triggered by falling out of the level or through a gap, delaying reappearance at the start platform.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A player can complete the first level in under 30 seconds without difficulty when following the intended route.
- **SC-002**: The character can move left and right, jump, land on platforms, and recover from falling through a gap within the expected 2 second respawn delay.
- **SC-003**: At least 90% of players who attempt the level can reach the finish flag without needing instructions beyond the on-screen controls and world layout.
- **SC-004**: Collectible mini bananas are visible and collectable along the route, but they do not block the primary objective of completing the level.
- **SC-005**: The start and completion sequences visibly reinforce the level flow and remain readable against the black background and platform colours.

## Assumptions

- The initial version of the game targets a single short level, not a multi-level progression system.
- The intended audience is a casual player who can understand simple platformer controls immediately.
- The project focuses on a retro 2D arcade feel rather than realism, so collision rules and sprite styling are intentionally simple and readable.
- Artwork will be designed in-house using the reference examples as visual guidance, not as exact source assets.
- The project does not require a score system, a time penalty, or a collectible counter for the MVP.

import { describe, expect, it } from "vitest";

import type { Player, Wall } from "../../src/game/entities/types";
import { resolveWallCollisions, resolveWorldBounds } from "../../src/game/physics/bounds";

function playerFixture(): Player {
  return {
    id: "p1",
    position: { x: 5, y: 50 },
    velocity: { x: 0, y: 0 },
    size: { width: 20, height: 20 },
    facing: "right",
    onGround: false,
    jumpConsumed: false,
    state: "active",
    respawnAtMs: null
  };
}

describe("US2 walls and bounds", () => {
  it("clamps inside world bounds", () => {
    const player = playerFixture();
    player.position.x = -10;

    resolveWorldBounds(player, 200);
    expect(player.position.x).toBe(0);

    player.position.x = 300;
    resolveWorldBounds(player, 200);
    expect(player.position.x).toBe(180);
  });

  it("blocks crossing into a wall from the left", () => {
    const player = playerFixture();
    player.position.x = 35;

    const wall: Wall = {
      id: "right",
      side: "right",
      rect: { x: 50, y: 0, width: 20, height: 200 }
    };

    resolveWallCollisions(player, [wall], 25);

    expect(player.position.x).toBe(30);
  });
});

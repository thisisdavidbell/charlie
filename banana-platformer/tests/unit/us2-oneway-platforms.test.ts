import { describe, expect, it } from "vitest";

import type { Platform, Player } from "../../src/game/entities/types";
import { resolveOneWayPlatforms } from "../../src/game/physics/oneWayPlatform";

function playerFixture(): Player {
  return {
    id: "p1",
    position: { x: 50, y: 90 },
    velocity: { x: 0, y: 40 },
    size: { width: 20, height: 20 },
    facing: "right",
    onGround: false,
    jumpConsumed: true,
    state: "active",
    respawnAtMs: null
  };
}

const platform: Platform = {
  id: "p",
  rect: { x: 0, y: 100, width: 200, height: 20 },
  type: "elevated",
  color: "#aaa",
  oneWay: true
};

describe("US2 one-way platforms", () => {
  it("lands when crossing platform top from above", () => {
    const player = playerFixture();
    player.position.y = 85;
    resolveOneWayPlatforms(player, [platform], 75);

    expect(player.position.y).toBe(80);
    expect(player.onGround).toBe(true);
    expect(player.velocity.y).toBe(0);
  });

  it("does not block upward movement from below", () => {
    const player = playerFixture();
    player.position.y = 120;
    player.velocity.y = -120;

    resolveOneWayPlatforms(player, [platform], 125);

    expect(player.onGround).toBe(false);
  });
});

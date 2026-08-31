import { describe, expect, it } from "vitest";

import type { MiniBanana, Player } from "../../src/game/entities/types";
import { collectMiniBananas } from "../../src/game/systems/collectiblesSystem";

function playerFixture(): Player {
  return {
    id: "p1",
    position: { x: 50, y: 50 },
    velocity: { x: 0, y: 0 },
    size: { width: 20, height: 20 },
    facing: "right",
    onGround: false,
    jumpConsumed: false,
    state: "active",
    respawnAtMs: null
  };
}

describe("US3 collectibles", () => {
  it("collects mini bananas once", () => {
    const player = playerFixture();
    const mini: MiniBanana = {
      id: "m1",
      rect: { x: 50, y: 50, width: 10, height: 10 },
      collected: false
    };

    const first = collectMiniBananas(player, [mini]);
    const second = collectMiniBananas(player, [mini]);

    expect(first).toBe(1);
    expect(second).toBe(0);
    expect(mini.collected).toBe(true);
  });
});

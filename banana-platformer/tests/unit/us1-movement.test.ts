import { describe, expect, it } from "vitest";

import type { InputState, Player } from "../../src/game/entities/types";
import { applyHorizontalInput } from "../../src/game/systems/playerController";

function playerFixture(): Player {
  return {
    id: "p1",
    position: { x: 10, y: 10 },
    velocity: { x: 0, y: 0 },
    size: { width: 20, height: 20 },
    facing: "right",
    onGround: true,
    jumpConsumed: false,
    state: "active",
    respawnAtMs: null
  };
}

function inputFixture(): InputState {
  return { left: false, right: false, jumpPressed: false };
}

describe("US1 movement", () => {
  it("moves left with A/ArrowLeft state", () => {
    const player = playerFixture();
    const input = inputFixture();
    input.left = true;

    applyHorizontalInput(player, input, 300);

    expect(player.velocity.x).toBe(-300);
  });

  it("moves right with D/ArrowRight state", () => {
    const player = playerFixture();
    const input = inputFixture();
    input.right = true;

    applyHorizontalInput(player, input, 300);

    expect(player.velocity.x).toBe(300);
  });
});
import { describe, expect, it } from "vitest";

import type { InputState, Player } from "../../src/game/entities/types";
import { integrateVertical } from "../../src/game/physics/verticalMotion";
import { applyJumpInput } from "../../src/game/systems/playerController";

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

describe("US1 jump and gravity", () => {
  it("applies jump only when grounded", () => {
    const player = playerFixture();
    const input = inputFixture();
    input.jumpPressed = true;

    applyJumpInput(player, input, -800);

    expect(player.velocity.y).toBe(-800);
    expect(player.jumpConsumed).toBe(true);
    expect(player.onGround).toBe(false);
  });

  it("does not double jump while airborne", () => {
    const player = playerFixture();
    player.onGround = false;
    player.jumpConsumed = true;
    const input = inputFixture();
    input.jumpPressed = true;

    applyJumpInput(player, input, -800);

    expect(player.velocity.y).toBe(0);
  });

  it("applies gravity over time", () => {
    const player = playerFixture();

    integrateVertical(player, 1000 / 60, 2400);

    expect(player.velocity.y).toBeGreaterThan(0);
  });
});
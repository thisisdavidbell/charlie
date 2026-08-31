import { describe, expect, it } from "vitest";

import type { GameSession } from "../../src/game/entities/types";
import { buildLevel1 } from "../../src/game/level/buildLevel1";
import { createGameSession, updatePhaseForTime } from "../../src/game/systems/gameSession";
import { isOutOfBoundsTopBelowScreen } from "../../src/game/systems/hazardSystem";
import { scheduleRespawn } from "../../src/game/systems/respawnSystem";

function sessionFixture(): GameSession {
  const level = buildLevel1(1280, 720);
  const session = createGameSession(level, 0);
  session.phase = "playing";
  session.player.state = "active";
  return session;
}

describe("US3 respawn", () => {
  it("schedules respawn when player falls out of bounds", () => {
    const session = sessionFixture();
    session.player.position.y = session.level.height + 1;

    expect(isOutOfBoundsTopBelowScreen(session)).toBe(true);
    scheduleRespawn(session, 100);

    expect(session.phase).toBe("respawning");
    expect(session.player.respawnAtMs).toBe(2100);
  });

  it("restores spawn defaults after delay", () => {
    const session = sessionFixture();
    scheduleRespawn(session, 100);
    updatePhaseForTime(session, 2200);

    expect(session.phase).toBe("playing");
    expect(session.player.position).toEqual(session.level.spawnPoint);
    expect(session.player.velocity).toEqual({ x: 0, y: 0 });
  });
});

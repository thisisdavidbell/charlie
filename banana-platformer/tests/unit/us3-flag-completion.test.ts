import { describe, expect, it } from "vitest";

import type { GameSession } from "../../src/game/entities/types";
import { buildLevel1 } from "../../src/game/level/buildLevel1";
import { createGameSession } from "../../src/game/systems/gameSession";
import { checkFlagCompletion } from "../../src/game/systems/flagSystem";

function sessionFixture(): GameSession {
  const level = buildLevel1(1280, 720);
  const session = createGameSession(level, 0);
  session.phase = "playing";
  session.player.state = "active";
  return session;
}

describe("US3 flag completion", () => {
  it("completes level when player overlaps flag", () => {
    const session = sessionFixture();
    session.player.position.x = session.level.flag.rect.x;
    session.player.position.y = session.level.flag.rect.y;

    const completed = checkFlagCompletion(session, 1000);

    expect(completed).toBe(true);
    expect(session.level.flag.state).toBe("completed");
    expect(session.phase).toBe("completed");
  });
});

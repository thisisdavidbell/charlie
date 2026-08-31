import { describe, expect, it } from "vitest";

import { buildLevel1 } from "../../src/game/level/buildLevel1";
import { createGameSession } from "../../src/game/systems/gameSession";
import { checkFlagCompletion } from "../../src/game/systems/flagSystem";
import { updateCompletionState } from "../../src/game/systems/completionSystem";

describe("US4 completion sequence", () => {
  it("hides player after completion delay", () => {
    const session = createGameSession(buildLevel1(1280, 720), 0);
    session.phase = "playing";
    session.player.state = "active";
    session.player.position.x = session.level.flag.rect.x;
    session.player.position.y = session.level.flag.rect.y;

    checkFlagCompletion(session, 1000);
    updateCompletionState(session, 2499);
    expect(session.player.state).toBe("active");

    updateCompletionState(session, 2500);
    expect(session.player.state).toBe("completed");
  });
});

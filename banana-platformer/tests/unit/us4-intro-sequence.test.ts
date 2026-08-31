import { describe, expect, it } from "vitest";

import { buildLevel1 } from "../../src/game/level/buildLevel1";
import { createGameSession, updatePhaseForTime } from "../../src/game/systems/gameSession";
import { isIntroVisible } from "../../src/game/systems/introSystem";

describe("US4 intro sequence", () => {
  it("shows intro before 3 seconds and then starts playing", () => {
    const session = createGameSession(buildLevel1(1280, 720), 0);

    expect(isIntroVisible(session)).toBe(true);
    updatePhaseForTime(session, 2999);
    expect(session.phase).toBe("intro");

    updatePhaseForTime(session, 3000);
    expect(session.phase).toBe("playing");
    expect(session.player.state).toBe("active");
  });
});

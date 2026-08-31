import { describe, expect, it } from "vitest";

import { buildLevel1 } from "../../src/game/level/buildLevel1";
import { createGameSession } from "../../src/game/systems/gameSession";
import { checkFlagCompletion } from "../../src/game/systems/flagSystem";

describe("US3 completion integration", () => {
  it("allows completion without collecting all mini bananas", () => {
    const level = buildLevel1(1280, 720);
    const session = createGameSession(level, 0);
    session.phase = "playing";
    session.player.state = "active";

    session.player.position.x = level.flag.rect.x;
    session.player.position.y = level.flag.rect.y;

    const completed = checkFlagCompletion(session, 500);

    expect(completed).toBe(true);
    expect(level.miniBananas.some((m) => m.collected)).toBe(false);
  });
});

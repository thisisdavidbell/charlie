import { describe, expect, it } from "vitest";

import { PHYSICS } from "../../src/game/config/gameConstants";
import { buildLevel1 } from "../../src/game/level/buildLevel1";
import { updateLevelScene } from "../../src/game/scenes/levelScene";
import { createGameSession } from "../../src/game/systems/gameSession";

describe("US4 sequence integration", () => {
  it("moves from intro to playing and supports completion", () => {
    const session = createGameSession(buildLevel1(1280, 720), 0);

    updateLevelScene(session, { left: false, right: false, jumpPressed: false }, PHYSICS.fixedDeltaMs, 3100);
    expect(session.phase).toBe("playing");

    session.player.position.x = session.level.flag.rect.x;
    session.player.position.y = session.level.flag.rect.y;

    updateLevelScene(session, { left: false, right: false, jumpPressed: false }, PHYSICS.fixedDeltaMs, 3200);
    expect(session.phase).toBe("completed");
  });
});

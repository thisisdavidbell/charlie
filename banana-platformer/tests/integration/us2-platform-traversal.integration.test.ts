import { describe, expect, it } from "vitest";

import { buildLevel1 } from "../../src/game/level/buildLevel1";

describe("US2 traversal integration", () => {
  it("builds a level with floor, elevated platform, and walls", () => {
    const level = buildLevel1(1280, 720);

    expect(level.platforms.length).toBeGreaterThanOrEqual(2);
    expect(level.walls.length).toBe(2);
    expect(level.platforms[1].rect.y).toBeLessThan(level.platforms[0].rect.y);
  });
});

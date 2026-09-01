import { describe, expect, it } from "vitest";

import { buildLevel1 } from "../../src/game/level/buildLevel1";

describe("US2 traversal integration", () => {
  it("builds a level with floor, elevated platform, and walls", () => {
    const level = buildLevel1(1280, 720);
    const floor = level.platforms.find((platform) => platform.id === "floor");
    const elevated = level.platforms.find((platform) => platform.id === "elevated");

    expect(level.platforms.length).toBeGreaterThanOrEqual(2);
    expect(level.walls.length).toBe(2);
    expect(floor).toBeDefined();
    expect(elevated).toBeDefined();
    expect(elevated!.rect.y).toBeLessThan(floor!.rect.y);
  });
});

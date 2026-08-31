import { Container, Graphics } from "pixi.js";

import type { Level } from "../game/entities/types";

export function createLevelSprites(level: Level): Container {
  const node = new Container();

  for (const platform of level.platforms) {
    const platformSprite = new Graphics();
    const color = platform.type === "start" ? 0xff8c00 : 0x9c6b3f;
    platformSprite.rect(platform.rect.x, platform.rect.y, platform.rect.width, platform.rect.height).fill(color);
    node.addChild(platformSprite);
  }

  for (const wall of level.walls) {
    const wallSprite = new Graphics();
    wallSprite.rect(wall.rect.x, wall.rect.y, wall.rect.width, wall.rect.height).fill(0x7a4f26);
    node.addChild(wallSprite);
  }

  return node;
}
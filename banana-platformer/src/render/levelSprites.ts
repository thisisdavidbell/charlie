import { Container, Graphics, TilingSprite, type Texture } from "pixi.js";

import type { Level } from "../game/entities/types";

function createTiledSurface(texture: Texture, width: number, height: number, tint: number): TilingSprite {
  const sourceHeight = Math.max(1, texture.height || 16);
  const scale = height / sourceHeight;

  const sprite = new TilingSprite({
    texture,
    width,
    height
  });
  sprite.tileScale.set(scale, scale);
  sprite.tint = tint;
  sprite.roundPixels = true;
  return sprite;
}

export function createLevelSprites(level: Level, platformTexture: Texture): Container {
  const node = new Container();

  for (const platform of level.platforms) {
    const tint = 0xffffff;
    const platformSurface = createTiledSurface(platformTexture, platform.rect.width, platform.rect.height, tint);
    platformSurface.x = platform.rect.x;
    platformSurface.y = platform.rect.y;
    node.addChild(platformSurface);

    if (platform.type === "start") {
      const overlay = new Graphics();
      overlay.rect(0, 0, platform.rect.width, platform.rect.height).fill({ color: 0xffa726, alpha: 0.65 });
      overlay.x = platform.rect.x;
      overlay.y = platform.rect.y;
      node.addChild(overlay);
    }
  }

  for (const wall of level.walls) {
    const wallNode = new Container();
    wallNode.x = wall.rect.x + wall.rect.width;
    wallNode.y = wall.rect.y;
    wallNode.rotation = Math.PI / 2;

    const wallSurface = createTiledSurface(platformTexture, wall.rect.height, wall.rect.width, 0xffffff);
    wallNode.addChild(wallSurface);
    node.addChild(wallNode);
  }

  return node;
}
import { Container, Graphics, Sprite, type Texture } from "pixi.js";

import type { Level } from "../game/entities/types";

export interface ObjectSprites {
  node: Container;
  sync: () => void;
}

export function createObjectSprites(level: Level, flagTexture: Texture): ObjectSprites {
  const node = new Container();
  const miniMap = new Map<string, Graphics>();

  for (const mini of level.miniBananas) {
    const sprite = new Graphics();
    sprite.rect(mini.rect.x, mini.rect.y, mini.rect.width, mini.rect.height).fill(0xffd54a);
    miniMap.set(mini.id, sprite);
    node.addChild(sprite);
  }

  const flag = Sprite.from(flagTexture);
  flag.roundPixels = true;
  node.addChild(flag);

  const drawFlag = () => {
    const { x, y, width, height } = level.flag.rect;
    flag.x = x;
    flag.y = y;
    flag.width = width;
    flag.height = height;
    flag.tint = level.flag.state === "completed" ? 0xd5ffd5 : 0xffffff;
  };

  drawFlag();

  return {
    node,
    sync: () => {
      for (const mini of level.miniBananas) {
        const sprite = miniMap.get(mini.id);
        if (!sprite) continue;
        sprite.visible = !mini.collected;
      }
      drawFlag();
    }
  };
}
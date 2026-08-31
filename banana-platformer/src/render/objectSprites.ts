import { Container, Graphics } from "pixi.js";

import type { Level } from "../game/entities/types";

export interface ObjectSprites {
  node: Container;
  sync: () => void;
}

export function createObjectSprites(level: Level): ObjectSprites {
  const node = new Container();
  const miniMap = new Map<string, Graphics>();

  for (const mini of level.miniBananas) {
    const sprite = new Graphics();
    sprite.rect(mini.rect.x, mini.rect.y, mini.rect.width, mini.rect.height).fill(0xffd54a);
    miniMap.set(mini.id, sprite);
    node.addChild(sprite);
  }

  const flag = new Graphics();
  node.addChild(flag);

  const drawFlag = () => {
    flag.clear();
    const { x, y, width } = level.flag.rect;
    const colorA = level.flag.state === "completed" ? 0xff0000 : 0x000000;
    const colorB = 0xffffff;
    const tile = Math.max(2, Math.floor(width / 4));

    for (let row = 0; row < 4; row += 1) {
      for (let col = 0; col < 4; col += 1) {
        const useA = (row + col) % 2 === 0;
        flag.rect(x + col * tile, y + row * tile, tile, tile).fill(useA ? colorA : colorB);
      }
    }
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
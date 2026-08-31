import { intersects } from "../physics/collision";
import type { MiniBanana, Player } from "../entities/types";

export function collectMiniBananas(player: Player, miniBananas: MiniBanana[]): number {
  const playerRect = {
    x: player.position.x,
    y: player.position.y,
    width: player.size.width,
    height: player.size.height
  };

  let collected = 0;

  for (const mini of miniBananas) {
    if (mini.collected) {
      continue;
    }

    if (intersects(playerRect, mini.rect)) {
      mini.collected = true;
      collected += 1;
    }
  }

  return collected;
}
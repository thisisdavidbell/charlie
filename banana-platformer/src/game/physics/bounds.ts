import { intersects } from "./collision";
import type { Player, Wall } from "../entities/types";

export function resolveWorldBounds(player: Player, levelWidth: number): void {
  if (player.position.x < 0) {
    player.position.x = 0;
  }

  if (player.position.x + player.size.width > levelWidth) {
    player.position.x = levelWidth - player.size.width;
  }
}

export function resolveWallCollisions(player: Player, walls: Wall[], previousX: number): void {
  const rect = {
    x: player.position.x,
    y: player.position.y,
    width: player.size.width,
    height: player.size.height
  };

  for (const wall of walls) {
    if (!intersects(rect, wall.rect)) {
      continue;
    }

    const wallRight = wall.rect.x + wall.rect.width;
    const previousRight = previousX + player.size.width;

    if (previousRight <= wall.rect.x) {
      player.position.x = wall.rect.x - player.size.width;
    } else if (previousX >= wallRight) {
      player.position.x = wallRight;
    }
  }
}
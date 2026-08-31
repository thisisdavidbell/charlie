import type { Platform, Player } from "../entities/types";

export function resolveOneWayPlatforms(player: Player, platforms: Platform[], previousY: number): void {
  const previousBottom = previousY + player.size.height;
  const currentBottom = player.position.y + player.size.height;

  player.onGround = false;

  for (const platform of platforms) {
    if (!platform.oneWay) {
      continue;
    }

    const top = platform.rect.y;
    const horizontalOverlap =
      player.position.x + player.size.width > platform.rect.x &&
      player.position.x < platform.rect.x + platform.rect.width;
    const crossedFromAbove = previousBottom <= top && currentBottom >= top;

    if (horizontalOverlap && crossedFromAbove && player.velocity.y >= 0) {
      player.position.y = top - player.size.height;
      player.velocity.y = 0;
      player.onGround = true;
      player.jumpConsumed = false;
      return;
    }
  }
}
import type { Platform, Player } from "../entities/types";

export function resolveGround(player: Player, platforms: Platform[]): void {
  const previousBottom = player.position.y + player.size.height - player.velocity.y;
  const currentBottom = player.position.y + player.size.height;

  player.onGround = false;

  for (const platform of platforms) {
    const platformTop = platform.rect.y;
    const horizontalOverlap =
      player.position.x + player.size.width > platform.rect.x &&
      player.position.x < platform.rect.x + platform.rect.width;
    const crossedTop = previousBottom <= platformTop && currentBottom >= platformTop;

    if (horizontalOverlap && crossedTop && player.velocity.y >= 0) {
      player.position.y = platformTop - player.size.height;
      player.velocity.y = 0;
      player.onGround = true;
      player.jumpConsumed = false;
      break;
    }
  }
}
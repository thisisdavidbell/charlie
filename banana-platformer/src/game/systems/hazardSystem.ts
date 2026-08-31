import type { GameSession } from "../entities/types";

export function isOutOfBoundsTopBelowScreen(session: GameSession): boolean {
  return session.player.position.y > session.level.height;
}
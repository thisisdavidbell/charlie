import type { GameSession } from "../entities/types";

export function isIntroVisible(session: GameSession): boolean {
  return session.phase === "intro";
}
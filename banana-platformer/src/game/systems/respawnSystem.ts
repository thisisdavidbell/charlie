import { TIMINGS } from "../config/gameConstants";
import type { GameSession } from "../entities/types";

export function scheduleRespawn(session: GameSession, nowMs: number): void {
  if (session.phase === "respawning" || session.phase === "completed") {
    return;
  }

  session.phase = "respawning";
  session.player.state = "respawning";
  session.player.respawnAtMs = nowMs + TIMINGS.respawnDelayMs;
}
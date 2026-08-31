import { TIMINGS } from "../config/gameConstants";
import type { Flag, GameSession } from "../entities/types";
import { intersects } from "../physics/collision";

export function checkFlagCompletion(session: GameSession, nowMs: number): boolean {
  if (session.phase !== "playing") {
    return false;
  }

  if (session.level.flag.state === "completed") {
    return false;
  }

  const player = session.player;
  const playerRect = {
    x: player.position.x,
    y: player.position.y,
    width: player.size.width,
    height: player.size.height
  };

  if (!intersects(playerRect, session.level.flag.rect)) {
    return false;
  }

  completeFlag(session.level.flag);
  session.phase = "completed";
  session.completionStartedAtMs = nowMs;
  (session as GameSession & { completionDisappearAtMs?: number }).completionDisappearAtMs =
    nowMs + TIMINGS.completionDisappearDelayMs;
  return true;
}

function completeFlag(flag: Flag): void {
  flag.state = "completed";
}
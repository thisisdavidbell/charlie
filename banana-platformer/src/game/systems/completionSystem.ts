import type { GameSession } from "../entities/types";

type SessionWithCompletion = GameSession & { completionDisappearAtMs?: number };

export function updateCompletionState(session: GameSession, nowMs: number): void {
  if (session.phase !== "completed") {
    return;
  }

  const completionSession = session as SessionWithCompletion;
  if (completionSession.completionDisappearAtMs === undefined) {
    return;
  }

  if (nowMs >= completionSession.completionDisappearAtMs) {
    session.player.state = "completed";
  }
}
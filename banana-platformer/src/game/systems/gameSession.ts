import { TIMINGS, deriveLayout } from "../config/gameConstants";
import type { GameSession, Level, Player } from "../entities/types";

export function createPlayer(level: Level): Player {
  const size = deriveLayout(level.width, level.height).playerSize;
  return {
    id: "player",
    position: { ...level.spawnPoint },
    velocity: { x: 0, y: 0 },
    size,
    facing: "right",
    onGround: false,
    jumpConsumed: false,
    state: "hidden",
    respawnAtMs: null
  };
}

export function createGameSession(level: Level, nowMs: number): GameSession {
  return {
    phase: "intro",
    level,
    player: createPlayer(level),
    elapsedMs: 0,
    introEndsAtMs: nowMs + TIMINGS.introDurationMs,
    completionStartedAtMs: null
  };
}

export function updatePhaseForTime(session: GameSession, nowMs: number): void {
  if (session.phase === "intro" && nowMs >= session.introEndsAtMs) {
    session.phase = "playing";
    session.player.state = "active";
  }

  if (
    session.phase === "respawning" &&
    session.player.respawnAtMs !== null &&
    nowMs >= session.player.respawnAtMs
  ) {
    session.phase = "playing";
    session.player.state = "active";
    session.player.position = { ...session.level.spawnPoint };
    session.player.velocity = { x: 0, y: 0 };
    session.player.facing = "right";
    session.player.jumpConsumed = false;
    session.player.onGround = false;
    session.player.respawnAtMs = null;
  }
}
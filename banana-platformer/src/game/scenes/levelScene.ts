import { PHYSICS } from "../config/gameConstants";
import type { GameSession, InputState } from "../entities/types";
import { resolveWallCollisions, resolveWorldBounds } from "../physics/bounds";
import { resolveOneWayPlatforms } from "../physics/oneWayPlatform";
import { integrateVertical } from "../physics/verticalMotion";
import { collectMiniBananas } from "../systems/collectiblesSystem";
import { updateCompletionState } from "../systems/completionSystem";
import { checkFlagCompletion } from "../systems/flagSystem";
import { isOutOfBoundsTopBelowScreen } from "../systems/hazardSystem";
import { applyHorizontalInput, applyJumpInput } from "../systems/playerController";
import { scheduleRespawn } from "../systems/respawnSystem";
import { updatePhaseForTime } from "../systems/gameSession";

export function updateLevelScene(session: GameSession, input: InputState, deltaMs: number, nowMs: number): void {
  updatePhaseForTime(session, nowMs);

  if (session.phase === "completed") {
    updateCompletionState(session, nowMs);
    return;
  }

  if (session.phase !== "playing") {
    return;
  }

  const dt = deltaMs / 1000;
  const player = session.player;
  const previousY = player.position.y;
  const previousX = player.position.x;

  applyHorizontalInput(player, input, PHYSICS.moveSpeed);
  applyJumpInput(player, input, PHYSICS.jumpVelocity);
  integrateVertical(player, deltaMs, PHYSICS.gravity);

  player.position.x += player.velocity.x * dt;
  player.position.y += player.velocity.y * dt;

  resolveWorldBounds(player, session.level.width);
  resolveWallCollisions(player, session.level.walls, previousX);
  resolveOneWayPlatforms(player, session.level.platforms, previousY);

  collectMiniBananas(player, session.level.miniBananas);
  checkFlagCompletion(session, nowMs);

  if (player.position.y + player.size.height < 0) {
    player.position.y = 0;
    player.velocity.y = 0;
  }

  if (isOutOfBoundsTopBelowScreen(session)) {
    scheduleRespawn(session, nowMs);
  }

  if (player.velocity.x < 0) player.facing = "left";
  if (player.velocity.x > 0) player.facing = "right";
}
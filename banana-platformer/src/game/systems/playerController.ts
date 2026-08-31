import type { InputState, Player } from "../entities/types";

export function applyHorizontalInput(player: Player, input: InputState, moveSpeed: number): void {
  player.velocity.x = 0;
  if (input.left) {
    player.velocity.x -= moveSpeed;
  }
  if (input.right) {
    player.velocity.x += moveSpeed;
  }
}

export function applyJumpInput(player: Player, input: InputState, jumpVelocity: number): void {
  if (!input.jumpPressed || !player.onGround || player.jumpConsumed) {
    return;
  }

  player.velocity.y = jumpVelocity;
  player.jumpConsumed = true;
  player.onGround = false;
}
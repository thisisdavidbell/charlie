import type { Player } from "../entities/types";

export function integrateVertical(player: Player, deltaMs: number, gravity: number): void {
  const dt = deltaMs / 1000;
  player.velocity.y += gravity * dt;
}
import type { GameSession, InputState } from "../../../src/game/entities/types";

export function createNeutralInput(): InputState {
  return {
    left: false,
    right: false,
    jumpPressed: false
  };
}

export function cloneSession<T extends GameSession>(session: T): T {
  return structuredClone(session);
}
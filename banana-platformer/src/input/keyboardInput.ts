import type { InputState } from "../game/entities/types";

const state: InputState = {
  left: false,
  right: false,
  jumpPressed: false
};

let jumpQueued = false;

function handleKey(event: KeyboardEvent, isDown: boolean): void {
  const key = event.key.toLowerCase();

  if (key === "arrowleft" || key === "a") {
    state.left = isDown;
  }
  if (key === "arrowright" || key === "d") {
    state.right = isDown;
  }
  if (key === "arrowup" || key === "w" || key === " ") {
    if (isDown) {
      jumpQueued = true;
    }
  }
}

export function attachKeyboardInput(): void {
  window.addEventListener("keydown", (event) => handleKey(event, true));
  window.addEventListener("keyup", (event) => handleKey(event, false));
}

export function consumeInputState(): InputState {
  const snapshot: InputState = {
    left: state.left,
    right: state.right,
    jumpPressed: jumpQueued
  };
  jumpQueued = false;
  return snapshot;
}
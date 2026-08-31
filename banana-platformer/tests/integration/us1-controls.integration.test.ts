/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from "vitest";

import { attachKeyboardInput, consumeInputState } from "../../src/input/keyboardInput";

describe("US1 controls integration", () => {
  it("maps keyboard state for movement and jump", () => {
    attachKeyboardInput();

    window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
    window.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));

    const input = consumeInputState();
    expect(input.left).toBe(true);
    expect(input.jumpPressed).toBe(true);

    window.dispatchEvent(new KeyboardEvent("keyup", { key: "a" }));
    const released = consumeInputState();
    expect(released.left).toBe(false);
  });
});
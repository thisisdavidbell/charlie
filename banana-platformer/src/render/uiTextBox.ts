import { Container, Graphics, Text } from "pixi.js";

import type { GameSession } from "../game/entities/types";

export interface UiTextBox {
  node: Container;
  sync: (session: GameSession) => void;
}

export function createUiTextBox(screenWidth: number, screenHeight: number): UiTextBox {
  const node = new Container();
  const box = new Graphics();
  const text = new Text({
    text: "",
    style: {
      fill: "#ffff00",
      fontFamily: "monospace",
      fontSize: Math.floor(screenHeight / 5),
      align: "center"
    }
  });

  node.addChild(box, text);

  const draw = (message: string) => {
    box.clear();
    if (!message) {
      text.text = "";
      return;
    }

    text.text = message;
    text.x = Math.floor((screenWidth - text.width) / 2);
    text.y = Math.floor(screenHeight * 0.15);

    box
      .rect(text.x - 16, text.y - 8, text.width + 32, text.height + 16)
      .fill(0x000000)
      .stroke({ width: 3, color: 0xffff00 });
  };

  return {
    node,
    sync: (session: GameSession) => {
      if (session.phase === "intro") {
        draw("Level 1");
      } else if (session.phase === "completed") {
        draw("Level 1 Completed");
      } else {
        draw("");
      }
    }
  };
}
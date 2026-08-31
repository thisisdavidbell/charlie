import { Container, Graphics } from "pixi.js";
import type { Player } from "../game/entities/types";

export interface PlayerSprite {
  node: Container;
  sync: (player: Player) => void;
}

export function createPlayerSprite(player: Player): PlayerSprite {
  const body = new Graphics();
  body.rect(0, 0, player.size.width, player.size.height).fill(0xffd54a);
  body.rect(player.size.width * 0.25, player.size.height * 0.3, player.size.width * 0.1, player.size.height * 0.1).fill(0x000000);
  body.rect(player.size.width * 0.65, player.size.height * 0.3, player.size.width * 0.1, player.size.height * 0.1).fill(0x000000);
  body.rect(player.size.width * 0.35, player.size.height * 0.65, player.size.width * 0.3, player.size.height * 0.08).fill(0x000000);

  const node = new Container();
  node.addChild(body);

  return {
    node,
    sync: (nextPlayer: Player) => {
      node.x = nextPlayer.position.x;
      node.y = nextPlayer.position.y;
      node.scale.x = nextPlayer.facing === "left" ? -1 : 1;
      node.pivot.x = nextPlayer.facing === "left" ? nextPlayer.size.width : 0;
      node.visible = nextPlayer.state !== "hidden";
    }
  };
}
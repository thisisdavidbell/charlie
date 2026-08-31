import { deriveLayout } from "../config/gameConstants";
import type { Level, MiniBanana, Platform, Wall } from "../entities/types";
import { getLevelMetrics } from "./layoutMetrics";

export function buildLevel1(width: number, height: number): Level {
  const metrics = getLevelMetrics(width, height);
  const layout = deriveLayout(width, height);

  const floor: Platform = {
    id: "floor",
    rect: { x: 0, y: metrics.floorY, width, height: layout.platformHeight },
    type: "floor",
    color: "#b5651d",
    oneWay: true
  };

  const elevatedWidth = layout.unit * 2.5;
  const elevatedX = metrics.elevatedCenterX - elevatedWidth / 2;

  const elevated: Platform = {
    id: "elevated",
    rect: {
      x: elevatedX,
      y: metrics.elevatedTopY,
      width: elevatedWidth,
      height: layout.platformHeight
    },
    type: "elevated",
    color: "#c08040",
    oneWay: true
  };

  const walls: Wall[] = [
    {
      id: "left-wall",
      side: "left",
      rect: { x: 0, y: 0, width: layout.wallWidth, height }
    },
    {
      id: "right-wall",
      side: "right",
      rect: { x: width - layout.wallWidth, y: 0, width: layout.wallWidth, height }
    }
  ];

  const spawnPoint = {
    x: layout.unit,
    y: floor.rect.y - layout.playerSize.height
  };

  const flag = {
    id: "finish-flag",
    state: "inactive" as const,
    rect: {
      x: elevated.rect.x + elevated.rect.width - layout.flagSize.width,
      y: elevated.rect.y - layout.flagSize.height,
      width: layout.flagSize.width,
      height: layout.flagSize.height
    }
  };

  const miniBananas: MiniBanana[] = [];
  const spacing = layout.unit;
  let x = spawnPoint.x + layout.unit;

  while (x < flag.rect.x) {
    const onElevated = x >= elevated.rect.x && x <= elevated.rect.x + elevated.rect.width;
    miniBananas.push({
      id: `mini-${miniBananas.length + 1}`,
      collected: false,
      rect: {
        x,
        y: onElevated ? elevated.rect.y - layout.miniBananaSize.height : floor.rect.y - layout.miniBananaSize.height,
        width: layout.miniBananaSize.width,
        height: layout.miniBananaSize.height
      }
    });
    x += spacing;
  }

  return {
    id: "level-1",
    width,
    height,
    platforms: [floor, elevated],
    walls,
    flag,
    miniBananas,
    spawnPoint
  };
}
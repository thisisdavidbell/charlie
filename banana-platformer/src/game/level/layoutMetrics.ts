import { deriveLayout } from "../config/gameConstants";

export interface LevelMetrics {
  width: number;
  height: number;
  unit: number;
  floorY: number;
  elevatedTopY: number;
  elevatedCenterX: number;
}

export function getLevelMetrics(width: number, height: number): LevelMetrics {
  const { unit } = deriveLayout(width, height);
  const floorY = height - unit;

  return {
    width,
    height,
    unit,
    floorY,
    elevatedTopY: floorY - unit * 1.5,
    elevatedCenterX: width / 2
  };
}
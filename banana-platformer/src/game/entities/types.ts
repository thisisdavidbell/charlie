export type Direction = "left" | "right";

export type PlayerState = "hidden" | "spawning" | "active" | "respawning" | "completed";

export type GamePhase = "intro" | "playing" | "respawning" | "completed";

export interface Vector2 {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Player {
  id: string;
  position: Vector2;
  velocity: Vector2;
  size: Size;
  facing: Direction;
  onGround: boolean;
  jumpConsumed: boolean;
  state: PlayerState;
  respawnAtMs: number | null;
}

export interface Platform {
  id: string;
  rect: Rect;
  type: "floor" | "elevated" | "start";
  color: string;
  oneWay: boolean;
}

export interface Wall {
  id: string;
  rect: Rect;
  side: "left" | "right";
}

export interface Flag {
  id: string;
  rect: Rect;
  state: "inactive" | "completed";
}

export interface MiniBanana {
  id: string;
  rect: Rect;
  collected: boolean;
}

export interface Level {
  id: string;
  width: number;
  height: number;
  platforms: Platform[];
  walls: Wall[];
  flag: Flag;
  miniBananas: MiniBanana[];
  spawnPoint: Vector2;
}

export interface InputState {
  left: boolean;
  right: boolean;
  jumpPressed: boolean;
}

export interface GameSession {
  phase: GamePhase;
  level: Level;
  player: Player;
  elapsedMs: number;
  introEndsAtMs: number;
  completionStartedAtMs: number | null;
}
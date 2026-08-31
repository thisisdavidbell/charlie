export const TIMINGS = {
  introDurationMs: 3_000,
  respawnDelayMs: 2_000,
  completionDisappearDelayMs: 1_500
} as const;

export const PERFORMANCE_TARGETS = {
  averageFps: 60,
  minimumFps: 50,
  inputToMotionMaxMs: 100
} as const;

export const SUPPORTED_BROWSERS = {
  desktop: ["Chrome latest-2", "Firefox latest-2", "Edge latest-2"],
  minViewport: { width: 1280, height: 720 }
} as const;

export const PHYSICS = {
  gravity: 2400,
  moveSpeed: 420,
  jumpVelocity: -980,
  fixedDeltaMs: 1000 / 60
} as const;

export function deriveLayout(screenWidth: number, screenHeight: number) {
  const unit = screenHeight / 6;
  return {
    unit,
    playerSize: { width: unit, height: unit },
    flagSize: { width: unit, height: unit },
    platformHeight: unit,
    wallWidth: unit,
    miniBananaSize: { width: unit / 2, height: unit / 2 }
  };
}
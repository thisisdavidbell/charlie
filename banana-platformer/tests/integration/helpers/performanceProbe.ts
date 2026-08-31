export interface PerfSample {
  frameMs: number;
}

export function calculateFps(samples: PerfSample[]): number {
  if (samples.length === 0) {
    return 0;
  }

  const avgFrameMs = samples.reduce((sum, s) => sum + s.frameMs, 0) / samples.length;
  if (avgFrameMs <= 0) {
    return 0;
  }

  return 1000 / avgFrameMs;
}

export function isPerformanceAcceptable(avgFps: number): boolean {
  return avgFps >= 50;
}

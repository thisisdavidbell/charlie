export type FixedStepUpdate = (deltaMs: number) => void;

export class FixedStepLoop {
  private accumulator = 0;
  private lastTime = 0;
  private running = false;

  constructor(
    private readonly fixedDeltaMs: number,
    private readonly update: FixedStepUpdate,
    private readonly render: () => void
  ) {}

  start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame(this.tick);
  }

  stop(): void {
    this.running = false;
  }

  private tick = (now: number): void => {
    if (!this.running) return;

    const frameDelta = now - this.lastTime;
    this.lastTime = now;
    this.accumulator += frameDelta;

    while (this.accumulator >= this.fixedDeltaMs) {
      this.update(this.fixedDeltaMs);
      this.accumulator -= this.fixedDeltaMs;
    }

    this.render();
    requestAnimationFrame(this.tick);
  };
}
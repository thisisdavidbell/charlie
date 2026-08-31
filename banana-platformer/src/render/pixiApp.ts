import { Application } from "pixi.js";

export async function createPixiApp(width: number, height: number): Promise<Application> {
  const app = new Application();

  await app.init({
    width,
    height,
    background: "#000000",
    antialias: false,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true
  });

  return app;
}
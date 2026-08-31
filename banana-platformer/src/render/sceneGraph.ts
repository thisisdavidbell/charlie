import { Container } from "pixi.js";

export interface SceneLayers {
  world: Container;
  pickups: Container;
  actors: Container;
  ui: Container;
}

export function createSceneLayers(): SceneLayers {
  return {
    world: new Container(),
    pickups: new Container(),
    actors: new Container(),
    ui: new Container()
  };
}
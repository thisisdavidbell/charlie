import { PHYSICS } from "./game/config/gameConstants";
import { buildLevel1 } from "./game/level/buildLevel1";
import { updateLevelScene } from "./game/scenes/levelScene";
import { FixedStepLoop } from "./game/systems/fixedStepLoop";
import { createGameSession } from "./game/systems/gameSession";
import { attachKeyboardInput, consumeInputState } from "./input/keyboardInput";
import flagImage from "../examples/flag.png";
import platformImage from "../examples/platform.png";
import { Assets, type Texture } from "pixi.js";
import { createPixiApp } from "./render/pixiApp";
import { createLevelSprites } from "./render/levelSprites";
import { createObjectSprites } from "./render/objectSprites";
import { createPlayerSprite } from "./render/playerSprite";
import { createSceneLayers } from "./render/sceneGraph";
import { createUiTextBox } from "./render/uiTextBox";

async function bootstrap(): Promise<void> {
  const appRoot = document.getElementById("app");
  if (!appRoot) {
    throw new Error("Missing #app root element");
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  const app = await createPixiApp(width, height);
  appRoot.appendChild(app.canvas);

  const platformTexture = await Assets.load<Texture>(platformImage);
  const flagTexture = await Assets.load<Texture>(flagImage);
  platformTexture.source.scaleMode = "nearest";
  flagTexture.source.scaleMode = "nearest";

  const layers = createSceneLayers();
  app.stage.addChild(layers.world, layers.pickups, layers.actors, layers.ui);

  const level = buildLevel1(width, height);
  const session = createGameSession(level, performance.now());
  const levelSprites = createLevelSprites(level, platformTexture);
  layers.world.addChild(levelSprites);

  const objectSprites = createObjectSprites(level, flagTexture);
  layers.pickups.addChild(objectSprites.node);

  const playerSprite = createPlayerSprite(session.player);
  layers.actors.addChild(playerSprite.node);

  const ui = createUiTextBox(width, height);
  layers.ui.addChild(ui.node);

  attachKeyboardInput();

  const loop = new FixedStepLoop(
    PHYSICS.fixedDeltaMs,
    (deltaMs) => {
      const input = consumeInputState();
      updateLevelScene(session, input, deltaMs, performance.now());
    },
    () => {
      objectSprites.sync();
      playerSprite.sync(session.player);
      ui.sync(session);
    }
  );

  loop.start();
}

bootstrap().catch((error) => {
  console.error("Failed to start Banana Platformer", error);
});
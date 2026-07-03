import { EventEmitter } from "./EventEmitter.js";
import { GameLoop } from "./GameLoop.js";
import { Time } from "./Time.js";
import { Scene } from "../scene/Scene.js";
import { Renderer } from "../rendering/Renderer.js";
import { InputManager } from "../input/InputManager.js";

export class Engine {
  constructor() {
    this.events = new EventEmitter();
    this.time = new Time();

    this.scene = new Scene(this);
    this.renderer = new Renderer(this);
    this.input = new InputManager(this);

    this.loop = new GameLoop(
      this.update.bind(this),
      this.render.bind(this)
    );
  }

  start() {
    this.events.emit("start");
    this.loop.start();
  }

  stop() {
    this.events.emit("stop");
    this.loop.stop();
  }

  update(now) {
    this.time.update(now);
    this.scene.update(this.time);
    this.input.update();
  }

  render() {
    this.renderer.render(this.scene);
  }
}

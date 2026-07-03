import { Engine } from "./core/Engine.js";
import { Entity } from "./entities/Entity.js";

const engine = new Engine();

// Event test
engine.events.on("start", () => {
  console.log("Engine gestartet");
});

engine.events.on("stop", () => {
  console.log("Engine gestoppt");
});

// Scene setup
const player = new Entity("Player");
engine.scene.add(player);

// Start engine
engine.start();

// optional stop after 10s
setTimeout(() => engine.stop(), 10000);

export class InputManager {
  constructor(engine) {
    this.engine = engine;
    this.keys = {};

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", e => this.keys[e.key] = true);
      window.addEventListener("keyup", e => this.keys[e.key] = false);
    }
  }

  isDown(key) {
    return !!this.keys[key];
  }

  update() {
    // future input processing
  }
}

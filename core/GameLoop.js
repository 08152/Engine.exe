export class GameLoop {
  constructor(update, render) {
    this.update = update;
    this.render = render;
    this.running = false;
    this._boundLoop = this.loop.bind(this);
  }

  start() {
    this.running = true;
    requestAnimationFrame(this._boundLoop);
  }

  stop() {
    this.running = false;
  }

  loop(time) {
    if (!this.running) return;

    this.update(time);
    this.render(time);

    requestAnimationFrame(this._boundLoop);
  }
}

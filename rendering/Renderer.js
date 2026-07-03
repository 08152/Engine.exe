export class Renderer {
  constructor(engine) {
    this.engine = engine;

    // Minimal Canvas fallback (optional WebGL later)
    this.canvas = typeof document !== "undefined"
      ? document.createElement("canvas")
      : null;

    if (this.canvas) {
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
      this.resize();
      window.addEventListener("resize", () => this.resize());
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  render(scene) {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // minimal debug render
    this.ctx.fillStyle = "black";
    this.ctx.fillText(
      `Entities: ${scene.entities.length}`,
      20,
      20
    );
  }
}

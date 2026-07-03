export class Time {
  constructor() {
    this.last = 0;
    this.delta = 0;
    this.elapsed = 0;
  }

  update(now) {
    this.delta = (now - this.last) / 1000;
    this.last = now;
    this.elapsed += this.delta;
  }
}

export class Entity {
  constructor(name = "Entity") {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  update(time) {
    // base entity logic
  }
}

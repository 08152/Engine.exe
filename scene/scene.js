export class Scene {
  constructor(engine) {
    this.engine = engine;
    this.entities = [];
  }

  add(entity) {
    this.entities.push(entity);
  }

  update(time) {
    for (const e of this.entities) {
      e.update?.(time);
    }
  }
}

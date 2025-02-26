'use strict';

class Animal {
  static HEALTH = 100;
  static alive = [];

  constructor(name, health = Animal.HEALTH) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static DAMAGE = 50;

  bite(target) {
    if (target.hidden || target instanceof Carnivore) {
      return;
    }

    target.health -= Carnivore.DAMAGE;

    const index = Animal.alive.indexOf(target);

    if (target.health <= 0) {
      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

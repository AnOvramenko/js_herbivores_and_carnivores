'use strict';

class Animal {
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;
  }

  static isAlive(healthyAnimals) {
    const filterAnimals = healthyAnimals.filter((animal) => animal.health > 0);

    return filterAnimals;
  }
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (!(herbivore instanceof Herbivore) || herbivore.hidden) {
      return;
    }
    herbivore.health -= 50;

    if (herbivore.health === 0) {
      Animal.alive = Animal.isAlive(Animal.alive);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

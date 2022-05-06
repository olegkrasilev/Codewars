// https://www.codewars.com/kata/5682e646d5eddc1e21000017
class Marine {

  constructor(health = 100) {
    this.health = health;
  }

  accept(visitor) {
    visitor.visitArmored(this);
  }
}

class Marauder {

  constructor(health = 125) {
    this.health = health;
  }

  accept(visitor) {
    visitor.visitLight(this);
  }
}

class TankBullet {
  visitLight(unit) {
    return unit.health -= 32;
  }

  visitArmored(unit) {
    return unit.health -= 21;
  }
}

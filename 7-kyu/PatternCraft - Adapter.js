// https://www.codewars.com/kata/56919e637b2b971492000036

class MarioAdapter {

  constructor(mario) {
    this.mario = mario;
  }

  attack(target) {
    this.mario.jumpAttack();
    target.health -= 3;
  }
}

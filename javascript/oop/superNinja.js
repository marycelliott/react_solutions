class Ninja {
  constructor(name, health, strength = 3, speed = 3) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
  }
  sayName() {
    console.log(this.name);
    return this;
  }
  showStats() {
    console.log(
      `Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`
    );
    return this;
  }
  drinkSake() {
    this.health += 10;
    return this;
  }
}

class Sensei extends Ninja {
  constructor(name, health = 200, strength = 10, speed = 10, wisdom = 10) {
    super(name, health, strength, speed); // we have to feed the parameters back into the original class
    this.wisdom = wisdom; // but wisdom is a NEW sttribute, so we need to define it
  }
  speakWisdom() {
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
    return this;
  }
}

const frank = new Sensei("TV'S Frank");
frank.showStats();
// keep going

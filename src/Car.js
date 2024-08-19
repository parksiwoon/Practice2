// src/Car.js
import generateRandomNumbers from './generateRandomNumbers.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (generateRandomNumbers() >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return '-'.repeat(this.position);
  }
}

export default Car;

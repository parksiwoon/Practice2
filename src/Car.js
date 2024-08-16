// 기능 3: 자동차 클래스 정의
// src/Car.js
import { generateRandomNumbers } from './generateRandomNumbers.js'; // 파일 경로가 정확한지 확인하세요.

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

// src/App.js

import { Console } from '@woowacourse/mission-utils'; //단순한 console 객체를 넘어서서, 다양한 유틸리티 메서드(예: 비동기 입력, 테스트 지원 등)를 제공
import Car from './Car.js';
import { validateCarNames, validateTryCount } from './Validator.js';

class App {
  async play() {
    try {
      // 1. 자동차 이름 입력 받기
      Console.print('경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)');
      const carNamesInput = await Console.readLineAsync(); 
      validateCarNames(carNamesInput); 
      const carNames = carNamesInput.split(','); 

      // 자동차 객체 생성
      const cars = carNames.map(name => new Car(name)); // 자동차 이름을 기반으로 Car 인스턴스 생성
    }
  }
}

// App 클래스를 내보냅니다.
export default App;

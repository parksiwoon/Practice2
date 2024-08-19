// src/generateRandomNumbers.js
import { Random } from '@woowacourse/mission-utils';

const generateRandomNumbers = () => {
  return Random.pickNumberInRange(0, 9);
};

export default generateRandomNumbers;

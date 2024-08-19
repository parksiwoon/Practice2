// 기능 1: 자동차 이름 유효성 검사
// src/Validator.js
const validateCarNames = (names) => {
    if (!names || names.trim() === '') {
      throw new Error('[ERROR] 자동차 이름을 입력해야 합니다.');
    }
    const nameArray = names.split(',');
    for (const name of nameArray) {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
      }
    }
  };
  
  const validateTryCount = (count) => {
    if (!Number.isInteger(count) || count <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 1 이상의 정수여야 합니다.');
    }
  };
  
  module.exports = { validateCarNames, validateTryCount };
  
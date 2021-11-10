import generateNumber from '../random.js';
import runGame from '../index.js';

const gameCondition = 'What is the result of the expression?';

const getOperand = () => {
  const array = ['+', '-', '*'];
  return array[generateNumber(0, 2)];
};

const getInfo = () => {
  const randomNum = [generateNumber(1, 20), generateNumber(1, 20)];
  const currentOper = getOperand();
  const value = `${randomNum[0]} ${currentOper} ${randomNum[1]}`;
  let correctAnswer = 0;

  switch (currentOper) {
    case '+':
      correctAnswer = randomNum[0] + randomNum[1];
      break;
    case '-':
      correctAnswer = randomNum[0] - randomNum[1];
      break;
    case '*':
      correctAnswer = randomNum[0] * randomNum[1];
      break;
    default:
  }
  return [value, String(correctAnswer)];
};

const gameCalc = () => {
  runGame(gameCondition, getInfo);
};

export default gameCalc;

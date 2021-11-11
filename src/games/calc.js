import generateNumber from '../random.js';
import runGame from '../index.js';

const gameCondition = 'What is the result of the expression?';

const getOperand = () => {
  const array = ['+', '-', '*'];
  return array[generateNumber(0, 2)];
};

const calculateResult = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator');
  }
};
const getInfo = () => {
  const randomNum = [generateNumber(1, 20), generateNumber(1, 20)];
  const currentOper = getOperand();
  const value = `${randomNum[0]} ${currentOper} ${randomNum[1]}`;
  const correctAnswer = calculateResult(currentOper, randomNum[0], randomNum[1]);

  return [value, String(correctAnswer)];
};

const gameCalc = () => {
  runGame(gameCondition, getInfo);
};

export default gameCalc;

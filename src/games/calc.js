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
  const leftNum = generateNumber(1, 20);
  const rightNum = generateNumber(1, 20);
  const currentOper = getOperand();
  const value = `${leftNum} ${currentOper} ${rightNum}`;
  const correctAnswer = calculateResult(currentOper, leftNum, rightNum);

  return [value, String(correctAnswer)];
};

const gameCalc = () => {
  runGame(gameCondition, getInfo);
};

export default gameCalc;

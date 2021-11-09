import generateNumber from '../random.js';
import runGame from '../index.js';

const gameCondition = 'Answer "yes" if number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getInfo = () => {
  const value = generateNumber(1, 100);
  const correctAnswer = isEven(value) ? 'yes' : 'no';
  return [value, correctAnswer];
};

const gameEven = () => {
  runGame(gameCondition, getInfo);
};

export default gameEven;

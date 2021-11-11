import generateNumber from '../random.js';
import runGame from '../index.js';

const gameCondition = 'What number is missing in the progression?';

const getProg = () => {
  const step = generateNumber(1, 5);
  let item = generateNumber(1, 80);
  const lenghtArr = generateNumber(4, 9);
  const array = [item];

  for (let i = 1; i <= lenghtArr; i += 1) {
    item += step;
    array.push(item);
  }

  return array;
};

const getInfo = () => {
  const cleanArr = getProg();
  const element = generateNumber(0, cleanArr.length - 1);
  const correctAnswer = cleanArr[element];

  cleanArr[element] = '..';
  const value = cleanArr.join(' ');

  return [value, String(correctAnswer)];
};

const gameProg = () => {
  runGame(gameCondition, getInfo);
};

export default gameProg;

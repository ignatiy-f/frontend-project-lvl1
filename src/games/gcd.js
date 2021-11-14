import generateNumber from '../random.js';
import runGame from '../index.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const findGcd = (firNum, secNum) => (secNum === 0 ? firNum : findGcd(secNum, firNum % secNum));

const getInfo = () => {
  const leftNum = generateNumber(1, 50);
  const rightNum = generateNumber(1, 50);
  const value = `${leftNum} ${rightNum}`;
  const correctAnswer = findGcd(leftNum, rightNum);

  return [value, String(correctAnswer)];
};

const gameGcd = () => {
  runGame(gameCondition, getInfo);
};

export default gameGcd;

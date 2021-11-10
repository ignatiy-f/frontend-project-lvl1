import generateNumber from '../random.js';
import runGame from '../index.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const findGcd = (firNum, secNum) => (secNum === 0 ? firNum : findGcd(secNum, firNum % secNum));

const getInfo = () => {
  const randomNum = [generateNumber(1, 50), generateNumber(1, 50)];
  const value = `${randomNum[0]} ${randomNum[1]}`;
  const correctAnswer = findGcd(randomNum[0], randomNum[1]);

  return [value, String(correctAnswer)];
};

const gameGcd = () => {
  runGame(gameCondition, getInfo);
};

export default gameGcd;

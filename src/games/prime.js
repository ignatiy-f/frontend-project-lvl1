import generateNumber from '../random.js';
import runGame from '../index.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getInfo = () => {
  const value = generateNumber(1, 100);
  const correctAnswer = isPrime(value) ? 'yes' : 'no';

  return [value, correctAnswer];
};

const gamePrime = () => {
  runGame(gameCondition, getInfo);
};

export default gamePrime;

import readlineSync from 'readline-sync';
import generateNumber from '../random.js';

const isEven = (num) => num % 2 === 0;

const checkForParity = () => {
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  console.log('Answer "yes" if number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
    const value = generateNumber(1, 100);
    const correctAnswer = isEven(value) ? 'yes' : 'no';
    const answerOfUser = readlineSync.question(`Question: ${value}\nYour answer: `);

    if (answerOfUser === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${nameOfUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameOfUser}!`);
};

export default checkForParity;

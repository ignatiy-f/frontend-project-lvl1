import readlineSync from 'readline-sync';

const rounds = 3;

const runGame = (gameCondition, getInfo) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  console.log(gameCondition);

  for (let i = 0; i < rounds; i += 1) {
    const [value, correctAnswer] = getInfo();
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

export default runGame;

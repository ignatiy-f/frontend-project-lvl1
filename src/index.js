import readlineSync from 'readline-sync';

const rounds = 3;

const runGame = (gameCondition, getInfo) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  console.log(gameCondition);

  for (let i = 0; i < rounds; i += 1) {
    const info = getInfo();
    const correctAnswer = info[1];
    const answerOfUser = readlineSync.question(`Question: ${info[0]}\nYour answer: `);

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

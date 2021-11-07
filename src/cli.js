import readlineSync from 'readline-sync';

const toGreetUser = () => {
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
};

export default toGreetUser;

const init = function () {
  const greet = function () {
    console.log('Hello');
  };

  return function (name, age) {
    const lastName = 'Artiukhov';

    return {
      name,
      age,
      lastName,
      greet,
    };
  };
};

const createUser = init();

const user = createUser('Maks', 21);
const user2 = createUser('Alex', 34);

console.log(user, user2);
console.log(user.greet === user2.greet);

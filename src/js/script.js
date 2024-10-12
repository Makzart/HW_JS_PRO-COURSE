const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const userNumber = 16;

function generateKey(length, str) {
  let key = '';
  for (let i = 1; i <= length; i += 1) {
    key += str[Math.floor(Math.random() * str.length)];
  }
  return key;
}

const result = generateKey(userNumber, characters);
console.log(result);

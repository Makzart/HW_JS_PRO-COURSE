const userNumber = +prompt('Ведіть число:');
let divisor;

for (let i = 2; i <= userNumber; i += 1) {
  if (userNumber % i === 0) {
    divisor = i; break;
  } else continue;
}

if (userNumber < 1) {
  console.log('NaN');
} else if (userNumber === 1) {
  console.log(1);
} else {
  console.log(divisor);
}

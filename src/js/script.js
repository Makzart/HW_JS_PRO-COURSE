// Example 1
let stringExample1 = '';

for (let i = 20; i <= 30; i += 0.5) {
  stringExample1 += `${i} `;
}

console.log(stringExample1);

// Example 2
const dollar = 27;
let stringExample2 = '';

for (let i = 10; i <= 100; i += 10) {
  stringExample2 += `${i * dollar} `;
}

console.log(stringExample2);

// Example 3
const userNumber = 50;

for (let i = 1; i <= 100; i += 1) {
  if (i ** 2 > userNumber) continue;
  console.log(i);
}

// Example 4
const userNumber2 = 23;
let isPrime = true;

for (let i = 2; i < userNumber2; i += 1) {
  if (userNumber2 % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${userNumber2} є простим числом`);
} else {
  console.log(`${userNumber2} не є простим числом`);
}

// Example 5
const userNumber3 = 729;
let isPowerOfThree = false;

for (let i = 1; 3 ** i <= userNumber3; i += 1) {
  if (3 ** i === userNumber3) {
    isPowerOfThree = true;
    break;
  }
}

if (isPowerOfThree) {
  console.log(`Число ${userNumber3} підходить`);
} else {
  console.log(`Число ${userNumber3} не підходить`);
}

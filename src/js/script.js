// Example 1

const x = 10;
const y = 7;

const result = x > y ? 'x більше за y' : 'x не більше, ніж y';

console.log(result);

// Example 3

const answer = prompt('Введіть ціле число:');
const num = +answer;
const result3 = num > 0 ? answer.length : answer.length - 1;

switch (true) {
  case (Number.isNaN(num)):
    console.log('Ви ввели не коректне число');
    break;
  case (num === 0):
    console.log('Ви ввели 0');
    break;
  case (!Number.isInteger(num)):
    console.log('Ви ввели не ціле число');
    break;
  case (num > 0):
    console.log(`Число ${num} однозначне позитивне`);
    break;
  case (num < 0):
    console.log(`Число ${num} однозначне негативне`);
    break;
}

console.log(result3);

// Example 4
const num1 = +prompt('Введіть перше число:');
const num2 = +prompt('Введіть друге число:');
const num3 = +prompt('Введіть третє число:');

if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
  console.log('Введено не коректне число');
} else if (num1 > num2 && num1 > num3) {
  console.log(`Найбільше число: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`Найбільше число: ${num2}`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`Найбільше число: ${num3}`);
} else {
  console.log('Є рівні числа або всі числа однакові');
}

// Example 5

const sideA = +prompt('Введіть довжину першої сторони:');
const sideB = +prompt('Введіть довжину другої сторони:');
const sideC = +prompt('Введіть довжину третьої сторони:');

if (Number.isNaN(sideA) || Number.isNaN(sideB) || Number.isNaN(sideC)) {
  console.log('Введено не коректну довжину');
} else if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
  console.log('Трикутник не може існувати в таких довжинах');
} else {
  console.log('Трикутник може існувати в таких довжинах');
}

/* Example #1 */
const a = 3;
const b = 7;

const resultExample1 = (a === 0) ? 'Вірно' : 'Неправильно';
console.log(resultExample1);
/* Example #2 */
const resultExample2 = (a > 0) ? 'Вірно' : 'Невірно';
console.log(resultExample2);
/* Example #3 */
const resultExample3 = (a < 0) ? 'Вірно' : 'Невірно';
console.log(resultExample3);
/* Example #4 */
const resultExample4 = (a >= 0) ? 'Вірно' : 'Неправильно';
console.log(resultExample4);
/* Example #5 */
const resultExample5 = (a <= 0) ? 'Вірно' : 'Неправильно';
console.log(resultExample5);
/* Example #6 */
const resultExample6 = (a !== 0) ? 'Вірно' : 'Невірно';
console.log(resultExample6);
/* Example #7 */
const resultExample7 = (a === 'test') ? 'Вірно' : 'Неправильно';
console.log(resultExample7);
/* Example #8 */
const resultExample8 = (a === '1') ? 'Вірно' : 'Невірно';
console.log(resultExample8);
/* Example #9 */
const resultExample9 = (a > 0 && a < 5) ? 'Вірно' : 'Невірно';
console.log(resultExample9);
/* Example #10 */
const resultExample10 = (a === 0 || a === 2) ? a + 7 : a / 10;
console.log(resultExample10);
/* Example #11 */
const resultExample11 = (a <= 1 && b >= 3) ? a + b : a - b;
console.log(resultExample11);
/* Example #12 */
const resultExample12 = (a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Вірно' : 'Неправильно';
console.log(resultExample12);
/* Example #13 */
const num = 4;
let result;

switch (num) {
  case 1:
    result = 'Зима';
    break;
  case 2:
    result = 'Весна';
    break;
  case 3:
    result = 'Літо';
    break;
  case 4:
    result = 'Осінь';
    break;
}

console.log(result);

/* Task #1 */
const getFactorial = (n) => {
  if (n === 0) return 1;
  return n * getFactorial(n - 1);
};

console.log(getFactorial(4));
/* Task #2 */
const pow = (num, degree) => {
  if (degree === 0) return 1;
  return num * pow(num, degree - 1);
};

console.log(pow(2, 4));
/* Task #3 */
const example = (a, b) => {
  if (b === 0) return a;
  return example(a += 1, b - 1);
};

console.log(example(5, 3));

/* Example #1 */
const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = arr[0]; i <= arr.length; i += 1) {
  sum += i;
}

console.log(sum);
/* Example #2 */
let sumOfSquare = 0;

for (let i = arr[0]; i <= arr.length; i += 1) {
  sumOfSquare += i ** 2;
}

console.log(sumOfSquare);

/* Example#1 */
let strExample1 = '';
for (let i = 10; i <= 20; i += 1) {
  strExample1 += `${i}, `;
}
console.log(strExample1);

/* Example#2 */
let strExample2 = '';
for (let i = 10; i <= 20; i += 1) {
  strExample2 += `${i * i}, `;
}
console.log(strExample2);

/* Example#3 */
let strExample3 = '';
for (let i = 1; i <= 10; i += 1) {
  strExample3 += `${i * 7}, `;
}
console.log(strExample3);

/* Example#4 */
let sumExample4 = 0;
for (let i = 1; i <= 15; i += 1) {
  sumExample4 += i;
}
console.log(sumExample4);

/* Example#5 */
let multExample5 = 1;
for (let i = 15; i <= 35; i += 1) {
  multExample5 *= i;
}
console.log(BigInt(multExample5));

/* Example#6 */
let avgExample6 = 0;
let countExample6 = 0;
for (let i = 1; i <= 500; i += 1) {
  avgExample6 += i;
  countExample6 += 1;
}
const avg = avgExample6 / countExample6;
console.log(avg);

/* Example#7 */
let sumExample7 = 0;
for (let i = 30; i <= 80; i += 2) {
  sumExample7 += i;
}
console.log(sumExample7);

/* Example#8 */
let strExample8 = '';
for (let i = 100; i <= 200; i += 1) {
  if (i % 3 === 0) {
    strExample8 += `${i}, `;
  }
}
console.log(strExample8);

/* Example#9 */
const num = 50;
let strExample9 = '';
for (let i = 1; i <= num; i += 1) {
  if (num % i === 0) {
    strExample9 += `${i}, `;
  }
}
console.log(strExample9);

/* Example#10 */
let countEvenDivisors = 0;
for (let i = 1; i <= num; i += 1) {
  if (num % i === 0 && i % 2 === 0) {
    countEvenDivisors += 1;
  }
}
console.log(countEvenDivisors);

/* Example#11 */
let sumExample11 = 0;
for (let i = 1; i <= num; i += 1) {
  if (num % i === 0 && i % 2 === 0) {
    sumExample11 += i;
  }
}
console.log(sumExample11);

/* Example#12 */
let mulTable = '';
for (let i = 1; i <= 10; i += 1) {
  for (let j = 1; j <= 10; j += 1) {
    mulTable += `${i} * ${j} = ${i * j}\n`;
  }
}
console.log(mulTable);

let sum = 0;

for (let i = 1; i <= 20; i += 1) {
  if (i % 2 === 0) {
    break;
  }
  sum += i;
}

console.log(sum);

const age = +prompt('Введіть рік:');
let correctNum;
if (Number.isNaN(age) || age < 0) {
  console.log('Введено некоректне число');
} else if (age % 100 >= 11 && age % 100 <= 19) {
  correctNum = 'років';
} else if (age % 10 === 1) {
  correctNum = 'рік';
} else if (age % 10 >= 2 && age % 10 <= 4) {
  correctNum = 'роки';
} else {
  correctNum = 'років';
}

console.log(`${age} ${correctNum}`);

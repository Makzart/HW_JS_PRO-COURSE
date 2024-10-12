const arr = [1, 2, 3, -1, -2, -3, 6];

function positiveNum(array) {
  const exampleArr = [];
  if (array.length === 0) return 'Цей массив порожній';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 0) exampleArr.push(array[i]);
  }
  if (exampleArr.length === 0) return 'Немає додатніх чисел у масиві';
  return exampleArr;
}

console.log(positiveNum(arr));

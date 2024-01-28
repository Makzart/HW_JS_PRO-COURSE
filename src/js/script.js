const usedNumbers = [];
const randomNumber = function () {
  const randomNumberResult = Math.floor(Math.random() * 100);
  if (!usedNumbers.includes(randomNumberResult)) {
    usedNumbers.push(randomNumberResult);
    return randomNumberResult;
  }
  return randomNumber();
};

for (let i = 0; i <= 99; i += 1) {
  console.log(randomNumber());
}

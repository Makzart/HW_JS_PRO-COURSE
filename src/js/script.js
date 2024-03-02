(function () {
  const elementList = document.querySelectorAll('#ulId li');
  let countList = 0;
  const textArray = [];
  for (const node of elementList) {
    console.log(node.textContent);
    countList += 1;
    textArray.push(node.textContent);
  }
  console.log(`Загальну кількість елементів: ${countList}`);
  console.log(textArray);
}());

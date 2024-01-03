'use strict';

const firstNumber = Number(prompt('Введіть перше число:'));
const secondNumber = Number(prompt('Введіть друге число:'));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Будь ласка, введіть коректні числа.");
} else {
    const addition = firstNumber + secondNumber;
    const subtraction = firstNumber - secondNumber;
    const multiplication = firstNumber * secondNumber;
    const division = firstNumber / secondNumber;

    const resultMessage = `Користувач ввів ${firstNumber} і ${secondNumber}:\n` +
        firstNumber + " + " + secondNumber + " = " + addition + "\n" +
        firstNumber + " - " + secondNumber + " = " + subtraction + "\n" +
        firstNumber + " * " + secondNumber + " = " + multiplication + "\n" +
        firstNumber + " / " + secondNumber + " = " + division;

    alert(resultMessage);
}


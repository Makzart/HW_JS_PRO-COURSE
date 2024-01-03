'use strict';

const operation = prompt("Оберіть операцію (add, sub, mult, div):");

const firstNumber = Number(prompt("Введіть перше число:"));
const secondNumber = Number(prompt("Введіть друге число:"));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Будь ласка, введіть коректні числа.");
} else {
    let result;
    let operator;

    switch (operation) {
        case "add":
            result = firstNumber + secondNumber;
            operator = "+";
            break;
        case "sub":
            result = firstNumber - secondNumber;
            operator = "-";
            break;
        case "mult":
            result = firstNumber * secondNumber;
            operator = "*";
            break;
        case "div":
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
                operator = "/";
            } else {
                alert("Ділення на нуль неможливе.");
            }
            break;
        default:
            alert("Невідома операція. Оберіть одну з: add, sub, mult, div.");
            break;
    }

    if (operator) {
        const resultMessage = firstNumber + " " + operator + " " + secondNumber + " = " + result;
        alert(resultMessage);
    }
}

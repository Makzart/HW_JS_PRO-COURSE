'use strict';
const userNumber = Number(prompt('Введіть число: '));
const userDegree = Number(prompt('Введіть ступінь числа: '));

function calculation(number, degree = 1) {
    if (Number.isNaN(number) || Number.isNaN(degree)) {
        return alert("Помилка");
    }
        else {
            return Math.pow(number, degree);
    }
}

const result = calculation (userNumber, userDegree);
alert("Ось ваше число: " + result);




'use strict';

const userNumber = +prompt('Введіть число:');
const userDegree = +prompt('Введіть ступінь:');

function calculateExponent (num, degree = 1) {
    return Number.isNaN(num) || Number.isNaN(degree)? 'Помилка' : Math.pow(num, degree);
}

function calculateExponent2 (num, degree = 1) {
    if (Number.isNaN(num) || Number.isNaN(degree)) return 'Помилка';
    return Math.pow(num, degree);
}

const result = calculateExponent(userNumber, userDegree);

alert(result);




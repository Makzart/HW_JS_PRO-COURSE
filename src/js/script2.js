'use strict';
const userString = 'Maks';
const userLength = 8;
const userSymbol = '*';
const userSide = false;

function padString (string, num, symbol, side = true) {
    if (typeof string !== 'string') return 'Помилка. Ви не ввели рядок';
    if (typeof num !== 'number' || Number.isNaN(num) || num === 0) return 'Помилка. Ви не ввели довжину рядка';
    if (typeof symbol !== 'string' || symbol.length !== 1) return 'Помилка. Ви не ввели символ';
    if (typeof side !== 'boolean') return 'Помилка. Ви не ввели сторону';

    let newString = string.substring(0, num);
    if (side === true) {
        for (let i = newString.length; i < num; i += 1) {
            newString += symbol;
        }
    } else {
        for (let i = newString.length; i < num; i += 1) {
            newString = symbol + newString;
        }
    }

    return newString;
}
const result = padString(userString, userLength, userSymbol, userSide);
console.log(result);

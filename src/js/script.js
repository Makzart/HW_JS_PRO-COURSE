'use strict';
const userString = prompt("Enter your string: ");
const userLength = Number(prompt("Enter your length: "));
const userSymbol = prompt("Enter your symbol: ");
const userSide = Boolean(Number(prompt("Enter 1 = right or 0 = left: ")));

const repeatCharRight = function (text, char, times){
    let result = text;
    for (let i = text.length; i < times; i++){
        result += char;
    }
    return result;
}

const repeatCharLeft = function (text, times, char){
    let result = '';
    for (let i = 0; i < times - text.length; i++){
        result += char;
    }
    result += text;
    return result;
}

const padString = function (string, length, symbol, right = true) {
    if (typeof string !== 'string') throw new Error('string should be a string!');
    if (typeof length !== 'number' || isNaN(length)) throw new Error('length should be a valid number and not NaN!');

    if (string.length === length) return string;
    if (string.length > length) return string.substring(0, length);

    if (typeof symbol !== 'string' || symbol.length !== 1) throw new Error('symbol should be a string with length = 1!');
    if (typeof right !== 'boolean') throw new Error('right should be a boolean!');

    if (string.length < length && right === true) return repeatCharRight(string, symbol, length);
    if (string.length < length && right === false) return repeatCharLeft(string, length, symbol);
}

const result = padString(userString, userLength, userSymbol, userSide);
alert(result);
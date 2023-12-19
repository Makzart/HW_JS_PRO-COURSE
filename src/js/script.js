'use strict';

/*Task #1*/

const firstString = prompt('Enter first string');
const secondString = prompt('Enter second string');
const thirdString = prompt('Enter third string');

const result = secondString + " " + thirdString + " " + firstString;

console.log(result);


/*Task #2*/
const numberExample = 23462;
const numberString = String(numberExample);

const resultTask2 = `Number: ${numberString[0] + " " + numberString[1] + " " + numberString[2] + " " + numberString[3] + " " + numberString[4]}`;

console.log(resultTask2);
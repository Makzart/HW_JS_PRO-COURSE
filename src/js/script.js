'use strict';

const a = prompt('Enter the first number');
const b = prompt('Enter the second number');

const numA = Number(a);
const numB = Number(b);

if (!isNaN(numA) && !isNaN(numB)) {
    console.log('Result: '+ (numA + numB));
    console.log('Result: '+ (numA - numB));
    console.log('Result: '+ (numA * numB));
    console.log('Result: '+ (numA / numB));
} else {
    alert('Invalid input. Please enter valid numbers.');
}


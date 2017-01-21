'use strict';
function solve(args) {
    let numA = +args[0],
        numB = +args[1],
        numC = +args[2];

    let isZero = false;
    let negativCounter = 0;
    if (numA === 0 || numB === 0 || numC === 0) {
        isZero = true;
    }
    if (numA < 0) {
        negativCounter += 1;
    }
    if (numB < 0) {
        negativCounter += 1;
    }
    if (numC < 0) {
        negativCounter += 1;
    }
    if (isZero) {
        console.log('0');
    }
    else {
        if (negativCounter % 2 === 0) {
            console.log('+');
        }
        else {
            console.log('-');
        }
    }
}

solve(['-1', '-0.5', '-5.1'])
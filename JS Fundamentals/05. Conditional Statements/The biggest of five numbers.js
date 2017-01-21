'use strict';

function solve(args) {
    let numA = +args[0],
        numB = +args[1],
        numC = +args[2],
        numD = +args[3],
        numF = +args[4],
        maxNum = numA;

    if (numB > maxNum) {
        maxNum = numB;
    }
    if (numC > maxNum) {
        maxNum = numC;
    }
    if (numD > maxNum) {
        maxNum = numD;
    }
    if (numF > maxNum) {
        maxNum = numF;
    }
    console.log(maxNum);
}
solve(['-3', '-0.5', '-1.1', '-2', '-0.1'])
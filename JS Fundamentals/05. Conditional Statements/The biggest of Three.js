'use strict';

function solve(args) {
    let numA = +args[0],
        numB = +args[1],
        numC = +args[2];

    if (numA >= numB) {
        if (numA >= numC) {
            console.log(numA);
        } else {
            console.log(numC);
        }
    }
    else {
        if (numB >= numC) {
            console.log(numB);
        }
        else {
            console.log(numC);
        }
    }
}
solve(['0', '-2.5', '5'])
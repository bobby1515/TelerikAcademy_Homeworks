'use strict';
function solve(args) {
    let numA = +args[0],
        numB = +args[1],
        numC = +args[2],
        temp = 0;


    while (!(numA >= numB && numB >= numC)) {
        if (numA < numB) {
            temp = numA;
            numA = numB;
            numB = temp;
        }
        if (numB < numC) {
            temp = numC;
            numC = numB;
            numB = temp;
        }
    }
    console.log(numA + ' ' + numB + ' ' + numC);
}

solve(['5', '1', '2']);//5 2 1
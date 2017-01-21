'use strict';

function solve(args) {
    var n = +args,
        i, j, len,
        isPrime = false,
        theSieve = [];

    for (i = n; i >= 2; i -= 1) {
        len = Math.sqrt(i);
        isPrime = true;
        for (j = 2; j <= len; j += 1) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i);
            return;
        }
    }
}

solve(13);//13
//solve(126);//113
//solve(26);//23
function solve(args) {
    var numN = +args,
        isPrime = false,
        len, i, j,
        arr = [];

    for (i = numN; i > 2; i -= 1) {
        len = Math.sqrt(i);
        isPrime = true;
        for (j = 2; j <= len; j += 1) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i);
            return;
        }
    }
}

solve(13);//13
//solve(126);//113
//solve(26);//23
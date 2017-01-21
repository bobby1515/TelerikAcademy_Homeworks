'use strict';
function solve(args) {
    let numbers = (args + '').split(' ').map(Number);
    let max = numbers.reduce(function (a, b) {
        return a >= b ? a : b;
    });
    console.log(max);
}

solve('8 3 6');//8

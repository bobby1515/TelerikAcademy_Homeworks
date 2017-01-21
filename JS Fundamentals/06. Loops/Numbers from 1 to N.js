'use strict';

function solve(args) {
    var N = +args[0],
        result = '';

    for (var i = 1; i <= N; i += 1) {
        result += String(i) + ' ';
    }
   result = result.trim();
    console.log(result);
}
/*
function solve(args) {
    let numberN = +args[0],
        result = '';

    for (let i = 1; i <= numberN; i++) {
        result += i + ' ';
    }
    console.log(result);
}*/

solve(['5'])
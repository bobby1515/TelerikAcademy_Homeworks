'use strict';
function solve(args) {
    let str = args[0];
    let i, leng, count = 0;

    for (i = 0, leng = str.length; i < leng; i += 1) {
        if (str[i] === '(') {
            count++;
        } else if (str[i] === ')') {
            count--;
        }
    }
    console.log(!count ? 'Correct' : 'Incorrect');
}
solve(['((a+b)/5-d)']);
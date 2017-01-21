'use strict';

function solve(args) {
    let str = String(args),
        digit,
        hex = '0123456789ABCDEF',
        sum = 0,
        len = str.length;

    for (let i = 0; i < len; i++) {
        digit = hex.indexOf(str[i]);
        sum = digit + sum * 16;
    }
    console.log(sum);
}
solve(['1AE3'])
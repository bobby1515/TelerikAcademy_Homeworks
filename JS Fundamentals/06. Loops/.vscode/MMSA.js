'use strict';

function solve(args) {
    let lenN = args.length;

    let minNum = +args[0],
        maxNum = +args[0],
        sum = +args[0],
        avg = 0;

    for (let i = 1; i < lenN; i++) {
        //min
        if (minNum > +args[i]) {
            minNum = +args[i];
        }
        //max
        if (maxNum < +args[i]) {
            maxNum = +args[i];
        }
        //sum
        sum += +args[i];
    }
    avg = sum / lenN;
    //Output min, max, sum, avg
    console.log('min=' + minNum.toFixed(2));
    console.log('max=' + maxNum.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
solve(['2', '5', '1'])
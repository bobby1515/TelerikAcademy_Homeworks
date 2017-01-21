'use strict';
function solve(args) {
    var arr = args.map(Number),
    temp = [],
        sum = 0, i;
        temp =  arr.slice(3, 6);
        
    for (var i in temp) {
        sum += temp[i];
    }


    console.log(sum);
}

solve([4, 3, 1, 4, 2, 5, 8]);
//11

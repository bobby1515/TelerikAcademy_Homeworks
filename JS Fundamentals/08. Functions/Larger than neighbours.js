'use strict';
function solve(args) {
    let searchArr = +args[0],
        input = args[1].split(' ').map(Number),
        counter = 0,
        i;
    for (i = 1; i < searchArr - 1; i += 1) {
        if (input[i] > input[i - 1] && input[i] > input[i + 1]) {
            counter += 1;
        }
    }

    console.log(counter);
}

solve(['6', '-26 -25 -28 31 2 27']);
//2
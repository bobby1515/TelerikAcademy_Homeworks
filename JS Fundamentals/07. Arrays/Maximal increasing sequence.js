'use strict';
function solve(args) {
    var array = args.map(Number),
        counter = 1,
        max = 0,
        prev = +array[0],//10 - 0-index
        index, len, element;

    len = array.length;
    for (index = 1; index < array.length; index++) {
        element = array[index];
        if (element > prev) {
            counter += 1;
        }
        else {
            if (counter > max) {
                max = counter;
            }
            counter = 1;
        }

        prev = element;
    }

    if (counter > 1) {
        if (counter > max) {
            max = counter;
        }
    }
    console.log(max);
}
solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
'use strict';

function solve(args) {
    var array = args.map(Number),
        counter = 1,
        max = 0,
        prev = +array[0],//10 - 0-index
        index, len, element;

    len = array.length;
    for (index = 1; index < len; index += 1) {
        element = +array[index];

        if (element === prev) {
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

    if (counter > max) {
        max = counter;
    }

    console.log(max);
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);//3
/*
function solve(args) {
    let arr = args.map(Number);
   let arrMAX = [arr[0]];
    let arrNEXT = [arr[0]];
    let count = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            arrNEXT.splice(0, 0, arr[i + 1]);
            count += 1;
            if (arrMAX.length < count) {
                arrMAX = arrNEXT;
            }
        } else {
            arrNEXT = [arr[i + 1]];
            count = 1;
        }
    }
    console.log(arrMAX.length);
}
solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
*/
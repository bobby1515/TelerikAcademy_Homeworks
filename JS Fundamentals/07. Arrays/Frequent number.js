'use strict';
function solve(arr) {
    arr.splice(0, 1);
    var checked = [];
    var i, j,
        len = arr.length,
        counter = 0,
        max = 0,
        maxNum = 0;

    for (i = 0; i < len; i += 1) {

        if (checked.indexOf(arr[i]) >= 0) {
            continue;
        }
        for (j = 0; j < len; j += 1) {
            if (arr[j] === arr[i]) {
                counter += 1;
            }
        }
        if (max < counter) {
            max = counter;
            maxNum = arr[i];
        }

        counter = 0;
        checked.push(arr[i]);
    }

    console.log(maxNum + ' (' + max + ' times)');
}
solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
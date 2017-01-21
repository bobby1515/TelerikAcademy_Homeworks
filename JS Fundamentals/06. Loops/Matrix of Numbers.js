'use strict';

function solve(args) {

    let matrix = [],
        rows = +args,
        cols,
        row,
        col,
        count;

    for (row = 0; row < rows; row++) {
        matrix[row] = '';
        count = row + 1;

        for (col = 0; col < rows; col++) {
            matrix[row] += String(count) + ' ';
            count += 1;
        }
        matrix[row] = String(matrix[row]).trim();
        console.log(matrix[row]);
    }
}

solve(['4'])
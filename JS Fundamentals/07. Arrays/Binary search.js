'use strict';
function solve(arr) {
    var input = arr.map(Number),
        find, len, i, j, left, right, found;

    input.splice(0, 1);
    len = input.length;
    find = input.splice(len - 1, 1);
    len -= 1;

    input.sort(function (a, b) {
        if (+a < +b) {
            return -1;
        } else if (+a > +b) {
            return 1;
        } else {
            return 0;
        }
    });

    left = 0;
    right = len - 1;

    function binarySearch(leftarg, rightarg) {
        var leftIndex = +leftarg;
        var rightIndex = +rightarg;

        var mid = ((rightIndex - leftIndex) / 2 + leftIndex) | 0;

        if (leftIndex === rightIndex) {
            found = -1;
            return;
        }

        if (+find === input[mid]) {
            found = mid;
            return;
        } else if (+find < input[mid]) {
            binarySearch(leftIndex, mid);
        } else {
            binarySearch(mid + 1, rightIndex);
        }
    }

    binarySearch(left, right);

    console.log(found);
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);//6
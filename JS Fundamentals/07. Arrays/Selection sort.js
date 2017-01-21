'use strict';
function sortArray(arr) {
    arr.splice(0, 1);
    var helper;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (+arr[j] < +arr[i]) {
                helper = +arr[i];
                arr[i] = +arr[j];
                arr[j] = helper;
            }

        }
        console.log(arr[i]);
    }

}


sortArray(['6', '3', '4', '1', '5', '2', '6']);
/*1
2
3
4
5
6*/
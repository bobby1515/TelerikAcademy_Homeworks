'use strict';
function sortArray(args) {
    let len = +args[0],
        numbers = args[1].split(' ').map(Number);

    return sortByDescendingOrder(numbers).join(' ');

    function sortByDescendingOrder(array) {
        let len = array.length;

        for (let i = len - 1; i >= 0; i -= 1) {
            let data = getMax(i, array),
                maxEl = data.maxElement,
                maxElIndex = data.maxElementIndex;

            array.splice(maxElIndex, 1);
            array.splice(i, 0, maxEl);
        }
        return array;
    }

    function getMax(index, numArray) {
        let maxElement = Number.NEGATIVE_INFINITY,
            maxElIndex = 0;
        
        for (let i = 0; i <= index; i += 1) {
            if (numArray[i] > maxElement) {
                maxElement = numArray[i];
                maxElIndex = i;
            }
        }

        let data = {
          maxElement: maxElement,
          maxElementIndex: maxElIndex
        };

        return data;
    }    
}

// function sortArray(args) {
//     var len = +args[0],
//         numbers = args[1].split(' ').map(Number);

//     return sortByDescendingOrder(numbers).reverse().join(' ');

//     function sortByDescendingOrder(array) {
//         var i, len, maxEl, maxElIndex, temp;

//         for (i = 0, len = array.length; i < len; i += 1) {
//             maxEl = getMax(i, array);
//             maxElIndex = array.indexOf(maxEl, i);
//             temp = array[i];
//             array[i] = maxEl;
//             array[maxElIndex] = temp;
//         }
//         return array;
//     }

//     function getMax(index, numArray) {
//         var i, len,
//             maxElement = Number.NEGATIVE_INFINITY;

//         for (i = index, len = numArray.length; i < len; i += 1) {
//             if (numArray[i] > maxElement) {
//                 maxElement = numArray[i];
//             }
//         }
//         return maxElement;
//     }
//     // easy way
//     // sortedArray = numbers.sort(function(a, b) {
//     //   return a - b;
//     // });
// }

console.log(sortArray(['6', '3 4 1 5 2 6']));
'use strict';


function solve(args) {
let word1 = args[0].split(','),
     word2 = args[1];

   if (word1 > word2) {
        return '>';
    } else if (word1 < word2) {
        return '<';
    } else {
        return '=';
    }
}

console.log(solve(['hello', 'halo']));


'use strict';
function solve(args) {
    let lines = args[1].split(' ').map(Number);

    return findBiggerNum(lines);
    
    function findBiggerNum(lines) {
        let i,
            len = lines.length,
            index = -1;
        for (i = 1; i < len; i += 1) {
            if ((lines[+i - 1] < lines[+i] && lines[+i] > lines[+i + 1])) {
                index = i;
                break;
            }
        }

        return index;
    }
}

console.log(solve(['6', '-26 -25 -28 31 2 27']));
    //1

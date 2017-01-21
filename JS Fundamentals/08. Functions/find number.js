'use strict';
// Намери число //
function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
                find(start + 3, "(" + history + "  3)");
    }
    return find(1, "1");
}

console.log(findSolution(24));
// → (((1  3) + 5)  3)
/* нула е четно.

 едно е нечетно.

за всеки друг брой N, неговата четност е N - 2*/
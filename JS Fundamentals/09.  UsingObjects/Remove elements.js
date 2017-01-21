'use strict';
function solve(args){
    var searchElement = args[0],
        arr = [],
        resultArray = [];
    for (var i = 0, len = args.length - 1; i < len; i++)
    {
        arr[i] = args[i + 1];
    }
 
    Array.prototype.remove = function(searchElement) {
        for (var i = 0, len = this.length; i < len; i++)
        {
            if (this[i] == searchElement) // or ===
            {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    }
 
    resultArray = arr.remove(searchElement);
 
    for(var k = 0, leng = resultArray.length; k < leng; k++)
    {
        console.log(resultArray[k]);
    }
}

solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);
'use strict';
function solve(args) {
  let numA = +args[0],
    numB = +args[1];

  if (numA > numB) {
    let tempNum = numA;
      numA = numB,
      numB = tempNum;
  }
  console.log(numA + ' ' + numB);
}

solve(['5', '2'])
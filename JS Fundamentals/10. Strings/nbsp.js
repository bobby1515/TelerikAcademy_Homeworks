'use strict';
function solve(args) {
  let text = args[0],
      result;

  result = text.replace(/\s/g, '&nbsp;');
  console.log(result);
}
solve(['hello world']);
solve(['This text contains 4 spaces!!']);

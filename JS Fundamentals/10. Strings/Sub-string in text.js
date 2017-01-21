'use strict';
function solve(args) {
   let searched = args[0],
      text = args[1];
      
  let reg = new RegExp(searched,'gi'),
      arrayWithAllMatches = text.match(reg);
  console.log(arrayWithAllMatches.length);
}
solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);//9
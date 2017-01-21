'use strict';
var obj = {
    name: 'Desi',
    age: 43,
    born: 1973
};
console.log(deepClone(obj));
function deepClone(obj) {
var clone = {};

if (obj  === null || typeof(obj) !== 'object') {
return obj;
}
if (Array.isArray(obj)) {
    return obj.slice();
}
for(let prop in obj) {
   if (obj.hasOwnProperty(prop)) {
       clone[prop] = obj[prop];
   } 
}
return clone;
}
//{ name: 'Desi', age: 43, born: 1973 }

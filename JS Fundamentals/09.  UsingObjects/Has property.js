'use strict';
var person = {
    name: 'Desi',
    age: 43,
    born: 1973
};
console.log(person.hasOwnProperty('name'));
console.log('address' in person);
console.log(hasProp(person, 'age'));

function hasProp(obj, toSearch) {
    for (let prop in obj)
    {
        if (prop === toSearch)
        {
            return true;
        }
    }
    return false;
}
/*true
false
true*/


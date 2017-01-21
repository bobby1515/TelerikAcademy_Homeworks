'use strict';
function findYoungest(args) {
    var i, j, len, youngest, person = {},
        arrayPeople = [];

    for (i = 0, len = args.length; i < len; i += 3) {
        person = createPerson(args[i], args[i + 1], +args[i + 2]);
        arrayPeople.push(person);
    }

    youngest = arrayPeople[0];

    for (i = 0; i < arrayPeople.length; i += 1) {
        if (arrayPeople[i].age < youngest.age) {
            youngest = arrayPeople[i];
        }
    }

    return youngest.firstname + ' ' + youngest.lastname;

    function createPerson(first, last, age) {
        return {
            firstname: first,
            lastname: last,
            age: age
        };
    }
}

console.log(findYoungest(['Gosho', 'Petrov', '32', 'Bay', 'Ivan', '81', 'John', 'Doe', '42']));
//Gosho Petrov

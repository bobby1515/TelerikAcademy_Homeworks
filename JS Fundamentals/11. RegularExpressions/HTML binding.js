'use strict';
function solve(args) {
    var obj = JSON.parse(args[0]);
    var text = '' + args[1];
    text = text.replace(/'/, '"');
    var regex = /data-bind-(.*?)="(.*?)"/gi;
    var currentMatch;
    while (currentMatch = regex.exec(text)) {
        var index = text.indexOf('>');
        if (text[index - 1] === '/') {
            index--;
        }
        var field = currentMatch[1];
        if (field.toLowerCase() === 'content') {
            var arr = text.split('');
            var x = arr.splice(index + 1, 0, obj[currentMatch[2]]);
            text = arr.join('');
        } else {
            var arr2 = text.split('');
            var x2 = arr2.splice(index, 0, " " + field + '="' + obj[currentMatch[2]] + '"');
            text = arr2.join('');
        }
    }

    console.log(text);

}

solve([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);//<div data-bind-content="name">Steven</div>
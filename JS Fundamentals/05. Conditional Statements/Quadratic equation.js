'use strict';

function solve(args) {
    let a = +args[0],
        b = +args[1],
        c = +args[2],
        descriminant = (b * b) - (4 * a * c),
        temp,
        output1,
        output2;

    if (descriminant < 0) {
        console.log('no real roots');
    } else if (descriminant === 0) {
        let output = -b / (2 * a);
        console.log('x1=x2=' + output.toFixed(2));
    } else if (descriminant > 0) {
        let sqrtD = Math.sqrt(descriminant);

        output1 = (-b + sqrtD) / (2 * a);
        output2 = (-b - sqrtD) / (2 * a);

        if (output2 < output1) {
            temp = output1;
            output1 = output2;
            output2 = temp;
        }
        console.log('x1=' + output1.toFixed(2) + '; x2=' + output2.toFixed(2));
    }
}

solve(['5', '2', '8'])
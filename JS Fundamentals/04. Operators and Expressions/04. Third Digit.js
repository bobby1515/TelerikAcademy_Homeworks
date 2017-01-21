function solve(args) {
    var digitN = +args[0];
    digitN /= 100;
    digitN = digitN % 10 - 0.5;
   // console.log(digit);
    digitN = Math.round(digitN);
    //console.log(digit);
    if (digitN === 7) {
        console.log('true');
    }
    else {
        console.log('false ' + digitN);
    }
}
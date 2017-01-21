'use strict';
function CheckIsPrime(number) {
    var isPrime = true,
        i;
    if (number < 2) {
        isPrime = false;
    }
    for (i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i == 0) {
            isPrime = false;
        }
    }
    return console.log(isPrime);
}
CheckIsPrime(['2']);

function isPrime(digit) {
    let i = 2;
    while (i < digit) {
        if (digit % i++ == 0) return false;
    }

    return true;
}

function printAllPrimeNumber(number) {
    let i = 2; // Если верить википедии 1 не является простым числом
    while (i < number) {
        if (isPrime(i)) {
            console.log(i);
        }
        i++;
    }
}

const COUNT = 100;
printAllPrimeNumber(COUNT);

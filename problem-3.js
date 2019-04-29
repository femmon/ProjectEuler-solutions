function largestFactor(number) {
    let factors = factorize(number);
    return factors[factors.length - 1][0]
}

function factorize(number) {
    // Use trial division to factorize.
    let factors = [];

    if (number % 2 == 0) {
        removeN(2);
    }

    if (number % 3 == 0) {
        removeN(3);
    }

    // Every integers can be written as 6n + k (k from 0 to 5). In the 6
    // posibilities, 6n, 6n + 2, 6n + 3, 6n + 4 is dividable by 2 or 3. So we only
    // examine 6n + 1 and 6n + 5, or 6n - 1.
    // These number is generated through nextTo6n();

    // A factor of a number can't exceed the square root of itself, or:
    // test ** 2 <= number
    for (let i = 0, test = nextTo6n(i); test ** 2 <= number; i++, test = nextTo6n(i)) {
        if (number % test == 0) {
            removeN(test);
        }
    }

    // A prime is left
    if (number != 1) {
        removeN(number);
    }

    // Remove all known integer factors
    function removeN(n) {
        let newFactor = [n, 1]
        number /= n;
        while (number % n == 0) {
            newFactor[1]++;
            number /= newFactor[0];
        }
        factors.push(newFactor);
    }
    return factors;
}

// Return 6n - 1 and 6n + 1: 5, 7, 11, 13, 17, ...
function nextTo6n(i) {
    return i % 2 ? 6 * ((i + 1) / 2) + 1 : 6 * (i / 2 + 1) - 1 ;
}

// largestFactor(600851475143)
// → 6857

// Run from node
if (typeof process != "undefined" && process.argv[2]) {
    console.log(largestFactor(Number(process.argv[2])));
}

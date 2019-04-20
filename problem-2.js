function sumEvenFib(bound) {
    // Find the closest nth fibonacci number
    let n = toN(bound);
    let fibN = fibonacci(n);
    // Sum of the first n fibbonaci numbers equal the n+2th fibonacci number - 1 (1)
    // Sum of three consecutive fibonacci numbers is 2 times the last fibonacci number (2)
    // Fibonacci number follows the pattern of: 1 even, then 2 odds, and repeat (3)
    // From (1), (2), (3), to calculate sum of even fibonacci numbers,
    // we calculate the second fibonacci after the last of the summand, minus 1, and halve it
    // There are 6 situations:
    if (fibN > bound) {
        // nth is after the bound and is:
        // An even
        if (fibN % 2 == 0) return (fibonacci(n - 1) - 1) / 2;
        let fibNMinus1 = fibonacci(n - 1);
        // After of an even
        if (fibNMinus1 % 2 == 0) return (fibNMinus1 + fibN - 1) / 2;
        // Before of an even
        return (fibN - 1) / 2;
    } else {
        // nth is before or at the bound and is:
        // An even
        if (fibN % 2 == 0) return (fibonacci(n + 2) - 1) / 2;
        let fibNPlus1 = fibonacci(n + 1);
        // Before an even
        if (fibNPlus1 % 2 == 0) return (fibN - 1) / 2;
        // After an even
        return (fibNPlus1 - 1) / 2;
    }
}

const phi = (1 + Math.sqrt(5)) / 2;

function toN(fib) {
    // Using Binet's formula: Fn = (phi ** n - (1 - phi) ** n) / Math.sqrt(5)
    // Fn = (phi ** n) / Math.sqrt(5) (with big enough n)
    // Math.log(fib * Math.sqrt(5)) / Math.log(phi)
    // This formula is correct for n >= 2
    if (fib < 2) return fib;
    return Math.round(Math.log(fib * Math.sqrt(5)) / Math.log(phi));
}

// The precision isn't guaranteed starting from 76
function fibonacci(n) {
    // The precise formula is (phi ** n - (1 - phi) ** n) / Math.sqrt(5)
    // Since we round the result and (1 - phi) ** n get smaller as n get larger,
    // it is safe to remove (1 - phi)
    return Math.round((phi ** n) / Math.sqrt(5));
}

// sumEvenFib(4 * 10 ** 6)
// → 4613732

// Run from node
if (typeof process != "undefined" && process.argv[2]) console.log(sumEvenFib(Number(process.argv[2])));

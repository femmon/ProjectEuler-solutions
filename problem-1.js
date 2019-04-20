function sumOfMultipliesOf3And5(bound) {
    return sumOfMultipliesOf(3, bound) + sumOfMultipliesOf(5, bound) - sumOfMultipliesOf(15, bound);
}

// multi short for multiplier
function sumOfMultipliesOf(multi, bound) {
    // General:
    // Sn = a1 + (a1 + d) + (a1 + 2 * d) + ... + (a1 + (n - 2) * d) + (a1 + (n - 1) * d)
    // Sn = n / 2 * (2 * a1 + (n - 1) * d)
    // This case:
    // Sn = multi + 2 * multi + 3 * multi + ... + (n - 1) * multi + n * multi
    // a1 = multi
    // d = multi
    // Sn = n / 2 * (n + 1) * multi
    let n = Math.ceil(bound / multi) - 1;
    return n / 2 * (n + 1) * multi;
}

// sumOfMultipliesOf3And5(1000)
// → 233168

// Run from node
if (typeof process != "undefined" && process.argv[2]) console.log(sumOfMultipliesOf3And5(Number(process.argv[2])));

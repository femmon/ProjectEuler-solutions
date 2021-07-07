function gcd(a, b) {
    let t;
    while (b != 0) {
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm (a, b) {
    return a * b / gcd(a, b);
}

function smallestMultiple(upperBound) {
    if (isNaN(upperBound)) upperBound = 20;
    let currentMultiple = 1;
    for (let i = 2; i <= upperBound; i++) {
        // 1 loop faster than lcm(currentMultiple, i)
        currentMultiple = lcm(currentMultiple, i);
    }
    return currentMultiple;
}

// smallestMultiple(20)
// → 232792560

// Run from node
if (typeof process != "undefined") {
    console.log(smallestMultiple(Number(process.argv[2])));
}

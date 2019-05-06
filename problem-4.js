function largestPalindrome() {
    // 6 digits
    for (let one = 9; one > 0; one--) {
        for (let two = 9; two >= 0; two--) {
            for (let three = 9; three >= 0; three--) {
                let thisPalindrome = Number(`${one}${two}${three}${three}${two}${one}`);

                // Even digits palindrome always have a factor of 11.
                // So the two 3 digits factor will be:
                //  - aFactor * 11
                //  - anotherFactor
                // aFactor * 11 * anotherFactor = thisPalindrome
                // aFactor * anotherFactor = theRest
                let theRest = thisPalindrome / 11;

                // Loop through possible aFactor to find anotherFactor
                for (
                    let aFactor = Math.ceil(100 / 11);
                    aFactor < 1000 / 11;
                    aFactor++
                ) {
                    let anotherFactor = theRest / aFactor;

                    // Check if anotherFactor is a three digits integer.
                    if (anotherFactor % 1 == 0 && anotherFactor >= 100 && anotherFactor < 1000) {
                        return thisPalindrome;
                    }
                }
            }
        }
    }
}

// largestPalindrome()
// → 906609

// Run from node
if (typeof process != "undefined") {
    console.log(largestPalindrome());
}

// func(input)
// → output

// Run from node
if (typeof process != "undefined" && process.argv[2]) {
    if (process.argv[2] == "test") {runTest()}
    console.log(func(Number(process.argv[2])));
}

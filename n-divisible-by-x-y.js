function isDivisible(n, x, y) {
    let a
    ((n % x === 0) && (n % y === 0)) ? a = true : a = false
    return a
}
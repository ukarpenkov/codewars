function SeriesSum(n) {
    if (n === 0) {
        return '0.00'
    }
    let num = 1
    let res = 0
    for (let i = 0; i < n - 1; i++) {
        let divider = 1 / (4 + 3 * i)
        num += divider

    }
    return num.toFixed(2)
}



SeriesSum(1) //, "1.00"
SeriesSum(2)//, "1.25"
SeriesSum(3)//, "1.39"
SeriesSum(4)//, "1.49"
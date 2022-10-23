function sumArray(array) {
    if (!array) {
        return 0
    }
    if (array.length < 1) {
        return 0
    }
    let sortArr = array.sort((a, b) => a - b)
    sortArr.shift()
    sortArr.pop()
    let i = 0
    return sortArr.reduce((a, b) => a + b, i)
}



sumArray([6, 2, 1, 8, 10])// => 16
sumArray([1, 1, 11, 2, 3])// => 6
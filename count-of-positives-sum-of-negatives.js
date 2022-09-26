function countPositivesSumNegatives(input) {
    if (!input) {
        return []
    }
    if (input[0] == null && input[0] == null) {
        return []
    }
    let arrayOfPos = input.filter(a => a > 0)
    let posCount = arrayOfPos.length

    let arrOfNegative = input.filter(a => a < 0)
    let initialValue = 0
    let sumOfNegative = arrOfNegative.reduce((a, b) => a + b, initialValue)

    let result = []
    result.push(posCount, sumOfNegative)

    return result
}




countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) // [10, -65]
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]) // [8, -50]
countPositivesSumNegatives([15, -460]) // [8, -50]
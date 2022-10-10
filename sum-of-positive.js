function positiveSum(arr) {
    const initialValue = 0
    let posArr = arr.filter(a => a > 0).reduce((a, b) => a + b, initialValue)
    return posArr
}



positiveSum([1, -2, 3, 4, 5]) //,13);
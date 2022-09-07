function squareSum(numbers) {
    let squareArray = numbers.map(n => n * n)
    let initialValue = 0
    let sumOfSquareArray = squareArray.reduce((previousValue, currentValue) => previousValue + currentValue,
        initialValue)
    return sumOfSquareArray
}


squareSum([1, 2, 2])
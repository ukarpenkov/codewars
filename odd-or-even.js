function oddOrEven(array) {
    let initialValue = 0
    let sum = array.reduce((a, b) => a + b, initialValue)
    if (sum % 2 === 0) {
        return 'even'
    }
    return 'odd'
}






oddOrEven([0, 1, 5])//, 'even')
oddOrEven([0, 1, 3])//, 'even')
oddOrEven([1023, 1, 2])//, 'even'
oddOrEven([0, 1, 2])//, 'odd')
oddOrEven([0, 1, 4])//, 'odd')
oddOrEven([1023, 1, 3])//, 'odd')
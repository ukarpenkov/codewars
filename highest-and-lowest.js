function highAndLow(numbers) {
    let array = numbers.split(' ')
    let max = Math.max(...array)
    let min = Math.min(...array)
    let result = max.toString() + ' ' + min.toString()

    return result
}



highAndLow("1 2 3 -4 5")
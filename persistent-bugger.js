function persistence(num) {
    if (num.toString().length === 1) {
        return 0
    }
    var initialValue = num
    var result
    function multiplyingDigits(currentValue) {
        var arr = currentValue.toString().split('')
        result = arr.reduce((a, b) => a * b)
        return result
    }
    let count = 1
    multiplyingDigits(initialValue)
    while (result.toString().length > 1) {
        multiplyingDigits(result)
        count++
    }
    return count


}


persistence(39) // 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
persistence(999) // 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
persistence(4) // 4 --> 0 (because 4 is already a one-digit number)
persistence(25) // 2
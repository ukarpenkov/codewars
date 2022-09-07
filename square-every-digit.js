function squareDigits(num) {
    let stringifyNumberValue = String(num)
    let arrayOfString = stringifyNumberValue.split('')
    let squareNumbersValue = arrayOfString.map(n => n * n)
    return Number(squareNumbersValue.join(''))

}


squareDigits(9119) 
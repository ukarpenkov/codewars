function duplicateEncode(word) {
    let arr = [...word.toLowerCase()]

    let result = []

    for (let i = 0; i < arr.length; i++) {
        let checkingArr = [...arr]
        let checkingLetter = arr[i]
        checkingArr.splice(i, 1)
        if (checkingArr.includes(checkingLetter) === true) {
            result.push(')')
        }
        if (checkingArr.includes(checkingLetter) === false) {
            result.push('(')
        }
    }
    console.log(result.join(''))
    return result.join('')
}



duplicateEncode('(( @')
function rot13(message) {
    let alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let alphabetLower = alphabetUpper.map(a => a.toLowerCase())
    let arrRotUpper = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
    let arr = message.split('')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if ((alphabetLower.indexOf(arr[i]) === -1) && (alphabetUpper.indexOf(arr[i]) === -1)) {
            result.push(arr[i])
            continue
        }
        if (arr[i].toLowerCase() === arr[i]) {
            let current = alphabetLower.indexOf(arr[i])
            result.push(arrRotUpper[current].toLowerCase())
        } else {
            let current = alphabetUpper.indexOf(arr[i])
            result.push(arrRotUpper[current])
        }
    }
    return result.join('')

}







rot13("1test")//, "grfg"
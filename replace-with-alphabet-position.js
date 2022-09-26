function alphabetPosition(text) {
    const alphabet = [...Array(26)].map((val, i) => String.fromCharCode(i + 65).toLocaleLowerCase())
    let lowerCaseString = text.toLowerCase()
    let stringWithoutSymbols = lowerCaseString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()']/g, "")
    let arrayOfString = stringWithoutSymbols.split('')
    let resultArray = []
    for (let i = 0; i < arrayOfString.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (arrayOfString[i] === alphabet[j]) {
                resultArray.push(j + 1)
            }
        }
    }
    return resultArray.join(' ')
}


alphabetPosition("The sunset sets at twelve o' clock.") //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
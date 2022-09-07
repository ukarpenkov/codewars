function disemvowel(str) {
    let vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let strArray = str.split('')
    for (let j = 0; j < vowelArray.length; j++) {

        for (let i = 0; i < strArray.length; i++) {

            if (strArray[i] === vowelArray[j]) {
                strArray.splice(i, 1)
            }
        }
    }

    for (let j = 0; j < vowelArray.length; j++) {

        for (let i = 0; i < strArray.length; i++) {

            if (strArray[i] === vowelArray[j]) {
                strArray.splice(i, 1)
            }
        }
    }
    for (let j = 0; j < vowelArray.length; j++) {

        for (let i = 0; i < strArray.length; i++) {

            if (strArray[i] === vowelArray[j]) {
                strArray.splice(i, 1)
            }
        }
    }

    str = strArray.join('')
    return str
}




//             if (strArray[i] === '\n') {
//                 strArray[i] = '\\n'
//             }
disemvowel("No offense but,\nYour writing is among the worst I've ever read")
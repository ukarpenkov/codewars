function pigIt(str) {
    let arr = str.split(' ')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split('')

        let firstLetter = word.shift()
        if (arr[i] === '!' || arr[i] === '?') {
            word.push(firstLetter)


        } else {
            word.push(firstLetter + 'ay ')
        }
        result.push(word)
    }
    let mr = result.join(' ').replace(/[\,]/g, '')
    let withoutSpace = mr.replace(/\s\s/g, ' ')
    console.log(withoutSpace.trim())
    return withoutSpace.trim()

}




pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


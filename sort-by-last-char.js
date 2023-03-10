function last(x) {
    let arrayFromArgument = x.split(' ')
    let reversedArray = arrayFromArgument.map(a => a.split('').join(''))
    let sortedArray = reversedArray.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
    let result = sortedArray.map(a => a.split('').join(''))
    return result
}



last('man i need a taxi up to ubud')//, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
last('what time are we climbing up the volcano')//, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
last('take me to semynak')//, ['take', 'me', 'semynak', 'to']);    
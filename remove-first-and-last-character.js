function removeChar(str) {
    let arrayFromString = str.split('')
    arrayFromString.pop()
    arrayFromString.shift()
    let result = arrayFromString.join('')
    return result
};

removeChar('eloquent') // 'loquen'
function getCount(str) {
    let letters = ['a', 'e', 'i', 'o', 'u']
    let arr = [...str]
    let result = 0
    for (let i = 0; i < letters.length; i++) {
        arr.forEach(a => a.toLowerCase() === letters[i] ? result++ : false)
    }
    return result;
}



getCount("abracadabra")//, 5)
function spinWords(string) {
    let arr = string.split(' ')
    let res = arr.map((a) => {
        if (a.length >= 5) {
            return a.split('').reverse().join('')
        }
        return a
    })
    return res.join(' ')
}




spinWords("Hey fellow warriors")// => returns "Hey wollef sroirraw" 
spinWords("This is a test")// => returns "This is a test" 
spinWords("This is another test")//=> returns "This is rehtona test"
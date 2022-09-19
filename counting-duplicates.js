function duplicateCount(text) {
    let arr = text.toLowerCase().split('')
    let obj = arr.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1
        return acc
    }, {})
    let repeatCount = Object.values(obj)
    let repeatMoreThatOnce = repeatCount.filter(el => el > 1)
    return repeatMoreThatOnce.length
}


duplicateCount("abcde") // -> 0 # no characters repeats more than once
duplicateCount("aabbcde") // 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
duplicateCount("aabBcde") //  -> 1 # 'i' occurs six times
duplicateCount("indivisibility") // -> 2 # 'i' occurs seven times and 's' occurs twice
duplicateCount("Indivisibilities") // -> 2 # 'i' occurs seven times and 's' occurs twice
duplicateCount("aA11") //  -> 2 # 'a' and '1'
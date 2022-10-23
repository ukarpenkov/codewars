function longest(s1, s2) {
    if (!s2) {
        let s2 = s1
    }
    arr1 = s1.split('')
    arr2 = s2.split('')
    concatArr = [...arr1, ...arr2]

    set = new Set(concatArr)
    sortArr = [...set].sort()
    return sortArr.join('')

}




longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")// -> "abcdefklmopqwxy"

var a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a)// -> "abcdefghijklmnopqrstuvwxyz"

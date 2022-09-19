function XO(str) {
    let lowerCaseStr = str.toLowerCase()
    let arr = lowerCaseStr.split('')
    let oArr = arr.filter(a => a === 'o')
    let xArr = arr.filter(a => a === 'x')
    if (oArr.length === xArr.length) {
        return true
    } else {
        return false
    }
}


XO("ooxx")// => true
XO("xooxx")// => false
XO("ooxXm")// => true
XO("zpzpzpp")// => true // when no 'x' and 'o' is present should return true
XO("zzoo")// => false
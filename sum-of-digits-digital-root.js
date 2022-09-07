function digitalRoot(n) {
    function doArrOfNum(x) {
        let numArr = x.toString().split('')
        let resultOfFunc = numArr.map(i => Number(i))
        return resultOfFunc
    }
    let arr = n.toString().split('')
    let arrOfNum = arr.map(i => Number(i))
    let length = [...arrOfNum]
    for (let i = 0; i < length.length + 4; i++) {
        arrOfNum = arrOfNum.reduce((a, b) => {
            return a + b
        })
        arrOfNum = doArrOfNum(arrOfNum)
    }
    return arrOfNum[0]
}



digitalRoot(132189)   // 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
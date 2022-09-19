function getSum(a, b) {
    let arr = []
    let start = 0
    let end = 0
    if (a > b) {
        [start, end] = [b, a]
    } else {
        [start, end] = [a, b]
    }
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    let res = arr.reduce((x, y) => {
        return x + y
    })
    return res
}


getSum(1, 0)// --> 1 (1 + 0 = 1)
getSum(1, 2)// --> 3 (1 + 2 = 3)
getSum(0, 1)// --> 1 (0 + 1 = 1)
getSum(1, 1)//--> 1 (1 since both are same)
getSum(-1, 0)// --> -1 (-1 + 0 = -1)
getSum(-1, 2)// --> 2 (-1 + 0 + 1 + 2 = 2)
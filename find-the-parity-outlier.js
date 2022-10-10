function findOutlier(integers) {

    let evenCount = integers.filter(a => a % 2 === 0)

    let oddCount = integers.filter(a => a % 2 !== 0)

    if (evenCount.length === 1) {
        return Number(evenCount.join(''))
    }
    if (oddCount.length === 1) {
        return Number(oddCount.join(''))
    }
}



findOutlier([0, 1, 2])// 1)
findOutlier([2, 6, 8, 10, 3])//, 3)
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])//, 11)
findOutlier([1, 1, 0, 1, 1])//, 0)
findOutlier([160, 3, 1719, 19, 11, 13, -21])//, 160)
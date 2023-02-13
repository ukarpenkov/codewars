function sumOfMinimums(arr) {
    let sortArr = arr.map(a => a.sort((a, b) => a - b))
    let sum = 0
    for (let i = 0; i < sortArr.length; i++) {
        sum += sortArr[i][0]
    }
    return sum
}

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) //9
sumOfMinimums([[96, 99, 139, 78, 77, 84, 84, 127], [102, 108, 117, 72, 150, 128, 55, 132], [75, 124, 55, 2, 3, 87, 110, 71]]) //134
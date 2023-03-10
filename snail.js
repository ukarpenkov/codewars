snail = function (array) {
    let arrayLength = array.length
    let result = []

    if (arrayLength < 2) {
        result = array[0]
        return result
    }

    function sol() {
        if (arrayLength < 1) {
            return
        }
        result.push(array[0])
        for (let i = 1; i < arrayLength; i++) {
            result.push(array[i][arrayLength - 1])

        }
        let lastArr = [...array[arrayLength - 1]]
        lastArr.pop()
        lastArr.reverse()
        result.push(lastArr)
        array.shift()
        array.pop()
        array.forEach(a => a.pop())
        arrayLength = arrayLength - 2
        arr2 = [...array].reverse()
        arr2.forEach(a => result.push(a[0]))
        array.forEach(a => a.shift())
        sol()
    }

    sol()
    return result.flat()

}



// snail([[]])//, []);
// snail([[1]])//, [1]);
// snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]])
// //, [1, 2, 3,6, 9, 8,7, 4, 5
// // ]);
// snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
// //, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
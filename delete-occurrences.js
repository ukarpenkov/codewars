function deleteNth(arr, n) {
    let res = []
    function coincidence(arr, number) {
        let myArr = [...arr]
        let cons = myArr.filter(i => i == number).length
        return cons
    }

    for (let i = 0; i < arr.length; i++) {

        // console.log(arr[i], coincidence(arr, arr[i]))


        if ((coincidence(arr, arr[i])) === n) {
            res.push(arr[i])
        }

    }
    res.length = res.length - 1
    // console.log(res)
    let stop = 0
    for (let j = 0; j < arr.length; j++) {
        if (stop === n - 1) {
            break
        }
        if (res[0] === arr[j]) {
            arr.splice(j, 1)
            stop++
        }

    }
    return arr

}



deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2) // [1,2,3,1,2]
// deleteNth([20, 37, 20, 21], 1) // [20,37,21]
// deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3) // [1, 1, 3, 3, 7, 2, 2, 2]
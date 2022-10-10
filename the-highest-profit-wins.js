function minMax(arr) {
    if (arr.length === 1) {

        return [arr[0], arr[0]]
    }
    let sortArr = arr.sort((a, b) => a - b)
    let a = sortArr.length

    return [sortArr[0], sortArr[a - 1]]

}



minMax([1, 2, 3, 4, 5])// --> [1,5]
minMax([2334454, 5])// --> [5,2334454]
minMax([1])// --> [1,1]
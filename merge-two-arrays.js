function mergeArrays(arr1, arr2) {
    let concatArrays = arr1.concat(arr2)

    let uniqValuesArray = () => {
        let uniqSet = new Set(concatArrays)
        return [...uniqSet]
    }

    let sortValuesArray = uniqValuesArray().sort(function (a, b) {
        return a - b
    })

    return sortValuesArray

}


mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])
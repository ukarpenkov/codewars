function removeSmallest(numbers) {
    let arr = [...numbers]
    let sortArr = arr.sort((a, b) => a - b)
    let minValue = sortArr[0]
    let indexOfMin = numbers.indexOf(minValue)
    console.log(numbers)
    let resArr = [...numbers]
    resArr.splice(indexOfMin, 1)
    return resArr


}



removeSmallest([1, 2, 3, 4, 5])//, output = [2, 3, 4, 5]

removeSmallest([5, 3, 2, 1, 4])//, output = [5, 3, 2, 4]
removeSmallest([2, 2, 1, 2, 1])//, output = [2, 2, 2, 1]
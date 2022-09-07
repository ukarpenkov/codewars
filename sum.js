var summation = function (num) {

    let currentSum = 0
    let res = 0
    for (let i = num; i > 0; i--) {
        res = + i
        currentSum = currentSum + res
    }
    console.log(currentSum)
}

summation(4)





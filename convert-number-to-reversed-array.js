function digitize(n) {
    let reversAndStringifyValuesArray = n.toString().split('').reverse()
    let resultArrayOfNumbers = reversAndStringifyValuesArray.map(n => Number(n))
    return resultArrayOfNumbers
}



digitize(348597)
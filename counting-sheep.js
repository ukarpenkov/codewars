function countSheeps(arrayOfSheep) {
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === null) {
            arrayOfSheep[i] = false
        }
        if (arrayOfSheep[i] === undefined) {
            arrayOfSheep[i] = false
        }
    }
    let arr = arrayOfSheep.map(n => Number(n))
    let initialValue = 0
    let sumOfArray = arr.reduce((previousValue, currentValue) => previousValue + currentValue,
        initialValue)
    return sumOfArray
}



countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true])
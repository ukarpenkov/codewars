var uniqueInOrder = function (iterable) {
    var arr
    if (typeof iterable === 'string') {
        arr = iterable.split('')
    } else {
        arr = iterable
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            delete arr[i]
        }
    }

    let result = arr.filter(a => a != null)

    return result
}


uniqueInOrder('AAAABBBCCDAABBB')// == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')    //     == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3])  //     == [1,2,3]
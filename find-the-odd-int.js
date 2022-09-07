function findOdd(A) {
    if (A.length === 1) {
        console.log(A[0])
        return A[0]
    }
    const countItems = A.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});
    for (var prop in countItems) {
        if (countItems[prop] % 2 !== 0) {
            console.log(prop)
            return prop
        }
    }
}







findOdd([7])// should return 7, because it occurs 1 time (which is odd).
findOdd([0]) //should return 0, because it occurs 1 time (which is odd).
findOdd([1, 1, 2]) //should return 2, because it occurs 1 time (which is odd).
findOdd([0, 1, 0, 1, 0])// should return 0, because it occurs 3 times (which is odd).
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])// should return 4, because it appears 1 time (which is odd).




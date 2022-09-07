function arrayDiff(a, b) {
    let result = []
    if (a.length === 0 || b.length === 0) {
        return a
    }


    result = a.filter(num => {

        for (let i = 0; i < b.length; i++) {
            if (num === b[i]) {
                return false
            }
        }
        return num
    })
    console.log(result)

}






arrayDiff([1, 2], [1])// == [2]
arrayDiff([1, 2, 2, 2, 3], [2, 1])// == [1,3]
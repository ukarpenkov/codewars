function monkeyCount(n) {
    let arr = []

    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }

    return arr
}



monkeyCount(10)// --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1)//--> [1]
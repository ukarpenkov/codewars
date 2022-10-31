function descendingOrder(n) {
    let str = n.toString()
    let arr = [...str].sort((a, b) => b - a)
    let result = Number(arr.join(''))
    return result
}





descendingOrder(123456789)//, 987654321)
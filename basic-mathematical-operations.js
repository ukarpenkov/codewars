function basicOp(operation, value1, value2) {
    let x = eval(`${value1} ${operation} ${value2}`)
    return x
}


basicOp('+', 4, 7)
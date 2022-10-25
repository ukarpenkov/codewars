function addBinary(a, b) {
    let sum = a + b
    return sum.toString(2)
}


addBinary(1, 1)// -- > "10"(1 + 1 = 2 in decimal or 10 in binary)
addBinary(5, 9)// -- > "1110"(5 + 9 = 14 in decimal or 1110 in binary)
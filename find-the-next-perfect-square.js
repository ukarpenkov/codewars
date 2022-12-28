function findNextSquare(sq) {
    let a = Math.sqrt(sq)
    if (!Number.isInteger(a)) {
        return -1
    }
    return ((a + 1) * (a + 1))
}







findNextSquare(121)//, 144, "Wrong output for 121");
findNextSquare(625)//, 676, "Wrong output for 625");
findNextSquare(319225)//, 320356, "Wrong output for 319225");
findNextSquare(15241383936)//, 15241630849, "Wrong output for 15241383936");
findNextSquare(155)//, -1, "Wrong output for 155");
findNextSquare(342786627)//, -1, "Wrong output for 342786627");

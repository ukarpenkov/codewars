function solve(s) {
    let res = []
    let capitalWordsCount = s.match(/[A-Z]/g)
    let smallWordsCount = s.match(/[a-z]/g)
    let numbersCount = s.match(/[0-9]/g)
    let symbolsCount = s.match(/\W|_/g)

    if (capitalWordsCount === null) {
        res.push(0)
    } else {
        res.push(capitalWordsCount.length)
    }
    if (smallWordsCount === null) {
        res.push(0)
    } else {
        res.push(smallWordsCount.length)
    }
    if (numbersCount === null) {
        res.push(0)
    } else {
        res.push(numbersCount.length)
    }
    if (symbolsCount === null) {
        res.push(0)
    } else {
        res.push(symbolsCount.length)
    }

    return res
}



solve("")//,[0,0,0,0]
solve("aAbBcC")//,[3,3,0,0]
solve("Codewars@codewars123.com")//,[1,18,3,2]);
solve("bgA5<1d-tOwUZTS8yQ")//,[7,6,3,2]);
solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")//,[9,9,6,9]);
solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")//,[15,8,6,9]);
solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")//, [10,7,3,6])
solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")//, [7,13,4,10]);
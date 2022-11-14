function noOdds(values) {
    let result = values.filter(a => a % 2 === 0)
    return result
}


noOdds([0, 1])//, [0] )
noOdds([0, 1, 2, 3])//, [0,2] )
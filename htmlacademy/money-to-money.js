let calculateDeposit = function (starSum, percent, time, withCapitalization) {
    let result = 0
    if (!withCapitalization) {
        let depos = Math.floor(((percent / 100) / 12) * time * starSum)
        result = starSum + depos

        return result
    }
    if (withCapitalization) {
        let difference = 0
        let result = starSum
        for (let i = 0; i < time - 1; i++) {
            result = Math.floor((result) + ((percent / 100) / 12) * result)
            console.log(result)
            difference = Math.floor((result + ((percent / 100) / 12) * result) - starSum)
        }

        return Math.floor(result)

    }
}


function getProfitableDeposit(startDeposit, time, usualPercent, capitalizationPercent) {
    let usual = calculateDeposit(startDeposit, usualPercent, time, false)
    let capitalize = calculateDeposit(startDeposit, capitalizationPercent, time, true)
    console.log(usual, capitalize)
    if (usual > capitalize) {
        return 'Выбирай обычный вклад. Получишь ' + usual
    } else {
        return 'Выбирай капитализацию. Получишь ' + capitalize
    }
}

getProfitableDeposit(300000, 18, 7.2, 6)


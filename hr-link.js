
let gamesCount = 0
function getNumberOfGames(x) {
    if (x > 1) {
        gamesCount += Math.floor(x / 2)
        nextTourCommandsCount = Math.ceil(x / 2)
        getNumberOfGames(nextTourCommandsCount)
    } else {
        console.log(gamesCount)
    }
}


let res = 0

for (let i = 0; i <= 100; i++) {
    console.log('commndcount', i)
    getNumberOfGames(i)
}
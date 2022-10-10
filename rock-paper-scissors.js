const rps = (p1, p2) => {
    if (p1 === p2) {
        console.log('Draw!')
        return 'Draw!'
    }
    if (p1 === "scissors") {
        if (p2 === 'paper') {
            console.log('Player 1 won!')
            return 'Player 1 won!'
        }
        if (p2 === 'rock') {
            console.log('Player 2 won!')
            return 'Player 2 won!'
        }
    }
    if (p1 === "paper") {
        if (p2 === 'scissors') {
            console.log('Player 2 won!')
            return 'Player 2 won!'
        }
        if (p2 === 'rock') {
            console.log('Player 1 won!')
            return 'Player 1 won!'
        }
    }
    if (p1 === "rock") {
        if (p2 === 'scissors') {
            console.log('Player 1 won!')
            return 'Player 1 won!'
        }
        if (p2 === 'paper') {
            console.log('Player 2 won!')
            return 'Player 2 won!'
        }
    }

};



rps("scissors", "paper")//--> "Player 1 won!"
rps("scissors", "rock")// --> "Player 2 won!"
rps("paper", "paper")// --> "Draw!"
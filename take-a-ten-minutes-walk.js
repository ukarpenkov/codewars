function isValidWalk(walk) {
    let minutes = 0
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] !== walk[i + 1]) {
            minutes += 1
        }
    }

    let directionY = 0
    let directionX = 0
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') {
            directionY += 1
        }
        if (walk[i] === 's') {
            directionY -= 1
        }
    }
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'w') {
            directionX += 1
        }
        if (walk[i] === 'e') {
            directionX -= 1
        }
    }

    // console.log(directionY, directionX, minutes)


    if (minutes === 10 && directionY === 0 && directionX === 0) {
        return true
    }
    return false
}



isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])//, 'should return true');
isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e',])//, 'should return false');
isValidWalk(['w'])//, 'should return false');
isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])//, 'should return false');
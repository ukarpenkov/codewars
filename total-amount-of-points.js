function points(games) {
    let resultPoint = 0
    games.forEach(a => {
        let count = a.split(':')
        if (count[0] > count[1]) {
            resultPoint += 3
        }
        if (count[1] > count[0]) {
            resultPoint += 0
        }
        if (count[1] === count[0]) {
            resultPoint += 1
        }
    })
    return resultPoint
}


points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])// , 30);
points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])// , 10);
points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])// , 0);
points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])// , 15);
points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])// , 12);
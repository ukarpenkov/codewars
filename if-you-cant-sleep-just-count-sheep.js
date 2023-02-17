var countSheep = function (num) {
    if (!num) {
        return ''
    }
    let sheepsCounting = []
    for (let i = 0; i < num; i++) {
        sheepsCounting.push(`${i + 1} sheep...`)
    }

    let stringFromArray = sheepsCounting.join('')
    return stringFromArray
}



countSheep(0)//, "");
countSheep(1)//, "1 sheep...");
countSheep(2)//, "1 sheep...2 sheep...");
countSheep(3)//, "1 sheep...2 sheep...3 sheep...");
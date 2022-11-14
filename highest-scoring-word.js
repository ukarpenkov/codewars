function high(x) {
    let arrOfWord = x.split(' ')
    let score = arrOfWord.map(a => a.split(''))
    let resArr = []
    for (let i = 0; i < score.length; i++) {
        let currentScore = 0
        for (let j = 0; j < score[i].length; j++) {
            currentScore += (score[i][j].charCodeAt(0) - 96)
        }
        resArr.push(currentScore)
    }
    let maxIndex = resArr.indexOf(Math.max.apply(null, resArr))
    return arrOfWord[maxIndex]
}


high('man i need a taxi up to ubud')//, 'taxi');
high('what time are we climbing up the volcano')//, 'volcano'); 
high('take me to semynak')//, 'semynak');   
high('aa b')//, 'aa');
high('b aa')//, 'b');
high('bb d')//, 'bb');
high('d bb')//, 'd');
high('aaa b')//, 'aaa');
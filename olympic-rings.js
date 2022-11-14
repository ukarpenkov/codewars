function olympicRing(a) {
    let oneRingArray = ['a', 'A', 'b', 'D', 'd', 'e', 'g', 'o', 'O', 'p', 'P', 'Q', 'q', 'R']
    let arr = a.split('')
    let score = 0
    for (let i = 0; i < a.length; i++) {
        if (arr[i] === 'B') {
            score += 2
        }
        for (let j = 0; j < oneRingArray.length; j++) {
            if (arr[i] === oneRingArray[j]) {
                score += 1
            }

        }
    }

    let result = Math.floor(score / 2)
    console.log(result)
    if (result <= 1) {
        return 'Not even a medal!'
    }
    if (result === 2) {
        console.log('бро')
        return 'Bronze!'
    }
    if (result === 3) {
        console.log('сильв')
        return 'Silver!'
    }
    if (result > 3) {
        console.log('gold')
        return 'Gold!'
    }
}

olympicRing('nbPHpmSDvHMjBA')//, 'Bronze!');
olympicRing('eCEHWEPwwnvzMicyaRjk')//, 'Bronze!'); 
olympicRing('JKniLfLW')//, 'Not even a medal!'); 
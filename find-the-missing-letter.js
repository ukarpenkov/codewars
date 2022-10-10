

function findMissingLetter(array) {
    const letters = (() => {
        const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
        return caps.concat(caps.map(letter => letter.toLowerCase()));
    })();
    let indexOfMin = letters.indexOf(array[0])
    let correctSegment = letters.splice(indexOfMin, array.length + 1)
    const diff = function (a1, a2) {
        return a1.filter(i => !a2.includes(i))
            .concat(a2.filter(i => !a1.includes(i)))
    }
    return diff(array, correctSegment).join('')
}




findMissingLetter(['a', 'b', 'c', 'd', 'f'])  //e
findMissingLetter(['O', 'Q', 'R', 'S'])// -> 'P')
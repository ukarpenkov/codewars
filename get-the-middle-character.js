function getMiddle(s) {
    if (s.length % 2 === 0) {
        let firstLetter = s.length / 2
        let secondLetter = firstLetter - 1
        let result = s[secondLetter] + s[firstLetter]
        return result
    }
    if (s.length % 2 !== 0) {
        let letter = Math.floor(s.length / 2)
        result = s[letter]
        return result
    }
}


getMiddle("test") // "es"
getMiddle("tesTTest") // "es"

getMiddle("testing") //t
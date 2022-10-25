function solution(str, ending) {
    return str.endsWith(ending)
}


solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
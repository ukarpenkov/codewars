function solution(number) {
    let result = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += i
            continue
        }
        if (i % 3 === 0) {
            result += i
        }
        if (i % 5 === 0) {
            result += i
        }
    }
    return result
}


solution(10)
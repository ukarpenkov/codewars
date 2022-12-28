function solution(str) {
    let arr = str.split('')
    let res = []
    for (let i = 0; i < arr.length; i += 2) {
        let nextValue = arr[i + 1]
        if ((nextValue) === undefined) {
            nextValue = '_'
        }
        res.push(arr[i] + nextValue)
    }
    return res
}





solution("abcdef")//, ["ab", "cd", "ef"]);
solution("abcdefg")//, ["ab", "cd", "ef", "g_"]);
solution("")//, []);
function solution(string) {

    let arr = string.split('')
    if (arr.length === 0) {
        return ''
    }
    let resArr = [...arr]

    let b = 0

    for (let i = 0; i < arr.length; i++) {
        b++
        if (arr[i].toUpperCase() === arr[i]) {

            resArr.splice(b - 1, 0, ' ')
            b++
        }
    }

    let resStr = resArr.join('')
    return resStr

}


solution("camelCasing")//  => "camel Casing"
solution("identifier")//  => "identifier"
solution("")//  => ""
solution("camelCasingTest")//  => ""
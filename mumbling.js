function accum(s) {
    let res = ''
    let upperStr = s.toUpperCase()
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            res += upperStr[i] + upperStr[i].repeat(i).toLowerCase()
            continue
        }
        res += upperStr[i] + upperStr[i].repeat(i).toLowerCase() + '-'
    }
    return res
}



accum("abcd")// -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") //-> "C-Ww-Aaa-Tttt"
function maskify(cc) {
    let arr = [...cc]
    length = arr.length
    let masked = arr.map(a => a = '#')
    masked[length - 1] = arr[length - 1]
    masked[length - 2] = arr[length - 2]
    masked[length - 3] = arr[length - 3]
    masked[length - 4] = arr[length - 4]
    return masked.join('')

}


maskify('1266666345')
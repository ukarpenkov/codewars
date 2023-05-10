function switcheroo(x) {
    let arrFromStr = x.split('')
    console.log(arrFromStr)
    let switchedABArr = arrFromStr.map(a => {
        if (a === 'a') {
            return 'b'
        }
        if (a === 'b') {
            return 'a'
        }
        return a
    })

    return switchedABArr.join('')
}


switcheroo('acb') //--> 'bca'
switcheroo('aabacbaa') //--> 'bbabcabb'

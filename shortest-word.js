function findShort(s) {
    let arr = s.split(' ')
    arr.sort((a, b) => a.length - b.length)
    console.log(arr)
    console.log(arr[0].length)
    console.log(arr[0])
    return arr[0].length
}
findShort("Let's travel abroad shall we") //, 3)
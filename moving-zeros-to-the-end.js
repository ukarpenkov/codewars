function moveZeros(arr) {
    let arrOfZero = arr.filter(item => item === 0)
    for (let i = 0; i < arr.length; i++) {
        let index = arr.indexOf(0)
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }

    let res = [...arr, ...arrOfZero]
    return res
}




moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]
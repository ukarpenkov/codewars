function sumCubes(n) {
    const arr = [...Array(n + 1).keys()].slice(1);
    let arrOfCubes = arr.map(n => n * n * n)
    let initialValue = 0
    let result = arrOfCubes.reduce((acc, curren) => acc + curren, initialValue)
    return result
}


sumCubes(2) //(sum of the cubes of 1 and 2 is 1 + 8)
sumCubes(3) //(sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


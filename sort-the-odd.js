function sortArray(array) {

    let indices = [];

    array
        .filter((v, i) => v % 2 && indices.push(i))
        .sort((a, b) => a - b)
        .forEach((v, i) => array[indices[i]] = v);

    return array
}



sortArray([7, 1]) //[1, 7]
sortArray([5, 8, 6, 3, 4]) //[3, 8, 6, 5, 4]
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]




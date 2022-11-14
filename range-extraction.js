function solution(list) {
    let arr = []

    for (let i = 0; i < list.length; i++) {
        arr.push(list[i])
        if (list[i] < 0) {
            if ((Math.abs(list[i]) - Math.abs(list[i + 1])) === 1) {
                arr.push('-')
            }
        }
        if (list[i] >= 0) {
            if ((Math.abs(list[i]) - Math.abs(list[i + 1])) === -1) {
                arr.push('-')
            }
        }
    }
    let arr2 = [...arr]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 2]) {
            delete arr2[i]
            delete arr2[i + 1]
        }
    }

    arr3 = arr2.filter(function (el) {
        return (el != null && el != "" || el === 0);
    });

    let arr4 = [...arr3]
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i + 2] - arr3[i] === 1) {
            delete arr4[i + 1]
        }
    }

    let res = arr4.join(',')
    res = res.replace(/,-,/gi, '-');
    res = res.replace(/,,/gi, ',');

    return res
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])//, "-6,-3-1,3-5,7-11,14,15,17-20")

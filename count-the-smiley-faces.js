function countSmileys(arr) {
    let smilesCount = 0

    for (let i = 0; i < arr.length; i++) {
        if (
            (arr[i].split('').includes('D') || arr[i].split('').includes(')'))
            &&
            (arr[i].length <= 3)
            &&
            (arr[i].split('').includes(':') || arr[i].split('').includes(';'))) {
        } else {
            delete arr[i]
        }
    }

    arr = arr.filter(function (el) {
        return (el != null && el != "" || el === 0);
    })

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split('').includes(':') && arr[i].split('').includes(';') || arr[i].split('').includes('_') || arr[i].split('').includes('o')) {
            delete arr[i]
        }
    }

    arr = arr.filter(function (el) {
        return (el != null && el != "" || el === 0);
    })
    console.log(arr)
    return arr.length
}
countSmileys([])//, 0);
countSmileys([':D', ':~)', ';~D', ':---)'])//, 4);
countSmileys([':)', ':(', ':D', ':O', ':;D'])//, 2);
countSmileys([';]', ':[', ';*', ':$', ';-D'])//, 1);
countSmileys([":---)", "))", ";~~D", ";D"])//, 1);
function divisors(integer) {
    let res = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            res.push(i)
        }
    }
    if (res.length < 1) {
        return (`${integer} is prime`)
    }
    return (res)
};


divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
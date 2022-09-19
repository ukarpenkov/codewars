var countBits = function (n) {
    function convertToBinary(number) {
        let num = number;
        let binary = (num % 2).toString();
        for (; num > 1;) {
            num = parseInt(num / 2);
            binary = (num % 2) + (binary);
        }
        return binary
    }

    let binary = convertToBinary(n)
    let arr = binary.toString().split('')
    let res = arr.filter(a => a >= 1)
    return res.length

};


countBits(1234)
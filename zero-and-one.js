function zeroAndOne(s) {
    let arr = s.split('')


    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] === arr[i + 1]) {
            continue
        }
        if (arr[i] !== arr[i + 1]) {

            delete arr[i]
            delete arr[i + 1]

            arr = arr.filter(function (el) {
                return el !== undefined;
            });


        }
    }
    for (let i = 0; i < arr.length - 2; i++) {

        if (arr[i] === arr[i + 1]) {
            continue
        }
        if (arr[i] !== arr[i + 1]) {

            delete arr[i]
            delete arr[i + 1]

            arr = arr.filter(function (el) {
                return el !== undefined;
            });


        }
    }
    console.log(arr.length)
    return arr.length
}








zeroAndOne("0100101001001100001100001001101111110001100001")  //"01010"  --> "  010"  -->  "    0"  14

zeroAndOne("110100")  // "110100"  -->  "1  100"  -->  "1    0"  2
zeroAndOne("11101111")  //6
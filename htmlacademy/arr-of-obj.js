function getData(arrOfKeys, arrOfData) {
    let res = []
    for (let i = 0; i < arrOfData.length; i++) {
        let obj = {}
        for (let j = 0; j < arrOfKeys.length; j++) {
            obj[arrOfKeys[j]] = arrOfData[i][j]
        }
        res.push(obj)
    }

    return res
}




// var getData = function (keys, values) {
//     var newArray = [];

//     for (var i = 0; i <= values.length - 1; i++) {
//         var newObject = {};


//         for (var j = 0; j <= keys.length; j++) {
//             newObject[keys[j]] = values[i][j];
//         }
//         newArray.push(newObject);
//     }
//     console.log(newArray)
//     return newArray
// };

getData(["sea", "country", "city"], [["Балтийское", "Эстония", "Силламяэ"], ["Охотское", "Россия", "Охотск"], ["Жёлтое", "Китай", "Бэйдайхэ"]])

//[{"sea":"Балтийское","country":"Эстония","city":"Силламяэ"},{"sea":"Охотское","country":"Россия","city":"Охотск"},{"sea":"Жёлтое","country":"Китай","city":"Бэйдайхэ"}]
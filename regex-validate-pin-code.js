function validatePIN(pin) {
    let arr = pin.toString(10).split('').map(int => parseInt(int, 10))

    if ((arr.length < 4) || (arr.length > 6)) {
        return false
    }
    if ((arr.length === 5)) {
        return false
    }

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return false
        }
    }
    return true
}
// console.log(true)




validatePIN("1")//,false, "Wrong output for '1'")
validatePIN("1234")//,false, "Wrong output for '1'")
validatePIN("a234")
validatePIN("12345")

// validatePIN("12")//,false, "Wrong output for '12'")
// validatePIN("123")//,false, "Wrong output for '123'")
// validatePIN("12345")//,false, "Wrong output for '12345'")
// validatePIN("1234567")//,false, "Wrong output for '1234567'")
// validatePIN("-1234")//,false, "Wrong output for '-1234'")
// validatePIN("1.234")//,false, "Wrong output for '1.234'")
// validatePIN("-1.234")//,false, "Wrong output for '-1.234'")(validatePIN("00000000"),false, 

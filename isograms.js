function isIsogram(str) {
    if (str == false) {
        console.log(true)
        return true
    }
    let sortArray = str.toLowerCase().split('').sort()
    for (let i = 0; i < sortArray.length; i++) {
        if (sortArray[i] === sortArray[i + 1]) {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}


isIsogram("Dermatoglyphics")//, true );
isIsogram("isogram")//, true );
isIsogram("aba")//, false, "same chars may not be adjacent" );
isIsogram("moOse")//, false, "same chars may not be same case" ); isIsogram("isIsogram"), false );
isIsogram("")//, true, "an empty string is a valid isogram" );
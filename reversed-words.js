function reverseWords(str) {
    let arrayFromArgument = str.split(' ')
    let reversedArray = arrayFromArgument.reverse()
    let stringFromReversedArray = reversedArray.join(' ')

    return stringFromReversedArray
}


reverseWords("The greatest victory is that which requires no battle") // --> "battle no requires which that is victory greatest The"
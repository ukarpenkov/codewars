function validParentheses(parens) {

    let arr = parens.split('')
    if (arr[0] === ')') {
        return false
    }
    if (arr[arr.length - 1] === '(') {
        return false
    }



    let closeArr = arr.filter(a => a === ('('))
    let openArr = arr.filter(a => a === (')'))

    if (openArr.length === closeArr.length) {

        return true
    }

    return false


}



validParentheses("()")      //      => true
validParentheses(")(()))")  //      => false
validParentheses("(")      //     => false
validParentheses("(())((()())())")// => true
validParentheses('())(') //
validParentheses('())(()') //
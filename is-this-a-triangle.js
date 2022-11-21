function isTriangle(a, b, c) {
    let arr = [a, b, c].sort((a, b) => a - b)
    if (arr[0] + arr[1] > arr[2]) {
        return true
    }
    return false;
}




isTriangle(1, 2, 2)//, true);
isTriangle(7, 2, 2)//, false);
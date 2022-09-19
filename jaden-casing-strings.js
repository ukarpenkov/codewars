String.prototype.toJadenCase = function () {
    let arr = this.split(' ')
    let jadenCaseArr = arr.map(a => a[0].toUpperCase() + a.slice(1))
    let res = jadenCaseArr.join(' ')
    return res
};


("How can mirrors be real if our eyes aren't real").toJadenCase()
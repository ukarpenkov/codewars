
function order(words) {
    let arr = words.split(' ')
    let res = arr.sort((a, b) => {
        return a.replace(/\D/g, '') - b.replace(/\D/g, '')
    })
    return res.join(' ')
}




order("is2 Thi1s T4est 3a")//, "Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2")//, "Fo1r the2 g3ood 4of th5e pe6ople"
order("")//, "", "empty input should return empty string" 
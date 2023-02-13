function distanceBetweenPoints(a, b) {
    let xDistanse = Math.abs(a.x - b.x)
    let yDistance = Math.abs(a.y - b.y)

    res = Math.sqrt(xDistanse * xDistanse + yDistance * yDistance)
    return Math.abs(res)
}
function past(h, m, s) {
    var hoursToSeconds = h * 3600
    var hToMs = hoursToSeconds * 1000
    var mToMs = m * 60000
    var sToMs = s * 1000
    var result = hToMs + mToMs + sToMs


    return result
}


past(0, 1, 1)
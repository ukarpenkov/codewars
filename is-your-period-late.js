function periodIsLate(last, today, cycleLength) {
    let dateDiffInMs = today.getTime() - last.getTime()
    console.log(dateDiffInMs)
    let dateDiffInDays = Math.floor(dateDiffInMs / 86400000)

    console.log(dateDiffInDays)
    if (dateDiffInDays > cycleLength) {
        return true
    }
    return false
}

periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35) //false
periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)  //true
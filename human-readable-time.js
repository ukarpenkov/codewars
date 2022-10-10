function humanReadable(seconds) {

    let hours = Math.floor(seconds / 3600)

    let minutes = Math.floor((seconds % 3600) / 60)

    let sec = seconds - hours * 3600 - minutes * 60

    let stringH = hours.toString()
    let stringM = minutes.toString()
    let stringS = sec.toString()



    if (stringH.length == 1) {
        stringH = '0' + stringH
    }
    if (stringM.length == 1) {
        stringM = '0' + stringM
    }
    if (stringS.length == 1) {
        stringS = '0' + stringS
    }

    console.log(`${stringH}:${stringM}:${stringS}`)
    return `${stringH}:${stringM}:${stringS}`
}


humanReadable(0)// '00:00:00', 'humanReadable(0)'
humanReadable(59)// '00:00:59', 'humanReadable(59)')
humanReadable(60)// '00:01:00', 'humanReadable(60)');
humanReadable(90)//, '00:01:30', 'humanReadable(90)');
humanReadable(3599)//, '00:59:59', 'humanReadable(3599)');
humanReadable(3600)//, '01:00:00', 'humanReadable(3600)');
humanReadable(45296)//, '12:34:56', 'humanReadable(45296)');
humanReadable(86399)//, '23:59:59', 'humanReadable(86399)');


function abbrevName(name) {
    var str = name.match(/\b(\w)/g)
    var acronym = str.join('.');
    var upperStr = acronym.toUpperCase()
    return upperStr
}

abbrevName('peter wall')
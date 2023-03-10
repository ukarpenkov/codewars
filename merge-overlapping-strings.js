function mergeStrings(str1, str2) {
    for (let i = Math.min(str1.length, str2.length); i >= 0; i--) {
        if (str1.endsWith(str2.substr(0, i))) {
            return str1 + str2.substr(i);
        }
    }
    return str1 + str2;
}
mergeStrings("abaab", "aabab")// => "abaabab'"

function isOpposite(s1, s2) {
    if (s1.toLowerCase() !== s2.toLowerCase()) {
        return false
    }
    else if (s1 === s2) {
        return false
    }
    else {
        for (let i = 0; i < s1.length; i++) {
            if (s1.charAt(i) === s2.charAt(i)) {
                return false
            }
        }

        return true
    }
}

isOpposite('Sa', 'sA')
function DNAStrand(dna) {
    let arr = dna.split('')

    let result = arr.map(a => {
        if (a === 'A') {
            return 'T'
        }
        if (a === 'T') {
            return 'A'
        }
        if (a === 'G') {
            return 'C'
        }
        if (a === 'C') {
            return 'G'
        }

    })

    return result.join('')
}



DNAStrand("AAAA")///,"TTTT","String AAAA is")
DNAStrand("ATTGC")//,"TAACG","String ATTGC is")
DNAStrand("GTAT")//,"CATA","String GTAT is")
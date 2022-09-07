


function likes(names) {

    if (names.length < 1) {
        return "no one likes this"
    }
    if (names.length === 1) {
        return `${names[0]} likes this`
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    }
    if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    if (names.length > 3) {
        quantity = names.length - 2
        return `${names[0]}, ${names[1]} and ${quantity} others like this`
    }

}

likes([])
likes(["Peter"])
likes(["Jacob", "Alex"])
likes(["Max", "John", "Mark"])
likes(["Max", "John", "Mark", 'pooop'])
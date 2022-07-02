function getCount(str) {
    let reg = /([aeiou])/g
    return (str.match(reg) || []).length
}

getCount("abracadabra") // 5
getCount("my pluz") // 0
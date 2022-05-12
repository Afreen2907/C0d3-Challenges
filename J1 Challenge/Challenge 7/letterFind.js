const solution = (str, letter, i = 0) => {
    const val = str.split('')
    if (i <= val.length) {
        if (val[i] === letter) {
            return true
        } else {
            solution(str, letter, i + 1)
        }
    }
    return false
}

module.exports = solution
const solution = (num, i = 2) => {
    //more than 1
    //cannot be divided by 2
    //cannot be divided by another other num
    // can only be divided by itself

    if (num !== i) {
        if (num < 2 || num % i === 0) {
            return false
        }
    }

    if (i <= num) {
        return solution(num, i + 1)
    }

    return true
}

module.exports = solution
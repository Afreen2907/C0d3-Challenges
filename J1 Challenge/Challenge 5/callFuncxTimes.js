const solution = (num, func) => {
    if (num < 1) {
        return 0
    }

    return solution(num - 1, func)
}

module.exports = solution
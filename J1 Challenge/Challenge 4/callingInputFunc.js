const solution = (func, i = 0) => {
    if (!func(i)) {
        return i
    }

    return solution(func, i + 1)
}

module.exports = solution
// Write a function called solution that takes in 2 parameters, a number and string and returns the string repeated input parameter number of times

// result = solution(3, "abc") // "abcabcabc"
// result = solution(0, "hello") // ""

//This program uses recursion method

const solution = (num, string, res = '') => {
    if (num < 1) {
        return res
    }

    return solution(num - 1, string, res + string)
}

module.exports = solution
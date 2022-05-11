// Write a function called solution that takes in a number and returns a function.

// whenever the returned function is called, the next incremental number will be returned

// Example:

// let resf = solution(5)
// result = resf() // 6
// result = resf() // 7

// resf = solution(-5)
// result = resf() // -4
// result = resf() // -3

const solution = (num) => {

    return () => {
        return num = num + 1
    }
}

module.exports = solution
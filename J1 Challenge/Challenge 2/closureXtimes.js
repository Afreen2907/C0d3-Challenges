// Write a function called solution that takes in 2 parameters, a number and a function, and returns a function

// The returned function can only be called the input number of times.

// Whenever the returned function is called, it returns whatever the input function returns.
// After the returned function has been called up to the first parameter number of times, calling returned function will always return null.

// resf = solution(3, () => {
//   return "hello"
// })
// result = resf() // "hello"
// result = resf() // "hello"
// result = resf() // "hello"
// result = resf() // null
// ...
// result = resf() // null

// resf = solution(1, () => {
//   return 100
// })
// result = resf() // 100
// result = resf() // null
// ...
// result = resf() // null

const solution = (num, val) => {
    let n = num
    return () => {
        if (n <= 0) {
            return null
        } else {
            n = n - 1
            return val
        }
    }
}

module.exports = solution
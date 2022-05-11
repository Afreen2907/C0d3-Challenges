// Write a function that takes in 3 numbers and return the largest out of them.

// Here's how another developer might use your function:

// solution(5,9,14) // Should return 14
// solution(4,5,1) // Should return 5
// Note: Try to implement your solution without the Math.max function

const solution = (num1, num2, num3) => {
    if (num1 < num2) {
        return num2 > num3 ? num2 : num3
    } else {
        return num1 > num3 ? num1 : num3
    }
}

module.exports = solution
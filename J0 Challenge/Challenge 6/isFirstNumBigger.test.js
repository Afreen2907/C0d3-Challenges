const solution = require('./isFirstNumBigger')

test('Is first number bigger? - set 1', () => {
    expect(solution(5, 9)).toBe(false)
})

test('Is first number bigger? - set 2', () => {
    expect(solution(4, 1)).toBe(true)
})
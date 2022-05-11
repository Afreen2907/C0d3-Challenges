const solution = require('./sumOfNumbers')

test('Returns some of 2 values', () => {
    expect(solution(5, 9)).toBe(14)
    expect(solution(4, 1)).toBe(5)
})
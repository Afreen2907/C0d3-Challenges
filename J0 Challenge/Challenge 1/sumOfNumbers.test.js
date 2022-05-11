const solution = require('./sumOfNumbers')

test('Returns some of 2 values - set', () => {
    expect(solution(5, 9)).toBe(14)
})

test('Returns some of 2 values - set 2', () => {
    expect(solution(4, 1)).toBe(5)
})
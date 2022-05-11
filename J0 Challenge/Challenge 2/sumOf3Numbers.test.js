const solution = require('./sumOf3Numbers')

test('Returns some of 3 values', () => {
    expect(solution(5, 9, 2)).toBe(16)
    expect(solution(4, 1, 9)).toBe(14)
})
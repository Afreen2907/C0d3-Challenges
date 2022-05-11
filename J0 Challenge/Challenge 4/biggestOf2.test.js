const solution = require('./biggestOf2')

test('biggest of 2 - set 1', () => {
    expect(solution(5, 9)).toBe(9)
})

test('biggest of 2 - set 2', () => {
    expect(solution(4, 1)).toBe(4)
})
const solution = require('./biggestOf3')

test('Biggest of 3 - set 1', () => {
    expect(solution(5, 9, 14)).toBe(14)
})

test('Biggest of 3 - set 2', () => {
    expect(solution(4, 5, 1)).toBe(5)
})
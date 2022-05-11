const solution = require('./isSumGT10')

test('Is Sum more than 10? - set 1', () => {
    expect(solution(5, 9)).toBe(true)
})

test('Is Sum more than 10? - set 2', () => {
    expect(solution(4, 1)).toBe(false)
})
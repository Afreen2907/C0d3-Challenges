const solution = require('./greaterThan5')

test('Returns true or false of a number greater than 5 - set 1', () => {
    expect(solution(5)).toBe(true)
})

test('Returns true or false of a number greater than 5 - set 2', () => {
    expect(solution(4)).toBe(false)
})

test('Returns true or false of a number greater than 5 - set 2', () => {
    expect(solution(7)).toBe(true)
})
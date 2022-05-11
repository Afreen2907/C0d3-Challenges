const solution = require('./repeatedString')

describe('Repeated Strings', () => {
    it('should return abc 3 times', () => {
        const result = solution(3, 'abc')
        expect(result).toEqual('abcabcabc')
    })
    it('should return hello "" times', () => {
        const result = solution(0, 'hello')
        expect(result).toEqual('')
    })
})
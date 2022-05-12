const solution = require('./letterFind')

describe('Letter Find', () => {
    it('should return true', () => {
        const result = solution('abc', 'a')
        expect(result).toBe(true)
    })
    it('should return false', () => {
        const result = solution('abc', 'd')
        expect(result).toBe(false)
    })
})
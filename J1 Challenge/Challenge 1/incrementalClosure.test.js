const solution = require('./incrementalClosure')

describe('closure 1', () => {
    it('should return next positive number', () => {
        const result = solution(0)
        expect(result()).toEqual(1)
        expect(result()).toEqual(2)
    })

    it('should return next positive number starting from 11', () => {
        const func = solution(11)
        expect(func()).toEqual(12)
        expect(func()).toEqual(13)
        expect(func()).toEqual(14)
    })
    it('should return next negative number', () => {
        const func = solution(-5)
        expect(func()).toEqual(-4)
        expect(func()).toEqual(-3)
        expect(func()).toEqual(-2)
    })
})
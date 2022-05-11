const solution = require('./closureXtimes')

describe('Closure X times', () => {
    it('should return hello when first 3 times are called, otherwise it returns null', () => {
        const resf = solution(3, 'hello')
        expect(resf()).toEqual('hello')
        expect(resf()).toEqual('hello')
        expect(resf()).toEqual('hello')
        expect(resf()).toEqual(null)
        expect(resf()).toEqual(null)
        expect(resf()).toEqual(null)
    })
    it('should return 100 when first is called, otherwise it returns null', () => {
        const resf = solution(1, 100)
        expect(resf()).toEqual(100)
        expect(resf()).toEqual(null)
        expect(resf()).toEqual(null)
        expect(resf()).toEqual(null)
    })
})
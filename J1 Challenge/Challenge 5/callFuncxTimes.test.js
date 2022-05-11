const solution = require('./callFuncxTimes')

describe('Call function X times', () => {
    it('should call the function 3 times', () => {
        solution(3, () => {
                console.log('hello')
            }) // 'hello' should be printed out 88 times.
    })

    it('should call the function 5 times', () => {
        solution(5, () => {
                console.log('bye')
            }) // 'hello' should be printed out 88 times.
    })
})
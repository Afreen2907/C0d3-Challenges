const a = require('./functionalSum.js')

test('functional sum', () => {
    const result = a(5, 6)
    expect(result()).toEqual(11)
})
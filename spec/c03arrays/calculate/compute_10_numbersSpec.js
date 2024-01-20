const calculate10naturlaNumbers = require('../../../src/c03arrays/calculate/compute_10_numbers')
describe('Compute the sum of the first 10 natural numbers', function () {

    it('add each number together from 1 to 10', function () {

        let result = calculate10naturlaNumbers()

        expect(result).toBe(55)
    })
})
const lcmNumber = require('../../../src/c02controlflow/search/find_lcm_two_numbers')
describe('Find the LCM of any two numbers.', function () {

    it('Should find the LCM of 15 and 20, which is 60', function () {
        let firstNumber = 15
        let secondNumber = 20

        let result = lcmNumber(firstNumber, secondNumber)

        expect(result).toBe(60)
    })

})
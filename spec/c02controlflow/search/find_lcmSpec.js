const lowCommonMultiple = require('../../../src/c02controlflow/search/find_lcm')
describe('find the LCM of any two numbers using HCF.', function () {

    it('Should find the LCM of 15 and 20, which is 60', function () {
        let firstNumber = 15
        let secondNumber = 20

        let result = lowCommonMultiple(firstNumber, secondNumber)

        expect(result).toBe(60)
    })

})
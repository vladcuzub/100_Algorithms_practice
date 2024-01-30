const highestCommonFactor = require('../../../src/c02controlflow/search/find_heighest_factory')
describe('find the HCF (Highest Common Factor) of two numbers.', function () {

    it('Should find the HCF of 24 and 28, which is 4', function () {
        let firstNumber = 24
        let secondNumber = 28

        let result = highestCommonFactor(firstNumber, secondNumber)

        expect(result).toBe(4)
    })

})
const highestCommonFactor = require('../../../src/c02controlflow/search/find_heighest_factory')
describe('find the HCF (Highest Common Factor) of two numbers.', function () {

    it('Should find the smallest number from input numbers the numbers from 100 to 200 and find which are divisible to 9', function () {
        let firstNumber = 24
        let secondNumber = 28

        let result = highestCommonFactor(firstNumber, secondNumber)

        expect(result).toBe(4)
    })

})
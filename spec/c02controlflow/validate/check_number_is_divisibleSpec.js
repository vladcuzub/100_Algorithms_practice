const divisibleNumber = require('../../../src/c02controlflow/validate/check_number_is_divisible')

describe('Checks if a number is divisible by either 3 or 7, or both', function () {

    it('The number must be divisible to 3', function () {
        let inputNumber = 21;

        let result = divisibleNumber(inputNumber)

        expect(result).toBe(true)
    })
    it('The number must be divisible to 7', function () {
        let inputNumber = 21;

        let result = divisibleNumber(inputNumber)

        expect(result).toBe(true)
    })

})
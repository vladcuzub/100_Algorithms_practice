const decimalToOctal = require('../../../src/c02controlflow/generate/convert_decimal_to_octal')

describe('Convert decimal to octal', function () {
    it('Shoult convert decimal number to octal number ', function () {

        let decimalNumber = 25

        let result = decimalToOctal(decimalNumber)

        expect(result).toBe(31)
    })
})

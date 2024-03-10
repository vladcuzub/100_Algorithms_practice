const convertDecimalToHexadecimal = require('../../../src/c02controlflow/generate/convert_decimal_to_hexadecimal')

describe('Convert decimal to hexadecimal', function () {
    it('Shoult convert decimal number to hexadecimal number ', function () {

        let decimalNumber = 79

        let result = convertDecimalToHexadecimal(decimalNumber)

        expect(result).toBe('4f')
    })
})

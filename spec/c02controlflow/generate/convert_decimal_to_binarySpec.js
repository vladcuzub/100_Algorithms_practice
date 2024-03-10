const convertDecimalToBinary = require('../../../src/c02controlflow/generate/convert_decimal_to_binary')

describe('Convert decimal to Binary', function () {
    it('Shoult convert decimal number to binary number ', function () {

        let decimalNumber = 10

        let result = convertDecimalToBinary(decimalNumber)

        expect(result).toBe(1010)
    })
})

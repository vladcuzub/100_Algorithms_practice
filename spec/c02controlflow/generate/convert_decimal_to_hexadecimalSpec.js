const convertDecimalToHexadecimal = require('../../../src/c02controlflow/generate/convert_decimal_to_hexadecimal')

describe('Convert decimal to hexadecimal', function () {
    it('Should convert decimal number 79 to hexadecimal number wich is 4f ', function () {

        let decimalNumber = 79

        let result = convertDecimalToHexadecimal(decimalNumber)

        expect(result).toBe('4f')
    })


    it('Should convert decimal number 10 to hexadecimal number wich is a ', function () {

        let decimalNumber = 10

        let result = convertDecimalToHexadecimal(decimalNumber)

        expect(result).toBe('a')
    })
})

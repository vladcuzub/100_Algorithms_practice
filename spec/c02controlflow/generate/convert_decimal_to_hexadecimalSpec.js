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

    it('Should convert decimal number 12 to hexadecimal number wich is c ', function () {

        let decimalNumber = 12

        let result = convertDecimalToHexadecimal(decimalNumber)

        expect(result).toBe('c')
    })

    it('Should convert decimal number 16 to hexadecimal number wich is 10 ', function () {

        let decimalNumber = 16

        let result = convertDecimalToHexadecimal(decimalNumber)

        expect(result).toBe('10')
        
    })
})

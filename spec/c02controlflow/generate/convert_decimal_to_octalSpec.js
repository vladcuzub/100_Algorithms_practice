const decimalToOctal = require('../../../src/c02controlflow/generate/convert_decimal_to_octal')

describe('Convert decimal to octal', function () {
    it('Should convert decimal number 25 to octal number wich is 31 ', function () {

        let decimalNumber = 25

        let result = decimalToOctal(decimalNumber)

        expect(result).toBe(31)
    })
    it('Should convert decimal number 20 to octal number wich is 24 ', function () {

        let decimalNumber = 20

        let result = decimalToOctal(decimalNumber)

        expect(result).toBe(24)
    })
    it('Should convert decimal number 1 to octal number wich is 1 ', function () {

        let decimalNumber = 1

        let result = decimalToOctal(decimalNumber)

        expect(result).toBe(1)
    })
   
    it('Should convert decimal number 3 to octal number wich is 3', function () {

        let decimalNumber = 3

        let result = decimalToOctal(decimalNumber)

        expect(result).toBe(3)
    })
    it('Should convert decimal number 8 to octal number wich is 10', function () {

        let decimalNumber = 8

        let result = decimalToOctal(decimalNumber)

        expect(result).toBe(10)
    })
})

const convertDecimalToBinary = require('../../../src/c02controlflow/generate/convert_decimal_to_binary')

describe('Convert decimal to Binary', function () {
    it('Should convert decimal number 10 to binary number wich is 1010 ', function () {

        let decimalNumber = 10

        let result = convertDecimalToBinary(decimalNumber)

        expect(result).toBe(1010)
    })

    it('Should convert decimal number 0 to binary number wich is 0', function () {

        let decimalNumber = 0

        let result = convertDecimalToBinary(decimalNumber)

        expect(result).toBe(0)
    })

    it('Should convert decimal number 1 to binary number wich is 1 ', function () {

        let decimalNumber = 1

        let result = convertDecimalToBinary(decimalNumber)

        expect(result).toBe(1)
    })

    it('Should convert decimal number 2 to binary number wich is 10', function () {

        let decimalNumber = 2

        let result = convertDecimalToBinary(decimalNumber)

        expect(result).toBe(10)
    })

    it('Should convert decimal number 4 to binary number wich is 100', function () {

        let decimalNumber = 4

        let result = convertDecimalToBinary(decimalNumber)

        expect(result).toBe(100)
    })
})

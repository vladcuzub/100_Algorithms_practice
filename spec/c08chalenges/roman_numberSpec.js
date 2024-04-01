const convertToRoman = require('../../src/c08challenges/roman_number')

describe('Roman number', function () {
    it('Should convert a given number to a roman numeral', function () {

        let number = 16

        let result = convertToRoman(number)

        expect(result).toBe('XVI')
    })
    it('Should convert a given number to a roman numeral', function () {

        let number = 12

        let result = convertToRoman(number)

        expect(result).toBe('XII')
    })

    it('Should convert a given number to a roman numeral', function () {

        let number = 1023

        let result = convertToRoman(number)

        expect(result).toBe('MXXIII')
    })

})
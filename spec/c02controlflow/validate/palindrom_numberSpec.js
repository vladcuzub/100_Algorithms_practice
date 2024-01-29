const palindromeNumber = require('../../../src/c02controlflow/validate/palindrom_number')

describe('Check if a number is a palindrome or not.', function () {

    it('The number is a Palindrome', function () {
        let number = 121

        let result = palindromeNumber(number)

        expect(result).toBe(true)
    })
    it('The number is not a Palindrome', function () {
        let number = 122;

        let result = palindromeNumber(number)

        expect(result).toBe(false)
    })

})
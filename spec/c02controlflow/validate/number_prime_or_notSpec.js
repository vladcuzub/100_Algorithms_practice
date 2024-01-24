const primeNumber = require('../../../src/c02controlflow/validate/number_prime_or_not')

describe('Checks if a number is prime or not', function () {

    it('Should check for divisibility from 2 to the square root of the number and return false', function () {
        let number = 12;

        let result = primeNumber(number)

        expect(result).toBe(false)
    })
    it('Should check for divisibility from 2 to the square root of the number and return true', function () {
        let number = 13;

        let result = primeNumber(number)

        expect(result).toBe(true)
    })

})
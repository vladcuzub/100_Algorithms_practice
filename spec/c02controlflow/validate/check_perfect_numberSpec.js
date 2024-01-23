const findDivisorNumbers = require('../../../src/c02controlflow/validate/check_perfect_number')

describe('Check whether a given number is a Perfect number or not.', function () {

    it(' Should return divisors for a given number  ', function () {
        let number = 28

        let result = findDivisorNumbers.findDivisorNumbers(number)

        expect(result).toEqual([1, 2, 4, 7, 14])
    })

    it(' Should return sum of divisor number  ', function () {
        let divisorsNumbers = [1, 2, 4, 7, 14]

        let result = findDivisorNumbers.sumOfDivisors(divisorsNumbers)

        expect(result).toBe(28)
    })

    it(' Should return true if the result is a Perfect number  ', function () {
        let sum = 28
        let number = 28;

        let result = findDivisorNumbers.checkPerfectNumber(sum,number)

        expect(result).toEqual(true)
    })

})
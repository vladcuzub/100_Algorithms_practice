const sumTermsEvenNumbers = require('../../../src/c02controlflow/calculate/sum_nTerms_even_numbers')

describe('Display sum of n terms of even natural numbers.', function () {

    it(' Should find the even numbers', function () {
        let number = 5
        let evenNumbers = '2 4 6 8 10'

        let result = sumTermsEvenNumbers.findEvenNumbers(number)

        expect(result).toBe('2 4 6 8 10')
    })

    it(' Should calculate the sum numbers', function () {
    
        let evenNumbers = '2 4 6 8 10'

        let result = sumTermsEvenNumbers.sumEvenNumbers(evenNumbers)

        expect(result).toBe(30)
    })


})
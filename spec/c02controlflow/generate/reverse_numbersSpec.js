const reverseNumber = require('../../../src/c02controlflow/generate/reverse_numbers')

describe('Display the number in reverse order', function () {

    it(' Should extract the digits from right and put them to the left one by one', function () {
        let number = 1234

        let result = reverseNumber(number)

        expect(result).toBe(4321)
    })

})
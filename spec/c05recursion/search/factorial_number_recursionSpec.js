const findFactorialNumber = require('../../../src/c05recursion/search/factorial_number_recursion')

describe('Factorial number', function () {

    it('Should find a factorial number using recursion', function () {

        let number = 5

        let result = findFactorialNumber(number)

        expect(result).toBe(120)
    })

})
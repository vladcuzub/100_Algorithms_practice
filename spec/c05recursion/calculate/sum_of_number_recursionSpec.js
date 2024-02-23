const calculateSum = require('../../../src/c05recursion/calculate/sum_of_number_recursion')

describe('Calculte sum', function () {

    it('Should calculate the sum of numbers from 1 to n using recursion', function () {
        let limit = 5
        let number = 1

        let result = calculateSum(number, limit)

        expect(result).toBe(15)
    })

})
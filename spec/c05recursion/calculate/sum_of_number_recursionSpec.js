const calculateSum = require('../../../src/c05recursion/calculate/sum_of_number_recursion')

describe('Calculate sum', function () {

    it('Should calculate the sum of numbers from 1 to n using recursion', function () {
        let end = 5
        let start = 1

        let result = calculateSum(start, end)

        expect(result).toBe(15)
    })


    it('Should calculate the sum of numbers from 3 to n using recursion', function () {
        let end = 5
        let start = 3

        let result = calculateSum(start, end)

        expect(result).toBe(12)
    })


    it('Should calculate the sum of numbers from 1 to n using recursion', function () {
        let end = 3
        let start = 1

        let result = calculateSum(start, end)

        expect(result).toBe(6)
    })

})


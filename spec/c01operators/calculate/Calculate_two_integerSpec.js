const sumOfNumbers = require('../../../src/c01operators/calculate/Calculate_two_integer')

describe('Calculate sum of two integers', function () {

    it('The sum is the result of 2 addition numbers', function () {
        let firstNumber = 38;
        let secondNumber = 25;

        let sumResult = sumOfNumbers(firstNumber, secondNumber)

        expect(sumResult).toBe(63)
    })

})
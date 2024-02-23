const addSeriesToArray = require('../../../src/c05recursion/generate/fibonacii_series')

describe('Fibonacii series', function () {

    it('Should print Fibonacci series using recursion', function () {
      
        let number = 10

        let result = addSeriesToArray(number)
        let fibonacciSeriesResult = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(result).toEqual(fibonacciSeriesResult)
    })

})
const fibonaciiSeries = require('../../../src/c03arrays/generate/Fibonacci_series')

describe('Display the first n terms of the Fibonacci series.', function () {

    it('Should each number to be the sum of the two preceding ones', function () {
        let number = 5
        let result = fibonaciiSeries(number)

        expect(result).toEqual([0, 1, 1, 2, 3])
    })


})
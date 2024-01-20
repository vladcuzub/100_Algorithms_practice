const finSumAndaverage = require('../../../src/c03arrays/calculate/calculate_sum_and_average')

describe('Read 10 numbers from the keyboard and find their sum and average.', function () {

    it('the sum should be the sum of all the numbers', function () {
        let inputNumbers = 10

        let result = finSumAndaverage.calculateSum(inputNumbers)

        expect(result).toBe(55)
    })
    it('the average should be the sum divided by the number of all the numbers', function () {
        let sum = 55;
        let inputNumbers = 10;

        let result = finSumAndaverage.calculateAverage(sum, inputNumbers)

        expect(result).toBe(5.5)
    })
})
const countnumbers = require('../../../src/c02controlflow/calculate/check_nr_positive_negative')

describe('Counts the number of positive numbers and negative numbers', function () {

    it(' Should count positive numbers', function () {
        let numbers = [5, -4, 10, 15, -1]

        let result = countnumbers.countPositivNumbers(numbers)

        expect(result).toBe(3)
    })


    it('Should count negative numbers', function () {
        let numbers = [5, -4, 10, 15, -1]

        let result = countnumbers.countNegativeNumbers(numbers)

        expect(result).toBe(2)
    })

})
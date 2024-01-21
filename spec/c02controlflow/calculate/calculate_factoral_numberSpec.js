const calculateFactorialNumber = require('../../../src/c02controlflow/calculate/calculate_factoral_number')

describe('Display factorial number from a input', function () {

    it(' Should multiply each number from 1 to the given number', function () {
        let number = 5

        let result = calculateFactorialNumber(number)

        expect(result).toBe(120)
    })

})
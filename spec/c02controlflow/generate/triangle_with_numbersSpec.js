const triangleWithNumbers = require('../../../src/c02controlflow/generate/triangle_with_numbers')

describe('Display a pattern like a right angle triangle using numbers.', function () {

    it(' Should print first the height and then for each row increase with numbers', function () {
        let height = 4

        let result = triangleWithNumbers(height)

        const numbersPattern = '1\n' +
            '12\n' +
            '123\n' +
            '1234\n';

        expect(result).toBe(numbersPattern)
    })

})
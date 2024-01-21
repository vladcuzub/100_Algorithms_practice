const triangleIncreaseNumber = require('../../../src/c02controlflow/generate/triangle_increase_by1')

describe('Display apattern like a right angle triangle with the number increased by 1.', function () {

    it(' Should print first the height and then for each row increase numbers with 1', function () {
        let height = 4

        let result = triangleIncreaseNumber(height)

        const numbersPattern = '1\n' +
            '2 3\n' +
            '4 5 6\n' +
            '7 8 9 10\n';

        expect(result).toBe(numbersPattern)
    })

})
const triangleNumberRepeat = require('../../../src/c02controlflow/generate/triangle_number_repeat')

describe('Display a pattern like a right angle triangle triangle with a number which will repeat a number in a row.', function () {

    it(' Should print first the height and then for each row increase with repeats numbers', function () {
        let height = 4

        let result = triangleNumberRepeat(height)

        const numbersPattern = '1\n' +
            '22\n' +
            '333\n' +
            '4444\n';

        expect(result).toBe(numbersPattern)
    })

})
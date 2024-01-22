const pyramidNumberRepeat = require('../../../src/c02controlflow/generate/pyramid_repeat_numbers')

describe('Display a pyramid with a number which will repeat the number in the same row', function () {

    it(' Should print one number and then for each row increase numbers and repeat them ', function () {
        let height = 4

        let result = pyramidNumberRepeat(height)

        const numbersPattern = '   1 \n' +
            '  2 2 \n' +
            ' 3 3 3 \n' +
            '4 4 4 4 \n';

        expect(result).toBe(numbersPattern)
    })

})
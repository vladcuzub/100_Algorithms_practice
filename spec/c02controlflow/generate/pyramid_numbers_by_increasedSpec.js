const pyramidNumbersIncreased = require('../../../src/c02controlflow/generate/pyramid_numbers_by_increased')

describe('Display a pyramid pattern with numbers increased by 1.', function () {

    it(' Should print first the height and then for each row increase numbers + 1', function () {
        let height = 4

        let result = pyramidNumbersIncreased(height)

        const numbersPattern = '   1 \n' +
            '  2 3 \n' +
            ' 4 5 6 \n' +
            '7 8 9 10 \n';

        expect(result).toBe(numbersPattern)
    })

})
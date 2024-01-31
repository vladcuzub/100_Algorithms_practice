const rowsPattern = require('../../../src/c02controlflow/generate/rows_pattern')

describe('Display a pattern for n rows using a number that starts with 1 and each row will have a 1 as the first and last number', function () {

    it('Should each row increase with numbers and have 1 at start and at end', function () {
        let height = 3
        let result = rowsPattern(height)

        const pattern = '  1\n' +
            ' 121\n' +
            '12321\n';

        expect(result).toBe(pattern)
    })


})
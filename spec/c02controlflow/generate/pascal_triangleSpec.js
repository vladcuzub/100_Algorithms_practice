const pascalTriangle = require('../../../src/c02controlflow/generate/pascal_triangle')

describe('Display Pascal triangle', function () {

    it('Should generates and prints Pascal Triangle with a specified number of rows, where each number in the triangle is the sum of the two directly above it', function () {
        let rows = 5;

        let result = pascalTriangle(rows)

        const triangle = '          1   \n' +
            '        1   1   \n' +
            '      1   2   1   \n' +
            '    1   3   3   1   \n' +
            '  1   4   6   4   1   \n' ;

            expect(result).toBe(triangle)
    })
   

})
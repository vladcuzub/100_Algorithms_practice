const trianglefloyd = require('../../../src/c02controlflow/generate/floyd_triangle')

describe('Display Floyd Triangle with 1 and 0', function () {

    it(' Should print Floyd Triangle alternatively with 1 and 0 ', function () {
        let height = 4

        let result = trianglefloyd(height)

        const numbersPattern = '1\n'+
            '01\n' +
            '101\n' +
            '0101\n';

        expect(result).toBe(numbersPattern)
    })

})
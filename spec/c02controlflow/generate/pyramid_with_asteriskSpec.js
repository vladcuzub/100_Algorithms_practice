const pyramidWithAsterisk = require('../../../src/c02controlflow/generate/pyramid_with_asterisk')

describe('Display a pyramid pattern with asterisk.', function () {

    it(' Should print first the height and then for each row increase with asterisk', function () {
        let height = 4

        let result = pyramidWithAsterisk(height)

        const asteriskPattern = '   * \n' +
            '  * * \n' +
            ' * * * \n' +
            '* * * * \n';

        expect(result).toBe(asteriskPattern)
    })

})
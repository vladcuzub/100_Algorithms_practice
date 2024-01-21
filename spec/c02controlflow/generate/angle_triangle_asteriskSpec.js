const printRightAngleTriangle = require('../../../src/c02controlflow/generate/angle_triangle_asterisk')

describe('Display a pattern like a right angle triangle using an asterisk.', function () {

    it(' Should print first the height and then for each row increase with asterik', function () {
        let height = 4

        let result = printRightAngleTriangle(height)
        
        const angleAsterisk = '*\n' +
                              '**\n' +
                              '***\n' +
                              '****\n';

        expect(result).toBe(angleAsterisk)
    })

})
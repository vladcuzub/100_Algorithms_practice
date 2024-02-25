const rotateArrayByNposition = require('../../../src/c04matrices/generate/rotate_array_for_N_position')

describe('Rotate array', function () {

    it('Should split array and rotate array by given position ', function () {
        let array = [0, 3, 6, 9, 12, 14, 18, 20, 22, 25, 27]
        let position = 4

        let result = rotateArrayByNposition(array, position)

        expect(result).toEqual([12, 14, 18, 20, 22, 25, 27, 0, 3, 6, 9])
    })

})
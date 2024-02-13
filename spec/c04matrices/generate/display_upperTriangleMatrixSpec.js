const upperTriangleMatrix = require('../../../src/c04matrices/generate/display_upperTriangleMatrix')

describe('Upper Triangle of Matrix', function () {

    it('Should print a upper triangle of matrix ', function () {
        let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

        let result = upperTriangleMatrix(matrix)

        let upperTriangleResult = [[1, 0, 0], [4, 5, 0], [7, 8, 9]]

        expect(result).toEqual(upperTriangleResult)
    })

})
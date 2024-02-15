const lowerTriangleOfMatrix = require('../../../src/c04matrices/generate/display_lowerTriangle_ofMatrix')

describe('Lower Triangle of Matrix', function () {

    it('Should print a lower triangle of matrix ', function () {
        let matrix = [[1, 2, 3],
                      [4, 5, 6], 
                      [7, 8, 9]]

        let result = lowerTriangleOfMatrix(matrix)

        let lowerTriangle = [[1, 2, 3],
                             [0, 5, 6],
                             [0, 0, 9]]

        expect(result).toEqual(lowerTriangle)
    })

})
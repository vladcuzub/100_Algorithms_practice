const matrixInSpiralForm = require('../../../src/c04matrices/generate/display_upperTriangleMatrix')

describe('Matrix Spiral', function () {

    it('Should print a matrix in a spiral form ', function () {
        let matrix = [[1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20]]

        let result = matrixInSpiralForm(matrix)

        let spitalMatrix = [[1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]]
      

            expect(result).toEqual(spitalMatrix)
    })

})
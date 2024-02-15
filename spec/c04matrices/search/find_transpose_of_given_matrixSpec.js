const transposeMatrix = require('../../../src/c04matrices/search/find_transpose_of_given_matrix')

describe('Find the transpose of a given matrix.', function () {

    it('Should the columns become the rows and print the matrix', function () {
        let matrix = [[5, 6],
                      [7, 8]]

        let resultMatrix = [[5, 7],
                            [6, 8]]

        let result = transposeMatrix(matrix)

        expect(result).toEqual(resultMatrix)
    })

})
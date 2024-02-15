const addMatrices = require('../../../src/c04matrices/calculate/add_2_matrices_of_same_size')

describe('Adding two matrices of the same size.', function () {

    it('Should adding two matrices and result the sum in one matrice', function () {
        let firstMatrix = [[1, 2],
                           [3, 4]];    
        let secondMatrix = [[5, 6],
                            [7, 8]]
        let resultMatrix = [[6, 8],
                            [10, 12]]

        let result = addMatrices(firstMatrix, secondMatrix)

        expect(result).toEqual(resultMatrix)
    })

})
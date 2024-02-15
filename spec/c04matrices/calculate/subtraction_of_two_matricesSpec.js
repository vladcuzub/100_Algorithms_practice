const subtractionMatrices = require('../../../src/c04matrices/calculate/subtraction_of_two_matrices')

describe('The subtraction of two matrices', function () {

    it('Should be subtracted two matrices and print the result', function () {
        let firstMatrix = [[5, 6],
                           [7, 8]];        
        let secondMatrix = [[1, 2],
                            [3, 4]];
        let resultMatrix = [[4, 4],
                            [4, 4]]

        let result = subtractionMatrices(firstMatrix, secondMatrix)

        expect(result).toEqual(resultMatrix)
    })

})
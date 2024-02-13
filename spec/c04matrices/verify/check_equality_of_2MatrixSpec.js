const checkMatrix = require('.../../../src/c04matrices/verify/check_equality_of_2Matrix')

describe('Check equality  of two matrices', function () {
    it('Should return true if both matrixs are equal', function () {

        let firstMatrix = [[1, 2], [3, 4]];
        let secondMatrix = [[1, 2], [3, 4]];

        let result = checkMatrix(firstMatrix, secondMatrix)

        expect(result).toBe(true)
    })

    it('Should return false if one matrix is not equal with the other ', function () {

        let firstMatrix = [[2, 2], [4, 4]];
        let secondMatrix = [[1, 2], [3, 4]];

        let result = checkMatrix(firstMatrix, secondMatrix)

        expect(result).toBe(false)
    })

})
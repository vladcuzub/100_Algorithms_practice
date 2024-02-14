const sumLeftdiagonals = require('../../../src/c04matrices/calculate/find_the_sum_of_left_diagonals_of_matrix')

describe('Sum of the left diagonals of a matrix', function () {

    it('Should find the left diagonals of 2x2 matrix and calculate the sum', function () {
        let matrix = [[4, 2],
                      [5, 5]]

        let result = sumLeftdiagonals(matrix)

        expect(result).toEqual(9)
    })
    it('Should find the left diagonals of 3x3 matrix and calculate the sum', function () {
        let matrix = [[4, 2, 3],
                      [5, 5, 4],
                      [1, 6, 9]]

        let result = sumLeftdiagonals(matrix)

        expect(result).toEqual(18)
    })

    it('Should find the left diagonals of 4x4 matrix and calculate the sum', function () {
        let matrix = [[4, 2, 3, 8],
                      [5, 5, 4, 1],
                      [1, 6, 9, 1],
                      [7, 0, 1, 2]]

        let result = sumLeftdiagonals(matrix)

        expect(result).toEqual(20)
    })

})
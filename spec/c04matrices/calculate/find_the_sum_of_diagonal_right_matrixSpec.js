const sumRightDiagonals = require('../../../src/c04matrices/calculate/find_the_sum_of_diagonal_right_matrix')

describe('Sum of the right diagonals of a matrix', function () {

    it('Should find the right diagonals of matrix and calculate the sum', function () {
        let matrix = [[9,2,1],
                      [3,1,5],
                      [1,4,5]]

        let result = sumRightDiagonals(matrix)

        expect(result).toBe(3)
    })

})
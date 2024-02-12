const sumLeftdiagonals = require('../../../src/c04matrices/calculate/find_the_sum_of_left_diagonals_of_matrix')

describe('Sum of the left diagonals of a matrix', function () {

    it('Should find the left diagonals of matrix and calculate the sum', function () {
        let matrix = [[4, 2], [5, 5]]

        let result = sumLeftdiagonals(matrix)

        expect(result).toEqual(7)
    })

})
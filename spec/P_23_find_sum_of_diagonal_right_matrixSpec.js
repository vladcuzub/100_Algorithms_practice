describe('P_23_find_the_sum_of_the_right_diagonal_of_matrix', function () {

    it('the matrix square must be equal with input ', function () {
        let sizeMatrix = 2;
        let matrixElements = [[1, 2], [3, 4]];
  
        let result = readInputMatrix(sizeMatrix,matrixElements)

        expect(result).toEqual([[1,2],[3,4]])

    })

    it('should return corect sum of diagonal right matrix ', function () {
        const matrix = [
            [1,2],
            [3,4]
        ]
        let result = sumRightDiagonals(matrix)

        expect(result).toBe(5)

    })
})
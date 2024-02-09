const print2DArrayToMatrix = require('../../../src/c03arrays/generate/2D_array_and_print_Matrix')

describe('print Matrix for 2D Array', function () {

    it('Should return a matrix from a 3 x 3 array', function () {
        let arrayOne = [1,2,3]
        let arrayTwo = [4,5,6]
        let arrayThree = [7,8,9]

        let result = print2DArrayToMatrix(arrayOne, arrayTwo, arrayThree)

        const matrix =`1 2 3
4 5 6
7 8 9`;


        expect(result).toBe(matrix)
    })

})
describe('P_20_subtraction_of_two_matrice', function () {
    it('input size of square matrix to be less then 5', function () {
        let size = 4
    
        let result = readArray(size)

        expect(result).toBe('Input elements in the first matrix :')
    })

    it('input size of square matrix is bigger or equal to 5', function () {
        let size = 5

        let result = readArray(size)


        expect(result).toBe('The square matrix must be less than 5')
    })
    it('input size of square matrix is undefined', function () {
        let size 

        let result = readArray(size)


        expect(result).toBe('The square matrix must be less than 5')
    })




    // it('same position should be subsctacted', function () {
    //     let firstMatrix = [[5, 6],[7,8]];
    //     let secondMatrix = [[1, 2], [3, 4]];

    //     let result = subtractionMatrices(firstMatrix, secondMatrix);

    //     expect(result).toBe([[4,4],[4,4]])
    // }) 
})
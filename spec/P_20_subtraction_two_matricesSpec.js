describe('P_20_subtraction_of_two_matrice', function () {
    

    it('same position should be subtracted', function () {
        let firstMatrix = [[5, 6],[7,8]];
        let secondMatrix = [[1, 2], [3, 4]];
        let result = subtractionMatrices(firstMatrix, secondMatrix);
    
        expect(result).toEqual([[4,4],[4,4]])
    }) 
  
})

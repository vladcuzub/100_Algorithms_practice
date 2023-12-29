describe('P_22_find_transpose_of_a_given_matrix' ,function () {

    it('should input a 2 x 2 matrix', function (){
        let rows = 2;
        let columns = 2;
        let matrix = [[1,2],[3,4]]
    
        let result = readInputMatrix(rows,columns,matrix)

        expect(result).toEqual([[1,2],[3,4]])


    })
})
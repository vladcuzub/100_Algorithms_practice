describe('P_22_find_transpose_of_a_given_matrix' ,function () {

    it('matrix must have a number of rows and columns', function (){
        let rows = 2;
        let columns = 2;

        let result = readInputMatrix(rows,columns)

        expect(result).toBe(2,2)


    })
})
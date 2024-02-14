const sumRowsColumnsMatrix = require('../../../src/c04matrices/search/find_sum_rows_columns_ofMatrix')

describe('Sum of rows and columns', function () {

    it('Should calculate the sum of rows', function () {
        let matrix = [[5, 6],
                      [7, 8]]

        let result = sumRowsColumnsMatrix.sumRowsMatrix(matrix)

        let sumRows = [11,15]

        expect(result).toEqual(sumRows)
    })

    it('Should calculate the sum of columns', function () {
        let matrix = [[5, 6],
                      [7, 8]]

        let result = sumRowsColumnsMatrix.sumColumnssMatrix(matrix)

        let sumColumns = [12, 14]

        expect(result).toEqual(sumColumns)
    })

    it('Should calculate the sum of columns', function () {
        let matrix = [[5, 6, 7],
                      [8, 9, 10],
                      [11, 12, 13]]

        let result = sumRowsColumnsMatrix.sumColumnssMatrix(matrix)

        let sumColumns = [24, 27, 30]

        expect(result).toEqual(sumColumns)
    })

})
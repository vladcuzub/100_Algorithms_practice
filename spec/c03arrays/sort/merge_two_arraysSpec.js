const mergeArrays = require('../../../src/c03arrays/sort/merge_two_arrays')

describe('Merge two arrays of the same size sorted in descending order.', function () {

    it('Should merge two arrays in descending order when same elements are found', function () {
        let firstArray = [1,2,3]
        let secondArray = [1,2,3]

        let result = mergeArrays(firstArray,secondArray)

        expect(result).toEqual([3,3,2,2,1,1])
    })

})
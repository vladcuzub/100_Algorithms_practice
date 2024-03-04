const mergeSort = require('../../src/c07sorting/merge_sort_algorithm')

describe('Merge sorting', function () {

    it('Should sort elements using merge sorting algorithm', function () {

        let array = [4, 2, 8, 7, 6]

        let result = mergeSort(array)

        expect(result).toEqual([2,4,6,7,8])
    })
})

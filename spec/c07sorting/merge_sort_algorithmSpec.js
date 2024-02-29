const mergeSort = require('../../src/c07sorting/merge_sort_algorithm')

describe('Merge sorting', function () {

    it('Shoult sort elements using merge sorting algorithm', function () {

        let array = [5, 2, 4, 3]

        let result = mergeSort(array)

        expect(result).toEqual([2, 3, 4, 5])
    })
})

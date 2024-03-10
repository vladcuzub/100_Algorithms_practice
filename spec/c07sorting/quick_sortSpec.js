const quickSort = require('../../src/c07sorting/quick_sort')

describe('quick sorting', function () {
    it('Should sort elements using quick sorting algorithm', function () {

        let array = [9, 6, 1, 8]

        let result = quickSort(array)

        expect(result).toEqual([1, 6, 8, 9])
    })
})

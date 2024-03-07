const binarySearch = require('../../src/c07sorting/binary_sort_algorithm')

describe('Binary sorting', function () {
    it('Shoult find the position of target with binary search', function () {

        let array = [9, 6, 1, 8, 10]
        let target = 3

        let result = binarySearch(array,target)

        expect(result).toBe([1])
    })
})

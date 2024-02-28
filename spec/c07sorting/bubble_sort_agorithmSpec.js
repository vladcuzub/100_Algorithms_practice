const bubbleSort = require('../../src/c07sorting/bubble_sort_agorithm')

describe('Bubble sorting', function () {

    it('Shoult sort elements using bubble sorting algorithm', function () {

        let array = [9,6,1,8]

        let result = bubbleSort(array)

        expect(result).toEqual([1,6,8,9])
    })
})

const sortElements = require('../../src/c07sorting/selection_sorting_algorithm')

describe('Sorting elements', function () {
    it('Shoult sort elements using selection sorting algorithm', function () {

        let array = [5,2,4,3]

        let result = sortElements(array)

        expect(result).toEqual([2,3,4,5])
    })
})

const findSecondSmallestElement = require('../../../src/c03arrays/search/find_smallest_element_in_array')

describe('Find the second smallest element', function () {

    it('Should return second smallest from array when is found', function () {
        let array = [1, 9, 2, 4]

        let result = findSecondSmallestElement(array)

        expect(result).toBe(2)
    })

})
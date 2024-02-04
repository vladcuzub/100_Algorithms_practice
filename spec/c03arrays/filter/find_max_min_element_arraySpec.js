const findMaxMinElement = require('../../../src/c03arrays/filter/find_max_min_element_array')

describe('Find the maximum and minimum elements', function () {

    it('Should find the largest element in the array', function () {
        let array = [45,25,21]

        let result = findMaxMinElement.findMaxElement(array)

        expect(result).toBe(45)
    })

    it('Should find the smalest element in the array', function () {
        let array = [45, 25, 21]

        let result = findMaxMinElement.findMinElement(array)

        expect(result).toBe(21)
    })
})
const findRepeatingElements = require('../../../src/c03arrays/search/find_repeating_elements')

describe('Find Repeating Elements', function () {

    it('Should find repeating elements from a array', function () {
        let array = [2, 7, 4, 7, 8, 3, 4]

        let result = findRepeatingElements(array)

        expect(result).toEqual([7, 4])
    })

})
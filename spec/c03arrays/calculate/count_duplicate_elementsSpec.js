const countDuplicateElements = require('../../../src/c03arrays/calculate/count_duplicate_elements')

describe('Count the total number of duplicate elements in an array.', function () {

    it('Should find and count duplicate elements in a array', function () {
        let array = [1, 2, 2]

        let result = countDuplicateElements(array)

        expect(result).toBe(1)
    })

})
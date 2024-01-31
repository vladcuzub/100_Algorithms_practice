const reverseElementsInArray = require('../../../src/c03arrays/filter/read_reverse_number')

describe('Reverse elements in a array.', function () {

    it('Should reverse each elements from right to left', function () {
        let elements = [1, 2, 3, 4]

        let result = reverseElementsInArray(elements)

        expect(result).toEqual([4, 3, 2, 1])
    })

})
const insertNewValueAtPosition = require('../../../src/c03arrays/generate/insert_value_and_position_in_array')

describe('Insert new value at specific position in Array', function () {

    it('Should be a new unsorted array when new value is added at specific position', function () {
        let array = [1, 4, 2, 5]
        let newValue = 8
        let position = 3

        let result = insertNewValueAtPosition(array, newValue, position)

        expect(result).toEqual([1,4, 8, 2, 5])
    })

})
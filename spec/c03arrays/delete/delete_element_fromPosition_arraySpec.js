const removeElementFromArray = require('../../../src/c03arrays/delete/delete_element_fromPosition_array')

describe('Delete an element at a desired position from an array ', function () {

    it('Should be a new array when a value is deleted at desired position', function () {
        let array = [1, 2, 3, 4]
        let position = 3

        let result = removeElementFromArray(array, position)

        expect(result).toEqual([1, 2, 4])
    })

})
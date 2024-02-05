const addNewElementToArray = require('../../../src/c03arrays/generate/insert_value_to_new_array')

describe('Insert new value in Array', function () {

    it('Should have a sorted array with new value when new value is added', function () {
        let array = [2,5,7,9]
        let newValue = 8

        let result = addNewElementToArray(array,newValue)

        expect(result).toEqual([2,5,7,8,9])
    })

})
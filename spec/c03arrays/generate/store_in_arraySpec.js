const storeElementsInArray = require('../../../src/c03arrays/generate/store_in_array')

describe('Store elements in an array and print them.', function () {

    it('Should store each elements in a array', function () {
        let elements = [1,2,3,4]

        let result = storeElementsInArray(elements)

        expect(result).toEqual([1,2,3,4])
    })

})
const findUniqueElementsInArray = require('../../../src/c03arrays/filter/print_unique_elements')

describe('Find unique elements in array', function () {

    it('Should find and print unique elements in an array', function () {
        let array = [1,2,2,3,]

        let result = findUniqueElementsInArray(array)

        expect(result).toEqual([1,3])
    })

})
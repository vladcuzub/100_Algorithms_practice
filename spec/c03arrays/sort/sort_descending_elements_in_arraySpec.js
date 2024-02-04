const sortElementsInArray = require('../../../src/c03arrays/sort/sort_descending_elements_in_array')

describe('Sort elements in descending order', function () {

    it('Should sort elements in descending order', function () {
        let array = [5,9,1,2]

        let result = sortElementsInArray(array)

        expect(result).toEqual([9,5,2,1])
    })

})
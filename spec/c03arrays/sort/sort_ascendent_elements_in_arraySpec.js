const sortElementsInArray = require('../../../src/c03arrays/sort/sort_ascendent_elements_in_array')

describe('Sort elements in ascending order', function () {

    it('Should sort elements in ascending order', function () {
        let array = [2,7,4,5,9]

        let result = sortElementsInArray(array)

        expect(result).toEqual([2,4,5,7,9])
    })

})
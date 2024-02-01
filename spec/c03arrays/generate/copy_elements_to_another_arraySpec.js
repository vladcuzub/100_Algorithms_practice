const copyElementsInAnotherArray = require('../../../src/c03arrays/generate/copy_elements_to_another_array')

describe('Copy the elements of one array into another array.', function () {

    it('Should store elements array in a new array', function () {
        let firstArray = [1,2,3]

        let result = copyElementsInAnotherArray(firstArray)

        expect(result).toEqual([1,2,3])
    })

})
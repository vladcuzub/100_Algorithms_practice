const findSecondLargestElementInArray = require('../../../src/c03arrays/search/find_second_largest_element_in_array')

describe('Find the second largest element', function () {

    it('Should return two the second largest element from array when is found', function () {
        let array = [2,9,1,4]
     
        let result = findSecondLargestElementInArray(array)

        expect(result).toBe(4)
    })

})
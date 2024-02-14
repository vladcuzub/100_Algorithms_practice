const findPair = require('../../../src/c04matrices/search/find_pair_with_given_sum_in_array')

describe('Find the pair of a given sum.', function () {

    it('Should find the pair of a given sum for array', function () {
        let array = [6,8,4,-5,7,9]
        let sum = 15

        let result = findPair(array,sum)

        expect(result).toEqual([0,5])
    })

})
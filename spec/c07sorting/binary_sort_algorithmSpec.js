const findPositionTarget = require('../../src/c07sorting/binary_sort_algorithm')

describe('Binary sorting', function () {
    it('Should find the position of target using  binary search', function () {

        let array = [1,2,4,6,10]
        let target = 6

        let result = findPositionTarget(array, target)

        expect(result).toBe(3)
        
    })
})

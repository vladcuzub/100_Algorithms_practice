const calculateElements = require('../../../src/c03arrays/calculate/sum_elemnts_array')

describe('Sum of all elements of the array', function () {

    it('must calculate the sum of the elements ', function () {
        let arrayElements = [1,2,3]

        let result = calculateElements(arrayElements)

        expect(result).toBe(6)
    })

})
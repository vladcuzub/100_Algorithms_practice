const displayFirst10Numbers = require('../../../src/c03arrays/generate/display_first_10_numbers')

describe('Display the first 10 natural numbers', function () {

    it('The numbers should start from 1 to 10', function () {
        let result = displayFirst10Numbers()

        expect(result).toEqual([1,2,3,4,5,6,7,8,9,10])
    })
    

})
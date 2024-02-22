const printNaturalNumbers = require('../../../src/c05recursion/generate/print_50_natural_nr_recursion')

describe('20 natural printNaturalNumbers', function () {

    it('Should print 20 natural numbers using recursion ', function () {
        let limit = 20
        let number = 1

        let result = printNaturalNumbers(number,limit)

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })

})
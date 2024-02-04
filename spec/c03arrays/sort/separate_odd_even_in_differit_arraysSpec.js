const filterEvenOrOddElements = require('../../../src/c03arrays/sort/separate_odd_even_in_differit_arrays')

describe('Separate odds and even element in different arrays', function () {

    it('Should separate odds and put them in a new array', function () {
        let array = [25, 47, 42, 56, 32]

        let result = filterEvenOrOddElements.filterOddElements(array)

        expect(result).toEqual([25, 47])
    })

    it('Should separate even and put them in a new array', function () {
        let array = [25, 47, 42, 56, 32]

        let result = filterEvenOrOddElements.filterEvenElements(array)

        expect(result).toEqual([42, 56, 32])
    })

})
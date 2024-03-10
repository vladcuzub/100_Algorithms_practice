const insertionSorting = require('../../src/c07sorting/insertion_sorting_algorithm')

describe('Insertion sorting', function () {
    it('Should sort elements using insertion sorting algorithm', function () {

        let array = [4, 6, 5, 2, 1]

        let result = insertionSorting(array)

        expect(result).toEqual([1, 2, 4, 5, 6])
    })
})

const chunkyArrayInGroups = require('../../src/c08challenges/chunck_monkey')

describe('Chuncky monkey', function () {
    it('Should split an array into groups the length of size and return them is two dimensional array', function () {

        let arr = ["a", "b", "c", "d"]
        let size = 2

        let result = chunkyArrayInGroups(arr,size)

        expect(result).toEqual([["a", "b"], ["c", "d"]])
    })

    it('Should split an array into groups the length of size and return them is two dimensional array', function () {

        let arr = [0, 1, 2, 3, 4, 5]
        let size = 3

        let result = chunkyArrayInGroups(arr, size)

        expect(result).toEqual([[0, 1, 2], [3, 4, 5]])
    })

    it('Should split an array into groups the length of size and return them is two dimensional array', function () {

        let arr = [0, 1, 2, 3, 4, 5, 6]
        let size = 3

        let result = chunkyArrayInGroups(arr, size)

        expect(result).toEqual([[0, 1, 2], [3, 4, 5], [6]])
    })
})
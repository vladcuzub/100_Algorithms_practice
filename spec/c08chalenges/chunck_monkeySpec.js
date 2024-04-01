const chunkyArrayInGroups = require('../../src/c08challenges/chunck_monkey')

describe('Chuncky monkey', function () {
    it('Should return a 2d array when the array is splited into 2 groups', function () {

        let arr = ["a", "b", "c", "d"]
        let size = 2

        let result = chunkyArrayInGroups(arr,size)

        expect(result).toEqual([["a", "b"], ["c", "d"]])
    })

    it('Should return a 2d array when the array is splited  2 groups', function () {

        let arr = [0, 1, 2, 3, 4, 5]
        let size = 3

        let result = chunkyArrayInGroups(arr, size)

        expect(result).toEqual([[0, 1, 2], [3, 4, 5]])
    })

    it('Should return a 2d array when the array is splited into 3', function () {

        let arr = [0, 1, 2, 3, 4, 5, 6]
        let size = 3

        let result = chunkyArrayInGroups(arr, size)

        expect(result).toEqual([[0, 1, 2], [3, 4, 5], [6]])
    })
})
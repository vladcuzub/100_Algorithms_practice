const chunkyArrayInGroups = require('../../src/c08challenges/chunck_monkey')

describe('Chuncky monkey', function () {
    it('Should split an array into groups the length of size and return them is two dimensional array', function () {

        let arr = ["a", "b", "c", "d"]
        let size = 2

        let result = chunkyArrayInGroups(arr,size)

        expect(result).toEqual([["a", "b"], ["c", "d"]])
    })
})
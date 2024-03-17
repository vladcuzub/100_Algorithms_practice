const findLengthSubsting = require('../../../src/c02controlflow/search/find_length_substring')
describe('Find length of substring', function () {

    it('Should find the length of the longest substring of a given string without repeating characters.', function () {

        let string = 'Microsoft'

        let result = findLengthSubsting(string)

        expect(result).toBe(6)
    })

    it('Should find the length of the longest substring of a given string without repeating characters.', function () {

        let string = 'pppp'

        let result = findLengthSubsting(string)

        expect(result).toBe(1)
    })

    it('Should find the length of the longest substring of a given string without repeating characters.', function () {

        let string = 'xyzxyzyy'

        let result = findLengthSubsting(string)

        expect(result).toBe(3)
    })

    it('Should find the length of the longest substring of a given string without repeating characters.', function () {

        let string = 'pickoutthelongestsubstring'

        let result = findLengthSubsting(string)

        expect(result).toBe(8)
    })

})
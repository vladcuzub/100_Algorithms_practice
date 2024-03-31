const missingLetters = require('../../src/c08challenges/missing_letters')

describe('Missing letters', function () {
    it('Should return the letter that is missing', function () {

        let letters = 'abce'

        let result = missingLetters(letters)

        expect(result).toBe('d')
    })

    it('Should return undefined when all letters are present', function () {

        let letters = 'abcdefghijklmnopqrstuvwxyz'

        let result = missingLetters(letters)

        expect(result).toBe(undefined)
    })
})
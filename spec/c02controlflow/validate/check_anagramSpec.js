const checkAnagram = require('../../../src/c02controlflow/validate/check_anagram')
describe('Checks anagram', function () {

    it('Should check if two given strings are anagram', function () {
        let firstWord = 'listen'
        let secondWord = 'silent'

        let result = checkAnagram(firstWord,secondWord)

        expect(result).toBe(true)
    })

    it('Should check if two given strings are anagram', function () {
        let firstWord = 'listen'
        let secondWord = 'asdadsadfgd'

        let result = checkAnagram(firstWord, secondWord)

        expect(result).toBe(false)
    })
   

})
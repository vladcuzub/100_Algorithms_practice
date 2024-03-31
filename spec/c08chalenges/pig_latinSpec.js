const translatePigLatin = require('../../src/c08challenges/pig_latin')

describe('Pig latin', function () {
    it('Should return a word with ay and first letter at end when the word begin with a consonant', function () {

        let word = 'california'

        let result = translatePigLatin(word)

        expect(result).toBe('aliforniacay')
    })
    it('Should return a word with way  at end when the word begin with a vowel', function () {

        let word = 'algorithm'

        let result = translatePigLatin(word)

        expect(result).toBe('algorithmway')
    })

})
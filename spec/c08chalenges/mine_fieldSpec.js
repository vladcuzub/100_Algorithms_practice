const mineFeld = require('../../src/c08challenges/mine_field')

describe('Mine field', function () {
    it('Should produce as output a hint-field of identical dimensions where each square is a * for a mine or the number of adjacent mine-squares if the square does not contain a mine', function () {

        let input = ['*...',
            '..*.',
            '....']

        let result = mineFeld(input)

        let hintField = [['*', 2, 1, 1],
        [1, 2, '*', 1],
        [0, 1, 1, 1]]

        expect(result).toEqual(hintField)
    })
})
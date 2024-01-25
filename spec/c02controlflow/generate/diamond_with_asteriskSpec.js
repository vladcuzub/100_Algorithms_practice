const patternDiamond = require('../../../src/c02controlflow/generate/diamond_with_asterisk')

describe('Display a pattern like a diamond.', function () {

    it(' Should repeat * in ascending and descending order in each row so as to form a diamond', function () {
        let height = 3

        let result = patternDiamond(height)

        const diamond ='  *\n' +
            ' ***\n' +
            '*****\n' +
            ' ***\n' +
            '  *\n'
            
        expect(result).toBe(diamond)
    })

})



// this is a Test for new Branch
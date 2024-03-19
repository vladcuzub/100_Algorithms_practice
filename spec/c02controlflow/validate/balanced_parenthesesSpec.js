const balancedParentheses = require('../../../src/c02controlflow/validate/balanced_parentheses')
describe('Balances parentheses', function () {

    it('Should check if string are balanced or not', function () {
   
        let str = '{{)(}}'

        let result = balancedParentheses(str)

        expect(result).toBe(false)
    })
})
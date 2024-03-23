const balancedParentheses = require('../../../src/c02controlflow/validate/balanced_parentheses')
describe('Balances parentheses', function () {

    it('Should return false when string are not balanced', function () {
   
        let str = '{{)(}}'

        let result = balancedParentheses(str)

        expect(result).toBe(false)
    })
    it('Should return false when string are not balanced', function () {

        let str = "({)}"

        let result = balancedParentheses(str)

        expect(result).toBe(false)
    })
    it('Should return true when string are balanced', function () {

        let str = "[({})]"

        let result = balancedParentheses(str)

        expect(result).toBe(true)
    })
    it('Should return true when string are balanced', function () {

        let str = "{}([])"

        let result = balancedParentheses(str)

        expect(result).toBe(true)
    })
})
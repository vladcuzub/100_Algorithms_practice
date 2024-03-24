const balancedParentheses = require('../../src/c08challenges/balanced_parentheses')
describe('Balances parentheses', function () {

    it('Should return false when parenthesesing are not balanced', function () {

        let parentheses = '{{)(}}'

        let result = balancedParentheses(parentheses)

        expect(result).toBe(false)
    })
    it('Should return false when parenthesesing are not balanced', function () {

        let parentheses = "({)}"

        let result = balancedParentheses(parentheses)

        expect(result).toBe(false)
    })
    it('Should return true when parenthesesing are balanced', function () {

        let parentheses = "[({})]"

        let result = balancedParentheses(parentheses)

        expect(result).toBe(true)
    })
    it('Should return true when parenthesesing are balanced', function () {

        let parentheses = "{}([])"

        let result = balancedParentheses(parentheses)

        expect(result).toBe(true)
    })
})
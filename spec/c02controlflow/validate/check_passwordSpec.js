const checkPassword = require('../../../src/c02controlflow/validate/check_password')

describe('Check if the password is correct or incorrect', function () {

    it('Should check if password is correct and return Password is correct', function () {
        let userInput = 1234
        let password = 1234

        let result = checkPassword(userInput,password)

        expect(result).toBe('Password is correct')
    })
    it('Should check if password is incorrect and return Password is incorrect', function () {
        let userInput = 1234
        let password = 22234

        let result = checkPassword(userInput, password)

        expect(result).toBe('Password is incorrect')
    })

})
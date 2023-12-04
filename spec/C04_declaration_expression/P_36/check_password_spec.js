describe('check_password', function () {
    it('Password is incorect', function () {
        //input
        let userInput = "1111"
        let password = "2222"

        //algoritm call
        let result = isPasswordCorrect(userInput, password);

        //use output
        expect(result).toBe('Incorrect password')
    })

    it('Password is correct', function () {
        let userInput = "1111"
        let password = "1111"

        let result = isPasswordCorrect(userInput, password);

        expect(result).toBe('Correct password')
    })


})
describe('Find maximum of three numbers', function () {

    it('compare the first number with the second and third', function () {
        let firstNumber = 1;
        let secondNumber = 2;
        let thirdNumber = 3;

        let maxNumber = findMaxNumber(firstNumber, secondNumber, thirdNumber)

        expect(maxNumber).toBe(3)
    })

})
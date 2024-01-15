describe('Find maximum of three numbers', function () {

    it('compare the first number with the second and third', function () {
        let firstNumber = 1;
        let secondNumber = 2;
        let thirdNumber = 3;

        let maxNumber = findMaxNumber(firstNumber, secondNumber, thirdNumber)

        expect(maxNumber).toBe(3)
    })

    it('should return first number if first number is max', function () {
        let firstNumber = 4;
        let secondNumber = 2;
        let thirdNumber = 3;

        let maxNumber = findMaxNumber(firstNumber, secondNumber, thirdNumber)

        expect(maxNumber).toBe(4)
    })

    it('should return second number if second number is max', function () {
        let firstNumber = 4;
        let secondNumber = 5;
        let thirdNumber = 3;

        let maxNumber = findMaxNumber(firstNumber, secondNumber, thirdNumber)

        expect(maxNumber).toBe(5)
    })

    it('should return third number if third number is max', function () {
        let firstNumber = 4;
        let secondNumber = 5;
        let thirdNumber = 6;

        let maxNumber = findMaxNumber(firstNumber, secondNumber, thirdNumber)

        expect(maxNumber).toBe(6)
    })

})
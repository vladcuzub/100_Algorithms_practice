describe('Calculate product of two integers', function () {

    it('The product is the result of multiplication of two numbers', function () {
        let firstNumber = 25;
        let secondNumber = 15;

        let productResult = productOfNumbers(firstNumber, secondNumber)

        expect(productResult).toBe(375)
    })

})
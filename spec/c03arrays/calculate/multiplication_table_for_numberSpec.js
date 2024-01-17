describe('Display the multiplication table for a given integer', function () {

    it('the input number should multiplay with each number from loop', function () {
        let inputNumber = 15

        let result = multiplicationTable(inputNumber)

        expect(result).toBe('15 30 45 60 75 90 105 120 135 150 ')
    })

})
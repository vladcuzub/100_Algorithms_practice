describe('Counts the number of positive numbers and negative numbers', function () {

    it(' Should count positive numbers', function () {
        let numbers = [5, -4, 10, 15, -1]

        let result = countPositivNumbers(numbers)

        expect(result).toBe(3)
    })


    it('Should count negative numbers', function () {
        let numbers = [5, -4, 10, 15, -1]

        let result = countNegativeNumbers(numbers)

        expect(result).toBe(2)
    })

})
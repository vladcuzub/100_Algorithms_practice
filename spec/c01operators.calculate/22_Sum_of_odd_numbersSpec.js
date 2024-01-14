describe('Calculate sums all odd values between them', function () {

    it('should find the odds numbers and adding them', function () {
        let numbers = [11, 17, 13, 12, 5];
       

        let result = calculateSumOddsNumbers(numbers)

        expect(result).toBe(46)
    })

})
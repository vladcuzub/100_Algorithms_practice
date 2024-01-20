describe('Display a pattern like a right angle triangle using an asterisk', function () {

    it('Should find the odds numbers from n terms', function () {
        let inputNumber = 10

        let result = findOddNumbers(inputNumber)

        const oddsNumbers = '1 3 5 7 9 11 13 15 17 19 '

        expect(result).toBe(oddsNumbers)
    })

    it('Should add all the numbers and give the sum', function () {
        const oddsNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

        let result = sumOdds(oddsNumbers)

        expect(result).toBe(100)
    })

})
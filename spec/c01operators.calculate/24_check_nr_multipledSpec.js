describe('Checks whether they are multiplied or not', function () {

    it('The division result should not give a remainder', function () {
        let x = 15;
        let y = 5

        let result = multipledNumber(x,y)

        expect(result).toBe('Multiplied!')
    })

})
describe('Display n terms of natural numbers and their sum.', function () {

    it('should input a n term and adding them', function () {
        let nTermns = 7

        let result = displayNtermsandTheirSum(nTermns)

        expect(result).toBe(28)
    })
})
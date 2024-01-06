describe('mathFunctions', function () {

    describe('sum', function () {
        it('should compute sum of two numbers', function () {
            let a = 6;
            let b = 7;

            let result = sum(a, b)
            expect(result).toBe(13)
        })
    })

})
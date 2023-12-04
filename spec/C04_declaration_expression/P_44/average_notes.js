describe('average notes', function () {
    it('no notes should average to 0', function () {
        //input
        let marks = [];

        //algoritm call
        let result = calculateAverage(marks);

        //use output
        expect(result).toBe(0)
    })

    it('one note should average to itself', function () {
        //input
        let marks = ["5"];

        //algoritm call
        let result = calculateAverage(marks);

        //use output
        expect(result).toBe(5)
    })

})
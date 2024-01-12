describe('Calculate distance of two points', function () {

    it('compare the first number with the second and third', function () {
        let x1 = 25;
        let y1 = 15;

        let x2 = 35;
        let y2 = 10;

        let resultDistanceOfTwoPoints = distanceOfTwoPoints(x1,y1,x2,y2)

        expect(resultDistanceOfTwoPoints).toBe(11.1803)
    })

})
describe('Calculate distance of two points', function () {

    it('distance of two points is the sum of squard diferences of x and y', function () {
        let x1 = 25;
        let y1 = 15;

        let x2 = 35;
        let y2 = 10;

        let resultDistanceOfTwoPoints = distanceOfTwoPoints(x1,y1,x2,y2)

        expect(resultDistanceOfTwoPoints).toBe(11.1803)
    })

})
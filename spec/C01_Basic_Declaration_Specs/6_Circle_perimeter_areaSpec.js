describe('Compute the perimeter and area of a circle with a given radius.', function () {

    it('Perimeter is pi twice multiplied with radius', function () {
        let radius = 6;
        let pi = 3.14;

        let perimeterResult = perimeterOfCircle(radius)

        expect(perimeterResult).toBe(37.68)
    })

    it('Area is pi times radius squared', function () {
        let radius = 6;
        let pi = 3.14;

        let areaResult = areaOfCircle(radius)

        expect(areaResult).toBe(113.04)
    })
})
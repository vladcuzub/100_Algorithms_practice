describe('Calculate Rectangle Area and Perimeter', function () {

    it('Area is height times width', function () {
        let height = 7;
        let width = 5;

        let area = areaRectangle(height, width)

        expect(area).toBe(35)
    })

    it('Perimeter is sum of edges', function () {
        let height = 7;
        let width = 5;

        let perimeter = perimeterRectangle(height, width)

        expect(perimeter).toBe(24)
    })
})
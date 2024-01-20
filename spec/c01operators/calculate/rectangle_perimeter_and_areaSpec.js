const reactangleAndPerimeter = require('../../../src/c01operators/calculate/rectangle_perimeter_area_calculate')


describe('Calculate Rectangle Area and Perimeter', function () {

    it('Area is height times width', function () {
        let height = 7;
        let width = 5;

        let area = reactangleAndPerimeter.areaRectangle(height, width)

        expect(area).toBe(35)
    })

    it('Perimeter is sum of edges', function () {
        let height = 7;
        let width = 5;

        let perimeter = reactangleAndPerimeter.perimeterRectangle(height, width)

        expect(perimeter).toBe(24)
    })
})
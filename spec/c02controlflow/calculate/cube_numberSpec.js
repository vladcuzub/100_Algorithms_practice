const cubeOfNumber = require('../../../src/c02controlflow/calculate/cube_number')

describe('Display the cube of the number up to an integer', function () {

    it('the cube should be the multiplication three time of 1', function () {
        let inputNumbers = 1

        let result = cubeOfNumber(inputNumbers)

        expect(result).toBe(1)
    })

    it('the cube should be the multiplication three time of 2', function () {
        let inputNumbers = 2

        let result = cubeOfNumber(inputNumbers)

        expect(result).toBe(8)
    })

    it('the cube should be the multiplication three time of 3', function () {
        let inputNumbers = 3

        let result = cubeOfNumber(inputNumbers)

        expect(result).toBe(27)
    })

    it('the cube should be the multiplication three time of 4', function () {
        let inputNumbers = 4

        let result = cubeOfNumber(inputNumbers)

        expect(result).toBe(64)
    })

    it('the cube should be the multiplication three time of 5', function () {
        let inputNumbers = 5

        let result = cubeOfNumber(inputNumbers)

        expect(result).toBe(125)
    })
})
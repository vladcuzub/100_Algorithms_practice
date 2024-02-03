const checkFrequnecyElements = require('../../../src/c03arrays/calculate/count_frequency_each_element')

describe('CountFrequency', function () {

    it('Should countfrequency be 1 when 3 elements in array are different', function () {
        let arrayElements = [25, 12, 43]

        let result = checkFrequnecyElements(arrayElements)
       
        expect(result).toEqual([1,1,1])
    })

    it('Should countfrequency be 2 when 2 elements in array are the same ', function () {
        let arrayElements = [12, 12]

        let result = checkFrequnecyElements(arrayElements)

        expect(result).toEqual([2, 2])
    })

    it('Should countfrequency be 2 for same elements and 1 for different elements in array ', function () {
        let arrayElements = [30,12,25,12]

        let result = checkFrequnecyElements(arrayElements)

        expect(result).toEqual([1,2,1,2])
    })

})
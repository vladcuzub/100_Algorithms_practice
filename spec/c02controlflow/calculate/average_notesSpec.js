const calculateAverage = require('../../../src/c02controlflow/calculate/average_notes')

describe('Calculate the average mathematics marks of some students', function () {

    it('Should calculate the average mathematics marks adding the marks and dividing them by the number of grades', function () {
        let marks = [15,10,25]
        
        let result = calculateAverage(marks)

        expect(result).toBe(16.67)
    })
    
})
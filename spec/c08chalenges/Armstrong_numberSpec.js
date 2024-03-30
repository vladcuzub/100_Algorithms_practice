const armstrongNumber = require('../../src/c08challenges/Armstrong_number')

describe('Armstrong Number', function () {
    it('Should find the Armstong number wich is equal to the sum of its digits raised to the power of total numbers of digits', function () {

        let number = 153

        let result = armstrongNumber(number)

        expect(result).toBe(true)
    })
   

})
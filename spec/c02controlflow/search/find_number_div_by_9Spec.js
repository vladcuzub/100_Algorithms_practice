const sumOfDivisibleNumbers = require('../../../src/c02controlflow/search/find_number_div_by_9')
describe('find the number and sum of all integers between 100 and 200 which are divisible by 9', function () {

    it('Should iterate the numbers from 100 to 200 and find which are divisible to 9', function () {
        let number = 9

        let result = sumOfDivisibleNumbers.numberDivisible(number)

        const resultOfDivisible = [108,117,126,135,144,153,162,171,180,189,198]

        expect(result).toEqual(resultOfDivisible)
    })
    
    it('Should calculate sum of divisible numbers', function () {
        let numbersDivisible = [108, 117, 126, 135, 144, 153, 162, 171, 180, 189, 198]

        let result = sumOfDivisibleNumbers.sumOfNumbers(numbersDivisible)

        expect(result).toBe(1683)
    })

})
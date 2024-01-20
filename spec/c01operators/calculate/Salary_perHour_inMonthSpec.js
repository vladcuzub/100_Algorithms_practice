const salaryPerMonth = require('../../../src/c01operators/calculate/Salary_perHour_inMonth')

describe('Calculate Salary after total worked hours in a month and the amount he received per hour', function () {

    it('Salary per month is multiplication of Worked hours with salary per hour', function () {
        let workedHours = 8;
        let salaryPerHour = 15000;

        let salaryResult = salaryPerMonth( workedHours, salaryPerHour)

        expect(salaryResult).toBe(120000.00)
    })

})
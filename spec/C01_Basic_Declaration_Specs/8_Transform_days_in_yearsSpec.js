describe('Convert specified days into years, weeks and days without leap year.', function () {

    it('Years are equal with inputDays divided to 365', function () {
        let inputDays = 1329;
   
        let yearsResult = calculateYears(inputDays)
       
        expect(yearsResult).toBe(3.6)
    })


    it('Weeks are the reminder from inputDays and 365 divided to a week', function () {
        let inputDays = 1329;

        let weeksResult = calculateWeeks(inputDays)

        expect(weeksResult).toBe(33)
    })


    it('RestDays is subtracting the total days accounted for by years and weeks from the total inputDays', function () {
        let inputDays = 1329;
        let weeksResult = 33
        let yearsResult = 3.6


        let restDays = calculateRestDays(inputDays, weeksResult, yearsResult)

        expect(restDays).toBe(3)
    })
    
})
describe('insertNewValueAtPosition', function () {
    it('insert new value in empty array', function () {
        let myArray = [];
        let newValue = 5
        let positionWhereNewValueToBeInserted = 1
         
        let result = insertNewValueAtPosition(myArray, newValue, positionWhereNewValueToBeInserted)

        expect(result).toEqual([5])
    })

    it('insert new value at not empty position in array', function () {
        let myArray = [3];
        let newValue = 5
        let positionWhereNewValueToBeInserted = 1

        let result = insertNewValueAtPosition(myArray, newValue, positionWhereNewValueToBeInserted)

        expect(result).toEqual([5,3])
    })
})

// imi trebuie  un array nou cu 2 cutii
// valuarea primei cutii sa o punem in cutia 2 din noul array 
// elementul nou il pun in prima cutie din noul array 

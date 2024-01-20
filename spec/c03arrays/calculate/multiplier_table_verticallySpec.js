const multiplierTable = require('../../../src/c03arrays/calculate/multiplier_table_vertically')

describe('Display the multiplier table vertically from 1 to n', function () {

    it('Should generate a vertical multiplication table up to the specified number', function () {
        let inputNumber = 3

        let result = multiplierTable(inputNumber)
        const output = `1x1 = 1,2x1 = 2,3x1 = 3,
1x2 = 2,2x2 = 4,3x2 = 6,
1x3 = 3,2x3 = 6,3x3 = 9,
1x4 = 4,2x4 = 8,3x4 = 12,
1x5 = 5,2x5 = 10,3x5 = 15,
1x6 = 6,2x6 = 12,3x6 = 18,
1x7 = 7,2x7 = 14,3x7 = 21,
1x8 = 8,2x8 = 16,3x8 = 24,
1x9 = 9,2x9 = 18,3x9 = 27,
1x10 = 10,2x10 = 20,3x10 = 30,
`;
        expect(result).toBe(output)
    })

})
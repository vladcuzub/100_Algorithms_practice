/* Write a program to convert a decimal number to a binary number using the function.
Test Data :
Input any decimal number : 65
Expected Output :

 The Binary value is : 1000001 */

function convertDecimalToBinary(decimalNumber) {

    if (decimalNumber == 0) {
        return 0
    }

    let binary = 0
    let place = 1

    while (decimalNumber != 0) {
        let reminder = decimalNumber % 2

        binary += reminder * place
        place *= 10

        decimalNumber = Math.floor(decimalNumber / 2)
    }
    
    return binary
}
module.exports = convertDecimalToBinary 
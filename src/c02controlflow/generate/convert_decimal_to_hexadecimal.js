/* Write a program to convert a decimal number to hexadecimal.*/

function convertDecimalToHexadecimal(decimalNumber) {

    let hexadecimalNumber = ''
    const hexChars = '0123456789abcdef'

    while (decimalNumber != 0) {

        let reminder = decimalNumber % 16

        let hexDigit = hexChars[reminder]

        hexadecimalNumber = hexDigit + hexadecimalNumber

        decimalNumber = Math.floor(decimalNumber / 16)
    }

    return hexadecimalNumber
    
}

module.exports = convertDecimalToHexadecimal


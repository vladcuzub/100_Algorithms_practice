/* Write a program to convert a decimal number to octal.*/


function decimalToOctal(decimalNumber) {
    let octalNumber = 0
    let digitalPosition = 1

    while (decimalNumber != 0) {
        let reminder = decimalNumber % 8
        octalNumber += reminder * digitalPosition
        digitalPosition *= 10
        decimalNumber = Math.floor(decimalNumber / 8)

    }
    return octalNumber
    
}

module.exports = decimalToOctal
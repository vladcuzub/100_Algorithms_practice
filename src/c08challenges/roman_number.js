/* Roman Numeral Converter
Convert the given number into a roman numeral.
Exemples: - convertToRoman(16) should return the string XVI.
          - convertToRoman(12) should return the string XII.
           -convertToRoman(1023) should return the string MXXIII*/

function convertToRoman(number) {
    var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = ''

    for (let i = 0; i < romanValues.length; i++) {
        while (romanValues[i] <= number) {
            result += romanNumerals[i]
            number -= romanValues[i]
        }
    }
    return result
}

module.exports = convertToRoman
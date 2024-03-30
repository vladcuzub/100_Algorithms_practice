/* An Armstrong number is a whole number that’s equal to the sum of its digits raised to the power of
 the total number of digits.
 For example, 153 is an Armstrong number because there are three digits, and  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.*/
function armstrongNumber(number) {
   
    let numberDigits = 0;
    let temp = number
    let sum = 0;

    while(temp > 0){
        temp = Math.floor(temp / 10);
        numberDigits++
        console.log(numberDigits)
    }
    temp = number

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, numberDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === number;




}

console.log(armstrongNumber(153))
 module.exports = armstrongNumber
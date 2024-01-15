// Write a program that reads 5 numbers and counts the number of positive numbers and negative numbers.
// Test Data :
// Input the first number: 5
// Input the second number: -4
// Input the third number: 10
// Input the fourth number: 15
// Input the fifth number: -1
// Expected Output:
// Number of positive numbers: 3
// Number of negative numbers: 2


function countPositivNumbers(numbers) {
    let positiveNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers++;
        }
    }
    return positiveNumbers
}

function countNegativeNumbers(numbers) {
    let negativeNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers++;
        }
    }
    return negativeNumbers
}
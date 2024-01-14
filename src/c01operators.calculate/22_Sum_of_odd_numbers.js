// Write a C program that reads 5 numbers and sums all odd values between them.
// Test Data :
// Input the first number: 11
// Input the second number: 17
// Input the third number: 13
// Input the fourth number: 12
// Input the fifth number: 5
// Expected Output:
// Sum of all odd values: 46


function calculateSumOddsNumbers(numbers) {
let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      sum += numbers[i];
    }
  }

  return sum;
}

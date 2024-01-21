// Write a program to calculate the factorial of a given number.
// Test Data :
// Input the number : 5
// Expected Output :
// The Factorial of 5 is: 120

function calculateFactorialNumber(number) {
  let factorialNumber = 1;

  for (let i = 1; i <= number; i++) {
    factorialNumber *= i
  }
  return factorialNumber
}

module.exports = calculateFactorialNumber

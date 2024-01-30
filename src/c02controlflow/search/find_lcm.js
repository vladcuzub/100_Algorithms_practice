// Write a program to find the LCM of any two numbers using HCF.
// Test Data :
// Input 1st number for LCM: 15
// Input 2nd number for LCM: 20
// Expected Output :
// The LCM of 15 and 20 is : 60

function lowCommonMultiple(firstNumber, secondNumber) {
  let hcf
  let lcm
  let smallNumber = firstNumber < secondNumber ? firstNumber : secondNumber

  for (let i = 1; i <= smallNumber; i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      hcf = i
    }
  }

  lcm = (firstNumber * secondNumber) / hcf
  return lcm
}

module.exports = lowCommonMultiple

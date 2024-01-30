// Write a program to find the HCF (Highest Common Factor) of two numbers.
// Test Data :
// Input 1st number for HCF: 24
// Input 2nd number for HCF: 28
// Expected Output :
// HCF of 24 and 28 is : 4


function highestCommonFactor(firstNumber, secondNumber){
  let hcf;
  let smallNumber = firstNumber < secondNumber ? firstNumber : secondNumber;

  for (let i = 1; i <= smallNumber; i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      hcf = i
    }
  }
  return hcf
}

module.exports = highestCommonFactor
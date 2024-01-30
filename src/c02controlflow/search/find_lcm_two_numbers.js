// Write a program to find the LCM of any two numbers.
// Test Data :
// Input 1st number for LCM: 15
// Input 2nd number for LCM: 20
// Expected Output :
// The LCM of 15 and 20 is : 60

function lcmNumber(firstNumber, secondNumber) {
  let hightNumber = firstNumber < secondNumber ? secondNumber : firstNumber;
  let lcm = 0
  while (true) {
    if (hightNumber % firstNumber === 0 && hightNumber % secondNumber === 0) {
      return hightNumber
    }
    hightNumber++
  }
  return lcm
}

module.exports = lcmNumber


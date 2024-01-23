// Write a program to check whether a given number is a 'Perfect' number or not.
// Test Data :
// Input the number : 56
// Expected Output :
// The positive divisor : 1 2 4 7 8 14 28
// The sum of the divisor is : 64
// So, the number is not perfect.

function findDivisorNumbers(number) {
  let divisorsNumbers = [];

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divisorsNumbers[divisorsNumbers.length] = i;
    }
  }
  return divisorsNumbers;
}


function sumOfDivisors(divisorsNumbers) {
  let sum = 0;

  for (let i = 0; i < divisorsNumbers.length; i++) {
    sum += divisorsNumbers[i];
  }
  return sum
}


function checkPerfectNumber (sum,number){
  if (sum === number) {
    return true
  } else {
    return false
  }
}

module.exports.findDivisorNumbers = findDivisorNumbers
module.exports.sumOfDivisors = sumOfDivisors
module.exports.checkPerfectNumber = checkPerfectNumber




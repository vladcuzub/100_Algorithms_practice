// Write a program to display n terms of natural numbers and their sum.
// Test Data : 7
// Expected Output :
// The first 7 natural number is :
// 1 2 3 4 5 6 7
// The Sum of Natural Number upto 7 terms : 28

function displayNtermsandTheirSum(nTerms) {
  let sum = 0;

  for (let i = 1; i <= nTerms; i++) {
    sum += i;
  }
  return sum
}


module.exports = displayNtermsandTheirSum
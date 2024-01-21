// Write a program to display the sum of n terms of even natural numbers.
// Test Data :
// Input number of terms : 5
// Expected Output :
// The even numbers are :2 4 6 8 10
// The Sum of even Natural Number upto 5 terms : 30

function findEvenNumbers(number) {
  let evenNumbers = ''

  for (let i = 1; i <= number; i++) {
    let even = i * 2 + ' '
    evenNumbers += even;
  }
  return evenNumbers.trim()
}

function sumEvenNumbers(evenNumbers) {
  let numbersArray = evenNumbers.split(' ');
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    sum += parseInt(numbersArray[i]);
  }

  return sum;
}


module.exports.findEvenNumbers = findEvenNumbers
module.exports.sumEvenNumbers = sumEvenNumbers


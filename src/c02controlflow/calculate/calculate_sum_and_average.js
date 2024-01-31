// Write a program to read 10 numbers from the keyboard and find their sum and average.
// Test Data :
// Input the 10 numbers :
// Number-1 :2
// ...
// Number-10 :2
// Expected Output :
// The sum of 10 no is : 55
// The Average is : 5.500000


function calculateSum(inputNumbers) {
  let sum = 0;

  for (let i = 1; i <= inputNumbers; i++) {
    sum += i
  }
  return sum
}


function calculateAverage(sum, inputNumbers) {
  let average = sum / inputNumbers
  
  return average
}

module.exports.calculateSum = calculateSum
module.exports.calculateAverage = calculateAverage
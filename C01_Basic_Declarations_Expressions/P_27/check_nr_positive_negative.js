// Write a C program that reads 5 numbers and counts the number of positive numbers and negative numbers.
// Test Data :
// Input the first number: 5
// Input the second number: -4
// Input the third number: 10
// Input the fourth number: 15
// Input the fifth number: -1
// Expected Output:
// Number of positive numbers: 3
// Number of negative numbers: 2

let positiveNr = 0
let negativeNr = 0

for (i = 0; i < 5; i++) {
  let inputNr = parseInt(prompt('Input a number:'))
  if (inputNr > 0) {
    positiveNr++
  } else if (inputNr < 0) {
    negativeNr++
  }
}
console.log(`Sum of positive numbers: ${positiveNr}`)
console.log(`Sum of negative numbers: ${negativeNr}`)

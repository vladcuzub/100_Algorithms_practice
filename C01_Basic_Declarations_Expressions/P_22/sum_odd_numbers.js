// Write a C program that reads 5 numbers and sums all odd values between them.
// Test Data :
// Input the first number: 11
// Input the second number: 17
// Input the third number: 13
// Input the fourth number: 12
// Input the fifth number: 5
// Expected Output:
// Sum of all odd values: 46

let count = 0
let sum = 0

function inputNumbers() {
  return parseInt(prompt('Input a number:'))
}

while (count < 5) {
  const number = inputNumbers()

  if (number) {
    if (number % 2 !== 0) {
      sum += number
    }
    count++
  } else {
    console.log('Please add a number')
  }
}

console.log('Sum of all odd values:' + sum)

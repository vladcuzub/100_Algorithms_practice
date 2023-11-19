// Write a C program to check whether a number is a palindrome or not.
// Test Data :
// Input a number: 121
// Expected Output :
// 121 is a palindrome number.

function reverseNumber(number) {
  let reversedNumber = 0

  while (number !== 0) {
    reversedNumber = reversedNumber * 10 + (number % 10)
  }

  return reversedNumber
}

// Example usage:
let originalNumber = 122
let reversed = reverseNumber(originalNumber)

console.log(`Original number: ${originalNumber}`)
console.log(`Reversed number: ${reversed}`)

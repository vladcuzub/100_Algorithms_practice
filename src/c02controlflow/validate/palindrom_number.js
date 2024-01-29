// Write a program to check whether a number is a palindrome or not.
// Test Data :
// Input a number: 121
// Expected Output :
// 121 is a palindrome number.

function palindromeNumber(number){
  let reverseNumber = 0
  let originalNumber = number

  while (number != 0) {
    restNumber = number % 10
    reverseNumber = reverseNumber * 10 + restNumber
    number = parseInt(number / 10)
  }

  if (originalNumber == reverseNumber) {
    return true
  } else {
   return false
  }

}

module.exports = palindromeNumber

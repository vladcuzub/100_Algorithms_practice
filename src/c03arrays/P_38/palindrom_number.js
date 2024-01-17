// Write a C program to check whether a number is a palindrome or not.
// Test Data :
// Input a number: 121
// Expected Output :
// 121 is a palindrome number.

const palindromeNumber = number => {
  let originalNumber = number
  let reverseNumber = 0
  let restNumber = 0

  while (number != 0) {
    restNumber = number % 10
    reverseNumber = reverseNumber * 10 + restNumber

    number = Math.floor(number / 10)
  }
  if (originalNumber == reverseNumber) {
    console.log(`${originalNumber} is a palindrome number`)
  } else {
    console.log(`${originalNumber} is not palindrome number`)
  }
}

palindromeNumber(121)

// Write a program to determine whether a given number is prime or not.
//  Test Data :
// Input a number: 13
// Expected Output :
// 13 is a prime number.

function primeNumber (number){

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
     return false
    } else {
      return true
    }
  }

}

module.exports = primeNumber
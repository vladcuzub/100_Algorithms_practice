// Write a C program to determine whether a given number is prime or not.
//  Test Data :
// Input a number: 13
// Expected Output :
// 13 is a prime number.

const NumberPrime = number => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return console.log(`${number} is not prime number`)
    } else {
      return console.log(`${number} is a prime number`)
    }
  }
}

NumberPrime(107)

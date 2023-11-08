// Write a C program to display the sum of n terms of even natural numbers.
// Test Data :
// Input number of terms : 5
// Expected Output :
// The even numbers are :2 4 6 8 10
// The Sum of even Natural Number upto 5 terms : 30

const sumTermsEvenNumbers = number => {
  let sum = 0

  console.log('The even numbers are : ')
  for (let i = 1; i <= number; i++) {
    let even = i * 2
    console.log(even)
    sum += i * 2
  }
  console.log('Sum of even numbers:', sum)
}

sumTermsEvenNumbers(5)

// Write a program in C to display n terms of natural numbers and their sum.
// Test Data : 7
// Expected Output :
// The first 7 natural number is :
// 1 2 3 4 5 6 7
// The Sum of Natural Number upto 7 terms : 28

const displayNtermsandTheirSum = number => {
  let sum = 0
  console.log(`The first ${number} natural numbers are :`)

  for (let i = 1; i <= number; i++) {
  console.log(i)
  sum += i
  }

  console.log(`The Sum of Natural  upto ${number} terms : ${sum}`)
}

displayNtermsandTheirSum(7)

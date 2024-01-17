// Write a C program to display the n terms of odd natural numbers and their sum.
// Test Data
// Input number of terms : 10
// Expected Output :
// The odd numbers are :1 3 5 7 9 11 13 15 17 19
// The Sum of odd Natural Number upto 10 terms : 100

const oddNumbersAndSum = number => {
  let sum= 0;
   console.log("The odd numbers are :")
  for (let i = 1; i <= number; i++) {
    let odds = i * 2 - 1
    console.log(odds)
    sum += odds
  }
  console.log(`The Sum of odd Natural Number upto ${number} terms : ${sum}`)
}
oddNumbersAndSum(10)

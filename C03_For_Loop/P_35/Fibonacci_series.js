// Write a program in C to display the first n terms of the Fibonacci series.
// Fibonacci series 0 1 2 3 5 8 13 .....
// Test Data :
// Input number of terms to display : 10
// Expected Output :
// Here is the Fibonacci series upto to 10 terms :
// 0 1 1 2 3 5 8 13 21 34

const fibonaciiSeries = number => {
  let presentNumber = 1
  let previewNumber = 0
  let updatedNumber

  for (let i = 1; i <= number; i++) {
    console.log(previewNumber)
    updatedNumber = presentNumber + previewNumber
    previewNumber = presentNumber
    presentNumber = updatedNumber
  }
}

fibonaciiSeries(10)

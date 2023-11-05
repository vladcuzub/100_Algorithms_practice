// Write a program in C to read 10 numbers from the keyboard and find their sum and average.
// Test Data :
// Input the 10 numbers :
// Number-1 :2
// ...
// Number-10 :2
// Expected Output :
// The sum of 10 no is : 55
// The Average is : 5.500000

const findSumAndAverageOf10numbers = () => {
  let sum = 0
  let average = 0

  for (let i = 1; i <= 10; i++) {
    const number = console.log(prompt('input a number:'))
    sum += i
    average = sum / 10
  }
  console.log(`The sum of 10 no is ${sum}`)
  console.log(`The Average is : ${average}`)
}

findSumAndAverageOf10numbers()

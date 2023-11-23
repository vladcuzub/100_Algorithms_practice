// Write a C program to calculate the average mathematics marks of some students. Input 0 (excluding to calculate the average) or a negative value to terminate the input process.
// Test Data :
// Input Mathematics marks (0 to terminate): 10
// 15
// 20
// 25
// 0
// Expected Output:
// Average marks in Mathematics: 17.50

const calculateAvrage = () => {
  const marks = [10, 15, 20, 25]
  let sum = 0
  let average = 0

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i]
  }

  average = sum / marks.length

  console.log(`Average marks in Mathematics: ${average.toFixed(2)}`)
}

calculateAvrage()

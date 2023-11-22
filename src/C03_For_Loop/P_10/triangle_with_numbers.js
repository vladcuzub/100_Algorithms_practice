// Write a C program to display a pattern like a right angle triangle with a number.

// The pattern like :

// 1
// 12
// 123
// 1234

const triangleWithNumbers = height => {
  for (let i = 1; i <= height; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
    row += j
    }
    console.log(row)
  }
}

triangleWithNumbers(10)

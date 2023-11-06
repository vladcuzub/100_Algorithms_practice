// Write a program in C to display a pattern like a right angle triangle using an asterisk.

// The pattern like :

// *
// **
// ***
// ****

function printRightAngleTriangle(height) {
  for (let i = 1; i <= height; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row += '*'
    }
    console.log(row)
  }
}

printRightAngleTriangle(4)
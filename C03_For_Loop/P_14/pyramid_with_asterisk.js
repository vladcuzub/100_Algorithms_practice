// Write a C program to make such a pattern as a pyramid with an asterisk.

//    *
//   * *
//  * * *
// * * * *

const pyramidWithAsterisk = height => {
  for (let i = 1; i <= height; i++) {
    let row = ' '.repeat(height - i)
    for (let j = 1; j <= i; j++) {
      let asterisk = '*'
      row += asterisk + ' '
      asterisk++
    }
    console.log(row)
  }
}

pyramidWithAsterisk(20)

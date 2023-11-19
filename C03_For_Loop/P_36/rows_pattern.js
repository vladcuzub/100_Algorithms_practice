// Write a C program to display a such a pattern for n rows using a number that starts with 1 and each row will have a 1 as the first and last number.

//   1
//  121
// 12321

const rowsPattern = number => {
  for (let i = 1; i <= number; i++) {
    let space = ' '.repeat(number - i)
    let row = ''

    for (let j = 1; j <= i; j++) {
      row += j
    }

    for (let j = i - 1; j >= 1; j--) {
      row += j
    }
    console.log(space + row)
  }
}

rowsPattern(3)

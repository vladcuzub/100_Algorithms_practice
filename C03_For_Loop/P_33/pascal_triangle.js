// Write a C program to display Pascal's triangle.
//  Test Data :
// Input number of rows: 5
// Expected Output :

//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1




function pascalTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let row = ''

    for (let space = rows - i; space > 0; space--) {
      row += '  '
    }

    let c = 1
    for (let j = 0; j <= i; j++) {
      row += c + '   '
      c = (c * (i - j)) / (j + 1)
    }

    console.log(row)
  }
}


pascalTriangle(5)




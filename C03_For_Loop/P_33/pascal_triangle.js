// Write a C program to display Pascal's triangle.
//  Test Data :
// Input number of rows: 5
// Expected Output :

//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1

const pascalTriangle = rows => {
  for (let i = 1; i <= rows; i++) {
    let space = ' '.repeat(rows - i)
    space += ' '

    for (let j = 1; j <= i; j++) {
    space += j + ' '
  }
  console.log(space)
  }
}

pascalTriangle(5)

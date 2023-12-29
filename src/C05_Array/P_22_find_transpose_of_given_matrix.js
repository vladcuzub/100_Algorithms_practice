/* Write a program in C to find the transpose of a given matrix.
Test Data :
Input the rows and columns of the matrix : 2 2
Input elements in the first matrix :
element - [0],[0] : 1
element - [0],[1] : 2
element - [1],[0] : 3
element - [1],[1] : 4
Expected Output :
The matrix is :

1 2
3 4

The transpose of a matrix is :
1 3
2 4 */


const readInputMatrix = (rows, columns, matrix) => {
  let resultMatrix = []

  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      row[j] = matrix[i][j]
    }
    resultMatrix[i] = row
  }
  return resultMatrix
}

const transposeMatrix = (matrix) => {
  const rows = matrix.length
  const columns = matrix[0].length
  const resultTransposeMatrix = []

  for (let i = 0; i < columns; i++) {
    resultTransposeMatrix[i] = []
    for (let j = 0; j < rows; j++) {
      resultTransposeMatrix[i][j] = matrix[j][i]
    }
  }
  return resultTransposeMatrix
}


const displayMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    let space = ' '
    for (let j = 0; j < matrix[i].length; j++) {
      space += `${matrix[i][j]} `;
    }
    console.log(`${space}`)
  }
}

const main = () => {
  const inputMatrix = [
    [1, 5],
    [3, 8],
  ];

  const transposedMatrix = transposeMatrix(inputMatrix);

  console.log('The matrix is :')
  displayMatrix(inputMatrix);
  console.log('\nTransposed matrix is:');
  displayMatrix(transposedMatrix);
}

main()
/* Write a program to find the transpose of a given matrix.
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


function transposeMatrix(matrix) {
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

module.exports = transposeMatrix


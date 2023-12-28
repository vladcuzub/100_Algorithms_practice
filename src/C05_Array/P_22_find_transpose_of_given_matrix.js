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


const readInputMatrix = (rows,columns) => {
  let matrix = [];
  for(let i = 0; i < rows; i++){
    let rows = [];
    for(let j=0;j<columns;j++)
    rows[j] = matrix[i][j]
  }
  return rows

}

readInputMatrix(2,2)

/* 
1 2
3 4


*/
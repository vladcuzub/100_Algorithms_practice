// Write a program to accept two matrices and check whether they are equal.
// Test Data:
// Input Rows and Columns of the 1st matrix: 2 2
// Input Rows and Columns of the 2nd matrix: 2 2
// Input elements in the first matrix:
// element - [0], [0] : 1
// element - [0], [1] : 2
// element - [1], [0] : 3
// element - [1], [1] : 4
// Input elements in the second matrix:
// element - [0], [0] : 1
// element - [0], [1] : 2
// element - [1], [0] : 3
// element - [1], [1] : 4
// Expected Output:
// The first matrix is:
// 1 2
// 3 4
// The second matrix is:
// 1 2
// 3 4
// The Matrices can be compared:
// Two matrices are equal.

let firstMatrix = [[1, 2], [3, 4]];
let secondMatrix = [[1, 2], [3, 4]];

function checkMatrix(firstMatrix, secondMatrix) {

    for (let i = 0; i < firstMatrix.length; i++) {

        for (let j = 0; j < firstMatrix[i].length; j++) {
            if (firstMatrix[i][j] !== secondMatrix[i][j]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = checkMatrix
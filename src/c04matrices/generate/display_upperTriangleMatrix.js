// 27. Write a program to print or display an upper triangular matrix.
// Test Data:
// Input the size of the square matrix: 3
// Input elements in the first matrix:
// element - [0], [0] : 1
// element - [0], [1] : 2
// element - [0], [2] : 3
// element - [1], [0] : 4
// element - [1], [1] : 5
// element - [1], [2] : 6
// element - [2], [0] : 7
// element - [2], [1] : 8
// element - [2], [2] : 9
// Expected Output:
// The matrix is:
// 1 2 3
// 4 5 6
// 7 8 9

// Setting zero in upper triangular matrix

// 1 0 0
// 4 5 0
// 7 8 9

function upperTriangleMatrix(matrix) {

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix.length; j++) {
            if (i < j) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}

module.exports = upperTriangleMatrix
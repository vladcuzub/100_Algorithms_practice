// Write a program to find the sum of rows and columns of a matrix.
// Test Data:
// Input the size of the square matrix: 2
// Input elements in the first matrix:
// element - [0], [0] : 5
// element - [0], [1] : 6
// element - [1], [0] : 7
// element - [1], [1] : 8
// Expected Output:
// The First matrix is:
// The matrix is:
// 5 6
// 7 8
// The sum or rows and columns of the matrix is:
// 5 6 11
// 7 8 15

// 12 14


function sumRowsMatrix(matrix) {
    let rowsSum = []

    for (let i = 0; i < matrix.length; i++) {
        rowsSum[i] = 0
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            rowsSum[i] += matrix[i][j]
        }
    }
    return rowsSum
}

function sumColumnssMatrix(matrix) {
    let columnsSum = [];

    for (let i = 0; i < matrix.length; i++) {
        columnsSum[i] = 0
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            columnsSum[j] += matrix[i][j]
        }
    }
    return columnsSum
}

module.exports.sumRowsMatrix = sumRowsMatrix
module.exports.sumColumnssMatrix = sumColumnssMatrix
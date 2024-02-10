/*Write a program for adding two matrices of the same size.
Test Data:
Input the size of the square matrix(less than 5): 2
Input elements in the first matrix:
element - [0], [0] : 1
element - [0], [1] : 2
element - [1], [0] : 3
element - [1], [1] : 4
Input elements in the second matrix:
element - [0], [0] : 5
element - [0], [1] : 6
element - [1], [0] : 7
element - [1], [1] : 8
Expected Output:
The First matrix is:

1 2
3 4
The Second matrix is:

5 6
7 8
The Addition of two matrix is:

6 8
10 12 */


function addMatrices(firstMatrix, secondMatrix) {
    const result = []

    for (let i = 0; i < firstMatrix.length; i++) {
        let row = [];
        for (let j = 0; j < firstMatrix[i].length; j++) {
            row[j] = firstMatrix[i][j] + secondMatrix[i][j];
        }
        result[i] = row
    }
    return result
}


module.exports = addMatrices
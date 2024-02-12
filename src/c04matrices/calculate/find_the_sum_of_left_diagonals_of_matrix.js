/* Write a program to find the sum of the left diagonals of a matrix.
Test Data :
Input the size of the square matrix : 2
Input elements in the first matrix :
element - [0],[0] : 1
element - [0],[1] : 2
element - [1],[0] : 3
element - [1],[1] : 4
Expected Output :
The matrix is :
1 2
3 4
Addition of the left Diagonal elements is :5 */


function sumLeftdiagonals(matrix) {
    let sum = 0

    for (let i = 0; i < matrix.length; i++) {

        console.log(i)
        for (let j = 0; j < matrix.length; j++) {
            console.log(j)
            if (i !== j) {
                sum += matrix[i][j];
            }
        }
    }
    return sum
}

module.exports = sumLeftdiagonals












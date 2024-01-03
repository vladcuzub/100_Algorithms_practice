/*Write a program in C to find the sum of the right diagonals of a matrix.
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
Addition of the right Diagonal elements is :5 */



const readInputMatrix = (sizeMatrix, matrixElements) => {
    let matrix = [];

    for (let i = 0; i < sizeMatrix; i++) {
        let row = [];
        for (let j = 0; j < sizeMatrix; j++) {
            row[j] = matrixElements[i][j];
        }
        matrix[i] = row;
    }
    return matrix;
}

const sumRightDiagonals = (matrix) => {

    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    return sum;
}


const main = () => {
    const myMatrix = readInputMatrix(2, [[1, 6], [2, 4]])
    const sumOfMatrix = sumRightDiagonals(myMatrix)
}

main()





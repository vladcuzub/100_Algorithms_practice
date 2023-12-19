/*Write a program in C for adding two matrices of the same size.
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

const readSquare = (size, title) => {
    let matrix = [];

    for (let i = 0; i < size; i++) {
        let row = []
        for (let j = 0; j < size; j++) {
            let element = parseInt(prompt(`Input elements in the ${title} matrix: `))
            row[j] = element
        }
        matrix[i] = row
    }
    return matrix
}

const addMatrices = (firstMatrix, secondMatrix) => {
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

const displayMatrix = (matrix, title) => {
    console.log(`${title} matrix is:`);
    for (let i = 0; i < matrix.length; i++) {
        let rowSpace = ' ';
        for (let j = 0; j < matrix[i].length; j++) {
            rowSpace += `${matrix[i][j]} `;
        }
        console.log(`${rowSpace}`);
    }
}


const main = () => {
    let inputSizeSquare = parseInt(prompt('Input the size of the square matrix(less than 5): '))

    const firstMatrix = readSquare(inputSizeSquare, 'first')
    const secondMatrix = readSquare(inputSizeSquare, 'second')

    displayMatrix(firstMatrix, 'The first')
    displayMatrix(secondMatrix, ' The second')

    const result = addMatrices(firstMatrix, secondMatrix)

    displayMatrix(result, 'The Addition of two ')

}
main()
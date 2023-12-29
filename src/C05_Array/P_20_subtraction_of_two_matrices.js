/* Write a program in C for the subtraction of two matrices.
Test Data :
Input the size of the square matrix (less than 5): 2
Input elements in the first matrix :
element - [0],[0] : 5
element - [0],[1] : 6
element - [1],[0] : 7
element - [1],[1] : 8
Input elements in the second matrix :
element - [0],[0] : 1
element - [0],[1] : 2
element - [1],[0] : 3
element - [1],[1] : 4
Expected Output :
The First matrix is :

5 6
7 8
The Second matrix is :

1 2
3 4
The Subtraction of two matrix is :

4 4
4 4 */

const readArray = (size, matrix) => {
    let result

    if (size >= 5 || size == undefined) {
        result = 'The square matrix must be less than 5'
    } else {
        result = 'Input elements in the first matrix :'
    }

    if (size && matrix) {
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row[j] = matrix[i][j];
            }
            matrix[i] = row;
        }
    }
    return matrix || result
}

const subtractionMatrices = (firstMatrix, secondMatrix) => {
    const substractionResult = []

    for (let i = 0; i < firstMatrix.length; i++) {
        let row = [];
        for (let j = 0; j < firstMatrix[i].length; j++) {
            row[j] = firstMatrix[i][j] - secondMatrix[i][j]
        }
        substractionResult[i] = row
    }
    return substractionResult
}

const displayMatrix = (matrix, title) => {
    console.log(title);
    for (let i = 0; i < matrix.length; i++) {
        let rowSpace = ' ';
        for (let j = 0; j < matrix[i].length; j++) {
            rowSpace += `${matrix[i][j]} `;
        }
        console.log(`${rowSpace}`)

    }
}

const main = () => {
    let size = 2
    let matrix
    let firstMatrix = [[5, 6], [7, 8]]
    let secondMatrix = [[1, 2], [3, 4]]

    matrix = readArray(size, matrix)
    let substaction = subtractionMatrices(firstMatrix, secondMatrix)

    let showFirstMatrix = displayMatrix(firstMatrix, 'This is the first Matrix : ')
    let showSecondMatrix = displayMatrix(secondMatrix, 'This is the second Matrix :')
    let substactionOfTwoMatrix = displayMatrix(substaction, 'he Subtraction of two matrix is :')

    console.log(showFirstMatrix)
    console.log(showSecondMatrix)
    console.log(substactionOfTwoMatrix)
}
main()

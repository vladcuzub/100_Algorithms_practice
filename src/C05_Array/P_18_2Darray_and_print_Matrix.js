/*
Write a program in C for a 2D array of size 3x3 and print the matrix.
Test Data :
Input elements in the matrix :
element - [0],[0] : 1
element - [0],[1] : 2
element - [0],[2] : 3
element - [1],[0] : 4
element - [1],[1] : 5
element - [1],[2] : 6
element - [2],[0] : 7
element - [2],[1] : 8
element - [2],[2] : 9
Expected Output :
The matrix is :

1 2 3
4 5 6
7 8 9
*/

const readArray = () => {
    let matrixArray = [];

    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 0; j < 3; j++) {
            let element = parseInt(prompt('Input elements in the matrix : '))
            row[j] = element
        }
        matrixArray[i] = row
    }
    return matrixArray
}

const main = () => {
    const data = readArray()

    console.log('The matrix is : ')
    for (let i = 0; i < 3; i++) {
        let rowSpace = ' '
        for (let j = 0; j < 3; j++) {
            rowSpace += `${data[i][j]} `
        }
        console.log(rowSpace)
    }
}

main()
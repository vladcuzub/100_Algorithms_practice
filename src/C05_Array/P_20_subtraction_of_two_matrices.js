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

const readArray = (size,matrix) => {
    let result 
    let input

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


readArray()
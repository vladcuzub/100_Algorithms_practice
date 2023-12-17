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

const readSquare = (size) => {
    let array = [];
    let inputSizeSquare = parseInt(prompt('Input the size of the square matrix(less than 5): '))

    for (let i = 0; i < inputSizeSquare; i++) {
        let row = []
        for (let j = 0; j < inputSizeSquare; j++) {
            let element = parseInt(prompt('Input elements in the first matrix: '))
            row[i] = element
        }
        array[i] = row
    }
   return array

}

readSquare()
/*
Write a program for a 2D array of size 3x3 and print the matrix.
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


function print2DArrayToMatrix(arrayOne, arrayTwo, arrayThree) {
    let matrix = ''
    let arrays = [arrayOne, arrayTwo, arrayThree];
    
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            matrix += arrays[i][j];
            if (j < arrays[i].length - 1) {
                matrix += ' ';
            }
        }
        if (i < arrays.length - 1) {
            matrix += '\n';
        }
    }

    return matrix;

}

module.exports = print2DArrayToMatrix
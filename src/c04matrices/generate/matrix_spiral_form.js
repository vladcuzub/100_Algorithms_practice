/* 50. Write a program to print a matrix in spiral form.
Expected Output:
The given array in matrix form is:
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
The spiral form of above matrix is:
1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12 */

function matrixInSpiralForm(matrix) {


    let rows = matrix.length;
    let cols = matrix[0].length;
    let spiral = new Array(rows * cols); // Crearea unui array cu dimensiunea totală necesară

    let index = 0; // Index pentru a adauga elementele in spiral

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        // De la stânga la dreapta
        for (let i = left; i <= right; i++) {
            spiral[index++] = matrix[top][i];
        }
        top++;

        // De sus în jos
        for (let i = top; i <= bottom; i++) {
            spiral[index++] = matrix[i][right];
        }
        right--;

        // De la dreapta la stânga
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                spiral[index++] = matrix[bottom][i];
            }
            bottom--;
        }

        // De jos în sus
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                spiral[index++] = matrix[i][left];
            }
            left++;
        }
    }

    return spiral;
}

let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

// Afișarea matricei în formă inițială
console.log("The given array in matrix form is:");
for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + " ";
    }
    console.log(row.trim());
}

// Afișarea matricei în formă spirală
let spiral = matrixInSpiralForm(matrix);
let spiralString = "";
for (let i = 0; i < spiral.length; i++) {
    spiralString += spiral[i] + " ";
}
console.log("The spiral form of above matrix is:");
console.log(spiralString.trim());

module.exports = matrixInSpiralForm
/* 50. Write a program to print a matrix in spiral form.
Expected Output:
The given array in matrix form is:
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
The spiral form of above matrix is:
1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12 */


function matrixInSpiralForm (matrix) {

    let spiral = []

    let top = 0;
    let bottom = matrix.length;
    let left = 0;
    let right = matrix[0].length;

    while(top < bottom && left < right){

            for(let i = left; i < right; i++){
                spiral[i] = matrix[top][i]
            }
            top++
            for( let i = top;i < bottom; i++){
                spiral[i] = matrix[i][right - 1]
            }
            right++

    }
    return spiral
}

module.exports = matrixInSpiralForm
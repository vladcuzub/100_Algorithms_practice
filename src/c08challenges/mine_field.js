/* Mine Field

A field of N x M squares is represented by N lines of exactly M characters each.
  o) The character '*' represents a mine.
  o) The character '.' represents no-mine.

Example input (a 3 x 4 mine-field of 12 squares, 2 of which are mines)
*...
..*.
....

Your task is to write a program to accept this input and produce as output a hint-field of identical dimensions where each square is a * for a mine or the number of adjacent mine-squares if the square does not contain a mine.

Example output (for the above input)

*211
12*1
0111
*/


function mineFeld(input) {
    let output = []
    let row = input.length
    let col = input[0].length

    for (let i = 0; i < row; i++) {
        output[i] = [];

        for (let j = 0; j < col; j++) {
            output[i][j] = 0;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            if (input[i][j] === '*') {
                output[i][j] = '*'
            } else {
                for (let x = i - 1; x <= i + 1; x++) {
                    for (let y = j - 1; y <= j + 1; y++) {
                        if (x >= 0 && x < row && y >= 0 && y < col && input[x][y] === '*') {
                            output[i][j]++;
                        }
                    }
                }
            }
        }
    }
    return output
}

module.exports = mineFeld
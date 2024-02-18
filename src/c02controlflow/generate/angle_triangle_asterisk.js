// Write a program to display a pattern like a right angle triangle using an asterisk.

// The pattern like :

// *
// **
// ***
// ****

function printRightAngleTriangle(height) {
    let output = '';
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        output += row + '\n';
    }
    return output;
}

module.exports = printRightAngleTriangle
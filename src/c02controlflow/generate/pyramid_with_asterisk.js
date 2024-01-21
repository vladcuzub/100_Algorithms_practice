// Write a C program to make such a pattern as a pyramid with an asterisk.

//    *
//   * *
//  * * *
// * * * *


function pyramidWithAsterisk(height) {
  let output = '';

  for (let i = 1; i <= height; i++) {
    let row = '';

    for (let k = height - i; k > 0; k--) {
      row += ' ';
    }

    for (let j = 1; j <= i; j++) {
      row += '*';
      row += ' ';
    }

    output += row + '\n';
  }

  return output;
}

module.exports = pyramidWithAsterisk

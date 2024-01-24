// Write a program to display a pattern like a diamond.

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function patternDiamond(height) {
  let output = '';

  for (let i = 1; i <= height; i++) {
    let space = '';
    for (let s = 0; s < height - i; s++) {
      space += ' ';
    }

    let asterisks = '';
    for (let j = 1; j <= i * 2 - 1; j++) {
      asterisks += '*';
    }

    output += space + asterisks + '\n';
  }

  for (let i = height - 1; i >= 1; i--) {
    let space = '';
    for (let s = 0; s < height - i; s++) {
      space += ' ';
    }

    let asterisks = '';
    for (let j = 1; j <= i * 2 - 1; j++) {
      asterisks += '*';
    }

    output += space + asterisks + '\n';
  }

  return output;
}


module.exports = patternDiamond
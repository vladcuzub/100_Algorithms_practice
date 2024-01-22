// Write a  program to make such a pattern like a pyramid with a number which will repeat the number in the same row.

//    1
//   2 2
//  3 3 3
// 4 4 4 4

function pyramidNumberRepeat(height) {
  let output = '';

  for (let i = 1; i <= height; i++) {
    let row = '';

    for (let k = height - i; k > 0; k--) {
      row += ' ';
    }

    for (let j = 1; j <= i; j++) {
      row += i;
      row += ' ';
    }
    output += row + '\n';
  }

  return output;
}

module.exports = pyramidNumberRepeat
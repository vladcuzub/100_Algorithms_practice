//  Write a program to make a pyramid pattern with numbers increased by 1.
//    1
//   2 3
//  4 5 6
// 7 8 9 10


function pyramidNumbersIncreased(height) {
  let output = '';
  let increaseNumber = 1;

  for (let i = 1; i <= height; i++) {
    let row = '';

    for (let k = height - i; k > 0; k--) {
      row += ' ';
    }

    for (let j = 1; j <= i; j++) {
      row += increaseNumber;
      increaseNumber++;
      row += ' ';
    }

    output += row + '\n';
  }

  return output;
}



module.exports = pyramidNumbersIncreased
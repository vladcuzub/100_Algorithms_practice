// Write a  program to display a such a pattern for n rows using a number that starts with 1 and each row will have a 1 as the first and last number.

//   1
//  121
// 12321

function rowsPattern(height){
  let output =''
  
  for (let i = 1; i <= height; i++) {
    let row = ''
    for (let k = height - i; k > 0; k--) {
      row += ' ';
    }

    for (let j = 1; j <= i; j++) {
      row += j;
    }

    for (let j = i - 1; j >= 1; j--) {
      row += j;
    }

    output += row + '\n';
  }

  return output;
}

module.exports = rowsPattern

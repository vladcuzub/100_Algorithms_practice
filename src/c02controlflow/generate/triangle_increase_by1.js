// Write a program to make such a pattern like a right angle triangle with the number increased by 1.

// The pattern like :

//    1
//    2 3
//    4 5 6
//    7 8 9 10

function triangleIncreaseNumber(height) {
  let output = ''; 
  let increaseNumber = 1;

  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += increaseNumber + ' ';
      increaseNumber++;
    }
    output += row.trim() + '\n'; 
  }

  return output;
}


module.exports = triangleIncreaseNumber
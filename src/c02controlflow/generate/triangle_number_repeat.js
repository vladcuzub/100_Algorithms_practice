// Write a program in C to make such a pattern like a right angle triangle with a number which will repeat a number in a row.

// The pattern like :

//  1
//  22
//  333
//  4444

function triangleNumberRepeat(height){
  let output = ''

  for (let i = 1; i <= height; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row += i
    }
    output += `${row}\n`
  }
  return output
}

module.exports = triangleNumberRepeat

// Write a program to print Floyd's Triangle.

// 1
// 01
// 101
// 0101

function trianglefloyd (height){
let output = ''

  for (let i = 1; i <= height; i++) {
    let space = ''

    for (let j = 1; j <= i; j++) {
      output += (i + j) % 2 === 0 ? '1' : '0'
    }
    output += '\n';
    output += space;
  }
  return output
}


module.exports = trianglefloyd
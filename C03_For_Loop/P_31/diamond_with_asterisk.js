// Write a program in C to display a pattern like a diamond.

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

const diamond = height => {
  for (let i = 1; i <= height; i++) {
    let space = ' '.repeat(height - i)
    for (let j = 1; j <= i * 2 - 1; j++) {
      let asterisk = '*'
      space += asterisk
    }
    console.log(space)
  }

  for (let i = height - 1; i >= 1; i--) {
    let space = ' '.repeat(height - i)
    for (let j = 1; j <= i * 2 - 1; j++) {
      let asterisk = '*'
      space += asterisk
    }
    console.log(space)
  }
}

diamond(5)

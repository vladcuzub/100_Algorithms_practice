// Write a C program to make such a pattern like a pyramid with a number which will repeat the number in the same row.

//    1
//   2 2
//  3 3 3
// 4 4 4 4

const pyramidNumberRepeat = height => {
  for (let i = 0; i <= height; i++) {
    let space = ' '.repeat(height - i)
    for (let j = 1; j <= i; j++) {
      space += i + ' '
    }
    console.log(space)
  }
}

pyramidNumberRepeat(4)

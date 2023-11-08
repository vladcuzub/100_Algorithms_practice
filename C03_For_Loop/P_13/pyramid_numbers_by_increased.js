//  Write a program in C to make a pyramid pattern with numbers increased by 1.
//    1
//   2 3
//  4 5 6
// 7 8 9 10

const pyramidnumbers = height => {
  let num = 1
  for (let i = 1; i <= height; i++) {
    let row = ' '.repeat(height - i)

    for (let j = 1; j <= i; j++) {
      row += num + ' '
      num++
    }
    console.log(row)
  }
}

pyramidnumbers(4)

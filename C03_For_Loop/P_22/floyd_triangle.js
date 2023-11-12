// Write a program in C to print Floyd's Triangle.

// 1
// 01
// 101
// 0101
// 10101

const trianglefloyd = height => {

  for (let i = 1; i <= height; i++) {
    let space = ''
    for (let j = 1; j <= i; j++) {
      space += (i + j) % 2 === 0 ? '1' : '0'
    }
    console.log(space)
  }
}

trianglefloyd(5)

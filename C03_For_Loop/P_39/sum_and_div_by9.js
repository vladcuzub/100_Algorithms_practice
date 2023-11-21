// Write a program in C to find the number and sum of all integers between 100 and 200 which are divisible by 9.
// Expected Output :
// Numbers between 100 and 200, divisible by 9 :
// 108 117 126 135 144 153 162 171 180 189 198
// The sum : 1683

const numberDivisible = number => {
  let sum = 0
  let space = ' '
  console.log(`Numbers between 100 and 200,divisible by ${number} :`)
  for (let i = 100; i <= 200; i++) {
    if (i % number === 0) {
      space += i + ' '
      sum += i
    }
  }
  console.log(space)
  console.log(`The sum :${sum}`)
}

numberDivisible(9)

// 2. Write a C program that will take a number as input and find the absolute difference between the input number and 51. If the input number is greater than 51, it will return triple the absolute difference.
// Expected Output:

// 6
// 21
// 0

const differentAbsolute = num => {
  const diference = num - 51
  if (num > 51) {
    return diference * 3
  } else {
    return diference
  }
}

console.log(differentAbsolute(53))
console.log(differentAbsolute(30))
console.log(differentAbsolute(51))

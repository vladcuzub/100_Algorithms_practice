// 20. Write a C program that checks if a given non-negative number is a multiple of 3 or 7, but not both.
// Expected Output:

// 1
// 1
// 0


const multipleNumbers = num => {
  return (num % 3 === 0) ^ (num % 7 === 0)
}
console.log(multipleNumbers(3))
console.log(multipleNumbers(7))
console.log(multipleNumbers(9))

// Write a program to compute the sum of the first 10 natural numbers.
// Expected Output :
// The first 10 natural number is :
// 1 2 3 4 5 6 7 8 9 10
// The Sum is : 55


function calculate10naturlaNumbers() {
  let sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum
}

module.exports = calculate10naturlaNumbers
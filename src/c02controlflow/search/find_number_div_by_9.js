// Write a program to find the number and sum of all integers between 100 and 200 which are divisible by 9.
// Expected Output :
// Numbers between 100 and 200, divisible by 9 :
// 108 117 126 135 144 153 162 171 180 189 198
// The sum : 1683

function numberDivisible(number) {
  let numbers = []
  let currentIndex = 0

  for (let i = 100; i <= 200; i++) {
    if (i % number === 0) {
      numbers[currentIndex] = i;
      currentIndex++;
    }
  }
  return numbers;
}


function sumOfNumbers(numbers) {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

module.exports.numberDivisible = numberDivisible
module.exports.sumOfNumbers = sumOfNumbers
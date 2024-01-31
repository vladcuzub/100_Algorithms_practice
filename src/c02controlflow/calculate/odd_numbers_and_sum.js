// Write a program to display the n terms of odd natural numbers and their sum.
// Test Data
// Input number of terms : 10
// Expected Output :
// The odd numbers are :1 3 5 7 9 11 13 15 17 19
// The Sum of odd Natural Number upto 10 terms : 100

function findOddNumbers(inputNumber){
let oddNumbers = ''

  for (let i = 1; i <= inputNumber; i++) {
    let odd = i * 2 - 1
    oddNumbers += odd + ' ';
  }
  return oddNumbers
}


function sumOdds(oddsNumbers){
  let sum = 0
  
  for (let i = 0; i < oddsNumbers.length; i++){
    sum += oddsNumbers[i]
  }
  return sum
}

module.exports.findOddNumbers = findOddNumbers
module.exports.sumOdds = sumOdds
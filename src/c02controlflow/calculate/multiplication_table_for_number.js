// Write a program to display the multiplication table for a given integer.
// Test Data :
// Input the number (Table to be calculated) : 15
// Expected Output :
// 15 X 1 = 15
// ...
// ...
// 15 X 10 = 150

function multiplicationTable(inputNumber) {
  let result = [];

  for (let i = 1; i <= 10; i++){
    result += inputNumber * i + ' '
    
  }
  return result
}


module.exports = multiplicationTable
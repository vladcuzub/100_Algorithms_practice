// Write a program to display the number in reverse order.
// Test Data :
// Input a number: 12345
// Expected Output :
// The number in reverse order is : 54321


function reverseNumber(number) {
  let reversed = 0;
  
  while (number !== 0) {
    reversed = reversed * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  
  return reversed;
}

module.exports = reverseNumber
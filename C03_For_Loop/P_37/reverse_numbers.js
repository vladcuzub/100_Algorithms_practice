// Write a program in C to display the number in reverse order.
// Test Data :
// Input a number: 12345
// Expected Output :
// The number in reverse order is : 54321

let space = ''

const reverseNumber = number => {
  for (let i = number; i >= 1; i--) {
    parseInt((space += i))
  }

  console.log('The number in reverse order is :', space)
}

reverseNumber(5)

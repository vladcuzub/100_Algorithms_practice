// Write a C program that reads two integers and checks whether they are multiplied or not.
// Test Data :
// Input the first number: 5
// Input the second number: 15
// Expected Output:
// Multiplied!

let x = parseInt(prompt("Add first number"));
let y = parseInt(prompt('Add second number'));

if (x % y === 0 || y % x === 0) {
  console.log('Multiplied')
} else {
  console.log('Not multiplied')
}




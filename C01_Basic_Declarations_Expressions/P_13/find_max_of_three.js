// Write a C program that accepts three integers and finds the maximum of three.
// Test Data :
// Input the first integer: 25
// Input the second integer: 35
// Input the third integer: 15
// Expected Output:
// Maximum value of three integers: 35

let first = parseInt(prompt('First number:'));
let second = parseInt(prompt('Second number:'))
let third = parseInt(prompt('Third number:'))

let maxNumber = Math.max(first, second, third)

console.log("Maximum value of three integers: " + maxNumber);

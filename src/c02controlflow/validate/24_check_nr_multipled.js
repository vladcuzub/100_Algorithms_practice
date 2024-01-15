// Write a C program that reads two integers and checks whether they are multiplied or not.
// Test Data :
// Input the first number: 5
// Input the second number: 15
// Expected Output:
// Multiplied!


function multipliedNumber(x, y) {
  if (x % y == 0 || y % x == 0) {
    return true
  } else {
    return false
  }
}


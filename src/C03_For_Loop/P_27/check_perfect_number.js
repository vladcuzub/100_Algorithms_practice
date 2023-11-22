// Write a C program to check whether a given number is a 'Perfect' number or not.
// Test Data :
// Input the number : 56
// Expected Output :
// The positive divisor : 1 2 4 7 8 14 28
// The sum of the divisor is : 64
// So, the number is not perfect.

const checkPerfectNumber = number => {
  let sum = 0

  console.log('The positive divisor :')
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i
      console.log(i)
    }
  }

  console.log('The sum of the divisor is :', sum)

  if (sum === number) {
    return console.log('The number is perfect')
  } else {
    return console.log('So, the number is not perfect')
  }
}

checkPerfectNumber(56)

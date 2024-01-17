// Write a program in C to find the LCM of any two numbers.
// Test Data :
// Input 1st number for LCM: 15
// Input 2nd number for LCM: 20
// Expected Output :
// The LCM of 15 and 20 is : 60

const lcmNumber = (firstNumber, secondnumber) => {
  let hightNumber = Math.max(firstNumber, secondnumber)

while(true) {
  if(hightNumber % firstNumber === 0 && hightNumber % secondnumber === 0){
    break
  }
  hightNumber++
}
console.log(`The LCM of ${firstNumber} and ${secondnumber} is : ${hightNumber}`)
}

lcmNumber(8, 6)


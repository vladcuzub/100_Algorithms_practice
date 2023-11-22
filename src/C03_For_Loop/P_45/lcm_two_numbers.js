// Write a program in C to find the LCM of any two numbers.
// Test Data :
// Input 1st number for LCM: 15
// Input 2nd number for LCM: 20
// Expected Output :
// The LCM of 15 and 20 is : 60




const lcmNumbers = (firstNumber,secondNumber) => {
    let multiple = 0

for(let i = 1; i <= firstNumber; i++){
    multiple = firstNumber * i
}

for(let j = 1; j <= secondNumber;j++ ){
    multiple = secondNumber * j
    console.log(multiple)
}


}

lcmNumbers(15,20)

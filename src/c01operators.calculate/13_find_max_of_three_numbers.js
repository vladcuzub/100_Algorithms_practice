// Write a C program that accepts three integers and finds the maximum of three.
// Test Data :
// Input the first integer: 25
// Input the second integer: 35
// Input the third integer: 15
// Expected Output:
// Maximum value of three integers: 35

function findMaxNumber(firstNumber,secondNumber,thirdNumber) {
    let maxNumber 

    if (firstNumber < secondNumber){
        maxNumber = secondNumber;
    }
    if (secondNumber < thirdNumber) {
        maxNumber = thirdNumber;
    }
    return maxNumber

}
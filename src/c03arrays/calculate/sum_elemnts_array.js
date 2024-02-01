// Write a program to find the sum of all elements of the array.
// Test Data :
// Input the number of elements to be stored in the array :3
// Input 3 elements in the array :
// element - 0 : 2
// element - 1 : 5
// element - 2 : 8
// Expected Output :
// Sum of all elements stored in the array is : 15



function calculateElements(arrayElements){
let newArray = []
let sum = 0

    for (let i = 0; i < arrayElements.length; i++) {
        newArray[i] = arrayElements[i]
        sum += newArray[i]
    }
    return sum
}


module.exports = calculateElements
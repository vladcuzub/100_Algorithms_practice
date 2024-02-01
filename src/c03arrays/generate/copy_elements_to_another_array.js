// Write a program to copy the elements of one array into another array.
// Test Data:
// Input the number of elements to be stored in the array: 3
// Input 3 elements in the array:
// element - 0 : 15
// element - 1 : 10
// element - 2 : 12
// Expected Output:
// The elements stored in the first array are:
// 15 10 12
// The elements copied into the second array are:
// 15 10 12


function copyElementsInAnotherArray(firstArray){
    let secondArray = []
    for (let i=0;i<firstArray.length;i++){
        secondArray[i] = firstArray[i];
    }
    return secondArray;
}

module.exports = copyElementsInAnotherArray
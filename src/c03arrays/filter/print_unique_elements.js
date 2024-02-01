// Write a program to print all unique elements in an array.
// Test Data:
// Print all unique elements of an array:
// ------------------------------------------
//     Input the number of elements to be stored in the array: 4
// Input 4 elements in the array:
// element - 0 : 3
// element - 1 : 2
// element - 2 : 2
// element - 3 : 5
// Expected Output:
// The unique elements found in the array are:
// 3 5



function findUniqueElementsInArray(array){
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    let isUnique = true;
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        isUnique = false;
        break;
      }
    }
    if(isUnique) {
      uniqueArray[uniqueArray.length] = array[i];
    }
  }
  return uniqueArray;

}

module.exports = findUniqueElementsInArray


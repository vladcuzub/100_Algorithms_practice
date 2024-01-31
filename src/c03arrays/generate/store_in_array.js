// Write a program to store elements in an array and print them.
// Test Data :
// Input 10 elements in the array :
// element - 0 : 1
// element - 1 : 1
// element - 2 : 2
// .......
// Expected Output :
// Elements in array are: 1 1 2 3 4 5 6 7 8 9

function storeElementsInArray(elements){
  const array = []

  for (let i = 0; i < elements.length; i++) {
   
    array[i] = elements[i]
  }
 return array
}

module.exports = storeElementsInArray

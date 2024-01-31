// Write a program to read n number of values in an array and display them in reverse order.
// Test Data :
// Input the number of elements to store in the array :3
// Input 3 number of elements in the array :
// element - 0 : 2
// element - 1 : 5
// element - 2 : 7
// Expected Output :
// The values store into the array are :
// 2 5 7
// The values store into the array in reverse are :
// 7 5 2

function reverseElementsInArray(elements) {
  let array = [];

  for (let i = 0; i < elements.length; i++) {
    array[i] = elements[i];
  }

  let left = 0;
  let right = array.length - 1;

  while (left < right) {

    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left++;
    right--;
  }

  return array;
}


module.exports = reverseElementsInArray

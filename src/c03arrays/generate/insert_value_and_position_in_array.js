// Write a program to insert values in the array(unsorted list).
// Test Data:
// Input the size of array: 4
// Input 4 elements in the unsorted array :
// element - 0 : 1
// element - 1 : 8
// element - 2 : 7
// element - 3 : 10
// Input the value to be inserted: 5
// Input the Position, where the value to be inserted: 2
// Expected Output:
// The current list of the array:
// 1 8 7 10
// After Insert the element the new list is:
// 1 5 8 7 10


function insertNewValueAtPosition(array, newValue, position) {
    let newArray = [];

    for (let i = 0; i < position - 1; i++) {
        newArray[i] = array[i];
    }
    newArray[position - 1] = newValue;

    for (let i = position - 1; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }

    return newArray;
}

module.exports = insertNewValueAtPosition

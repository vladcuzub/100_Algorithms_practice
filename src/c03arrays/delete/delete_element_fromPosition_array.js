// Write a program to delete an element at a desired position from an array.
// Test Data:
// Input the size of array: 5
// Input 5 elements in the array in ascending order:
// element - 0 : 1
// element - 1 : 2
// element - 2 : 3
// element - 3 : 4
// element - 4 : 5
// Input the position where to delete: 3
// Expected Output:
// The new list is: 1 2 4 5

function removeElementFromArray(array, position) {
    let newArray = [];

    for (let i = 0, j = 0; i < array.length; i++) {
        if (i + 1 !== position) {
            newArray[j] = array[i]
            j++
        }
    }
    return newArray

}

module.exports = removeElementFromArray
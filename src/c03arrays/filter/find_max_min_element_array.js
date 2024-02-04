// Write a program to find the maximum and minimum elements in an array.
// Test Data:
// Input the number of elements to be stored in the array: 3
// Input 3 elements in the array:
// element - 0 : 45
// element - 1 : 25
// element - 2 : 21
// Expected Output:
// Maximum element is: 45
// Minimum element is: 21


function findMaxElement(array) {
    let max = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[0] < array[i]) {
            max = array[0];
        }
    }
    return max
}

function findMinElement(array) {
    let min = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min
}

module.exports.findMaxElement = findMaxElement
module.exports.findMinElement = findMinElement
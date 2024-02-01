// Write a program to count the total number of duplicate elements in an array.
// Test Data:
// Input the number of elements to be stored in the array: 3
// Input 3 elements in the array:
// element - 0 : 5
// element - 1 : 1
// element - 2 : 1
// Expected Output:
// Total number of duplicate elements found in the array is: 1


function countDuplicateElements(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++)
            if (array[i] === array[j]) {
                count++
            }
    }
    return count

}

module.exports = countDuplicateElements
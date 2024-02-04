// Write a program to sort the elements of the array in descending order.
// Test Data:
// Input the size of array: 3
// Input 3 elements in the array:
// element - 0 : 5
// element - 1 : 9
// element - 2 : 1
// Expected Output:
// Elements of the array in sorted descending order:
// 9 5 1

function sortElementsInArray(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let max_index = i

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] > array[max_index]) {
                max_index = j
            }
        }
        if (max_index !== i) {
            let temp = array[i]
            array[i] = array[max_index]
            array[max_index] = temp
        }
    }
    return array
}

module.exports = sortElementsInArray
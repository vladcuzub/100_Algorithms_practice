// Write a program to sort elements of an array in ascending order.
// Test Data:
// Input the size of array: 5
// Input 5 elements in the array:
// element - 0 : 2
// element - 1 : 7
// element - 2 : 4
// element - 3 : 5
// element - 4 : 9
// Expected Output:
// Elements of array in sorted ascending order:
// 2 4 5 7 9

function sortElementsInArray(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let min_index = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min_index]) {
                min_index = j;
            }
        }

        if (min_index !== i) {
            const temp = array[i];
            array[i] = array[min_index];
            array[min_index] = temp;
        }
    }

    return array;
}


module.exports = sortElementsInArray
